<template>
  <div id="app">
    <Header/>
    <LandingPage />
  </div>
</template>

<script>
import Header from './components/shared/header.vue'
import LandingPage from './components/landing/landingPage.vue'

export default {
  name: 'app',
  components: {
    Header,
    LandingPage
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
