<template>
  <q-page>
    <q-header class="bg-white">
      <HeaderSection :carName="carName"/>
      <BannerSection/>
    </q-header>
    <div
      class="container row"
      :class="$q.screen.gt.sm ? 'q-pt-590 q-col-gutter-lg' : 'q-pt-390'"
    >
      <div class="col-12 col-md-8">
        <Carousel ref="carousel" v-bind="bannerConfig" v-model="currentIndex">
          <Slide v-for="(image, index) in images" :key="index">
            <q-img
              :src="image.image"
              class="carousel-image"
              @click="openGallery(index)"
            >
              <q-btn
                dense
                class="absolute-bottom-left q-ml-md q-mb-md bg-white"
                icon="img:/icons/fullScreen.svg"
              />
            </q-img>
          </Slide>
        </Carousel>

        <!-- Thumbnails Navigation -->
        <div class="row q-mt-md flex items-center justify-center">
          <div class="col-12">
            <Carousel v-bind="thumbsConfig" v-model="currentIndex">
              <Slide v-for="(image, index) in images" :key="index">
                <q-img
                  :src="image.image"
                  :class="[
                    'cursor-pointer radius-8',
                    currentIndex === index ? 'active-thumb' : 'inactive-thumb'
                  ]"
                  style="width: 100px; height: 80px; object-fit: cover;"
                  @click="currentIndex = index"
                />
              </Slide>
            </Carousel>
          </div>
        </div>

        <!-- Fullscreen Gallery Dialog -->
        <q-dialog v-model="showGallery" maximized>
          <q-carousel
            v-model="currentIndex"
            arrows
            swipeable
            animated
            thumbnails
            infinite
            class="bg-black text-white thumbnails-horizontal"
          >
            <q-carousel-slide
              v-for="(img, i) in images"
              :key="i"
              :name="i"
              :img-src="img.image"
            >
              <q-btn
                flat
                dense
                class="bg-white absolute-top-right q-mr-md q-mt-md text-black"
                icon="close"
                @click="showGallery = false"
              />
            </q-carousel-slide>
          </q-carousel>
        </q-dialog>

        <q-card flat class="q-pa-md radius-6 q-mt-lg">
          <div class="text-h5 text-weight-600 q-mb-xs">
            Highlights
          </div>
          <div class=" row text-center justify-between">
            <q-card
              flat
              class="bg-grey-2 q-py-sm q-mt-sm q-px-md text-subtitle width-135"
              v-for="item in highlightCards"
            >
              <q-icon size="25px" :name="item.icon"/>
              <div class="text-grey-6">
                {{ item.heading }}
              </div>
              <div class="text-weight-600">
                {{ item.desc }}
              </div>
            </q-card>
          </div>
        </q-card>

        <q-card
          flat
          class="q-pa-md radius-6 q-mt-lg"
          :class="$q.screen.lt.md ? '' :'q-pr-md'"
        >
          <div class="text-h5 text-weight-600">
            Description
          </div>
          <div class="text-subtitle q-mt-md text-grey-6">
            2022 Nissan Patrol LE TITANIUM 5.6 with 15″ wheels for sale at Al Futtaim Automall.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pretiums magna.
            Vivamus eget erat ac lorem interdum malesuada. Mauris a nec mollis mauris,
            vitae porttitor nunc.
          </div>
        </q-card>

        <q-card flat class="q-pa-md radius-6 q-mt-lg">
          <div class="text-h5 text-weight-600 q-mb-md">
            Features
          </div>
          <div class="q-pa-md bg-grey-2 text-white">
            <q-list dark padding bordered class="rounded-borders">
              <q-expansion-item
                class="text-black text-h6 text-weight-600 q-py-sm"
                label="Account settings"
              >
                <q-card class="row bg-grey">
                  <q-card-section class="col-6 bg-white q-pt-none" v-for="item in carDetails">
                    <div class="flex justify-between q-py-xs account-settings">
                      <div>
                        <q-icon size="30px" :name="item.icon"/>
                        <span class="text-subtitle1 q-pl-md">{{ item.label }}</span>
                      </div>
                      <div class="text-subtitle1 q-mr-md">
                        {{ item.value }}
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                class="text-black text-h6 text-weight-600 q-py-sm"
                label="Safety & Convenience"
              >
                <q-card class="row bg-grey">
                  <q-card-section class="col-6 bg-white q-pt-none" v-for="item in carDetails">
                    <div class="flex justify-between q-py-xs account-settings">
                      <div>
                        <q-icon size="30px" :name="item.icon"/>
                        <span class="text-subtitle1 q-pl-md">{{ item.label }}</span>
                      </div>
                      <div class="text-subtitle1 q-mr-md">
                        {{ item.value }}
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                class="text-black text-h6 text-weight-600 q-py-sm"
                label="Interior Condition"
              >
                <q-card class="row bg-grey">
                  <q-card-section class="col-6 bg-white q-pt-none" v-for="item in carDetails">
                    <div class="flex justify-between q-py-xs account-settings">
                      <div>
                        <q-icon size="30px" :name="item.icon"/>
                        <span class="text-subtitle1 q-pl-md">{{ item.label }}</span>
                      </div>
                      <div class="text-subtitle1 q-mr-md">
                        {{ item.value }}
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-separator/>
              <q-expansion-item
                class="text-black text-h6 text-weight-600 q-py-sm"
                label="Exterior Condition"
              >
                <q-card class="row bg-grey">
                  <q-card-section class="col-6 bg-white q-pt-none" v-for="item in carDetails">
                    <div class="flex justify-between q-py-xs account-settings">
                      <div>
                        <q-icon size="30px" :name="item.icon"/>
                        <span class="text-subtitle1 q-pl-md">{{ item.label }}</span>
                      </div>
                      <div class="text-subtitle1 q-mr-md">
                        {{ item.value }}
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </q-card>

        <q-card flat class="q-pa-md radius-6 q-mt-lg">
          <div class="row">
            <div class="col-12 col-md-7">
              <div class="text-h5 text-weight-600 q-mb-md">
                Inspection Report
              </div>
              <div class="text-subtitle text-grey-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus at erat maximus, egestas nisi sit ametula.
              </div>
              <div class="q-my-lg">
                <q-img src="/images/inspection.jpg"/>
              </div>
              <div class="text-subtitle1 text-grey-6">
                This vehicle passed a 218 point inspection. View the full report.
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div class="flex justify-between text-grey-6">
                <div class="text-weight-600 text-h6 q-pb-sm">
                  Overall Rating
                </div>
              </div>

              <div class="bg-grey-2 q-px-sm q-pt-sm q-pb-md radius-6">
                <div class="flex justify-between">
                  <div class="flex items-center q-pb-xs">
                    <q-icon size="20px" name="img:/icons/redValue.svg"/>
                    <div class="text-subtitle1 text-grey-6 q-pl-sm">
                      Exterior Condition
                    </div>
                  </div>
                  <div class="">
                    {{ exteriorConditionLabel }}
                  </div>
                </div>
                <q-linear-progress class="text-blue-8" rounded size="10px" :value="exteriorCondition"/>
              </div>

              <div class="bg-grey-2 q-px-sm q-pt-sm q-pb-md q-mt-sm radius-6">
                <div class="flex justify-between">
                  <div class="flex items-center q-pb-xs">
                    <q-icon size="20px" name="img:/icons/interiorCondition.svg"/>
                    <div class="text-subtitle1 text-grey-6 q-pl-sm">
                      Interior Condition
                    </div>
                  </div>
                  <div class="">
                    {{ interiorConditionLabel }}
                  </div>
                </div>
                <q-linear-progress class="text-pink-4" rounded size="10px" :value="interiorCondition"/>
              </div>

              <div class="bg-grey-2 q-px-sm q-pt-sm q-pb-md radius-6">
                <div class="flex justify-between">
                  <div class="flex items-center q-pb-xs">
                    <q-icon size="20px" name="img:/icons/redValue.svg"/>
                    <div class="text-subtitle1 text-grey-6 q-pl-sm">
                      Engine & Transmission
                    </div>
                  </div>
                  <div class="">
                    {{ engineConditionLabel }}
                  </div>
                </div>
                <q-linear-progress class="text-blue-8" rounded size="10px" :value="engineCondition"/>
              </div>

              <div class="bg-grey-2 q-px-sm q-pt-sm q-pb-md q-mt-sm radius-6">
                <div class="flex justify-between">
                  <div class="flex items-center q-pb-xs">
                    <q-icon size="20px" name="img:/icons/interiorCondition.svg"/>
                    <div class="text-subtitle1 text-grey-6 q-pl-sm">
                      Undercarriage & Brakes
                    </div>
                  </div>
                  <div class="">
                    {{ undercarraigeConditionLabel }}
                  </div>
                </div>
                <q-linear-progress class="text-pink-4" rounded size="10px" :value="undercarraigeCondition"/>
              </div>

              <div class="bg-grey-2 q-px-sm q-pt-sm q-pb-md radius-6">
                <div class="flex justify-between">
                  <div class="flex items-center q-pb-xs">
                    <q-icon size="20px" name="img:/icons/redValue.svg"/>
                    <div class="text-subtitle1 text-grey-6 q-pl-sm">
                      Tyres & Rims
                    </div>
                  </div>
                  <div class="">
                    {{ tyreConditionLabel }}
                  </div>
                </div>
                <q-linear-progress class="text-blue-8" rounded size="10px" :value="tyreCondition"/>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-12 col-md-4 q-mb-xl">
        <div class="row">
          <div class="col-12 q-pa-lg radius-12 bg-white">
            <div class="text-weight-600 text-h5">
              {{ carName }} ULTIMATE BRIGHT Suv 2023
            </div>
            <q-item class="text-red justify-between q-px-none">
              <q-item-section class="text-h6 text-weight-600">
                Price
              </q-item-section>
              <q-item-section class="text-h5 text-right text-weight-bold">
                AED {{ carPrice }}
              </q-item-section>
            </q-item>
            <div class="full-width text-right">
              <q-btn
                no-caps
                flat
                label="Compare"
                class="text-black bg-red-3 radius-8 text-subtitle q-px-lg"
              />
            </div>
            <div class=" text-h5 text-weight-medium">
              What's included
            </div>
            <div class="row q-pt-sm">
              <div class="col-4 radius-8 q-py-sm included text-center" v-for="item in includes">
                <div class="">
                  <q-icon
                    size="70px"
                    :name="item.icon"
                  />
                  <div class="q-pt-sm text-subtitle1 q-px-md">
                    {{ item.heading }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-10 q-mx-auto">
                <q-btn
                  no-caps
                  flat
                  class="text-weight-600 text-h6 bg-red radius-8 full-width q-mt-lg text-white"
                  label="BOOK NOW!"
                />
                <div class="row justify-between q-mt-sm">
                  <q-btn
                    no-caps
                    flat
                    class="text-weight-600 text-subtitle1 bg-primary radius-8 q-mt-md text-white width-160"
                    label="Call Us"
                  />
                  <q-btn
                    no-caps
                    flat
                    class="text-weight-600 text-subtitle1 bg-primary radius-8 q-mt-md text-white width-160"
                    label="Whats App"
                  />
                </div>
                <div class="row justify-between">
                  <q-btn
                    no-caps
                    flat
                    class="text-weight-600 text-subtitle1 bg-primary radius-8 q-mt-md text-white width-160"
                    label="E-mail"
                  />
                  <q-btn
                    no-caps
                    flat
                    class="text-weight-600 text-subtitle1 bg-primary radius-8 q-mt-md text-white width-160"
                    label="Book Test Drive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 q-mt-lg">
            <q-img src="/images/car-detail-sale.jpg"/>
          </div>
          <div class="col-12 q-mt-lg">
            <q-img src="/images/finance.jpg"/>
          </div>
          <div class="col-12 q-mt-lg">
            <q-img src="/images/sell-your-car.jpg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary row q-mt-lg q-py-xl q-mb-xl">
      <div class="col-12 q-mb-xl">
        <div class="q-py-lg">
          <Brands/>
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


  </q-page>
</template>
<script setup>
import BannerSection from "components/BannerSection.vue";
import HeaderSection from "components/HeaderSection.vue";
import {useRoute} from 'vue-router';

const route = useRoute()
const carName = 'Car Name Here'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";
import {computed, reactive, ref} from "vue";
import Brands from "components/Home/Brands.vue";
import PrimaryButton from "components/PrimaryButton.vue";
import SpecialCars from "components/Home/SpecialCars.vue";

const carPrice = ref(179000)
const interiorCondition = ref(0.9)
const exteriorCondition = ref(0.7)
const engineCondition = ref(0.95)
const undercarraigeCondition = ref(0.80)
const tyreCondition = ref(0.55)
const exteriorConditionLabel = computed(() => (exteriorCondition.value * 100).toFixed(0) + '%')
const interiorConditionLabel = computed(() => (interiorCondition.value * 100).toFixed(0) + '%')
const engineConditionLabel = computed(() => (engineCondition.value * 100).toFixed(0) + '%')
const undercarraigeConditionLabel = computed(() => (undercarraigeCondition.value * 100).toFixed(0) + '%')
const tyreConditionLabel = computed(() => (tyreCondition.value * 100).toFixed(0) + '%')
const carDetails = reactive([
  {
    icon: "img:/icons/highlightIcons/calendar.svg",
    label: "Year",
    value: "2007",
  },
  {
    icon: "img:/icons/highlightIcons/seats.svg",
    label: "No. of seats",
    value: "4",
  },
  {
    icon: "img:/icons/highlightIcons/kilometers.svg",
    label: "Kilometers",
    value: "9080 km",
  },
  {
    icon: "img:/icons/highlightIcons/leatherSeat.svg",
    label: "Seats",
    value: "Leather Seats",
  },
  {
    icon: "img:/icons/highlightIcons/specs.svg",
    label: "Transmission",
    value: "Automatic",
  },
  {
    icon: "img:/icons/highlightIcons/transmissionTwo.svg",
    label: "Transmission",
    value: "Petrol",
  },
  {
    icon: "img:/icons/highlightIcons/calendar.svg",
    label: "Engine",
    value: "3 Cylinders",
  },
  {
    icon: "img:/icons/highlightIcons/calendar.svg",
    label: "Engine",
    value: "3 Cylinders",
  },
])
const highlightCards = reactive([
  {
    icon: "img:/icons/highlightIcons/location.svg",
    heading: "Location",
    desc: "Dubai"
  },
  {
    icon: "img:/icons/highlightIcons/location.svg",
    heading: "Model year",
    desc: "2022"
  },
  {
    icon: "img:/icons/highlightIcons/kilometers.svg",
    heading: "Kilometers",
    desc: "20220"
  },
  {
    icon: "img:/icons/highlightIcons/engine.svg",
    heading: "Engine Cap.",
    desc: "2.6 L"
  },
  {
    icon: "img:/icons/highlightIcons/specs.svg",
    heading: "Transmission",
    desc: "Automatic"
  },
  {
    icon: "img:/icons/highlightIcons/manufacturing.svg",
    heading: "Specs",
    desc: "GCC"
  },
])
const includes = reactive([
  {
    icon: 'img:/icons/inspection.svg',
    heading: "Comprehensive Inspection"
  },
  {
    icon: 'img:/icons/verify.svg',
    heading: "Extended Warranty"
  },
  {
    icon: 'img:/icons/contract.svg',
    heading: "Service Contract"
  },
])
const images = ref([
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
  {image: "/images/cars/car.jpg"},
  {image: "/images/cars/car2.jpg"},
]);

const bannerConfig = {
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
};

const thumbsConfig = {
  itemsToShow: 3,
  gap: 20,
  transition: 500,
  snapAlign: "left",
  mouseDrag: true,
  touchDrag: true,
  breakpoints: {
    1024: {
      itemsToShow: 7,
    },
    608: {
      itemsToShow: 6,
    },
    280: {
      itemsToShow: 4,
    },
  },
};

const currentIndex = ref(0);
const showGallery = ref(false);

function openGallery(index) {
  currentIndex.value = index;
  showGallery.value = true;
}
</script>
<style scoped>
.active-thumb {
  border: 2px solid #1e3a8a;
  border-radius: 8px;
}

.inactive-thumb {
  opacity: 0.7;
  transition: 0.3s;
}

.inactive-thumb:hover {
  opacity: 1;
}

.included {
  border: 1px solid #D2D2D2;
  background: #F2F2F2;
}

.gap-5 {
  gap: 5px;
}

:deep(.q-item__section--side > .q-icon) {
  color: #8a8a8a;
}

.q-pt-590 {
  padding-top: 590px;
}

.q-pt-390 {
  padding-top: 460px;
}

@media (max-width: 433px) {

  .q-pt-390 {
    padding-top: 590px;
  }
}

@media (max-width: 530px) {

  .q-pt-390 {
    padding-top: 520px;
  }
}

.width-135 {
  width: 135px
}


.width-160 {
  width: 160px
}

.account-settings {
  border-bottom: 1px solid #B4B4B4
}

.carousel-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 12px;
}
</style>
