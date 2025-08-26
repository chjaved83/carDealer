<template>
  <div class="text-center q-mb-lg"
       :class="$q.screen.sm ? 'q-pt-10' : 'q-pt-14'"
  >
    <q-btn-toggle
      v-model="carModel"
      color="white"
      text-color="grey-7"
      toggle-color="primary"
      toggle-text-color="white"
      rounded
      no-caps
      unelevated
      padding="8px 48px"
      size="24px"
      :options="[
        {label: 'Buy', value: 'buy'},
        {label: 'Sell', value: 'sell'},
      ]"
    />
  </div>
  <div :class="$q.screen.lt.md ? 'q-pb-lg' :' q-pb-xl'">
    <div
      class="row q-col-gutter-md q-pb-md q-mt-md radius-12 bg-white"
      :class="$q.screen.lt.lg ? 'q-pr-md q-ml-xs' :''"
    >

      <!-- Brand -->
      <div class="col-12 col-sm-6 col-md-2">
        <q-select
          v-model="filters.brand"
          :options="brands"
          label="Brand (Make)"
          borderless
          behavior="menu"
          dense
          dropdown-icon="keyboard_arrow_down"
          emit-value
          map-options
          :class="$q.screen.gt.sm ? 'border-right' :''"
        />
      </div>

      <!-- Model -->
      <div class="col-12 col-sm-6 col-md-2">
        <q-select
          v-model="filters.model"
          :options="models"
          label="Model"
          borderless
          behavior="menu"
          dense
          dropdown-icon="keyboard_arrow_down"
          emit-value
          map-options
          :class="$q.screen.gt.sm ? 'border-right' :''"
        />
      </div>

      <!-- Year -->
      <div class="col-12 col-sm-6 col-md-2">
        <q-select
          v-model="filters.year"
          :options="years"
          label="Year"
          borderless
          behavior="menu"
          dense
          dropdown-icon="keyboard_arrow_down"
          emit-value
          map-options
          :class="$q.screen.gt.sm ? 'border-right' :''"
        />
      </div>

      <!-- Body -->
      <div class="col-12 col-sm-6 col-md-2">
        <q-select
          v-model="filters.body"
          :options="bodies"
          label="Body"
          borderless
          behavior="menu"
          dense
          dropdown-icon="keyboard_arrow_down"
          emit-value
          map-options
          :class="$q.screen.gt.sm ? 'border-right' :''"
        />
      </div>

      <!-- Budget -->
      <div class="col-12 col-sm-6 col-md-2">
        <q-select
          v-model="filters.budget"
          :options="budgets"
          label="Budget"
          borderless
          behavior="menu"
          dense
          dropdown-icon="keyboard_arrow_down"
          emit-value
          map-options
          :class="$q.screen.gt.sm ? 'border-right' :''"
          input-class="text-h4"
        />
      </div>

      <!-- Search Button -->
      <div
        class="col-12 col-sm-6 col-md-2"
        :class="!$q.screen.xs ? 'justify-end flex' : 'text-center'"
      >
        <q-btn
          no-caps
          color="primary"
          label="Search"
          icon="search"
          class="radius-12 text-weight-600 q-px-lg"
          :class="$q.screen.gt.sm ? 'q-mr-md' : ''"
          size="20px"
          @click="onSearch"
        />
      </div>
    </div>

  </div>
</template>
<script setup>

import {ref} from "vue";

const carModel = ref('buy')

const filters = ref({
  brand: 'Any Make',
  model: 'Any Model',
  year: 'Any Year',
  body: 'Any Body',
  budget: 'Any min - Any max',
});

const brands = ["Any Make", "Toyota", "Honda", "BMW"];
const models = ["Any Model", "Corolla", "Civic", "X5"];
const years = ["Any Year", "2024", "2023", "2022"];
const bodies = ["Any Body", "Sedan", "SUV", "Hatchback"];
const budgets = ["Any min - Any max", "0-10k", "10k-20k", "20k-50k"];

const onSearch = () => {
  console.log("Filters:", filters.value);
};
</script>
<style scoped>
.border-right {
  border-right: 2px solid #ABABAB;
}

:deep(.q-field__control) {
  height: 50px;

}

:deep(.q-field__label) {
  font-size: 16px;
  font-weight: 600;
}

.q-pt-14 {
  padding-top: 14.5%;
}

.q-pt-10 {
  padding-top: 10%;
}
</style>
