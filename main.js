//input에 내용을 쓰고 등록 버튼을 클릭하면
//리스트에 내용이 추가된다.

/*  const todoInput = document.getElementById("todo-input");
console.log("todoInput",todoInput); 
 -->id를할땐 getElementById 이고 ("#내가 아이디에 준 이름") */

//  -->class를할땐  querySelector이고 (".내가 클래스에 준 이름")
const todoInput = document.querySelector(".todo-input");
console.log("todoInput",todoInput);

const todoInputButton = document.querySelector(".todo-input-button");
console.log("todoInputButton",todoInputButton);

const todoList= document.querySelector(".todo-list");
console.log("todoList",todoList);


// todoInputButton.addEventListener("click", function() {});

/* todoInputButton.addEventListener("click", function() {
  alert("hi");
}) */

// 클릭했을때 어떠한걸 실행할거냐임 "click"은 이름이 아니라 기능임
todoInputButton.addEventListener("click", function() {
  //인풋에 투두 내용 가져오기
  const todo = todoInput.value;
  console.log("todo",todo);


  //할일 요소 만들기
  const span = document.createElement("span");
  ////( "span")은 요소임 이름 아님 예시로 div를 넣어도됌

  //할일 요소에 할일 값 넣기
  span.textContent = todo;

  //할일 리스트에 추가하기
  // todolist => <ul>
  todoList.appendChild(span);
});