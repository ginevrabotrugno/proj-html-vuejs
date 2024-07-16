<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from './components/AppHeader.vue';
import CarouselBig from './components/CarouselBig.vue';

// inclusione font
import '@fontsource/barlow-condensed';

export default {
  name: 'App',
  components: {
    AppHeader,
    CarouselBig,
    AppFooter,

   
  }
}
</script>

<template>

  <AppHeader />
  <div>
    <CarouselBig/>
  </div>
  <AppFooter />


</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
