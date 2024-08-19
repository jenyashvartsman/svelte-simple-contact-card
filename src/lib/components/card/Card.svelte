<script lang="ts">
  import type { ContactDto } from "../../dto/contact.dto";
  import CardLeft from "../card-left/CardLeft.svelte";
  import CardRight from "../card-right/CardRight.svelte";
  import "./card.css";

  export let contact: ContactDto;
</script>

<div>
  <CardLeft {contact} />
  <CardRight {contact} />
</div>

<style src="./Card.css"></style>
