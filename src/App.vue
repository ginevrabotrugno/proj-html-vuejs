<script>
import AppFooter from "./components/AppFooter.vue";

export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<template>
  <div>

    <AppFooter />
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
