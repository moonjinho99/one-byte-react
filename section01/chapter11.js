// 함수
console.log(getArea(10, 20));
console.log(getArea(20, 30));

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  let area = width * height;

  function another() {
    console.log("another");
  }

  another();

  return area;
}
