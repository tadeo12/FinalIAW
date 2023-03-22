let apikey = 'Bearer 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'; // /*/* Mover key a lugar seguro.

let url= 'https://api.openai.com/v1/chat/completions';

const getBychatGPT = (query) => {
    return fetch(
        url,
        {
            method: 'POST',
            headers: {	
                'Content-Type': 'application/json',		
                'Authorization': apikey,
            },
            body: JSON.stringify(
    
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [{"role": "user", "content": query}]
                  }
               
              )
        }
    )
        .then((res) => res.json()).then((responseData) => {
          console.log(responseData);
          return responseData;
        })
}

export const getMovieGPT = (filmName) => {
    return getBychatGPT(filmName+" pelicula");
}

export const getMovieGPTGeneralReview = (filmName) => {
    return getBychatGPT(filmName+"  critica del publico general en una oración");
}

export const getMoviekeywordsGPT = (filmName) => {
    return getBychatGPT("tell me a short phrase to generate a image of "+filmName+" movie with an IA image Generator");
}