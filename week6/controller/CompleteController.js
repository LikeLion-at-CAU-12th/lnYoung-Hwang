import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(todo){
        this.todo = todo;
        this.complete = new Complete(todo);

        //함수를 등록하기 위해 DOM 받아오기
        this.delBtnNode = this.complete.getDelBtn();
        this.doneBtnNode = this.complete.getdoneBtn();
        this.innerNode = this.complete.getInnerText();

        //가져온 node 클릭 시 호출할 함수를 설정
        this.delBtnNode.addEventListener('click', ()=>{
            this.delTodo();
        });
        this.doneBtnNode.addEventListener('click', ()=>{
            this.notDoneTodo(todo);
        });
    }

    //정적메소드로 구현해서 인스턴스 없이도 호출 가능하도록..
    

    addCompleteTodo(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.complete.addRow());
    }
    delTodo(){
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.complete.getRow()); 
        console.log(this);
    }

    //'미완'버튼 클릭시 삭제 후 to-do-list에 다시 추가
    notDoneTodo(todo){
        this.doneBtnNode.innerText = '완료';
        this.todoController = new TodoController(todo);
        this.todoController.addTodo();
        this.delTodo();
    }
}


export default CompleteController;