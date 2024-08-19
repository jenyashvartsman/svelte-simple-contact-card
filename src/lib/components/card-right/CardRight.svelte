<script lang="ts">
  import type { ContactDto } from "../../dto/contact.dto";

  export let contact: ContactDto;

  let fullAddress: string;
  let age: number;

  $: {
    const { street, city, country } = contact.address;
    fullAddress = `${street}, ${city}, ${country}`;
  }

  $: {
    const today = new Date();
    const birth = new Date(contact.birthday);
    age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
  }
</script>

<div class="card__right">
  <h5 class="card__title">Profile Details</h5>

  <!-- name -->
  <div class="card_detail">
    <span class="card__detail-label">Name:</span>
    <span class="card__detail-value">{contact.fullName}</span>
  </div>

  <!-- age -->
  <div class="card_detail">
    <span class="card__detail-label">Age:</span>
    <span class="card__detail-value">{age}</span>
  </div>

  <!-- mobile -->
  <div class="card_detail">
    <span class="card__detail-label">Mobile:</span>
    <span class="card__detail-value">{contact.phoneNumber.mobile}</span>
  </div>

  <!-- email -->
  <div class="card_detail">
    <span class="card__detail-label">Email:</span>
    <span class="card__detail-value">{contact.emailAddress}</span>
  </div>

  <!-- address -->
  <div class="card_detail">
    <span class="card__detail-label">Address:</span>
    <span class="card__detail-value">{fullAddress}</span>
  </div>
</div>

<style src="./CardRight.css"></style>
