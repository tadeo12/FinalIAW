
export const getMoviesReviews = () => {
  
  return fetch(
    'https://api.airtable.com/v0/appA5uN9mWLeGrWuz/Table%201?maxRecords=3&view=Grid%20view',
    {
        method: 'GET',
        headers: {				//Mover id a lugar seguro
            'Authorization': 'Bearer keyaAqew4N5sdMh8L',
        },
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })


}
  