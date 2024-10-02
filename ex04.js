// Bài 4 (2 điểm): Đưa thông tin dạng bảng sản phẩm ra màn hình.
// Yêu cầu đầy đủ các thông tin: id, name, price, brand. (Thiếu một trong các thông tin trên sẽ bị trừ 0.5đ)
// Danh sách hiển thị phải là dạng bảng HTML. (0.5đ)

const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony",
  },
];

const renderProduct = (arr) => {
  if (!Array.isArray(arr) || arr.length < 1) return false;
  const tbody = document.querySelector("tbody");
  arr.map((product) => {
    if (!product.id || !product.name || !product.price || !product.brand) {
      return "Thiếu id hoặc name hoặc price hoặc brand";
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.brand}</td>
        </tr>
    `;
    tbody.appendChild(tr);
  });
};

renderProduct(products);
