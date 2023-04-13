<script>
    import Review from "../Components/Review.svelte";
  
    import { getMovieReviews } from '../DataBaseAPI.js';
    import  {cache}  from "../DataBaseCache";  
    import { getMovieGPT } from '../ChatGPTAPI.js';
    import { getMovieGPTGeneralReview } from '../ChatGPTAPI.js';
    import { getReviewAnalysis } from '../SentimentAPI.js';

    import {deleteMovieReview} from "../DataBaseAPI"
  


    import CardHeader from "../Components/CardHeader.svelte"; 
    

    import NewReview from "../Components/NewReview.svelte";

    let reviews = []

    export let filmName;
    export let movieID;
    let cargando = true;

    cache.subscribe((value) => (reviews = value));

    cache.subscribe(val => reviews= val)

    updateReviewsFromDatabase();

    
   
    let chatGPTdescription = []

	getMovieGPT(filmName)
	.then((e) => {
			console.log("chat gpt", e)
			chatGPTdescription[0]=e.choices[0].message.content;
		})

    let chatGPTOpinion = []
    let chatGPTOpinionAnalysis = []

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

    function deleteReview(id) {
        deleteMovieReview(id)
        .finally(
            ()=>{
                reviews = reviews.filter(review => review.id !== id)
                updateReviewsFromDatabase();
            }
        )
        
    }

    function updateReviewsFromDatabase(){
        getMovieReviews(movieID)
            .then((e) => {
            console.log("A: "+e.records)
            cache.set(e.records)
            cargando= false;
         });
    }
        
</script>

<main>

    <div class="divider"></div>
    <div class="section">
        <div class="row">
            <div class="col s12 m6">
              <div class="card light-blue darken-1">
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
    <div class="divider"></div>
    <div class="section">
        <NewReview data={cache} movie_id={movieID} filmName={filmName} on:new-review={updateReviewsFromDatabase}/>
    </div>
    <div class="divider"></div>
    <div id="grilla" class="section">
        {#each reviews as review}
            
            <Review data={review.fields} on:deleteReview={(e)=>deleteReview(e.detail)} reviewID={review.id} style="primary" ></Review>
        {:else}
            {#if cargando}
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            {:else}
                
                    <div class="card red accent-1" style="margin: auto; max-width:500px;">
                        <div class="card-content white-text">
                            <span class="card-title">Sin opiniones</span>
                            <p>Todavia no has guardado ninguna opinion de esta pelicula</p>
                        </div>
                    </div>
                
            {/if}
        {/each}
    </div>


</main>


<style>
    #grilla{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1em;
        padding-top: 1em;
        margin: 0;
    
    }
</style>