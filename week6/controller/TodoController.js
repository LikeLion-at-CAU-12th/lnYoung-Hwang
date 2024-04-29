import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

//추가 버튼 클릭 시, todoController 인스턴스가 생성됨
//Todo 인스턴스를 생성하여 Div, Button 태그를 만듦
//app.js에서 addTodo를 실행하여 만든 태그를 todoList의 자식 노드로 추가
//이외에도 todo를 삭제, 완료에 대한, todo 리스트를 컨트롤 하는 기능  
class TodoController {
    constructor(todo){    
    
        this.todo = todo; //todo : todo의 innerText 내용
        this.newTodo = new Todo(todo); //newTodo : todo를 이용해 만든 Todo 인스턴스

        //todo의 메소드들 호출, 삭제 / 완료 / 이너텍스트에 해당하는 node 가져옴
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();


        //completeAll 버튼 누르기 구현..
        const completeAllBtn = document.getElementById('completeAll-btn');
        
        completeAllBtn.addEventListener('click', ()=>{
            this.completeAll(this.todoArr);
        });

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
        
         //complete All에 쓰일 todo 목록에 추가
        this.todoArr.push(this);

        input.value = ''; //처리 완료 후 value를 비워줌.
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow()); 
        //appendChild의 반대. 해당하는 div 태그 제거

        //complete All에 쓰일 todo 목록에서 지움
        const delIndex = this.todoArr.indexOf(this);
        this.todoArr.splice(delIndex, 1);
    }

    //완료 버튼 클릭 시
    doneTodo(todo){
        this.completeController = new CompleteController(todo);
        this.completeController.addCompleteTodo();
        this.delTodo(); 
    }
}

// 모든 Todo 인스턴스를 배열로 저장해둘 거임.. complete all 버튼 눌렀을 때 한번에 처리하도록
TodoController.prototype.todoArr = []; 

// CompleteAll 버튼 눌렀을 시 실행할 함수. 
TodoController.prototype.completeAll = function(todoArr){
    for(var key in todoArr){
        todoArr[key].doneTodo(todoArr[key].todo);
    }
}

export default TodoController;