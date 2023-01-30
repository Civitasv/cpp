void func1() noexcept; // not throw
void func2() noexcept(true); // not throw
void func3() throw(); // not throw

void func4() noexcept(false); // may throw

int main(){

}
