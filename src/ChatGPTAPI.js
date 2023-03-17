let apikey = 'Bearer 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'; // /*/* Mover key a lugar seguro.

export const getMovieGPT = (filmName) => {


  return fetch(
    'https://api.openai.com/v1/chat/completions',
    {
        method: 'POST',
        headers: {	
            'Content-Type': 'application/json',		
            'Authorization': apikey,
        },
        body: JSON.stringify(

            {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": filmName+" pelicula"}]
              }
           
          )
    }
)
    .then((res) => res.json()).then((responseData) => {
      console.log(responseData);
      return responseData;
    })

}