<template>
  <div class="bg-grey-10 q-py-xl relative-position overflow-hidden">
    <img
      src="/images/union-left.svg"
      alt="decor-left"
      class="decor"
      :class="$q.screen.xs ? 'decor-left-mobile' : 'decor-left'"
    />
    <img
      src="/images/union-right.svg"
      alt="decor-right"
      class="decor "
      :class="$q.screen.xs ? 'decor-right-mobile' : 'decor-right'"
    />
    <div class="container">
      <!-- Section Heading -->
      <div class="text-center text-white q-mb-xl">
        <div class="text-weight-600 q-pt-lg"
             :class="$q.screen.lt.md ? 'text-h4 q-px-md' : 'text-h3'"
        >
          Healthcare Workers Love Us
        </div>
        <div
          class="text-h5"
          :class="$q.screen.lt.md ? 'q-px-md q-mt-md' : 'q-mt-sm'"
        >
          Customer Satisfaction is Our Working Motivation!
        </div>
      </div>

      <!-- Carousel -->
      <Carousel v-bind="config" class="q-mt-md q-pb-lg">
        <Slide
          v-for="(review, index) in reviews"
          :key="index"
          class="q-px-sm"
        >
          <div class="column items-center">
            <q-card flat bordered class="testimonial-card">
              <q-card-section class="text-center q-pa-40">
                <div class="text-h6 text-grey-7">
                  {{ review.text }}
                </div>

                <!-- Rating -->
                <q-rating
                  v-model="review.rating"
                  max="5"
                  color="orange"
                  icon="img:/icons/star.svg"
                  size="24px"
                  readonly
                  class="q-mt-lg q-pt-md"
                />
              </q-card-section>
            </q-card>

            <!-- Reviewer info under card -->
            <div class="text-center q-mt-md text-white">
              <div class="text-h5 text-weight-600">
                {{ review.name }}
              </div>
              <div class="text-subtitle">
                {{ review.city }}
              </div>
            </div>
          </div>
        </Slide>

        <!-- Custom navigation -->
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
    </div>
  </div>
  <!--          :style="{-->
  <!--          backgroundImage: `url(${currentSlide === index ? '/images/union.svg' : '/images/polygon.svg'})`,-->
  <!--          backgroundSize: 'contain',-->
  <!--          }"-->

</template>
<script setup>
import "vue3-carousel/carousel.css";
import {Carousel, Slide, Navigation} from "vue3-carousel";
import {ref} from "vue";

const currentSlide = ref(0);
// autoplay: 4000,

const config = {
  itemsToShow: 3,
  wrapAround: true,
  gap: 20,
  transition: 500,
  snapAlign: "center",
  pauseAutoplayOnHover: true,
  mouseDrag: true,
  touchDrag: true,
  breakpoints: {
    1024: {
      itemsToShow: 3,
    },
    608: {
      itemsToShow: 2,
    },
    280: {
      itemsToShow: 1,
    },
  },
};

const reviews = ref([
  {
    text: "My sleep and mood improved after following the recommendations from the test. Blood sugar levels are also reducing with the dietary intervention given.",
    rating: 5,
    name: "Zahid bin Waleed",
    city: "Dubai City Name",
  },
  {
    text: "My sleep and mood improved after following the recommendations from the test. Blood sugar levels are also reducing with the dietary intervention given.",
    rating: 5,
    name: "Sheikh Sultan Wasif",
    city: "Dubai City Name",
  },
  {
    text: "My sleep and mood improved after following the recommendations from the test. Blood sugar levels are also reducing with the dietary intervention given.",
    rating: 5,
    name: "Sorabh Sharma",
    city: "Dubai City Name",
  },
  {
    text: "My sleep and mood improved after following the recommendations from the test. Blood sugar levels are also reducing with the dietary intervention given.",
    rating: 5,
    name: "Sheikh Sultan Wasif",
    city: "Dubai City Name",
  },
  {
    text: "My sleep and mood improved after following the recommendations from the test. Blood sugar levels are also reducing with the dietary intervention given.",
    rating: 5,
    name: "Sorabh Sharma",
    city: "Dubai City Name",
  },
]);
</script>

<style scoped>
.decor {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.decor-left {
  top: 20px;
  left: 20px;
  width: 180px;
}

.decor-right {
  bottom: 20px;
  right: 1px;
  width: 140px;
}

.decor-left-mobile {
  top: 20px;
  left: 20px;
  width: 120px;
}

.decor-right-mobile {
  bottom: 20px;
  right: 1px;
  width: 90px;
}

.testimonial-card {
  border-radius: 16px;
  min-height: 300px;
  position: relative;
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.q-pa-40 {
  padding: 40px 36px;
}

:deep(.carousel__prev) {
  transform: translateY(-159%) !important;
}


:deep(.carousel__next) {
  transform: translateY(-159%) !important;
}

</style>
