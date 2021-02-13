<template>
  <div id="app">
    <Header/>
    <Modal></Modal>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Modal from './components/Modal';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Modal,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
