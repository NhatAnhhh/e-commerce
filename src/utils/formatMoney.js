export function formatMoney(price) {
  // Sử dụng hàm toLocaleString() để định dạng giá tiền
  return price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
