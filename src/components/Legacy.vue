<template>
  <div class="row legacy-bg">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-11 q-mx-auto q-pa-md">
          <div :class="$q.screen.xs ? 'q-py-md' : 'q-pa-xl'">
            <q-card
              flat
              class="radius-12 text-center legacy-card"
              :class="$q.screen.xs ? 'q-pa-md' : 'q-pa-xl'"
            >
              <div class="text-h4 text-weight-bold">
                A Legacy of Quality & Commitment
              </div>
              <div class="text-subtitle q-mt-md">
                We work with each and every one of our clients to source the exact make and model of car
                to satisfy their individual needs. We pride ourselves on providing excellent customer
                service before, during, and after the sale or purchase of any vehicle. whether you're
                looking for pre-owned cars in Dubai or a quality used car in Dubai, Linda Cars ensures
                a seamless and trustworthy experience. Our customer-centric approach, international
                standards, and value-driven business philosophy make us the automotive company of choice.
                We are regarded as a pioneer in the GCC automotive industry. From economic sedans and
                SUVs to luxury vehicles — we serve every segment with passion and professionalism.
                We have a strong and committed sales staff with years of experience in satisfying
                customer needs. Feel free to browse our inventory online, schedule a free test drive,
                or get a professional car evaluation from our experts.
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
.legacy-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), /* overlay */ url('/images/legacy.svg') center center / cover no-repeat; /* image */
}

.legacy-card {
  background-color: rgba(33, 150, 243, 0.4);
  color: #ffffff;
}
</style>
