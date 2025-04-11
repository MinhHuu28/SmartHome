# Smart Home IoT Project 🏠🌐

## 📌 Giới thiệu

Dự án **Smart Home** nhằm xây dựng một hệ thống giám sát và điều khiển ngôi nhà thông minh sử dụng nền tảng **IoT (Internet of Things)**. Hệ thống cho phép:

- Tự động điều khiển các thiết bị điện trong nhà.
- Theo dõi các thông số môi trường như **nhiệt độ**, **độ ẩm**, **bụi mịn PM2.5**.
- Điều khiển và giám sát từ xa thông qua giao diện web và cơ sở dữ liệu thời gian thực Firebase.

---

## 🎯 Mục tiêu chính

- 🔁 **Tự động hóa**: Hệ thống bật/tắt thiết bị điện như đèn, điều hòa, máy lọc không khí dựa trên cảm biến.
- 🌫️ **Giám sát chất lượng không khí**: Cảnh báo khi nhiệt độ, độ ẩm hoặc mức bụi vượt ngưỡng.
- 🌍 **Điều khiển từ xa**: Theo dõi và điều khiển nhà từ điện thoại hoặc máy tính qua mạng.
- ⚡ **Tiết kiệm năng lượng**: Tối ưu hóa tiêu thụ điện, tránh lãng phí tài nguyên.

---

## 🔧 Phần cứng sử dụng

| Thiết bị                                                  | Mô tả                                          |
| --------------------------------------------------------- | ---------------------------------------------- |
| [ESP32](https://www.espressif.com/en/products/socs/esp32) | Vi điều khiển chính có kết nối WiFi, Bluetooth |
| DHT11                                                     | Cảm biến nhiệt độ và độ ẩm                     |
| PM2.5 GP2Y1010AU0F                                        | Cảm biến đo bụi mịn                            |
| Relay module                                              | Điều khiển thiết bị điện                       |
| Nguồn 5V                                                  | Cung cấp năng lượng cho toàn hệ thống          |

---

## 🌐 Phần mềm sử dụng

- **Arduino IDE**: Lập trình cho ESP32.
- **Firebase Realtime Database**: Lưu trữ và đồng bộ dữ liệu cảm biến theo thời gian thực.
- **HTML/CSS/JS**: Giao diện điều khiển trên Web.
- **Bootstrap**: Tăng tính thẩm mỹ cho UI Web.

---

## ⚙️ Kiến trúc hệ thống

1. ESP32 đọc dữ liệu từ các cảm biến.
2. Gửi dữ liệu môi trường lên Firebase.
3. Giao diện Web kết nối Firebase để hiển thị giá trị và gửi lệnh điều khiển.
4. ESP32 nhận lệnh điều khiển từ Web và kích hoạt các thiết bị tương ứng (quạt, đèn,...).

---

## 📸 Hình ảnh mô phỏng

![System Diagram](images/system_diagram.png) <!-- Bạn có thể thêm hình sơ đồ hệ thống ở đây -->

---

## 🧠 Hướng phát triển

- Bổ sung thêm cảm biến khí gas, hệ thống báo cháy.
- Tích hợp trợ lý ảo (Google Assistant, Alexa).
- Giao diện điều khiển trên ứng dụng di động.

---

## 👥 Nhóm thực hiện

- **Trần Minh Hữu** - 22139028
- **Lê Huỳnh Đức** - 22139017

Trường ĐH Sư phạm Kỹ thuật TP.HCM  
Khoa Công nghệ thông tin - Bộ môn Kỹ thuật máy tính

---

## 📄 Giấy phép

Dự án được phát triển cho mục đích học tập và nghiên cứu cá nhân.  
Bạn có thể tự do tham khảo, cải tiến và mở rộng!
