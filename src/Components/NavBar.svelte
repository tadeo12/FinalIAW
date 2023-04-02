

<script>
    import { Link } from "svelte-routing";
</script>


<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Films Reviews</a>
      <ul class="right hide-on-med-and-down">
        <li><Link to="/" class=" btn-large waves-effect waves-light red lighten-4 ">
          <i class="material-icons" style="color: #f44336;">home</i>
        </Link></li>
      </ul>
    </div>
</nav>

<style>
  .link {
    color: white;
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
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
    text-decoration: none !important;
  }
</style>