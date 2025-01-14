

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
  }
};

// fetch url 
let url="https://api.themoviedb.org/3/movie/popular?api_key=${}&language=ko-KR&page=1&region=KR"

let imgURl="https://image.tmdb.org/t/p/w185/";

// fetch 데이터 받아서 정리 
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((moviedata) => {
      console.log(`moviedata: ${JSON.stringify(moviedata,null,4)}`)
      document.querySelector(".container").innerHTML += `
       <div class ="item">
            <img src="${imgURl}${moviedata.poster_path}" alt="..." id="card_image">
            <h3 class="card_title">${moviedata.title}</h3>
            <p class= "card_rank">${moviedata.vote_average}</p>
        </div>`;
            }).catch((error) =>
            document.querySelector(".container").innerHTML += `
            <div>
                <div>Error occurred.</div>
            </div>
          `)
  })
  

// const getData = async () => {
//     const response = await fetch(url, options);
//     const moviedata = await response.json();
//     const cardList = document.createDocumentFragment();
//     Array.from(moviedata).forEach((item) => {
//       const stagedItem = document.createElement("li");
//       stagedItem.dataset.img = item.poster_path;
//       stagedItem.dataset.title = item.title;
//       stagedItem.dataset.average = vote_average;
//       stagedItem.classList ="list";
//       stagedItem.innerHTML = `<div class="item">
//                     <img src= "${item.img}" alt="...">
//                     <h3>${item.title}</h3>
//                     <p>${item.average}</p>
//                 </div>`;
//       cardList.appendChild(stagedItem);
//     });    
//     makeCards.appendChild(cardList);
//     return moviedata;
// };

// getData();




// newDiv.innerHtml =`<img > ....`
//   return newDiv;

// //  fetch 불러오기 
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then((data) => {
//     const movie = data['results'];
//     const Movielist = document.querySelector("");
//   })

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

