<template>
  <div class="text-center bg-royal-blue text-h6 q-py-sm roboto">
    Welcome to Auto Car Dealer
  </div>
  <div class="container row q-pt-sm bg-white items-center">
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
            class="text-grey-7 text-weight-med text-h6"
            :class="$q.screen.lt.md ? 'text-subtitle1' : 'text-h6 q-pl-md'"
            style="letter-spacing: 4px"
          >
            AUTOMOTIVE
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="col-7 col-md-8"
         :class="$q.screen.gt.sm ? 'flex items-center justify-between' : 'text-right'"
    >
      <q-item v-for="item in items" :key="item" class="gt-sm">
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
      <q-btn
        flat
        icon="menu"
        color="primary"
        class="lt-md"
        size="xl"
      >
        <q-menu class="full-width bg-primary radius-8 lt-md text-white">
          <q-list class="q-pa-xs">
            <div
              v-for="(item, index) in centerButtons"
              :key="index"
              :class="item.smallScreen ? 'lt-md' : ''"
            >
              <q-btn
                flat
                no-caps
                class="text-subtitle1 text-weight-medium"
                :class="item.btnClass"
                :label="item.label"
                :to="item.to"
              />
            </div>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="col-12 bg-primary radius-12 q-mt-lg gt-sm">
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
            :class="[$q.screen.lt.lg ? 'text-subtitle' : 'text-h6', button.smallScreen ? 'lt-md' : '']"
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
  <div class="banner-section" :class="$q.screen.gt.sm ? 'q-mt--32' : ''">
    <div class="container q-pa-lg text-white">
      <div class="q-pt-xl">
        <div
          class="text-weight-bold"
          :class="$q.screen.gt.sm && route.path === '/home' ? 'text-80' : 'text-h2'"
        >
          <div :class="route.path === '/home' ? 'q-pt-xl' : ''">
            <div class="q-pt-lg" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
              <div :class="route.path === '/home' ? 'q-pt-xl' : ''">
                <div v-if="carName">
                  {{carName}}
                </div>
                <div v-else>
                  {{ route.meta.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-h5 text-weight-600 q-pt-md"
        :class="route.path === '/home' && $q.screen.gt.sm ? 'q-mt-lg' : ''"
      >
        <div :class="route.path === '/home' ? '' : 'q-pb-xl'">
          <div :class="route.path === '/home' ? '' : 'q-pb-xl'">
            Use our search below to find our latest models
          </div>
        </div>
      </div>
      <BannerSearch v-if="route.path === '/home'"/>
    </div>
  </div>
</template>
<script setup>

import BannerSearch from "components/BannerSearch.vue";

import {useRoute} from 'vue-router'
defineProps({
  carName:{
    default:false,
    type:String
  }
})
const route = useRoute()
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
    label: "Home",
    to: "/home",
    smallScreen: true
  },
  {
    label: "Buy a Car",
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
    to: "/about-us"
  },
  {
    label: "Contact Us",
    to: "/contact-us"
  },
  {
    label: "Get Help",
    to: "/",
    smallScreen: true
  },
]
</script>

<style scoped>
.banner-section {
  background-image: url('/images/bannerImages.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.q-mt--32 {
  margin-top: -32px;
}

:deep(.q-item__label + .q-item__label) {
  margin-top: 0;
}

.left-btn {
  border-radius: 8px 0 0 8px
}

.right-btn {
  border-radius: 0 8px 8px 0
}

.text-80 {
  font-size: 80px;
  line-height: 80px;
}
</style>
