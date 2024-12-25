# Bài tập về Hàm

## Bài tập 1

1. Viết một hàm có tên `sayHello` nhận vào một tham số `name` và in ra câu chào "Hello, [name]!".
2. Gọi hàm `sayHello` với tham số là tên của bạn.

## Bài tập 2

1. Viết một hàm có tên `square` nhận vào một tham số `number` và trả về bình phương của số đó.
2. Gọi hàm `square` với giá trị `number` là 4 và in ra kết quả.

## Bài tập 3

1. Viết một hàm có tên `isLongString` nhận vào một tham số `str` và trả về `true` nếu độ dài của chuỗi lớn hơn 10, ngược lại trả về `false`.
2. Gọi hàm `isLongString` với giá trị `str` là "Hello, world!" và in ra kết quả.

## Bài tập 4

1. Viết một hàm có tên `sumArray` nhận vào một tham số `arr` (mảng các số) và trả về tổng của tất cả các phần tử trong mảng.
2. Gọi hàm `sumArray` với mảng `[1, 2, 3, 4, 5]` và in ra kết quả.

## Bài tập 5

1. Viết một hàm có tên `isPrime` nhận vào một tham số `num` và trả về `true` nếu số đó là số nguyên tố, ngược lại trả về `false`.
2. Gọi hàm `isPrime` với giá trị `num` là 7 và in ra kết quả.

## Bài tập 6

Viết một hàm có tên **calculate_power** nhận vào 3 tham số: `x`, `y`, `type`. Trong đó:

- `x`: là một số
- `y`: là một số
- `phep_tinh`: là một chuỗi thuộc một trong các giá trị: `cong`, `tru`, `nhan`, `chia`

Hàm trả về kết quả tương ứng với phép tính đã được chỉ định.

Tính và in ra kết quả:

- Khi x = 5, y = 2, phep_tinh='cong'
- Khi x = 5, y = 2, phep_tinh='nhan'

## Bài tập 7

Viết một hàm có tên `get_discount` nhận vào một tham số duy nhất là **membership_level** (level thành viên) và trả về phần trăm chiết khấu tương ứng với level thành viên đó. Các level thành viên và phần trăm chiết khấu tương ứng như sau:

- Bronze: 5%
- Silver: 10%
- Gold: 15%
- Platinum: 20%
- Nếu **membership_level** không khớp với bất kỳ level nào trên, hàm sẽ trả về 0%

Tính và in kết quả với:

- **membership_level** = Gold
- **membership_level** = Platinum

## Bài tập 8

Viết một hàm có tên **get_bus_fare** nhận vào một tham số duy nhất là ticket_type (loại vé) và trả về giá vé tương ứng. Các loại vé và giá vé tương ứng như sau:

- **normal**: 7000 VND
- **mstudent**: 50000 VND
- **madult**: 100000 VND
- Nếu ticket_type không khớp với bất kỳ loại vé nào trên, hàm sẽ trả về thông báo "Loại vé không hợp lệ".

Tính và in ra kết quả:

- Khi **ticket_type** = 'normal'
- Khi **ticket_type** = 'madult'

## Bài tập 8

Viết một hàm có tên **get_drink_price** nhận vào một tham số duy nhất là **_drink_type_** (loại đồ uống) và trả về giá tiền tương ứng. Các loại đồ uống và giá tiền tương ứng như sau:

- water: 5000 VND
- tea: 30000 VND
- coffee: 20000 VND
- Nếu drink_type không khớp với bất kỳ loại đồ uống nào trên, hàm sẽ trả về thông báo "Loại đồ uống không hợp lệ".

Tính và in ra kết quả:

- Khi **_drink_type_** = water
- Khi **_drink_type_** = coffee

## Bài tập 9

Viết một hàm có tên `get_time_of_day` nhận vào một tham số duy nhất là hour (giờ trong ngày, từ 0 đến 23) và trả về một thông báo tương ứng.

Các khoảng thời gian như sau:

- 0 <= hour < 12: In ra "Bây giờ Buổi sáng"
- 12 <= hour < 18: In ra "Bây giờ Buổi chiều"
- 18 <= hour < 21: In ra "Bây giờ Buổi tối"
- 21 <= hour < 24: In ra "Bây giờ Buổi đêm"

Với `hour` là một giá trị nhập vào từ người dùng. Hãy in ra thông báo tương ứng với hour

## Bài tập 10

Viết một hàm có tên **calculate_shipping_fee** nhận vào hai tham số **distance** (khoảng cách giao hàng tính theo km) và **weight** (trọng lượng hàng hóa tính theo kg), trả về phí giao hàng tương ứng dựa trên các quy tắc sau:

- Phí cơ bản dựa trên khoảng cách:
  - 0 km <= distance <= 5 km: 10000 VND
  - 5 km < distance <= 20 km: 20000 VND
  - distance > 20 km: 50000 VND
- Phụ phí dựa trên trọng lượng:
  - weight <= 2 kg: 0 VND (không phụ phí)
  - 2 kg < weight <= 5 kg: 5000 VND
  - weight > 5 kg: 10000 VND
- Phí giao hàng tổng cộng là tổng của phí cơ bản và phụ phí.

Sau đó tính và in ra kết quả khi:

- distance: 2, weight 1
- distance: 10, weight 6
