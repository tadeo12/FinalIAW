<script>
    
    import Review from "./Review.svelte";7

   
    import { data } from "../DataBaseSimulator.js";
    
</script>

<main>
  <Review data={data[0]}/>
  <Review data={data[1]} style="primary"/>
  <Review data={data[2]} style="danger"/>
  <Review data={data[3]} style="secondary"/>
  <Review data={data[4]} style="success"/>
  <Review data={data[5]} style="warning"/>
  <Review data={data[6]} style="info"/>
  <Review data={data[7]} style="light"/>
  <Review data={data[8]} style="dark"/>
  <Review data={data[9]}/>
</main>

<style>
    main{
        display:flex;
        justify-content:left;
		    flex-wrap:wrap;
        padding-top: 1em;
        margin: auto;
    }
</style>