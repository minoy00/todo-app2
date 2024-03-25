// 데이터 타입
// 문자열 string - "가나다"
"안녕"
// 숫자열 number - 1 10
1;
// 참거짓 boolean - true false
true;
false;
// 아무것도 없는것 (정의는 되어있지만 없는것) null
null;
// 정의되어있지않은 undefined
undefined;

키:180
몸무게:70
피부색:노랗다
기독교:맞다
박사학위:없다

키:180;
몸무게:70;
피부색:"노란";
기독교:true;
박사학위:null;


// 변수
height = 180;
christ = true
console.log("height=", height, christ); 치면 height=180이랑 true나옴

//객체 (여러가지 데이터들 집합)
// 여기서는 {}안에는 =이 아니라 콜론을 넣어야함 :
me = {
  name: 'lee',
  gender: 'male',
  age: 43
}

you = {
  name: 'kim',
  gender: 'female',
  age: 37,
  address: null
  sum:sum
}
// 객체의 프로펄티?에 접근할때는 .을 씀
function sum(x, y) {
  result = x + y;
  return result;
}
console.log(you.name);
-> oh가 나옴
console.log(you.sum(20,20));
->40이 나옴




// 함수
function sum(a, b) {
  result = a + b;
  return result;
}


abc = sum(120, 193)




function hi(name) {
  console.log("hi~" + name);
}

hi('oh')
// or oh = 'oh'




// 조건문
if(조건) {
  실행될 코드들
}

if(true) {
  console.log("true")
}

0,null,undefined 은 false로 봄
음수랑 양수들은 다 true

name = "kim"

// if(name ==="lee") {
//   console.log("true");
// } else if (name === "kim") {
//   console.log ("hi kim")
// } else {
//   console.log ("hi")
// }


switch (변수) {
  case 1:
    console.log ('1')
    break;
}
name = "lee"
switch (name) {
  case "lee":
    console.log ("hi lee");
    break;
  case "kim":
    console.log ("hi kim");
    break;
  default:
    console.log ("hi")
}
조건이 많아지면 switch 쓰는게 더 효율적



//변수 선언하는 방법
var name = "park";
let name = "lee";
const name ="kim";




// 반복문
//구구단
for (초기값; 범위; 증감연산) {
  반복할 코드
}

for(let i = 2; i <= 9; i++) {
  for(let j = 1; j <= 9; j++) {
     console.log(i + "*" + j + "=" + i*j);
  }
}

//배열
대괄호를 열고 닫고가 배열임
아무거나 넣어도됌 [] ->이건 빈 배열임

[1,2,3,4,5,6,7,8,9];

[1, "a", true, {name : "lee"}, 1, 2, 3,]

const A = [2,3,4,5,6,7,8,9];
const B = [1,2,3,4,5,6,7,8,9];
console.log (A);
console.log (A.length); -->총 몇개인지
console.log (A[0]);-->첫번째 배열이 먼지
console.log (A[A.length - 1]); --> 끝 배열이 먼지



console에서 보면 0부터 시작함 이걸 index라고하고
length는 총 몇개인지

console.log (Array.prototype); 
-> array에서 쓸 수 있는 함수를 다 알려줌

// const A = [2,3,4,5,6,7,8,9];
A.forEach(function () {

})

이거랑
function fn() {

}
A.forEach (fn);
이거랑 같은거임

function fn(elem,idx) {
  console.log(idx,elem)
}
A.forEach (fn);

여기서 elem은 그냥 이름인데
[안에있는 숫자들 하나하나]를 의미함 -> 이름은 바꿀수잇음
fn->function줄여서 이름 준거임
const A = [2,3,4,5,6,7,8,9];
const result = [];
function fn(elem,idx) {
  if(elem % 2 === 0) {
    result.push(elem);
  }
}
A.forEach (fn);

console.log(result);
====================================================
function fa(e) {
  if (e % 2 === 0) {
    return 1; 
    }  else {
        return 2;
      }
  }

A.filter(fa);
console.log(result);

forEach랑 filter이랑 다른게 리턴을 하냐 안하냐
filter는 알아서 필터링해서 true값만 모아줌
/* 
for (let i = 1; i<10; i++) {
  for (let j = 1; j<10; j++) {
    console.log (i + "*" + j + "=" + i*j);
  }
}

for( var i = 1; i < 10 ; i++) {
  for ( var j = 1; j < 10; j++) {
    console.log (i +'*' + j + '=' + i*j)
  }
}

alert ("안녕하세요 저는") */


