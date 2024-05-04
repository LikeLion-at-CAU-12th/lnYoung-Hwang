//const url = './data/data.json';
//const container = document.getElementById('container');
//위에 둘은 이미 fetch에서 전역변수로 가져왔기 때문에 부를 시 에러

const filterData = () => {
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

        //map 전에 필터 함수를 써 아기사자 or 운영진인지 거를 것임.
        datas
        .filter((data)=>data.role == '아기사자')
        //중괄호 안쓸 시에 결괏값을 알아서 return 해줌
        //filter 함수 뒤에 ; 넣으면 뒤에 함수 이어서 못씀..

        .map((data)=>{
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다.`
            // ` 백틱 : 문자열 안에 변수 편하게 넣기 가능

            container.appendChild(list);
            console.log(data);
        })
    })
}