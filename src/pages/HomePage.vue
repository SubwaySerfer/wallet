<template>
  <main class="home-page">
    <the-header />
    <promo-section />
    <about-us />
    <the-footer />
  </main>
</template>

<script lang="ts">
import AboutUs from '../components/home/AboutUs.vue';
import PromoSection from '../components/home/PromoSection.vue';

export default {
  components: {
    PromoSection,
    AboutUs
  },
};
</script>
