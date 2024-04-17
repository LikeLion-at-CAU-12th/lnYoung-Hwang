import TodoController from "./controller/TodoController.js";

// 추가 버튼 클릭 시 todoController 인스턴스 생성 후 addTodo 호출

const addBtn = document.getElementById("input");
const input = document.querySelector('input');
//tag selecter

addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
});
// "function ()" === "() => {}" 화살표함수
