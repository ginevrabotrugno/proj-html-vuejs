<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppFooter
    AppHeader
  }
}
</script>

<template>

  <AppHeader />
  <AppFooter />


</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
