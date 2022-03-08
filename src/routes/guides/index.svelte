<!-- script for SSR(Server Side Redering) of data before page fully load -->
<script context="module">
  // 'fetch' is de-constructed from the 'context' parameter of this SvelteKit predefine function 'load()'
  // so we can run the 'fetch' api on both the server & client without throwing errors
  export async function load({ fetch }) {
    const res = await fetch('/guides.json');
    const { guides } = await res.json();

    if (res.ok) {
      return {
        // this 'props' property is predefined by SvelteKit for returning SSD(Server Side Data) to 
        // scripts that is to use its result/data
        props: { guides }
      }
    }

    // for handling errors(the return properties are predefined by SvelteKit)
    return {
      status: res.status,
      error: new Error('Could not fetch the "blog news"')
    }
  }
</script>

<script>
  export let guides;
</script>

<div class="guides">
  <ul>
    {#each guides as guide}
      <li>
        <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>