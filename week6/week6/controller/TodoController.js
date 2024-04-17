import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";
import Complete from "../DOM/Complete.js";

//추가 버튼 클릭 시, todoController 인스턴스가 생성됨
//Todo 인스턴스를 생성하여 Div, Button 태그를 만듦
//app.js에서 addTodo를 실행하여 만든 태그를 todoList의 자식 노드로 추가
//이외에도 todo를 삭제, 완료에 대한, todo 리스트를 컨트롤 하는 기능  
class TodoController {
    constructor(todo){
        //todo : todo의 innerText 내용
        //newTodo : todo를 이용해 만든 Todo 인스턴스
        this.todo = todo;
        this.newTodo = new Todo(todo);

        //todo의 메소드들 호출, 삭제 / 완료 / 이너텍스트에 해당하는 node 가져옴
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();


        //가져온 node 클릭 시 호출할 함수를 설정
        this.delBtnNode.addEventListener('click', ()=>{
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', ()=>{
            this.doneTodo(todo);
        });
    }

    //todoList 요소를 가져와 자식 요소로 더해줌 
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        //addRow()..노드를 추가한 후 

        input.value = ''; //처리 완료 후 value를 비워줌.
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow()); 
        //appendChild의 반대. 해당하는 div 태그 제거
    }

    //완료 버튼 클릭 시
    doneTodo(todo){
        this.completeController = new CompleteController(todo);
        this.completeController.addCompleteTodo();
        this.delTodo();
        //색깔 바꾸기
        /*
        this.innerNode.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        */
        //'done-text', 'done-btn'이 있을 경우 지우고, 없을 경우 추가 해줌        

        /*
        if(this.comBtnNode.innerText === "미완"){
            this.comBtnNode.innerText = "완료";
        } else {
            this.comBtnNode.innerText = "미완";
        }
        */

        //아래부터 과제 부분
        
        //CompleteController 객체 생성.. 

    }
}


export default TodoController;