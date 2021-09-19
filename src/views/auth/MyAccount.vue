<template>
  <div class="flex flex-col">
    <div class="h-full flex flex-col lg:flex-row">
      <profile-banner/>
      <div class="sm:p-6">
        <manage-settlements/>
        <show-settlement/>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBanner from "../../components/ProfileBanner.vue";
import ManageSettlements from "../../components/ManageSettlements.vue";
import ShowSettlement from "./settlements/ShowSettlement.vue";

export default {
  components: {ManageSettlements, ProfileBanner, ShowSettlement}
}
</script>