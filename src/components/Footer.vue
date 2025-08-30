<template>
  <q-footer class="footer">
    <q-card v-if="talkSection" flat class="text-h2 bg-blue-6 container radius-20 "
            :class="$q.screen.lt.md ? 'top--20' : 'top--93'"
            style="">
      <div :class="[$q.screen.xs ? 'q-py-lg' : 'q-pa-xl ', $q.screen.gt.sm ? 'q-mt-96' : '']" style="">
        <q-item class="q-py-none">
          <q-item-section>
            <q-item-label class="text-h4 text-weight-600">
              Check Your Finance Eligibility
            </q-item-label>
            <q-item-label class="text-h6 ">
              <div class="row">
                <div class="col-12 col-md-11 col-lg-10">
                  Enjoy a hassle-free car financing experience with our expert team! We work closely with
                  all major banks across the UAE to secure the best auto loan options for you.
                </div>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section side class="gt-sm">
            <q-item class="bg-primary text-white q-py-md radius-10">
              <q-item-section avatar class="q-pr-none">
                <q-icon size="50px" name="img:/icons/callWhite.svg"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle text-weight-bold">
                  TALK TO AN EXPERT FREE
                </q-item-label>
                <q-item-label class="q-mt-none text-h5 text-weight-bold">
                  +971 56 526 0000
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
        </q-item>
        <q-item class="bg-primary text-white q-py-md radius-10 q-mx-auto q-mt-lg lt-md" style="width: 294px">
          <q-item-section avatar class="q-pr-none">
            <q-icon size="50px" name="img:/icons/callWhite.svg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle text-weight-bold">
              TALK TO AN EXPERT FREE
            </q-item-label>
            <q-item-label class="q-mt-none text-h5 text-weight-bold">
              +971 56 526 0000
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>

    <div class=""
         :class="[$q.screen.gt.sm ? 'q-pb-xl' : 'q-pb-sm q-pt-xl', $q.screen.gt.sm && !talkSection ? 'q-mt-lg q-pt-xl' : '' ]">
      <div class="container row">
        <div class="col-12 col-md-4" :class="$q.screen.lt.md ? 'q-mb-md' : ''">
          <q-item>
            <q-item-section avatar>
              <q-img
                height="77px"
                width="67px"
                src="/icons/logo.svg"
              />
            </q-item-section>
            <q-item-section class="items-start text-white">
              <q-item-label
                class="zen-dot"
                :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'"
              >
                Car Dealer
              </q-item-label>
              <q-item-label
                class="text-weight-medium text-h6"
                :class="$q.screen.lt.md ? 'text-subtitle1' : 'text-h6 q-pl-md'"
                style="letter-spacing: 4px"
              >
                AUTOMOTIVE
              </q-item-label>
            </q-item-section>
          </q-item>
          <div class="text-subtitle q-mt-lg q-pr-lg">
            Aenean congue nec nunc in convallis. Nunc a mattis enim. Cras non dui id quam congue
            sodales in ac diam. Curabitur posuere felis a est euismod, quis lacinia tortor
            venenatis. Aenean mollis semper ante. Sed tellus ipsum, condimentum vel dictum
            et, efficitur et metus. Nam convallis nisl in mollis eleifend.
          </div>
        </div>
        <div class="col-12 col-md-4" :class="$q.screen.lt.md ? 'q-mb-lg q-pb-sm' : ''">
          <div class="row">
            <div
              v-for="(item, index) in footerItems"
              :key="index"
              class="col-6"
            >
              <q-list class="q-pt-xs">
                <q-item-section class="text-h6 text-weight-600 q-py-sm text-white">
                  {{ item.title }}
                </q-item-section>

                <div v-for="(item, index) in item.items" :key="index">
                  <div
                    class="items-center q-py-xs row"
                  >
                    <div class="q-pr-sm">
                      <q-icon :name="item.icon" size="18px"/>
                    </div>

                    <q-item-section>
                      <router-link :to="item.to" class="text-decoration-none text-white text-subtitle">
                        {{ item.product }}
                      </router-link>
                    </q-item-section>
                  </div>
                </div>
              </q-list>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 bg-white radius-12" :class="$q.screen.lt.md ? 'q-mb-md' : ''">
          <div class="q-pa-md">
            <div class="text-grey-7 text-weight-600 text-h6">
              Contact Us
            </div>
            <q-item clickable class="text-grey-7" v-for="item in contactItems">
              <q-item-section avatar>
                <q-icon :name="item.name" size="xl"/>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-600 text-h6 q-pb-xs">
                  {{ item.label }}
                </q-item-label>
                <q-item-label class="text-subtitle">
                  {{ item.val1 }}, {{ item.val2 }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </div>
    <div class="container row">
      <div class="col-12">
        <q-separator class="q-mt-lg" color="white"/>
      </div>
      <div class="col-12" :class="$q.screen.xs ? 'text-center q-my-xs' : 'q-my-lg flex justify-between'">
        <div :class="$q.screen.xs ? 'text-subtitle2' : 'text-subtitle1'">
          Copyright © 2025 Car Dealer Automotive. All rights reserved.
        </div>
        <div>
          Privacy Policy
          <q-icon name="img:/icons/circleIcon.svg"/>
          Terms & Conditions
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script setup>

import {ref, watch} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const talkSection = ref(false)
const footerItems = [
  {
    title: "Car Partner ",
    items: [
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Audi",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "BMW",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Mercedes Benz",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Lamborghini",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Rolls Royce",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Bentley",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Ferrari",
        to: "/",
      },
      {
        icon: "img:/icons/circleArrow.svg",
        product: "Toyota",
        to: "/",
      },
    ],
  },
  {
    title: "Car Partner ",
    items: [
      {
        icon: "img:/icons/expandCircle.svg",
        product: "Home",
        to: "/home",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "Used Cars",
        to: "/",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "New Cars",
        to: "/",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "About Us",
        to: "/about-us",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "FAQ’s",
        to: "/",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "Contact Us",
        to: "/contact-us",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "Privacy Policy",
        to: "/",
      },
      {
        icon: "img:/icons/expandCircle.svg",
        product: "Term & Condition",
        to: "/",
      },
    ]
  }
]
const contactItems = [
  {
    name: "img:/icons/footerWhatsapp.svg",
    label: "Whats App",
    val1: "+971 56 526 0000",
    val2: "+971 56 526 0000",
  },
  {
    name: "img:/icons/footerPhone.svg",
    label: "Phone",
    val1: "+971 56 526 0000",
    val2: "+971 56 526 0000",
  },
  {
    name: "img:/icons/footerEmail.svg",
    label: "E-mail",
    val1: "support@autodealersolutions.com",
  },
  {
    name: "img:/icons/location.svg",
    label: "Address",
    val1: "Speedex Center - 1 - Dubai Investment Park - Dubai - United Arab Emirates",
  },
]

watch(
  () => route.path,
  (newPath) => {
    talkSection.value = newPath === '/contact-us'
  }
)
</script>
<style scoped>
.footer {
  position: relative;
  background: url('/images/footerCaar.jpg') center/cover no-repeat;
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #062E61;
  opacity: 0.8;
  z-index: 0;
}

.footer > * {
  position: relative;
  z-index: 1;
}

.top--93 {
  top: -93px
}

.top--20 {
  top: -20px;
}

.q-mt-96 {
  margin-top: 96px;
}
</style>
