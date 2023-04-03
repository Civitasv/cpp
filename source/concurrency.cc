#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstdio>
#include <iostream>
#include <mutex>
#include <string>
#include <thread>
#include <vector>
using namespace std;

void basic_use() {
  int result = 0;
  thread th = thread([&]() {
    puts("Hello from th");
    result = 42;
  });
  puts("Hello from main thread");
  th.join();
  cout << "RESULT is: " << result << '\n';
}

void data_race() {
  using SC = chrono::steady_clock;
  auto deadline = SC::now() + chrono::seconds(10);

  // data race variable
  int counter = 0;
  thread thread_b = thread([&]() {
    while (SC::now() < deadline)
      cout << "B: " << ++counter << '\n';
  });

  while (SC::now() < deadline)
    cout << "A: " << ++counter << '\n';

  thread_b.join();
}

void data_race_fix() {
  using SC = chrono::steady_clock;
  auto deadline = SC::now() + chrono::seconds(10);

  // fix it
  atomic<int> counter(0);
  thread thread_b = thread([&]() {
    while (SC::now() < deadline)
      cout << "B: " << ++counter << '\n';
  });

  while (SC::now() < deadline)
    cout << "A: " << ++counter << '\n';

  thread_b.join();
}

void busy_wait() {
  atomic<bool> ready(false);
  thread thread_b = thread([&]() {
    while (!ready) {
      cout << "NOT Ready" << '\n';
    }
    cout << "Hello from B" << '\n';
  });
  cout << "Hello from A" << '\n';
  ready = true;
  thread_b.join();
  cout << "Hello again from A" << '\n';
}

void solution_for_busy_wait() {
  mutex mtx; // a key
  mtx.lock();
  atomic<int> counter(0);
  thread thread_b = thread([&]() {
    mtx.lock(); // blocking until thread a release(unlock) this mtx.
    mtx.unlock();
    cout << "Hello from B" << '\n';
  });

  cout << "Hello from A" << '\n';
  mtx.unlock();
  thread_b.join();
  cout << "Hello again from A" << '\n';
}

void typical_use_of_mutex() {
  struct Token {
    string token;
    Token(string token) : token(token) {}

    static Token Create() { return Token("token"); }
  };

  class TokenPool {
  private:
    mutex mtx_;
    vector<Token> tokens_;

  public:
    Token GetToken() {
      lock_guard<mutex> lk(mtx_);
      if (tokens_.empty())
        tokens_.push_back(Token::Create());
      Token t = std::move(tokens_.back());
      tokens_.pop_back();
      return t;
    }
  };
}

void use_condition_variable() {
  struct Token {
    string token;
    Token(string token) : token(token) {}

    static Token Create() { return Token("token"); }
  };

  class TokenPool {
  private:
    vector<Token> tokens_;
    mutex mtx_;
    condition_variable cv_;

  public:
    void ReturnToken(Token t) {
      unique_lock<mutex> lk(mtx_);
      tokens_.push_back(t);
      lk.unlock();
      cv_.notify_one();
    }

    Token GetToken() {
      unique_lock<mutex> lk(mtx_);
      while (tokens_.empty())
        cv_.wait(lk); // wait until `notify_xx`
      Token t = std::move(tokens_.back());
      tokens_.pop_back();
      return t;
    }
  };
}

int main() {
  solution_for_busy_wait();
  return 0;
}
