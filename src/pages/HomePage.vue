<template>
  <main class="home-page">
    <the-header />
    <promo-section />
    <the-footer />
  </main>
</template>

<script lang="ts">
import PromoSection from '../components/layouts/home/PromoSection.vue';

export default {
  components: {
    PromoSection,
  },
};
</script>
