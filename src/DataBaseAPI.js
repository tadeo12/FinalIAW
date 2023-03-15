
let apikey = 'Bearer keyaAqew4N5sdMh8L'; // /*/* Mover key a lugar seguro.

export const getMoviesReviews = (movie_id) => {


  return fetch(
    'https://api.airtable.com/v0/appA5uN9mWLeGrWuz/Table%201?filterByFormula=%7Bmovie_id%7D+%3D+'+movie_id+'&maxRecords=10&view=Grid%20view',
    {
        method: 'GET',
        headers: {			
            'Authorization': apikey,
        },
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })

}

export const storeMovieReview = (movie_id,movie_name,review,score) => {
  console.log("movie id:",movie_id)

  return fetch(
    'https://api.airtable.com/v0/appA5uN9mWLeGrWuz/Table%201',
    {
        method: 'POST',
        headers: {				//Mover id a lugar seguro
            'Authorization': apikey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

          {
            "records": [
              {
                "fields": {
                  "movie_name": movie_name,
                  "review": review,
                  "score": score,
                  "movie_id": parseInt(movie_id)
                }
              }
            ]
          }
         
        )
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })

}
