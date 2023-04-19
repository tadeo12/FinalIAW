let apikey = '8bed7c0c23a63c9a618a28436981158c'; // /*/* Mover key a lugar seguro.

export const getMovies = (movie_name) => {


  return fetch(
    'https://api.themoviedb.org/3/search/movie?api_key='+apikey+'&query='+movie_name+'&page=1',
    {
        method: 'GET',
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })

}

export const discoverMovies = () => {


  return fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key='+apikey+'&release_date.lte=2021-01-01&page=1',
    {
        method: 'GET',
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })

}





