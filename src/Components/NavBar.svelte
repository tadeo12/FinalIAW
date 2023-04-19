

<script>
    import { Link } from "svelte-routing";
    import { text } from "svelte/internal";
</script>


  <nav class="navbar opacity-95 grey darken-3">
    <h1 class="brand-logo navbar-left">Films Reviews</h1>
    <ul class="right hide-on-med-and-down navbar-right">
      <li><Link to="/home" class=" btn-large waves-effect waves-light grey darken-1 ">
        <i class="material-icons grey darken-1">home</i>
      </Link></li>
    </ul>
  </nav>


<style>
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    color: #fff;
    padding: 0rem;
    margin-top: 0rem;
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