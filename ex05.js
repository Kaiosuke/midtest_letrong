// Bài 5 (2 điểm): Chuyển mảng sau thành dạng thẻ select trong HTML và đưa ra ngoài màn hình.

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

const renderSelect = (arr) => {
  if (!Array.isArray(arr) || arr < 1) return false;
  const selectElement = document.querySelector("select");
  arr.forEach((category) => {
    const option = document.createElement("option");
    option.innerHTML = category.name;
    option.setAttribute("value", category.id);
    selectElement.appendChild(option);
    category.children
      ? category.children.forEach((cate) => {
          const option = document.createElement("option");
          option.innerHTML = `-- ${cate.name}`;
          option.setAttribute("value", cate.id);
          selectElement.appendChild(option);
          cate.children
            ? cate.children.forEach((value) => {
                const option = document.createElement("option");
                option.innerHTML = `---- ${value.name}`;
                option.setAttribute("value", value.id);
                selectElement.appendChild(option);
              })
            : null;
        })
      : null;
  });
};

renderSelect(categories);
