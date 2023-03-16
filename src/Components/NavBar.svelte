

<script>
    import { Link } from "svelte-routing";
</script>


<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Films Reviews</a>
      <ul class="right hide-on-med-and-down">
        <li><Link to="/" class="link">
          <i class="large material-icons right">home</i>
        </Link></li>
        <li><Link to="ejemplo" class="link">Ejemplo </Link></li>
        
      </ul>
    </div>
</nav>

<style>
  a.link {
    
    color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
  }
  #Link{
    color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
  }
  a {
    color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
    text-decoration: none !important;
  }
</style>