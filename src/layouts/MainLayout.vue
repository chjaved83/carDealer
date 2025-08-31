<template>
  <q-layout>
    <q-header
      v-if="route.path !== '/car-detail'"
      class="bg-white"
      style="padding-top: 0 !important;"
    >
      <HeaderSection/>
      <BannerSection/>
    </q-header>

    <!-- Main Page Container -->
    <q-page-container style="padding-bottom: 0;"
                      :style="route.path === '/car-detail' ? 'padding-top:0' : ''">
      <router-view/>
    </q-page-container>
    <Footer/>
  </q-layout>
</template>
<script setup>
import {ref} from "vue";
import Footer from "components/Footer.vue";
import {useRoute} from 'vue-router'
import BannerSection from "components/BannerSection.vue";
import HeaderSection from "components/HeaderSection.vue";

const route = useRoute()

</script>
<style scoped>
.hidden{
  display: none;
}
</style>
