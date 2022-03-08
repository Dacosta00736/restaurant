<script context="module">
  export async function load({ fetch, page }) {
    // page.params.id: the 'id' of the params object is the name of the dynamic route that is given([id].svelte)
    // while the page object is one of the context property for handling url paramenters on a page
    const id = page.params.id;
    const res = await fetch(`/guides/${id}.json`);
    const guide = await res.json();
    
    if(res.ok) {
      return {
        props: { guide }
      }
    }

    return {
      status: 301,
      // error: new Error(`Could not fetch data for the guide`)
      // help redirect back to the guides page if no such page/guide exist
      redirect: '/guides'
    }
  }
</script>

<script>
  // using the return property value of the SSR data context 
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>