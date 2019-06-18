<template>
  <div id="app">
    <Header/>
    <LandingPage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/header.vue'
import LandingPage from './components/landing/landingPage.vue'
import Footer from './components/shared/footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    LandingPage,
    Footer
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
