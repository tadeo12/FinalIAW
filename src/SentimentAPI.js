

const apiKey = "11b6123f8e6480c86ebbc98be7d45d05"

  // 2-letter code, like en es fr ...
export const getReviewAnalysis = (text, lang) =>{

    let formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang",  lang ? lang : "es" );

    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
 
    return fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .catch(error => console.log('error', error));
}

