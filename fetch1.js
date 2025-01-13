const resultUl=document.querySelector("#result");
const cards=document.querySelector(".makecards")

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
  }
};

let url="https://api.themoviedb.org/3/movie/popular?api_key=3ee09de682c96ebde809ab5428f309c7&language=ko-KR&page=1&region=KR"

let temp_html ;

fetch(url, options)
  .then(res => res.json())
  // await async로 고치기 
  // map이나 foreach 등으로 카드 함수를 부르기
  .then((res1) => {
    res1.forEach((data) => {

      // 카드 함수 따로 만들기
     
    });    
  });  

    resultUl.innerHTML = temp_html;



//  await /async 로 다고치고 
// 카드를 만드는 함수를 따로 만든다
// map, foreach 문을 돌려서 
//  const data = fetch(...);
//  const res = fetch();
// const data = await res.json();
// data.map ((item)=> {
//   카드 로직만드는 함수를 넣는다
// })

//  카드의 부모가 되는 div를 가지고 와서 선언해야 함 
// function makeCard(item){
//   //div 선언
//   const newDiv = doucment.createElement("div");
  
//   newDiv.ineerHtml =`<img > ....`
//   return newDiv

//   const cardList = document.getElementById("cardList");
//   cardList.appendChild(.. 카드를 여기다) 

