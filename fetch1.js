const resultUl=document.querySelector("#result");


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwOWRlNjgyYzk2ZWJkZTgwOWFiNTQyOGYzMDljNyIsIm5iZiI6MTczNjI5ODk1OC4zNzksInN1YiI6IjY3N2RkMWNlMjAzN2ZmMDRjOTRlNTM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIyJ1LiE84yox34iMb0uE403wJ4zbd5aKerZ30GG7P8'
  }
};

let url="https://api.themoviedb.org/3/movie/popular?api_key=3ee09de682c96ebde809ab5428f309c7&language=ko-KR&page=1&region=KR"

fetch(url, options)
  .then(res => res.json())
  .then(function(res1)) {
    temp_html= null;
    for (let i=0; i<=res1.length; i++) {
      temp_html += `<div class="item">
      <img src="${res1[i].poster_path}"
                alt="...">
            <h3 class="card_title">${res1[i].title}</h3>
            <p class="card_rank">${res[i].vote_average}</p>
            </div>`;
    };    
  };  
  
    resultUl.innerHTML = temp_html;


  // let docs = await getDocs(collection(results, "object"));
  // docs.forEach((doc) => {
  //   data = {
      //    let poster_path = row['poster_path'];
      //   let title = row['title'];
      //   let vote_average = row['vote_average'];
  // };
  
  //   
  // });

  //   let temp_html = `<div class="item">
  //           <img src="${image}"
  //               alt="...">
  //           <h3 class="card_title">${title}</h3>
  //           <p class="card_rank">${vote_average}</p>
  //       </div>`

  //             $('#item').append(temp_html); 

//  <div class="col">
//                     <div class="card h-100">
//                       <img src="${image}" class="card-img-top" alt="...">
//                       <div class="card-body">
//                         <h5 class="card-title">${title}</h5>
//                         <p class="card-text">${star}</p>
//                         <p class="card-text">${comment}</p>
//                       </div>
//                     </div>
//                   </div>`;
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