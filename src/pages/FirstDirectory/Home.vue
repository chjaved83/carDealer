<template>
  <q-page>
    <div class="row" :class="$q.screen.lt.md ? 'q-px-md' : ''">
      <div class="col-12 text-center q-py-lg q-mt-md">
        <div class="text-primary text-weight-bold text-h4">
          DISCOVER THE <span class="text-red">BEST PRICES</span> IN THE TOWN
        </div>
        <div class="text-h5 text-weight-600 text-grey-7">
          "YOUR <span class="text-red">#1 TRUSTED</span> PREMIUM CAR PARTNER"
        </div>
      </div>
    </div>
    <div class="container row q-pb-xl" :class="$q.screen.lt.md ? 'q-px-md' : ''">
      <div class="col-12 flex justify-between items-center">
        <div class="text-h4 text-weight-bold">Special Car</div>
        <div class="">
          <PrimaryButton
            label="View All Cars"
            padding="12px 24px"
            @click=""
          />
        </div>
      </div>
      <div class="col-12">
        <q-separator color="grey-4" class="q-mt-md"/>
      </div>
      <div class="col-12 q-mt-lg q-mb-xl">
        <SpecialCars/>
      </div>
    </div>
    <div class="bg-primary row q-mt-lg q-py-xl">
      <Brands/>
    </div>

    <div class="container row q-pb-xl q-px-none">
      <SpecialCarOffers/>
    </div>
    <div class="bg-white q-py-xl">
      <WelcomeSection/>
    </div>
    <div>
      <HealthCareSection/>
    </div>
    <div>
      <PeopleTrust/>
    </div>
  </q-page>
</template>
<script setup>
import "vue3-carousel/carousel.css";
import Brands from "components/Home/Brands.vue";
import PrimaryButton from "components/PrimaryButton.vue";
import SpecialCars from "components/Home/SpecialCars.vue";
import SpecialCarOffers from "components/Home/SpecialCarOffers.vue";
import WelcomeSection from "components/Home/WelcomeSection.vue";
import HealthCareSection from "components/Home/HealthCareSection.vue";
import PeopleTrust from "components/Home/PeopleTrust.vue";

</script>
<style scoped>
</style>
