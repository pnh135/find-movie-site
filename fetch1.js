
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
let url2 = "https://api.themoviedb.org/3/keyword/keyword_id?api_key=3ee09de682c96ebde809ab5428f309c7&language=ko-KR&page=1&region=KR"
let imgUrl = "https://image.tmdb.org/t/p/w185/";

// 전역 함수 정의
let movieList;

// fetch 데이터 받아서 정리 
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    movieList = data.results;
    movieList.forEach((movie) => {
  const card = makeMovieCard(movie);
  cardList.appendChild(card);
});

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

// search enter 이벤트 발생
const SearchInput = document.querySelector('#search');

SearchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    cardList.innerHTML = ""
    const keyword = SearchInput.value;
    const filteredMovie = movieList.filter(function (wanted) {
      return wanted.title.includes(keyword);
    });
    filteredMovie.forEach((movie) => {
      const card = makeMovieCard(movie);
      cardList.appendChild(card);
    });
  }
});

// 모달 구현을 위한 click 이벤트 

const modal= cardList.addEventListener("click", function (event) {
  let clickClass= event.currentTarget;
  console.log(clickClass)
  return alert ("이 카드는" + `${event.currentTarget.title}`);
}
)

// 모달 형태 구현 

// const modal = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close-btn")

// function toggleModal(a) {
//     modal.style.display = (a);
// };

// const toggleClosed = closeBtn.addEventListener("click", function () {
//     toggleModal("none");
// })

