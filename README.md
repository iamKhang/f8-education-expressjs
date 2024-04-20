<div align="center">
  <h1>WEBSITE QUẢN LÝ KHÓA HỌC SỬ DỤNG EXPRESSJS</h1>
</div>

## Mục đích và chức năng của dự án
Dự án xây dựng trang Quản lý các khóa học sử dụng ExpressJS. Website này được phát triển trong quá trình học khóa học Node & ExpressJS tại [F8 Education](https://fullstack.edu.vn/).

## Cách cài đặt và sử dụng dự án
### Bước 1: Cài đặt cơ sở dữ liệu MongoDB
- Vào thư mục `data`, chạy lệnh `mongorestore --db f8_education_dev path\f8_education_dev` để import dữ liệu khóa học.

### Bước 2: Cài đặt Node.js
(Nếu chưa cài đặt Node.js): Để cài đặt Node.js trên máy tính Windows của bạn, hãy làm theo các bước sau:
1. Truy cập trang chủ của Node.js tại [https://nodejs.org/](https://nodejs.org/).
2. Tải xuống bản cài đặt phù hợp với hệ điều hành của bạn. Đối với Windows, bạn nên chọn bản cài đặt .msi.
3. Mở tệp cài đặt .msi vừa tải xuống.
4. Theo dõi các bước trong trình cài đặt, chấp nhận các điều khoản và điều kiện, và nhấn Next để tiếp tục.
5. Trong màn hình "Select the features to install", hãy đảm bảo rằng "npm package manager" được chọn để cài đặt cùng Node.js.
6. Nhấn Install để bắt đầu quá trình cài đặt.
7. Sau khi cài đặt thành công, bạn có thể kiểm tra phiên bản Node.js và npm bằng cách mở Command Prompt và chạy các lệnh sau: `node -v` và `npm -v`.

### Bước 3: Khởi chạy dự án
- Đứng ở thư mục gốc dự án, chạy lần lượt 2 lệnh: `npm start` và `npm run watch`.

### Bước 4: Mở trình duyệt
- Nhấp vào link [http://localhost:3000/](http://localhost:3000/) để mở trang web.
