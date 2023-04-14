

<script>
    import { Link } from "svelte-routing";
</script>


  <nav class="navbar opacity-95 grey darken-3">
    <a href="#!" class="brand-logo navbar-left">Films Reviews</a>
    <ul class="right hide-on-med-and-down navbar-right">
      <li><Link to="/" class=" btn-large waves-effect waves-light grey darken-1 ">
        <i class="material-icons grey darken-1">home</i>
      </Link></li>
    </ul>
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


  .navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #fff;
  padding: 0rem;
  margin-top: -1rem;
  width: 100%;
  justify-items: flex-start;
}

.navbar-left {
  margin: 0;
}

.navbar-left h1 {
  margin: 0;
}

.navbar-right {
  margin: 0;
  margin-left: auto;
}

.navbar-right button {
  background-color: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.navbar-right button:hover {
  background-color: #f1f1f1;
}

main {
  margin: 2rem;
}
</style>