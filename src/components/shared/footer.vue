<template>
  <div class="footer mt-5 py-5">
    <b-container fluid>
      <b-row class="justify-content-center my-3">
        <b-col sm="4" px-5>
            <h6 class="text-left mb-4">JOIN OUR NEWSLETTER</h6>
            <b-form-input type="email" placeholder="Enter your email here*"></b-form-input>
            <FlatButton class="mt-3" text="Subscribe Now"/>
        </b-col>
        <b-col sm="4" px-5>2</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FlatButton from '../shared/button/flatButton'

export default {
  name: "Footer",
  components: {
    FlatButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  border-top: 2px solid;
}
</style>
