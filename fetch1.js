const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?api_key=3ee09de682c96ebde809ab5428f309c7&language=ko-KR&page=1&region=KR', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  




// 필요한데이터 
// title, poster_path, vote_average



  // // 필요한 정보를 저장 
  // async function () {
    
  // }

  // let docs = await getDocs(collection(db, "albums"));
  //       docs.forEach((doc) => {
  //           let row = doc.data();

  //           let image = row['image'];
  //           let title = row['title'];
  //           let content = row['content'];
  //           let date = row['date'];