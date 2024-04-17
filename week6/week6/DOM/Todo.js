
import Div from "./Div.js";
import Img from "./Img.js";

//todo를 생성하는 역할. Div, Button 인스턴스를 만들어서 
//todo 한 줄에 대한 텍스트, 버튼..을 종합하여 todo div 태그를 만드는 역할

class Todo{
    constructor(todo){
        this.row = new Div('', 'row').node; //row : 해당하는 노드
        this.textBox = new Div(todo, 'text-box');

        //Button 클래스를 이용하는 대신 Img 클래스를 이용!
        //사용하지 않는 Button 태그 지움
        this.completeBtn = new Img ('complete-btn');
        this.delBtn = new Img ('del-btn');
        //this.completeBtn = new Button('완료', 'complete-btn');
        //this.delBtn = new Button('삭제', 'del-btn');
    }

    //만든 tag들을 종합하여 하나의 dom 요소로 만드는 기능
    addRow() {
        [this.textBox, this.completeBtn, this.delBtn].forEach(
            //배열 내부 요소들을 dom이라고 이름지어서 각각에 대해 함수 수행
            (dom) => {
            this.row.appendChild(dom.node); 
            //row 태그 안에 이것을 자식 노드로 넣어서 row가 될 것임
        })
        return this.row;
    }

    //아래의 함수들은 todo의 노드를 반환! (getter?)
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;