import { sum } from "~/utils/sum"
/**
 * describe: gom các test case liên quan lại với nhau
 * it: Tạo một test case đơn lẻ
 * expect: Kiểm tra kết quả có đúng như mong đợi không
 */

describe("Unit Test: sum(): ", () => {
  it("Should return the sum of two numbers", () => {
    expect(sum(10, 7)).toBe(17)
  })
})

// % Stmts (Statements): tỉ lệ câu lệnh trong code đã được chạy trước khi test.
// %Branch (Branches) tỉ lệ rẽ nhánh đã được cover
// %Funcs (Functions): tỉ lệ hàm được gọi ít nhất một lần trong test
// %Lines (Lines): tỉ lệ dòng code thực tế (line-based) đã được chạy qua.
// Uncovered Line #s: danh sách số dòng chưa được chạy trong test. Đây là những chỗ cần viết thêm test để tăng coverage

