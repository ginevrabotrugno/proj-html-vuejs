<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from './components/AppHeader.vue';
import FormMaps from './components/FormMaps.vue';
// inclusione font
import '@fontsource/barlow-condensed';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/900.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    FormMaps

   
  }
}


</script>

<template>


  <AppHeader />
  
  <router-view></router-view>

  <footer>
    <AppFooter />
  </footer>


</template>

<style lang="scss">
@use './style/general.scss' as *;


</style>
