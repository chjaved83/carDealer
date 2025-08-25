<template>
  <q-layout>
    <q-header class="bg-white">
      <div class="text-center bg-royal-blue text-h6 q-py-sm roboto">
        Welcome to Auto Car Dealer
      </div>
      <div class="container row q-pt-sm bg-white">
        <div class="col-5 col-md-4">
          <q-item>
            <q-item-section avatar>
              <q-img
                :height="$q.screen.lt.md ? '55px' : '77px'"
                :width="$q.screen.lt.md ? '44px' : '67px'"
                src="/icons/logo.svg"
              />
            </q-item-section>
            <q-item-section class="items-start">
              <q-item-label
                class="text-primary zen-dot"
                :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'"
              >
                Car Dealer
              </q-item-label>
              <q-item-label
                class="text-grey-7 q-pl-md text-weight-med text-h6"
                :class="$q.screen.lt.md ? 'text-subtitle1' : 'text-h6'"
                style="letter-spacing: 4px"
              >
                AUTOMOTIVE
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-7 col-md-8 flex items-center justify-between">
          <q-item v-for="item in items" :key="item">
            <q-item-section avatar class="gt-md">
              <q-icon :name="item.icon" size="48px"/>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-royal-blue text-h6 text-weight-600">
                {{ item.label }}
              </q-item-label>
              <q-item-label class="text-medium-grey text-h6">
                {{ item.value }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-12 bg-primary radius-12 q-mt-lg">
          <q-toolbar class="q-pa-none">

            <!-- Left Icon -->
            <q-btn
              class="bg-royal-blue left-btn"
              flat
              icon="img:/icons/home.svg"
              size="28px"
            />

            <!-- Center Menu -->
            <div class="q-px-lg">
              <q-btn
                v-for="button in centerButtons"
                flat
                :class="$q.screen.lt.lg ? 'text-subtitle' : 'text-h6'"
                class=" text-weight-600"
                :label="button.label"
                :to="button.to"
              />
            </div>

            <q-space/>

            <!-- Right Button -->
            <q-btn
              :class="$q.screen.lt.lg ? 'text-subtitle' : 'text-h6'"
              class="bg-royal-blue right-btn  text-weight-600"
              flat
              label="Get Help"
              icon-right="arrow_forward"
              padding="19px 16px"
            />
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <!-- Main Page Container -->
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>
<script setup>
const items = [
  {
    icon: "img:/icons/whatsapp.svg",
    label: "Whats App",
    value: "(201) 428-1034",
  },
  {
    icon: "img:/icons/call.svg",
    label: "Call Us Now",
    value: "(201) 428-1034",
  },
  {
    icon: "img:/icons/call.svg",
    label: "E-mail",
    value: "support@autodealer.com",
  },
];
const centerButtons = [
  {
    label: "BUY A CAR",
    to: "/"
  },
  {
    label: "Sell Your Car",
    to: "/"
  },
  {
    label: "Offers",
    to: "/"
  },
  {
    label: "Finance",
    to: "/"
  },
  {
    label: "Services",
    to: "/"
  },
  {
    label: "About Us",
    to: "/"
  },
  {
    label: "Contact Us",
    to: "/"
  },
]
</script>
<style scoped>
:deep(.q-item__label + .q-item__label) {
  margin-top: 0;
}

.left-btn {
  border-radius: 8px 0 0 8px
}

.right-btn {
  border-radius: 0 8px 8px 0
}
</style>
