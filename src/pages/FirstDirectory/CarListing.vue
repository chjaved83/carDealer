<template>
  <q-page>
    <div
      class="container row q-py-lg"
      :class="$q.screen.gt.sm ? 'q-col-gutter-lg' : ''"
    >
      <div
        class="col-12 col-md-3 q-mt-xl"
        :class="$q.screen.gt.sm ? 'q-pt-lg' : ''"
      >
        <div class="text-h5 text-weight-bold">
          28,113 Cars found in UAE
        </div>
        <div class="flex justify-between q-py-lg">
          <div class="text-grey-6 text-h6 text-weight-600">
            <q-icon size="24px" name="img:/icons/filter.svg"/>
            Filters
          </div>
          <q-btn
            no-caps
            flat
            dense
            label="Clear All"
            size="16px"
            class="text-grey-6 text-weight-medium"
          />
        </div>
        <q-card flat class="q-pa-md bg-white radius-10">

          <q-list bordered class="rounded-borders">
            <q-expansion-item
              class="text-subtitle1 text-grey-7"
              label="Exclusive opportunities"
            >
              <q-separator/>
              <q-option-group
                v-model="filters.exclusive"
                type="checkbox"
                dense
                :options="exclusiveOptions"
                class="q-ml-sm q-my-sm text-grey-7"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-subtitle1 text-grey-7"
              label="Make"
            >
              <q-separator/>
              <q-option-group
                v-model="filters.make"
                type="checkbox"
                dense
                :options="makeOptions"
                class="q-ml-sm q-my-sm"
              />
            </q-expansion-item>

            <q-expansion-item
              label="Model"
              class="text-subtitle1 text-grey-7"
            >
              <q-option-group
                v-model="filters.model_series"
                type="checkbox"
                :options="modelSeriesOptions"
                class="q-ml-sm q-my-sm"
              />
            </q-expansion-item>


            <q-expansion-item
              label="Model Year"
              class="text-subtitle1 text-grey-7"
            >
              <q-separator class="q-mb-md"/>
              <q-range
                v-model="filters.year"
                :min="min"
                :max="max"
                label-always
                thumb-size="20px"
                class=" q-my-sm q-px-sm"
              />
              <div class="flex justify-between q-mb-md">
                <q-btn outline :label="min"/>
                <q-btn outline :label="max"/>
              </div>
            </q-expansion-item>

            <q-expansion-item
              label="Price (AED)"
              class="text-subtitle1 text-grey-7"
            >
              <q-separator class="q-mb-md"/>
              <q-range
                v-model="filters.price"
                :min="minPrice"
                :max="maxPrice"
                label-always
                thumb-size="20px"
                class=" q-my-sm q-px-sm"
              />
              <div class="flex justify-between q-mb-md">
                <q-btn outline :label="minPrice"/>
                <q-btn outline :label="maxPrice"/>
              </div>
            </q-expansion-item>


            <q-expansion-item
              label="Mileage"
              class="text-subtitle1 text-grey-7"
            >
              <q-separator class="q-mb-md"/>
              <q-range
                v-model="filters.mileage"
                :min="minMileage"
                :max="maxMileage"
                label-always
                thumb-size="20px"
                class=" q-my-sm q-px-sm"
              />
              <div class="flex justify-between q-mb-md">
                <q-btn outline :label="minMileage"/>
                <q-btn outline :label="maxMileage"/>
              </div>
            </q-expansion-item>

            <!-- Body Type -->
            <q-expansion-item
              class="text-subtitle1 text-grey-7"
              label="Body Type"
            >
              <q-separator class="q-mb-sm"/>
              <q-option-group
                v-model="filters.bodyType"
                type="checkbox"
                :options="bodyOptions"
                class="q-ml-sm q-my-sm"
              />
            </q-expansion-item>


            <q-expansion-item
              class="text-subtitle1 text-grey-7"
              label="Color"
            >
              <q-separator class="q-mb-md"/>
              <div class="row q-col-gutter-sm">
                <div
                  v-for="(color, i) in colors"
                  :key="i"
                  class="col-auto q-pl-md"
                >
                  <div
                    :style="`background:${color}; width:24px; height:24px; border-radius:25%; cursor:pointer; border:1px solid #ccc;`"
                  />
                </div>
              </div>
            </q-expansion-item>
          </q-list>
        </q-card>
      </div>


      <div class="col-12 col-md-9"
           :class="$q.screen.gt.sm ? 'q-mt-xl q-pt-lg' : ''"
      >

        <div class="row justify-end q-mb-lg q-mt-xl q-pt-xs text-grey-6">
          <div class="flex items-center">
            Per Page: &nbsp;
            <q-select
              v-model="perPage"
              :options="[12, 24, 36, 48, 60, 72]"
              dense
              filled
              class="q-mr-md"
              borderless
              behavior="menu"
              popup-content-class="text-grey-6"
            />
          </div>
          <q-select
            v-model="sortBy"
            :options="sortOptions"
            dense
            filled
            borderless
            behavior="menu"
            dropdown-icon="keyboard_arrow_down"
            popup-content-class="text-grey-6"
            style="min-width:150px"
          />

        </div>


        <div class="row q-col-gutter-md">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="(car, index) in cars"
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
        </div>

        <div class="row justify-center q-mt-lg q-pt-sm q-mb-xl q-pb-md">
          <q-pagination
            v-model="page"
            :max="10"
            max-pages="5"
            boundary-numbers
            direction-links
            color="grey-5"
            unelevated
            active-color="primary"
          />
        </div>
      </div>
    </div>

    <div class="bg-primary row q-mt-lg q-py-xl">
      <div class="col-12 q-mb-xl">
        <div class="q-py-lg">
          <Brands/>
        </div>
      </div>
    </div>

    <div class="container row">
      <div class="col-12 q-my-xl q-py-lg">
        <SaleBanner/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {reactive, ref} from "vue"
import PrimaryButton from "components/PrimaryButton.vue";
import Brands from "components/Home/Brands.vue";
import SaleBanner from "components/SaleBanner.vue";

const min = ref(1998)
const max = ref(2025)
const minPrice = ref(10000)
const maxPrice = ref(200000)
const minMileage = ref(10000)
const maxMileage = ref(200000)
const filters = ref({
  exclusive: [],
  make: [],
  model_series: [],
  year: {min: 1998, max: 2025},
  price: {min: 10000, max: 200000},
  mileage: {min: 10000, max: 200000},
  bodyType: []
})

const exclusiveOptions = [
  {label: "Hot Sale", value: "sale"},
  {label: "Very Low Price", value: "price"},
  {label: "Recently Added Cars", value: "recently"}
]

const modelSeriesOptions = [
  {label: "3 Series", value: "three_series"},
  {label: "4 Series", value: "four_series"},
  {label: "5 Series", value: "five_series"},
  {label: "6 Series", value: "six_series"},
  {label: "X Series", value: "x_series"},
  {label: "M Series", value: "m_series"}
]

const makeOptions = [
  {label: "Audi", value: "audi"},
  {label: "BMW", value: "bmw"},
  {label: "Bugatti", value: "bugatti"},
  {label: "Chery", value: "chery"},
  {label: "Chevrolet", value: "chevrolet"},
  {label: "Daihatsu", value: "daihatsu"},
  {label: "Datsun", value: "datsun"},
  {label: "Ferrari", value: "ferrari"},
  {label: "Fiat", value: "fiat"},
  {label: "Ford", value: "ford"},
  {label: "Land Rover", value: "land_rover"},
  {label: "Lexus", value: "lexus"},
  {label: "Mercedes-Benz Group", value: "mercedes_benz_group"},
  {label: "Suzuki", value: "suzuki"},
  {label: "Tesla", value: "tesla"},
  {label: "Toyota", value: "toyota"},
  {label: "Volkswagen", value: "volkswagen"}
]

const bodyOptions = [
  {label: "Crossover", value: "crossover"},
  {label: "Sedan", value: "sedan"},
  {label: "SUV", value: "suv"},
  {label: "Hatchback", value: "hatchback"}
]

const colors = ["#000", "#fff", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"]

const perPage = ref(12)
const sortBy = ref("Sort by (Default)")
const sortOptions = [
  {label: "Sort by (Default)", value: "default"},
  {label: "Price: Low to High", value: "price_asc"},
  {label: "Price: High to Low", value: "price_desc"}
]

const page = ref(1)

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

</script>
<style scoped>
:deep(.q-field--filled .q-field__control) {
  border-right: 12px !important;
}

:deep(.q-field--filled .q-field__control) {
  padding: 0 12px;
  color: #737373;
  border-radius: 8px 8px 8px 8px;
  font-size: 16px;
}

.car-card {
  border-radius: 20px;
  transition: transform 0.2s;
}
</style>
