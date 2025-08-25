<template>
  <div class="container row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6"
         :class="$q.screen.lt.md ? 'order-2' : ''"
    >
      <div class="text-h4 text-weight-bold">
        Welcome to Auto Car Dealer Solutions
      </div>
      <div class="text-blue-6 text-h5 text-weight-medium q-mt-sm q-pt-xs">
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
</template>
<script setup>

</script>
<style scoped>
.order-2 {
  order: 2;
}

.order-1 {
  order: 1;
}
</style>
