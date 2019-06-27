<template>
  <div class="footer mt-5 py-5 mb-5 mb-md-0">
    <b-container fluid>
      <b-row class="justify-content-center my-3 main-row">
        <b-col sm="4" class="text-left px-3 px-md-5">
          <h6 class="text-center text-md-left mb-4">JOIN OUR NEWSLETTER</h6>
          <b-form-input type="email" placeholder="Enter your email here*"></b-form-input>
          <FlatButton class="mt-3 mb-4" text="Subscribe Now"/>
          <label class="mt-5 d-none d-md-block footer-creator-label">&copy;2019 by Phantom.creative</label>
        </b-col>
        <div class="hr-holder d-none d-md-block">
          <div class="hr"></div>
        </div>
        <b-col sm="4 px-3 px-md-5">
          <b-row class="pt-3 mt-4">
            <b-col cols="4">
              <b-row class="text-left">
                <b-col sm="12">
                  <label>Stockists</label>
                </b-col>
                <b-col sm="12">
                  <label>About</label>
                </b-col>
                <b-col sm="12">
                  <label>Contact</label>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="4">
              <b-row class="text-left">
                <b-col sm="12">
                  <label>FAQ</label>
                </b-col>
                <b-col sm="12">
                  <label>Shipping & returns</label>
                </b-col>
                <b-col sm="12">
                  <label>Store Policy</label>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="4">
              <b-row class="text-left">
                <b-col sm="12">
                  <label>Facebook</label>
                </b-col>
                <b-col sm="12">
                  <label>Instagram</label>
                </b-col>
                <b-col sm="12">
                  <label>Pinterest</label>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <label class="text-left mt-5 d-block d-md-none footer-creator-label">&copy;2019 by Phantom.creative</label>
    </b-container>
  </div>
</template>

<script>
import FlatButton from "../shared/button/flatButton";

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
  border-top: 1px solid;
  .footer-creator-label {
    color: #555555;
    font-weight: 100;
    font-family: monospace;
  }
  label {
    cursor: pointer;
  }
  .main-row {
    position: relative;
  }
  .hr-holder {
    position: absolute;
    height: 70%;
    width: 0;
    max-width: 0;
    .hr {
      border-left: 1px solid;
      height: 100%;
    }
  }
}
</style>
