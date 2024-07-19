<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from './components/AppHeader.vue';
import FormMaps from './components/others/FormMaps.vue';
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

// alert per avvisarci XD
window.alert("---> PULLATE SEMPRE APPENA ENTRATE XD <---")

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
