function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

function returnTrue2() {
  console.log("True 함수");
  return 12;
}

//단락평가 - 첫번째 피연산자 만으로 결과를 출력할 수 있다면(true) 연산 종료
console.log(returnTrue() || returnTrue2());

//단락 평가 활용 사례
// T || T 첫번째 T
// T && T 두번째 T

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "문진호" });
