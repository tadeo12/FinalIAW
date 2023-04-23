<script>    
    import { getMovieGPT } from '../ChatGPTAPI.js';
    import { getMovieGPTGeneralReview } from '../ChatGPTAPI.js';
    import { translateText } from '../ChatGPTAPI.js';
    import { getReviewAnalysis } from '../SentimentAPI.js';
    
    import CardHeader from "../Components/CardHeader.svelte"; 

    export let filmName;

    export let data;

    let releaseYear =data.release_date.split("-")[0];

    let chatGPTdescription = []

    function getMovieDescription(){

        if(releaseYear < 2021){

            getMovieGPT(filmName)
            .then((e) => {
                    console.log("chat gpt", e)
                    chatGPTdescription[0]=e.choices[0].message.content;
                })
        }else{
            translateText(data.overview)
            .then((e) => {
                    console.log("chat gpt", e)
                    chatGPTdescription[0]=e.choices[0].message.content;
                })
        }

    }

    let chatGPTOpinion = []
    let chatGPTOpinionAnalysis = []

    function getMovieOpinion(){

        if(releaseYear < 2021){

            getMovieGPTGeneralReview(filmName)
            .then((e) => {
                    console.log("chat gpt", e)
                    chatGPTOpinion[0]=e.choices[0].message.content;

                    getReviewAnalysis(chatGPTOpinion[0], "es")
                    //TODO bug si el servidor de chatgpt no retorna respuesta se rompe
                    .then(response => response.body)
                    .then(data => data.score_tag)
                    .then(scoreTag => {
                        chatGPTOpinionAnalysis[0]=scoreTag
                    })
            });
        }else{
            chatGPTOpinion[0]="El público votó a esta película con un "+data.vote_average;
            chatGPTOpinionAnalysis[0]=mapRatingToFiveScale(data.vote_average)
        }
    }

    getMovieDescription();
    getMovieOpinion();

    function mapRatingToFiveScale(rating) {
        const percentage = rating / 10;
        const mappedRating = Math.ceil(percentage * 5);
        
        return mappedRating;
    }
</script>




<div class="margin-botton">
    <div class="row">
        <div class="col s12 m6">
          <div class="card light-blue darken-4 opacity-75">
            <div class="card-content white-text">
              <span class="card-title">{filmName}</span>
                <div class="divider"></div>
                <div class="section">

                    <!-- svelte-ignore a11y-missing-attribute -->
                    

                    {#each chatGPTdescription as chatAnswer}
                        {chatAnswer}
                    {:else}
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    {/each}
                </div>
                <div class="divider"></div>
                <div class="section">
                    {#each chatGPTOpinionAnalysis as chatValorations}
                        <CardHeader estrellas={chatValorations}/>
                        <p>{chatGPTOpinion[0]}</p>
                    {:else}
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    {/each}
                </div>
                
            </div>
          </div>
        </div>
      </div>
</div>

<style>
    
</style>


        
