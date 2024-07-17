<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from './components/AppHeader.vue';

// inclusione font
import '@fontsource/barlow-condensed';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,

   
  }
}
</script>

<template>

  <AppHeader />
  <router-view></router-view>
  <AppFooter />


</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
