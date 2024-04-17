import Button from "./Button.js";
import Div from "./Div.js";
import TodoController from "../controller/TodoController.js";
import Todo from "./Todo.js";


class Complete {
    constructor(completeTodo) {
        //DOM 생성
        this.row = new Div('', 'row').node; //row : 해당하는 노드
        this.textBox = new Div(completeTodo, 'text-box');
        this.doneBtn = new Button('미완', 'done-btn');
        this.delBtn = new Button('삭제', 'del-btn');
        //this.innerNode.classList.add('done-text');
        //생기기 전에 classList.add 호출해서 오류 발생
    }
    addRow() {
        [this.textBox, this.doneBtn, this.delBtn].forEach(
            //배열 내부 요소들을 dom이라고 이름지어서 각각에 대해 함수 수행
            (dom) => {
            this.row.appendChild(dom.node); 
            //row 태그 안에 이것을 자식 노드로 넣어서 row가 될 것임
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getdoneBtn(){
        return this.doneBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Complete;