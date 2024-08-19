<script lang="ts">
  import { getContact } from "./lib/api/api";
  import Card from "./lib/components/card/Card.svelte";

  const contactPromise = getContact();
</script>

<main>
  {#await contactPromise}
    <p>Loading ...</p>
  {:then contact}
    <Card {contact} />
  {:catch err}
    <p>Error</p>
  {/await}

  <button>GET</button>
</main>

<style>
</style>
