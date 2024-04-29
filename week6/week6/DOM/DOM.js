class DOM {
    // Div 나 Button 중 해당하는 HTML 태그 생성하는 코드
    constructor(tagName, innerText, className) {
        this.node = document.createElement(tagName);
        //this는 생성될 인스턴스를 가르킴, createElement가 HTML 태그를 생성 
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className);
        //className 있다면.. classList 에 해당 클래스 추가.
    }
}

export default DOM;