// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "문", hobby: "게임" },
  { name: "진", hobby: "헬스" },
  { name: "호", hobby: "야구" },
];

const gamePeople = arr1.filter((item) => {
  if (item.hobby === "게임") return true;
});

// console.log(gamePeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 4];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a앞
    return 1;
  } else if (b > a) {
    // a가 b앞
    return -1;
  } else {
    // 두 값의 자리 변경 X
    return 0;
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "moon"];
const joined = arr6.join(" ");

console.log(joined);
