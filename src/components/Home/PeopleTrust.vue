<template>
  <div class="container row">
    <div class="col-12 text-h4 text-center q-pt-xl q-my-md">
      <div class="text-primary">
        Why People Trust <span class="text-weight-bold">& Choose</span>
      </div>
      <div class="text-weight-bold text-blue-5">
        Car Dealer Automotive
      </div>
    </div>
    <div class="col-12 col-sm-9 col-md-7 col-lg-6 q-mx-auto text-center text-subtitle text-grey-7 q-mb-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget libero
      quam placerat commodo a ut. Quisque nibh facilisis ac scelerisque vitae.
    </div>
    <div class="col-12 col-md-10 q-mx-auto">
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3 q-pa-sm text-center " v-for="card in cards">
          <q-card flat class="bg-white radius-12 card">
            <q-img class="q-mt-sm q-mb-md" height="120px" width="120px" :src="card.src"/>
            <div class="text-h5 text-weight-600 ">
              {{ card.label }}
            </div>
            <div class="text-grey-7 q-pa-lg">
              {{ card.description }}
            </div>
          </q-card>
        </div>
        <div class="col-12 text-subtitle text-grey-7 q-px-lg text-center q-my-md  q-pb-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget libero non quam
          placerat commodo a ut nibh. Quisque nibh enim, facilisis ac scelerisque vitae, gravida non risus.
          Quisque porta mauris in felis rutrum tristique.
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const cards = [
  {
    src: "/images/repair.jpg",
    label: "Best Services",
    description: "Our staff consists of dedicated and certified A+ and Network"
  },
  {
    src: "/images/staff.jpg",
    label: "Best Staff",
    description: "Our staff consists of dedicated and certified A+ and Network"
  },
  {
    src: "/images/pricing.jpg",
    label: "Simple Pricing",
    description: "Our staff consists of dedicated and certified A+ and Network"
  },
  {
    src: "/images/warranty.jpg",
    label: "Warranty",
    description: "Our staff consists of dedicated and certified A+ and Network"
  },
]
</script>

<style scoped>
.card {
  border-bottom: 5px solid #062E61
}
</style>
