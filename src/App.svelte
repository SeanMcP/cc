<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<style>
  #app {
    padding: 1em;
    max-width: 40em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    #app {
      max-width: none;
    }
  }
</style>

<div id="app">
  <header>
    <p>CC</p>
    <small>Catechism for Young Children</small>
  </header>
  <main>
    <Router {routes} />
  </main>
  <footer>
    <p>
      Made by
      <a href="https://seanmcp.com">SeanMcP</a>
    </p>
  </footer>
</div>
