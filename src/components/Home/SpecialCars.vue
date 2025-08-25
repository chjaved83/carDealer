<template>
  <Carousel v-bind="config">
    <Slide v-for="(car, index) in cars" :key="index" class="q-px-sm">
      <q-card
        flat
        bordered
        class="column justify-between car-card"
      >
        <!-- Image -->
        <q-img
          :src="car.image"
          class=""
          alt="no image"
          img-class="q-px-sm q-pt-sm"
        >
          <div class="bg-transparent full-width flex justify-between items-center">
            <div>
              <q-badge
                color="primary"
                class="radius-12 height-34 q-px-sm text-subtitle2 q-mr-sm">
                Featured
              </q-badge>
              <q-badge color="primary" class="text-h6 radius-12 height-35">
                <q-icon name="filter" size="14px" class="q-mr-xs text-white"/>
                <div class="text-white text-subtitle">7</div>
              </q-badge>
            </div>
            <div>
              <q-badge color="primary" class="q-pa-xs radius-12 text-subtitle2 height-34">
                {{ car.year }}
              </q-badge>
            </div>
          </div>
        </q-img>

        <!-- Body -->
        <div class="q-mt-sm q-px-md">
          <div class="text-primary text-subtitle">{{ car.type }}</div>
          <div class="text-weight-600 text-h6 q-mt-xs">
            {{ car.name }}
          </div>

          <!-- Specs -->
          <div class="row q-col-gutter-sm q-mt-sm text-grey-7">
            <div class="col-6 flex items-center">
              <q-icon name="event" size="16px" class="q-mr-xs"/>
              {{ car.year }}
            </div>
            <div class="col-6 flex items-center">
              <q-icon name="speed" size="16px" class="q-mr-xs"/>
              {{ car.mileage }}
            </div>
            <div class="col-6 flex items-center">
              <q-icon name="settings" size="16px" class="q-mr-xs"/>
              {{ car.transmission }}
            </div>
            <div class="col-6 flex items-center">
              <q-icon name="local_gas_station" size="16px" class="q-mr-xs"/>
              {{ car.fuel }}
            </div>
            <div class="col-6 flex items-center">
              <q-icon name="settings" size="16px" class="q-mr-xs"/>
              {{ car.seats }} Seats
            </div>
            <div class="col-6 flex items-center">
              <q-icon name="local_gas_station" size="16px" class="q-mr-xs"/>
              {{ car.power }}
            </div>
          </div>
          <q-separator class="q-mt-md"/>
        </div>

        <!-- Price & CTA -->
        <div class="row justify-between items-center q-mt-md q-px-md q-pb-md">
          <div class="text-primary text-h6 text-weight-bold">
            AED {{ car.price }}
          </div>
          <PrimaryButton label="View Detail" @click=""/>
        </div>
      </q-card>
    </Slide>

    <!-- Navigation -->
    <template #addons>
      <Navigation>
        <template #prev>
          <q-btn
            dense
            round
            flat
            icon="arrow_back"
            class="bg-white text-grey-8 shadow-2"
          />
        </template>
        <template #next>
          <q-btn
            dense
            round
            flat
            icon="arrow_forward"
            class="bg-white text-grey-8 shadow-2"
          />
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>
<script setup>
import PrimaryButton from "components/PrimaryButton.vue";
import "vue3-carousel/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {reactive} from "vue";

const config = {
  itemsToShow: 1,
  gap: 10,
  snapAlign: "center",
  breakpointMode: "carousel",

  breakpoints: {
    260: {
      itemsToShow: 1,
      snapAlign: "start",
    },
    768: {
      itemsToShow: 2,
      snapAlign: "start",
    },
    1000: {
      itemsToShow: 3,
      snapAlign: "start",
    },
    1400: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  },
};

const cars = reactive([
  {
    image: "/images/cars/car.jpg",
    type: "Crossover",
    name: "Dongfeng Aeolus Yixuan Mach",
    year: 2016,
    mileage: "40,750",
    transmission: "Manual",
    seats: "2",
    power: "Power",
    fuel: "Petrol",
    price: "137,999",
  },
  {
    image: "/images/cars/car.jpg",
    type: "Hatchback",
    name: "Dongfeng Aeolus Yixuan Mach",
    year: 2016,
    mileage: "40,750",
    transmission: "Manual",
    seats: "2",
    power: "Power",
    fuel: "Petrol",
    price: "137,999",
  },
  {
    image: "/images/cars/car.jpg",
    type: "Sedan",
    name: "Dongfeng Aeolus Yixuan Mach",
    year: 2016,
    mileage: "40,750",
    transmission: "Manual",
    seats: "2",
    power: "Power",
    fuel: "Petrol",
    price: "137,999",
  },
  {
    image: "/images/cars/car.jpg",
    type: "Crossover",
    name: "Dongfeng Aeolus Yixuan Mach",
    year: 2016,
    mileage: "40,750",
    transmission: "Manual",
    seats: "2",
    power: "Power",
    fuel: "Petrol",
    price: "137,999",
  },
])
</script>
<style scoped>
.car-card {
  border-radius: 20px;
  transition: transform 0.2s;
}

.height-34 {
  height: 34px;
}

.height-35 {
  height: 35px;
}
</style>
