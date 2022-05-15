<script>
    import "../app.css";
    import Nav from "../componentes/header/Nav.svelte";
    import Loader from "../componentes/loader/loader.svelte";

    let isPageLoaded = false;

    const pageLoaded = () => {
      setTimeout(() => {
        isPageLoaded = true;
      }, 2000);
    }
  </script>
  
{#if !isPageLoaded}
  <div use:pageLoaded>
    <Loader />
  </div>
{:else}  
  <Nav />
  <slot></slot>
{/if}