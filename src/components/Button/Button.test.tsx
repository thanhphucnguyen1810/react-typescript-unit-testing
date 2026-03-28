import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it("Should render and click to button: ", async () => {
    // Tạo một userInstance
    const user = userEvent.setup()

    // Tạo mock function onclick bằng jest
    const onClick = jest.fn()

    // Mount component <Button /> vào DOM ảo trong môi trường test
    render(<Button content="Click Me" onClick={onClick}/>)

    // Dùng object screen truy vấn DOM global tìm cái button
    // getByRole: tìm button vs role="button" và name=/click me/i (regular expression - (case - insensitive))
    // name là nội dung hiển thị của button
    const button = screen.getByRole("button", { name: /click me/i })

    // Mô phỏng một click của người dùng vào button
    await user.click(button)

    // Kiểm tra button vẫn đang nằm trong document (ko bị unmount)
    expect(button).toBeInTheDocument()
    // Kiểm tra mock onClick đã đc gọi đúng 1 lần khi click hay chưa.
    expect(onClick).toHaveBeenCalledTimes(1)

  })
})

