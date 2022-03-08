<script>
  import Title from "$lib/Title.svelte";
  import '../styles/global.css';
</script>

<header>
  <Title title="Sannikayz Kitchen Blog" />
</header>

<main>
  <!-- page main content by routes -->
  <slot></slot>
</main>

<footer>
  <p>Copyright &copy;2022 Sannikayz Kitchen<sup>&trade;</sup></p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  main {
    max-width: 960px;
    margin: 20px auto;
  }

  footer {
    text-align: center;
  }
</style>