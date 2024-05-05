const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

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


//현재 페이지 url의 확인을 통해 전송한 데이터 받음
//receivedData 값에는 사진의 index 값
const receivedIndex = parseInt(location.href.split('?')[1]);


getDetailData();


//descrip HTML 을 구성하는 함수
async function getDetailData() {

    //데이터 패칭
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;
    const fetchDetailData = await fetch(url);
    
    const DetailtoJson = await fetchDetailData.json();
  
    const datas = await DetailtoJson.response.body.items.item;

    //html 화면 구성
    const title = document.querySelector('#title');
    const where = document.querySelector('#where');
    const image = document.querySelector('#detailImg');
    const date = document.querySelector('#date');
    const photoBy = document.querySelector('#photoBy');
    const keyWord = document.querySelector('#keyWord');

    //console.log(datas[receivedIndex]);
    let keyWordLis = datas[receivedIndex].galSearchKeyword.split(',');

    //날짜 보기 좋은 형태로 파싱
    dateString = parseDate(datas[receivedIndex].galCreatedtime);

    image.src = datas[receivedIndex].galWebImageUrl;
    title.innerText = keyWordLis[0];
    where.innerText = `위치 : ${keyWordLis[1]}`;
    date.innerText = `날짜 : ${dateString}`;
    photoBy.innerText = `촬영자 : ${datas[receivedIndex].galPhotographer}`;


    //키워드 보기 좋은 형태로 파싱
    keyWordLis = keyWordLis.slice(2);
    let parseKey = keyWordLis.map((word)=>word.trim()); //문자열 앞뒤 공백 제거
    let sent = "";
    //키워드 앞에 해시태그 추가
    for(i in parseKey) {
        sent = sent + `#${parseKey[i]}` + " ";
    }

    keyWord.innerText = sent;
}

//날짜 파싱해주는 함수
const parseDate = (date) => {
  const year = date.substr(0,4);
  const month = date.substr(4,2);
  const day = date.substr(6,2);
  const hour = date.substr(8,2);
  return (
    `${year}년 ${month}월 ${day}일 ${hour}시`
  )
}

