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

const todoListSection = document.querySelector(".todo-list-section");

let ul; //ul요소의 존재여부를 추적하기위한 변수 선언


// todoInputButton.addEventListener("click", function() {});

/* todoInputButton.addEventListener("click", function() {
  alert("hi");
}) */



// 클릭했을때 어떠한걸 실행할거냐임 "click"은 이름이 아니라 기능임
todoInputButton.addEventListener("click", function() {

  if(!ul) {
    //ul이 존재하지않으면 새로운 ul요소를 생성하고 todoListSection에 추가합니다
    ul = document.createElement("ul");
    todoListSection.appendChild(ul);
  }
  //빈칸이나 스페이스만 넣었을경우 경고창 띄우기
  const emptyValidator = function (string) {
    return string.trim().length;
  }

  if(emptyValidator(todoInput.value)=== 0) {
    alert('값을 입력해주세요')
    return;
  }

  //할일 요소 만들기
    ////("li")은 요소임 이름 아님 예시로 div를 넣어도됌
  const li = document.createElement("li");

  const label = document.createElement("label");
  
  const input = document.createElement("input");
  
  const span = document.createElement("span");

    //인풋에 투두 내용 가져오기
  const todo = todoInput.value;
  
  //할일 요소에 할일 값 넣기
  span.textContent = todo;
  //할일 리스트에 추가하기

  // todolist => <ul>
  ul.appendChild(li);
  li.appendChild(label);
  label.append(input,span);

  //체크박스에 내 css적용
  li.classList.add("todo-item");

/*   엘리먼트에 속성추가
  Element.setAttribute (속성명, 속성값); */
  input.setAttribute('type','checkbox');
  
  todoInput.value = "";
});




/* //자동화
const makeTag = function (htmlTag) {
  element = document.createElement(htmlTag);
  return element;
}
const tagList = [
  {htmlTag: 'div'},
  {htmlTag: 'li'},
  {htmlTag: 'span'},
]

const completeTag = []

tagList.forEach (set => {
  const result = makeTag(set)
  ulselec.append(result)
}) */