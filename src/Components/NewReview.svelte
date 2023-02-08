
<script>
    let filmName= "Harry Potter: Las reliquias de la muerte parte 1";
    let opinion;

    import { data } from "../DataBaseSimulator";
 
    
    function addReview() {
	    data.update( prev=> [...prev, {
                "id": prev.length,
                "title": "ejemplo "+(Number(prev.length)+1),
                "opinion": opinion,
                "score":1 //TODO llamado a api
        }])
    }
</script>
<main>
        <div id="text"><h2>Nueva opinión</h2>Ingrese una opinión/review de {filmName} </div>
        <textarea id="opinion" class="border-primary" maxlength="600" bind:value={opinion}/>
        <div id="rigthColumn">
            
            <select name="Idioma" id="lang">
                <option value="English">English</option>
                <option value="Español">Español</option>
                <option value="Português">Português</option>
                <option value="Français">Français</option>
                <option value="Italiano">Italiano</option>
            </select>
            <button id="sendButton" on:click={addReview} alt="enviar">
                    <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                            <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                            <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                        </g>
                    </svg>
            </button>
        </div>
</main>
<style lang="scss">
    
  main {
        display:flex;
		align-self:center;

        border: 1px solid brown;
        padding: 20px;
        background-color: antiquewhite;
    }

   h2{
    font-size: 1em;
   }

    #text {
        flex-basis: 4rem;
        border-radius:25px ;
	    margin-right:10px; 
	    width:200px;
	    height:150px;
        font-size: 1,5em;
		font-weight: 300;
    }

    #opinion{
        flex-basis: 10rem;
        flex-grow: 1;
        border-radius:10px;
	    padding: 20px;
        margin-right: 20px;
        width: auto;
    }

    #rigthColumn{
        display: grid;
        grid-template-columns: 1;
    }


$ease: cubic-bezier(.2,1,.3,1);  
  
#sendButton{
    background-color: transparent;
    border: none;

    svg {
      width: 100px;
      height: auto;
      margin: 0 2rem;
      cursor: pointer;
      overflow: visible;
      polygon, path {
        transition: all 0.5s $ease;
      }
      &:hover polygon, &:hover path {
        transition: all 0.5s $ease;
        fill: #FF4136;
      }
        
      &:hover .arrow {
        animation: arrow-anim 1.5s $ease infinite;
      }
      &:hover .arrow-fixed {
        animation: arrow-fixed-anim 3s $ease infinite;
      }
    }
  }
  
  @keyframes arrow-anim {
      0% {
          opacity: 1;
          transform: translateX(0);
      }
      5% {
          transform: translateX(-0.1rem);
      }
      100% {
          transform: translateX(1rem);
          opacity: 0;
      }
  }
  
  @keyframes arrow-fixed-anim {
      5% {
          opacity: 0;
      }
      20% {
          opacity: 0.4;
      }
      100% {
          opacity: 1;
      }
  }
</style>