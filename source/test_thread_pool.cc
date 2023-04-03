#include "thread_pool.h"
#include <stack>
#include <cstdint>
#include <iostream>
#include <queue>

ThreadPool tp(8);

int main() {

  auto square = [](const uint64_t x) -> uint64_t { return x * x; };

  const uint64_t num_tasks = 32;
  std::vector<std::future<uint64_t>> futures;

  for (uint64_t task = 0; task < num_tasks; task++) {
    auto future = tp.Enqueue(square, task + 1);
    futures.emplace_back(std::move(future));
  }

  for (auto &future : futures) {
    std::cout << future.get() << std::endl;
  }
  std::queue<int> q;
  std::stack<int> s;
}