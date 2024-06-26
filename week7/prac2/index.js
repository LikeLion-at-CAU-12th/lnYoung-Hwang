const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";
//항상 base URL 만들고 뒤의 내용만 바꾸도록 하기

const container = document.getElementById('container');

const option = {
    serviceKey:
      "iwosbmX5ITZM8jtOpkVQbqfMkGM%2FkL03qDVqc93SoymCoZFsDAzpw3qRjaUgtBfSAcPZtgjzidmue9fOF9tMIw%3D%3D",
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo: 1
  };


  let count = -1;

  async function getData() {
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;
    //baseURL + 뒤의 url 붙여서

    count ++;
    const fetchData = await fetch(url);
 
    //fetch 통해 받은 promise 객체의 HTTP 응답 body 텍스트를 json 형식으로 바꿈
    const toJson = await fetchData.json();

    const datas = await toJson.response.body.items.item;

    //const urlParams = new URLSearchParams('?')

    datas.map((data,i)=>{
        //i는 배열(datas)의 현재 요소의 인덱스를 나타냄
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img');
        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        ${i + 1 + 5 * count}번째 사진
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}`;

        const btn = document.createElement('button');
        btn.innerText='더보기';

        //현재 데이터 인덱스 정보를 url 뒤에 붙여 다른 html에 데이터 전송
        btn.addEventListener("click", ()=>{
            location.href = `descrip.html?img=${data.galWebImageUrl}&title=${data.galTitle}&where=${data.galPhotographyLocation}&key=${data.galSearchKeyword}&created=${data.galCreatedtime}&photoBy=${data.galPhotographer}`;
        });

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(btn);

        container.appendChild(list);
    })
}


