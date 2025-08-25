<template>
  <q-page>
    <div class="banner-section">
      <div class="container q-pa-lg text-white">
        <div
          class="text-weight-bold q-mt-xl"
          :class="$q.screen.gt.sm ? 'text-h1 q-pt-xl' : 'text-h2'"
        >
          <div class="q-pt-lg" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
            Find my Car
          </div>
        </div>
        <div
          class="text-h5 text-weight-600 q-pt-md"
          :class="$q.screen.gt.sm ? 'q-mt-lg' : ''"
        >
          Use our search below to find our latest models
        </div>
        <BannerSearch/>
      </div>
    </div>
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
      <div class="col-12 text-center text-white">
        <div class="text-weight-bold text-h4">
          Browse by Brand
        </div>
        <div class="text-subtitle1">
          Brand Description
        </div>
      </div>
      <div class="col-12 q-pt-lg">
        <div class="container row">
          <div class="col-12 q-mb-xl">
            <Brands/>
          </div>
        </div>
      </div>
    </div>

    <div class="container row q-pb-xl q-px-none">
      <SpecialCarOffers/>
    </div>
    <div class="bg-white q-py-xl">
      <WelcomeSection/>
    </div>

  </q-page>
</template>
<script setup>
import BannerSearch from "components/BannerSearch.vue";
import Brands from "components/Home/Brands.vue";
import PrimaryButton from "components/PrimaryButton.vue";
import SpecialCars from "components/Home/SpecialCars.vue";
import SpecialCarOffers from "components/Home/SpecialCarOffers.vue";
import "vue3-carousel/carousel.css";
import WelcomeSection from "components/Home/WelcomeSection.vue";

</script>
<style scoped>
.banner-section {
  background-image: url('/images/bannerImages.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -32px;
}
</style>
