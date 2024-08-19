<script lang="ts">
  import type { ContactDto } from "../../dto/contact.dto";

  export let contact: ContactDto;
</script>

<div class="card__left">
  <img class="card__img" src={contact.image} alt="contact img" />
  <h5 class="card__name">{contact.fullName}</h5>
  <p class="card__job">{contact.job.title}</p>
</div>

<style src="./CardLeft.css"></style>
