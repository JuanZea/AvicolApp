<template>
  <div class="h-full flex flex-col lg:flex-row">
    <profile-banner/>
    <div class="sm:p-6">
      <manage-settlements/>
    </div>
  </div>
</template>

<script>
import ProfileBanner from "../../components/ProfileBanner.vue";
import ManageSettlements from "../../components/ManageSettlements.vue";

export default {
  components: { ManageSettlements, ProfileBanner }
}
</script>