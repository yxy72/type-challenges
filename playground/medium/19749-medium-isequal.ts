/*
  19749 - IsEqual
  -------
  by Takahiro Kato (@doz13189) #中等 #utils

  ### 题目

  Implements the equal operator that returns a boolean for whether the two given types are equal.

  For example:

  ```ts
  type X1 = 1
  type Y1 = 1
  type T1 = IsEqual<X1, Y1> // expected to be true

  type X2 = 1
  type Y2 = 2
  type T2 = IsEqual<X2, Y2> // expected to be false
  ```

  > 在 Github 上查看：https://tsch.js.org/19749/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsEqual<X, Y> = any

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsEqual<number, string>, false>>,
  Expect<Equal<IsEqual<1, 1>, true>>,
  Expect<Equal<IsEqual<any, 1>, false>>,
  Expect<Equal<IsEqual<1 | 2, 1>, false>>,
  Expect<Equal<IsEqual<any, never>, false>>,
  Expect<Equal<IsEqual<[any], [number]>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/19749/answer/zh-CN
  > 查看解答：https://tsch.js.org/19749/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
