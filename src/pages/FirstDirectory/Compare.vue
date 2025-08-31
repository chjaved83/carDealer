<template>
  <q-page>
    <div class="q-pt-xl" :class="$q.screen.lt.md ? 'q-mt-lg' : 'q-mt-xl'">

      <div class="container">
        <!-- Heading -->
        <div class="text-h4 text-weight-bold q-mb-lg">
          Compare Specifications
        </div>

        <!-- Comparison Table -->
        <div class="q-table__wrapper overflow-auto">
          <table class="q-table q-table--flat full-width">
            <thead>
            <tr>
              <th class="text-center">
                <q-img
                  src="/images/compare.jpg"
                  height="210px"
                  width="210px"
                />
              </th>
              <th class="text-center" v-for="(car, index) in cars" :key="index">
                <q-img
                  v-if="car.image"
                  :src="car.image"
                  class="q-mb-md rounded-borders"
                  height="200px"
                  width="250px"
                />
                <div v-else>
                  <q-btn
                    unelevated
                    no-caps
                    color="primary"
                    text-color="white"
                    class="q-px-md border-8"
                    @click="removeCar(index)"
                  >
                    <q-icon name="close" size="sm" class="q-mr-xs"/>
                    Add Car
                  </q-btn>
                </div>
              </th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td class="text-weight-medium">Title</td>
              <td v-for="car in cars" class="text-weight-600" :key="car.title">{{ car.title }}</td>
            </tr>

            <tr>
              <td class="text-weight-medium">Condition</td>
              <td
                v-for="car in cars"
                :key="car.title + '-condition'"
              >
                <q-btn
                  flat
                  class="radius-8 text-weight-600 text-subtitle2"
                  :style="{ backgroundColor: car.condition === 'NEW' ? '#C10015' : '#062E61' }"
                  text-color="white"
                  :label="car.condition"
                />
              </td>

            </tr>
            <tr>
              <td class="text-weight-medium">Body Type</td>
              <td v-for="car in cars" :key="car.title">{{ car.bodyType }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Make Brand</td>
              <td v-for="car in cars" :key="car.title">{{ car.brand }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Build Year</td>
              <td v-for="car in cars" :key="car.title">{{ car.year }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Fuel Type</td>
              <td v-for="car in cars" :key="car.title">{{ car.fuel }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Color</td>
              <td v-for="car in cars" :key="car.title">{{ car.color }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Mileage</td>
              <td v-for="car in cars" :key="car.title">{{ car.mileage }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Price</td>
              <td
                v-for="car in cars"
                :key="car.title"
                class="text-red text-weight-bold"
              >
                {{ car.price }}
              </td>
            </tr>
            <tr>
              <td class="text-weight-medium">Price Type</td>
              <td v-for="car in cars" :key="car.title">{{ car.priceType }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Transmission</td>
              <td v-for="car in cars" :key="car.title">{{ car.transmission }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Driver’s Airbag</td>
              <td v-for="car in cars" :key="car.title">{{ car.airbag }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Engine Size</td>
              <td v-for="car in cars" :key="car.title">{{ car.engine }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Seats</td>
              <td v-for="car in cars" :key="car.title">{{ car.seats }}</td>
            </tr>
            <tr>
              <td class="text-weight-medium">Action</td>
              <td v-for="(car, index) in cars" :key="index">
                <q-btn
                  unelevated
                  no-caps
                  color="primary"
                  text-color="white"
                  class="q-px-md border-8"
                  @click="removeCar(index)"
                >
                  <q-icon name="close" size="sm" class="q-mr-xs"/>
                  Remove
                </q-btn>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class=" q-pt-xl">
        <div class="bg-primary row q-py-xl q-my-xl">
          <div class="col-12 q-mb-xl">
            <div class="q-py-lg">
              <Brands/>
            </div>
          </div>
        </div>
      </div>

      <div class="container row q-pb-xl" :class="$q.screen.lt.md ? 'q-px-md' : ''">
        <div class="col-12 flex justify-between items-center">
          <div class="text-h4 text-weight-bold">Similar Cars</div>
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
    </div>

  </q-page>
</template>

<script setup>
import {ref} from "vue";
import PrimaryButton from "components/PrimaryButton.vue";
import SpecialCars from "components/Home/SpecialCars.vue";
import Brands from "components/Home/Brands.vue";

const cars = ref([
  {
    title: "Telsa White Car",
    condition: "USED",
    bodyType: "Coupe",
    brand: "Mercedes",
    year: 2021,
    fuel: "Disel",
    color: "White",
    mileage: "18.50 kmpl",
    price: "$65,785",
    priceType: "Negotiable",
    transmission: "Automatic",
    airbag: "Yes",
    engine: "5.2L",
    seats: "5 Seats",
    image: "/images/cars/car.jpg"
  },
  {
    title: "BMW Sports Car",
    condition: "NEW",
    bodyType: "Coupe",
    brand: "BMW",
    year: 2022,
    fuel: "Electric",
    color: "Yellow",
    mileage: "15.60 kmpl",
    price: "$62,560",
    priceType: "Fixed",
    transmission: "Automatic",
    airbag: "Yes",
    engine: "5.2L",
    seats: "4 Seats",
    image: "/images/cars/car2.jpg"
  },
  {
    title: "Mercedes Benz Suv",
    condition: "USED",
    bodyType: "SUV",
    brand: "Mercedes",
    year: 2020,
    fuel: "Petrol",
    color: "Black",
    mileage: "14.39 kmpl",
    price: "$59,839",
    priceType: "Negotiable",
    transmission: "Manual",
    airbag: "No",
    engine: "5.2L",
    seats: "7 Seats",
    image: "/images/cars/car.jpg"
  }
]);

function removeCar(index) {
  cars.value[index] = {
    title: '',
    condition: '',
    bodyType: '',
    brand: ''
  }
}
</script>

<style scoped>
.q-table th,
.q-table td {
  padding: 12px 16px;
  text-align: center;
  font-size: 20px;
  color: #353535;
  border: 1px solid #e5e5e5;
}

.q-table th:first-child,
.q-table td:first-child {
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  color: #353535;
  width: 250px;
}

.q-table th {
  font-weight: bold;
  width: 250px;
  text-align: center;
}

.rounded-borders {
  border-radius: 10px;
}
</style>
