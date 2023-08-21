# Scheme 解释器

设计 Expression 数据结构时，使用 `std::variant` 数据结构，每一项在逻辑上都应该是 `Expression`，例如 `1` 是 expression，`+` 是 expression，`Eval` 用于计算 `Expression`，所以 `Eval` 中不应该存在对 token 的解析过程，这部分必须由 `parser` 完成，同时，计算的结果也应该是 `Expression`。

`Eval` 计算时，对于用户自定义的 `procedure`，必须新建一个 `Environment`，然后在这个环境之中绑定相关参数。
