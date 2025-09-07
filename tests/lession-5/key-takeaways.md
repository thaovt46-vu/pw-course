# 1. Function Advance

-   **Lambda function**: Là một hàm ngắn gọn, không cần định nghĩa tên,
    thường dùng để viết nhanh các đoạn code đơn giản.
    **Cú pháp:**

``` javascript
(parameters) => {
// Code here
}
```

-   **Anonymous functions**: Là hàm không có tên, thường dùng khi truyền
    hàm như tham số cho hàm khác.
    **Cú pháp:**

``` javascript
function (parameters) {
// Code here
}
```

# 2. DOM

**DOM (Document Object Model)** là mô hình đối tượng tài liệu do trình
duyệt tạo ra khi tải một trang web.
- Nó biến cấu trúc HTML thành một cây đối tượng (tree structure).
- Nhờ DOM, JavaScript (hoặc ngôn ngữ khác) có thể truy cập, thay đổi,
thêm, xóa nội dung và các phần tử trong trang web.

# 3. Selector - XPath selector

-   **Selector**: là "cách chọn phần tử (element)" trên trang web để
    thao tác trong automation.
-   **XPath selector**: là một ngôn ngữ truy vấn để tìm phần tử trong
    tài liệu XML/HTML, cho phép chọn bằng đường dẫn hoặc theo điều kiện
    logic.
-   **XPath có 2 loại**:
    -   XPath tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi `/`
    -   XPath tương đối: tìm dựa vào đặc tính, bắt đầu bởi `//`

# 4. Playwright basic syntax

-   **test**: Đơn vị cơ bản để khai báo một test

``` javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```

-   **step**: Đơn vị nhỏ hơn test, để khai báo từng step của test case

``` javascript
await test.step('Tên step', async () => {
// Code here
});
```

-   **Basic action in Playwright**:
    -   Navigate (goto)
    -   click
    -   dblclick
    -   input (fill)
    -   Radio/Checkbox (check(), isChecked, setChecked)
