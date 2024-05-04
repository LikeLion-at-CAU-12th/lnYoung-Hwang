async function getDetailData() {
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;
    const fetchDetailData = await fetch(url);
    
    const DetailtoJson = await fetchDetailData.json();
  
    const datas = await DetailtoJson.response.body.items.item;
    
    //더보기 button 클릭 이벤트 발생 시 호출할 함수를 등록
    //각 더보기 버튼은 id로 구분
    for (var i=0; i < option.numofRows; i++) {
        const btn = document.getElementById(`${i+1}`);
        btn.addEventListener('click', ()=>{seeDetail(i)}); 
    } 
}

const seeDetail = (i) => {
    console.log(i);
    location.href = "descrip.html";
    
    datas[i]
}
