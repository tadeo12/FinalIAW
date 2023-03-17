let apikey = 'Bearer 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'; // /*/* Mover key a lugar seguro.

let url= 'https://api.openai.com/v1/images/generations';

const getByDalle = (query) => {
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
                    "prompt": query,
                    "n": 1,
                    "size": "512x512"
                }
               
              )
        }
    )
        .then((res) => res.json()).then((responseData) => {
          console.log(responseData);
          return responseData;
        })
}

export const getImage = (description) => {
    return getByDalle(description);
}
