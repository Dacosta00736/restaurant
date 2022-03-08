<!-- NOTE: -->
<!-- This is a custom error message to show, no such page can be found. -->
<!-- which helps overwrites the customer error page(sveltekit/component/error.svelte) by sveltekit -->

<script context="module">
  export function load({ error }) {
    return {
      props: { message: error.message }
    }
  }
</script>

<script>
  export let message;
</script>

<div class="error">
  <h2>Ooops!</h2>
  <p>{message}</p>
  <a href="/guides">Back to guides...</a>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>