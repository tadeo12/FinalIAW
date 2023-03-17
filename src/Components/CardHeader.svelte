<script>
    export let estrellas=3;
</script>

<main>
    {#if estrellas==0}
	<p>☆☆☆☆☆</p>
    {:else if estrellas==1 || estrellas =='N+'}
	<p>★☆☆☆☆</p>
    {:else if estrellas==2 || estrellas =='N'}
    <p>★★☆☆☆</p>
    {:else if estrellas==3 || estrellas =='NEU'}
    <p>★★★☆☆</p>
    {:else if estrellas==4 || estrellas =='P'}
    <p>★★★★☆</p>
    {:else}
    <p>★★★★★</p>
{/if}
</main>
<style>
    main{
        font-size: 35px;
        margin: 0%;
        padding: 0%;
    }
</style>
