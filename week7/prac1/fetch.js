const url = './data/data.json';
const container = document.getElementById('container');

const fetchData = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
           //컨테이너에 첫번째 자식 요소가 있으면 첫번째 자식요소 제거   
       }
    fetch(url)
    .then((response)=>{
        // console.log(response);
        return response.json()
        //json 형식을 원하므로 json 으로 반환
    })
    .then((response)=>{
        console.log(response.frontend);
        //key 값으로 불러와서 frontend 키 내부의 배열만 출력되도록
        const datas = response.frontend;
        //datas에는 frontend 키 내부의 배열이 들어있음
        
        datas.map((data)=>{
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다.`
            // ` 백틱 : 문자열 안에 변수 편하게 넣기 가능

            container.appendChild(list);
            console.log(data);
        })
    })
}
