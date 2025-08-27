<template>
  <div class="container row">
    <div class="col-12 text-center q-pt-xl q-mt-lg">
      <div class="text-weight-600 text-h4 q-mb-lg q-pb-md">
        Our Brand Partner
      </div>
    </div>
    <div class="col-12">
      <div class="container row">
        <div class="col-12"
             :class="$q.screen.lt.md ? 'q-mb-lg' :'q-mb-xl'"
        >
          <Carousel v-bind="config">
            <Slide v-for="(brand, index) in brands" :key="index" class="q-px-sm">
              <q-card class="brand-card text-center radius-12" flat bordered>
                <q-img :src="brand.image" class="q-mt-sm" style="width: 120px; height: 120px;"/>
                <div class="q-mt-sm text-center text-grey-7 text-subtitle1">{{ brand.name }}</div>
              </q-card>
            </Slide>
            <template #addons>
              <Navigation>
                <template #prev>
                  <q-btn
                    dense
                    round
                    flat
                    icon="arrow_back"
                    class="bg-primary text-white shadow-2"
                  />
                </template>
                <template #next>
                  <q-btn
                    dense
                    round
                    flat
                    icon="arrow_forward"
                    class="bg-primary text-white shadow-2"
                  />
                </template>
              </Navigation>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
    <div
      v-if="brandingImg"
      class="col-12 q-mb-xl q-mt-lg"
      :class="$q.screen.lt.md ? 'q-pb-lg' : 'q-pb-md'"
    >
      <q-img src="/images/brandImage.png"/>
    </div>
  </div>
</template>
<script setup>
defineProps({
  brandingImg: {
    default: true,
    type: Boolean
  }
})
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";
import "vue3-carousel/carousel.css";
import {ref} from "vue";

const brands = ref([
  {name: "BMW", image: "/images/brands/BMW.svg"},
  {name: "Tesla", image: "/images/brands/Tesla.svg"},
  {name: "Mercedes-Benz", image: "/images/brands/Mercedes.svg"},
  {name: "Ferrari", image: "/images/brands/ferrari.svg"},
  {name: "Rolls-Royce", image: "/images/brands/rollsRoyce.svg"},
  {name: "Nissan", image: "/images/brands/Nissan.svg"},
  {name: "BMW", image: "/images/brands/BMW.svg"},
  {name: "Tesla", image: "/images/brands/Tesla.svg"},
  {name: "Mercedes-Benz", image: "/images/brands/Mercedes.svg"},
  {name: "Ferrari", image: "/images/brands/ferrari.svg"},
  {name: "Rolls-Royce", image: "/images/brands/rollsRoyce.svg"},
  {name: "Nissan", image: "/images/brands/Nissan.svg"},
]);

const config = {
  itemsToShow: 1,
  gap: 10,
  snapAlign: "center",
  breakpointMode: "carousel",

  breakpoints: {
    320: {itemsToShow: 2, snapAlign: "start"},
    600: {itemsToShow: 3, snapAlign: "start"},
    768: {itemsToShow: 4, snapAlign: "start"},
    1000: {itemsToShow: 6, snapAlign: "start"},
    1400: {itemsToShow: 6, snapAlign: "start"},
  },
};
</script>

<style scoped>
.carousel__pagination {
  bottom: -40px;
  color: white;
}

.brand-card {
  border-radius: 12px;
  width: 100%;
  max-width: 210px;
  height: 185px;
  transition: transform 0.2s;
  margin: auto;
}

</style>
