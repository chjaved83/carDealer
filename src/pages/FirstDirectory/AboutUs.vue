<template>
  <q-page>
    <WelcomeSection :guarantee-section="true"/>
    <Legacy/>
    <div>
      <Benefits/>
    </div>
    <div>
      <PeopleTrust/>
    </div>
    <div>
      <HealthCareSection/>
    </div>
    <div>
      <BrandPartner/>
    </div>
  </q-page>
</template>
<script setup>
import WelcomeSection from "components/Home/WelcomeSection.vue";
import Legacy from "components/Legacy.vue";
import PeopleTrust from "components/Home/PeopleTrust.vue";
import HealthCareSection from "components/Home/HealthCareSection.vue";
import Benefits from "components/Benefits.vue";
import BrandPartner from "components/BrandPartner.vue";
</script>
<style scoped>
</style>
