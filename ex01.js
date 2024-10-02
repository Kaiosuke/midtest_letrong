// Hàm taxiFare(km) nhận vào số km và trả về số tiền phải trả dựa trên các quy tắc sau:

// Trả về "invalid" nếu km không phải là số hợp lệ hoặc nhỏ hơn 0. (0.25đ)
// 1 km đầu tiên: 5000đ. (0.25đ)
// Từ km thứ 2 đến km thứ 30: 4000đ/km. (0.25đ)
// Từ km thứ 31 trở đi: 3000đ/km. (0.25đ)const

const taxiFare = (km) => {
  if (typeof km !== "number" || isNaN(km) || km < 1) return "invalid";
  let totalMoney = 0;
  if (km <= 1) {
    totalMoney = 5000;
  } else if (km > 1 && km < 30) {
    totalMoney = (km - 1) * 4000 + 5000;
  } else {
    totalMoney = (km - 30) * 3000 + (29 * 4000 + 5000);
  }
  return totalMoney + " đ";
};

console.log(taxiFare(31));
