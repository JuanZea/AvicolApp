<template>
  <div class="h-full flex flex-col lg:flex-row">
    <profile-banner/>
    <manage-settlements/>
  </div>
</template>

<script>
import ProfileBanner from "../../components/ProfileBanner.vue";
import ManageSettlements from "../../components/ManageSettlements.vue";

export default {
  components: {ManageSettlements, ProfileBanner}
}
</script>