//함수
// function hi(name) {
//   console.log("hi~" + name);
// }

// hi('oh')

// function sum(a, b) {
//   result = a + b;
//   return result;
// }
// abc = sum(120, 103);
// console.log("abc", abc);
//("abc")->abc가 abc ->223이다 abc=223

// ------------------------------------
//조건문
// name = "kim"

// if(name ==="lee") {
//   console.log("true");
// } else if (name === "kim") {
//   console.log ("hi kim")
// } else {
//   console.log ("hi")
// }



// name = "lee"
// switch (name) {
//   case "lee":
//     console.log ("hi lee");
//     break;
//   case "kim":
//     console.log ("hi kim");
//     break;
//   default:
//     console.log ("hi") 
//   }

 // ----------------------------------

//구구단
// for(let i = 2; i <= 9; i++) {
//   for(let j = 1; j <= 9; j++) {
//      console.log(i + "*" + j + "=" + i*j);
//   }
// }


//배열
// const A = [2,3,4,5,6,7,8,9];
// function fn(elem,idx) {
//   console.log(idx,elem);
// }
// A.forEach (fn);

/* 여기서 elem은 그냥 이름인데
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

console.log(result); */

// ==========================================================================
// 숙제 reduce로 array
/* const arr = [1, 2, 3, 4, 5]
  console.log(arr);
arr.reduce(function (acc, cur, idx) {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0); */

// 숙제 reduce
/* const studentScore = [
  {
    name: "lee",
    score: 90,
  },
  {
    name: "kim",
    score: 80,
  },
  {
    name: "park",
    score: 70,
  },
  {
    name: "choi",
    score: 40,
  },
 ];

 const pass = studentScore.reduce((acc, student) => {
  return student.score >= 80 ? acc.concat(student.name) : acc;
 }, []);
 
 
 console.log(pass); // ['lee', 'kim'] */
 

