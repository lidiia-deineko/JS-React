let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms(){
  let i = 0;
  while (i < 2){
    const a = prompt("Один из последних просмотренных фильмов?", "");
          b = prompt("На сколько оцените его?", "");
  
          if (a != null && b != null && a != '' && b != '' && a.length<50){
              personalMovieDB.movies[a] = b;
              console.log('done');
          } else{
            console.log('error');
             i--;
          }
    i++
  }
}

rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log("Вы классический зритель!");
  } else if (personalMovieDB.count > 30){
    console.log("Вы киноман!");
  } else {
    console.log("Произошла ошибка!");
  }
}

detectPersonalLevel();

function showMyDB(){
  if(personalMovieDB.privat == false){
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres(){
  let arr = [];
  let i = 0;
  
  while(i<3){
    const genres = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    arr[i] = genres;
    i++
  }
  console.log(arr);
}

writeYourGenres();

console.log(personalMovieDB);


// const a = prompt("Один из последних просмотренныъ фильмов?", " "),
//       b = prompt("На сколько оцените его?", " "),
//       c = prompt("Один из последних просмотренныъ фильмов?", " "),
//       d = prompt("На сколько оцените его?", " ");


// for (let i=0; i<2; i++){
//     const a = prompt("Один из последних просмотренныъ фильмов?", "");
//           b = prompt("На сколько оцените его?", "");
         
//           if (a != null && b != null && a != '' && b != '' && a.length<50){
//               personalMovieDB.movies[a] = b;
//               console.log('done');
//           } else{
//            console.log('error');
//            i--;
//           }
// }









