
// api 불러오기 
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
  }
};

// fetch url 
let url = "https://api.themoviedb.org/3/movie/popular?api_key=3ee09de682c96ebde809ab5428f309c7&language=ko-KR&page=1&region=KR"
let imgUrl = "https://image.tmdb.org/t/p/w185/";

// 전역 함수 정의
let movieList;

// fetch 데이터 받아서 정리 
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    movieList = data.results;
  })
  .catch((error) => {
    console.log("오류 발생")
  })

// 카드 생성 함수
function makeMovieCard(movie) {
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
          <div class ="item">
            <img src="${imgUrl}${movie.poster_path}" alt="..." id="card_image">
            <h3 class="card_title">${movie.title}</h3>
            <p class= "card_rank">평점: ${movie.vote_average}</p>
        </div>`;

  return cardDiv;
};

// 카드 생성 
const cardList = document.querySelector(".container");
movieList.forEach((movie) => {
  const card = makeMovieCard(movie);
  cardList.appendChild(card);
});

// search enter 이벤트 발생
const SearchInput = document.querySelector('#search');

SearchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const keyword = SearchInput.value;
    movieList.filter(function (wanted) {
      return wanted.title.includes(keyword);
    });
  }
});
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
