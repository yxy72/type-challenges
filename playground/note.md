# TypeScript，请多指教！
## Warm Up
### Expect
- 静态编译时就确定一个类型是不是 `true`
```TS
type Expect<T extends true> = T;
type t1 = Expect<true>;   // ok 
type t2 = Expect<false>;  // error
```

### Equal

```TS
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
```
> `<T>() => T extends string ? 1 : 2`  是一个类型，输入类型为 `string` 时返回 类型`1`，否则返回类型`2`
- 错误写法1：
```TS
// Equal<'HELLO', string> -> true
type Equal<X, Y> = X extends Y ? true : false;
```
- 错误写法2：
```TS
// Equal<'a' | 'b', 'a'> -> boolean
// Equal1<never, never>  -> never
type Equal<X, Y> =
    X extends Y ? Y extends X ?
        true : false : false;
```
> 1. 联合类型 `Equal<'a'|'b', 'a'>` 等价于 `Equal<'a','a'> | Equal<'b','a'>`，而 ts 中 `true|false` -> `boolean`
> 2. `never` **没有任何成员**，甚至不会进入外层的 `x extends Y`