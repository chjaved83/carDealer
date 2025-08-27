<template>

  <div class="relative-position">
    <!-- Left full image -->
    <q-img
      src="/images/leftMask.jpg"
      class="mask left-image"
    />

    <!-- Right full image -->
    <q-img
      src="/images/rightMask.jpg"
      class="mask right-image"
    />
    <div class="bg-white q-py-xl">
      <div class="container row relative-position ">
        <div v-if="guaranteeSection" class="row bg-white text-center">
          <div class="col-12 q-mt-lg">
            <div class="text-primary text-weight-bold text-h4">
              DISCOVER THE <span class="text-red">BEST PRICES</span> IN THE TOWN
            </div>
            <div class="text-h5 text-weight-600 text-grey-7">
              "YOUR <span class="text-red">#1 TRUSTED</span> PREMIUM CAR PARTNER"
            </div>
          </div>
          <div
            class="col-12 col-sm-10 col-md-8 q-mx-auto text-28 text-primary q-py-sm q-mb-xl">
            We guarantee no consignment, no hidden fees, and no misleading listings —
            just honest service backed by clear reports and fair pricing.
          </div>
        </div>
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6"
          :class="$q.screen.lt.md ? 'order-2' : 'q-py-lg'"
        >
          <div class="text-h4 text-weight-bold">
            Welcome to Auto Car Dealer Solutions
          </div>
          <div
            :class="guaranteeSection ? 'text-red' : 'text-blue-6'"
            class="text-h5 text-weight-medium q-mt-sm q-pt-xs"
          >
            Our mission is to help our clients navigate to success
          </div>
          <div class="text-h6 q-mt-sm q-pt-xs text-grey-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris nisi,
            rhoncus quis lorem in, tristique feugiat libero. Duis fringilla gravida risus,
            non euismod est imperdiet non. Quisque varius tortor vitae metus ornare,
            ut iaculis arcu pellentesque. Etiam rhoncus diam ullamcorper urna pellentesque
            feugiat. Suspendisse nulla libero, pellentesque vitae nunc id,
            sodales rhoncus ligula. Fusce vulputate volutpat nulla et scelerisque. 
          </div>
          <div class="text-h4 text-weight-bold q-mt-lg">
            Brand Story (Our History)
          </div>
          <div class="text-h6 q-mt-sm text-grey-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris nisi, rhoncus
            quis lorem in, tristique feugiat libero. Duis fringilla gravida risus, non euismod est
            imperdiet non. Quisque varius tortor vitae metus ornare, ut iaculis arcu pellentesque.
            Etiam rhoncus diam
            ullamcorper urna pellentesque feugiat. Suspendisse nulla libero, pellentesque vitae nunc id,
          </div>
        </div>
        <div
          class="col-12 q-mx-auto col-sm-9 col-md-6 col-lg-5 q-my-auto"
          :class="$q.screen.gt.md ? 'q-ml-auto' : 'order-1'"
        >
          <q-img src="/images/welcomeImage.jpg" class=""/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  guaranteeSection: Boolean
})
</script>
<style scoped>
.order-2 {
  order: 2;
}

.order-1 {
  order: 1;
}

.left-image {
  left: 0;
  top: 0;
  bottom: 0;
  width: 25%;
  object-fit: cover;
  z-index: 0;
}

.right-image {
  right: 0;
  top: 0;
  bottom: 0;
  width: 25%;
  object-fit: cover;
  z-index: 0;
}

.mask {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

</style>
