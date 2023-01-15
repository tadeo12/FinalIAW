
<script>
    let filmName= "Harry Potter: Las reliquias de la muerte parte 1";
    let opinion;
</script>
<main>
    <h2>Ingrese una opinión/review de {filmName} </h2>
    <div class=input>
        <input bind:value={opinion} class="border border-primary" type="text" size="30" maxlength="500">
        <button name="send"> Enviar </button>
    </div>
</main>
<style>
    main {
        display: flex;
    }

    .input {
        display: grid;
        grid-template-columns: 800px 100px;
    }
</style>