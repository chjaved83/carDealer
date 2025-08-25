<template>
  <div class="col-12 q-mt-lg q-my-xl">
    <div class="flex justify-between">
      <div class="text-weight-bold text-h4 q-mb-md">
        Features Car
      </div>
      <div class="lt-md">
        <q-select
          v-model="sortBy"
          :options="sortOptions"
          dropdown-icon="keyboard_arrow_down"
          behavior="menu"
          dense
          outlined
        />
      </div>
    </div>

    <div class="row items-center justify-between q-mb-sm border-1-c6c6c6">
      <!-- Car Type Tabs -->
      <div class="col-auto overflow-x">
        <div class="q-btn-group no-wrap">
          <q-btn
            v-for="(tab, idx) in tabs"
            :key="idx"
            :label="tab"
            flat
            class="text-h6"
            :color="selectedTab === tab ? 'primary' : 'grey-8'"
            :style="selectedTab === tab ? 'border-bottom: 1px solid #505050' : ''"
            @click="selectedTab = tab"
            no-caps
          />
        </div>
      </div>

      <!-- Sort Dropdown -->
      <div class="col-auto gt-sm">
        <q-select
          v-model="sortBy"
          :options="sortOptions"
          dropdown-icon="keyboard_arrow_down"
          behavior="menu"
          dense
          outlined
          class="min-width-160"
        />
      </div>

    </div>

    <div class="row">
      <div
        class="q-px-sm col-12 col-sm-6 col-md-4 col-lg-3 q-mt-md"
        v-for="(car, index) in filteredCars"
        :key="index"
      >
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
      </div>
      <div class="col-12 text-center q-mt-lg q-pt-sm">
        <q-btn
          flat
          no-caps
          label="View All Cars"
          class="view-all-cars"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import PrimaryButton from "components/PrimaryButton.vue";
import {computed, reactive, ref} from "vue";

const tabs = ["All Cars", "Crossover", "Hatchback", "Minivan", "Sedan", "SUV"];
const selectedTab = ref("All Cars");

const sortOptions = [
  {label: "Default", value: "Sort By (Default)"},
  {label: "Price: Low to High", value: "priceAsc"},
  {label: "Price: High to Low", value: "priceDesc"},
  {label: "Newest", value: "newest"},
];

const sortBy = ref("Sort By (Default)");

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
]);

const filteredCars = computed(() => {
  let list = [...cars];

  // filter by tab
  if (selectedTab.value !== "All Cars") {
    list = list.filter(c => c.type === selectedTab.value);
  }

  // sort
  if (sortBy.value === "priceAsc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "priceDesc") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === "newest") {
    list.sort((a, b) => b.year - a.year);
  }

  return list;
});
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

:deep(.q-field--outlined .q-field__control) {
  border-radius: 10px;
  padding: 0 16px;
}

.view-all-cars {
  color: #3D3D3D;
  background-color: #D7D7D7;
  padding: 11px 28px;
  border-radius: 8px;
  font-size: 16px;
}

.border-1-c6c6c6 {
  border-bottom: 1px solid #C6C6C6
}

.overflow-x {
  overflow-x: auto;
}

.q-btn-group {
  display: flex;
  flex-wrap: nowrap;
  min-width: max-content;
}

.min-width-160 {
  min-width: 160px
}
</style>
