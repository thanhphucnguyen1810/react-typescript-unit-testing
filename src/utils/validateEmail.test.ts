import { validateEmail } from "./validateEmail";

describe("Unit test: validateEmail(): ", () => {
  const cases = [
    ['thanhphucnguyen@gmail.com', true],
    ['thanhphucnguyen@', false],
    ['thanhphucnguyen.com', false],
  ] as const

  // Dùng each để lặp qua các case và test từng case, giúp code gọn, nhiều bộ test lặp đi lặp lại trong cùng một logic
  // %p là dạng placeholder kiểu pretty-format in ra log giá trị gốc khi test được thực thi. dễ debug test case bị fail.
  it.each(cases)('%p => %p', (email, expected) => {
    expect(validateEmail(email)).toBe(expected)
  })
})
