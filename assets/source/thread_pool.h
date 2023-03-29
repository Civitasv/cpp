#pragma once

#include <condition_variable>
#include <functional>
#include <future>
#include <memory>
#include <mutex>
#include <queue>
#include <stdexcept>
#include <thread>
#include <type_traits>
#include <utility>
#include <vector>

class ThreadPool {
private:
  std::vector<std::thread> threads;
  std::queue<std::function<void(void)>> tasks;

  std::mutex mutex;
  std::condition_variable cv;

  bool stopped;
  const uint32_t capacity;

  template <typename Func, typename... Args,
            typename Retrn = typename std::result_of<Func(Args...)>::type>
  std::packaged_task<Retrn(void)> MakeTask(Func &&func, Args &&...args) {
    auto task =
        std::bind(std::forward<Func>(func), std::forward<Args>(args)...);

    return std::packaged_task<Retrn(void)>(task);
  }

public:
  ThreadPool(uint32_t capacity) : capacity(capacity), stopped(false) {
    auto loop = [this]() {
      while (true) {
        std::function<void(void)> task;
        {
          std::unique_lock<std::mutex> unique_lock(mutex);

          auto predicate = [this]() { return stopped || !tasks.empty(); };
          cv.wait(unique_lock, predicate);

          if (stopped && tasks.empty()) {
            return;
          }

          task = std::move(tasks.front());
          tasks.pop();
        }

        task();
      }
    };

    for (uint64_t id = 0; id < capacity; id++) {
      threads.emplace_back(loop);
    }
  }

  ~ThreadPool() {
    {
      std::lock_guard<std::mutex> lock_guard(mutex);
      stopped = true;
    }

    cv.notify_all(); // 其他线程执行完任务之后，会退出

    for (auto &thread : threads)
      thread.join();
  }

  template <typename Func, typename... Args,
            typename Retrn = typename std::result_of<Func(Args...)>::type>
  std::future<Retrn> Enqueue(Func &&func, Args &&...args) {
    auto task = MakeTask(func, args...);
    auto future = task.get_future();

    auto task_ptr = std::make_shared<decltype(task)>(std::move(task));

    {
      std::lock_guard<std::mutex> lock_guard(mutex);

      if (stopped) {
        throw std::runtime_error("enqueue on stopped ThreadPool");
      }

      auto payload = [task_ptr]() { task_ptr->operator()(); };

      tasks.emplace(payload);
    }

    cv.notify_one();
    return future;
  }
};