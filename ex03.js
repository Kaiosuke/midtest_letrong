// Hàm highlightKeyword(content, keyword) nhận vào 2 tham số content và keyword và trả về nội dung với tất cả các keyword được bôi đậm bằng cách thêm thẻ <strong> vào trước và sau keyword.

// Thêm được thẻ strong vào trước và sau keyword. (1đ)
// Nếu không tìm được keyword trong content thì trả về content ban đầu. (0.5đ)
// Không phân biệt chữ hoa, chữ thường. (0.5đ)
// Không highight hết các keyword trong content. (0.5đ)

const highlightKeyword = (content, keyword) => {
  if (
    typeof content !== "string" ||
    typeof keyword !== "string" ||
    content.length < 1 ||
    keyword.length < 1
  )
    return false;
  const lowerCaseContent = content.slice();
  let strongKeyword = `<strong>${keyword}</strong>`;
  if (
    !lowerCaseContent.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  ) {
    return content;
  }

  return lowerCaseContent
    .toLocaleLowerCase()
    .replaceAll(keyword.toLocaleLowerCase(), strongKeyword);
};

console.log(
  highlightKeyword(
    "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
    "thú vị"
  )
);
