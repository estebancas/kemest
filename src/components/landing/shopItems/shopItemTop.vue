<template>
  <div class="shop-items-top mt-4 mb-4">
    <b-container fluid>
      <b-row>
        <b-col class="p-0 mr-3">
          <div class="card-holder">
            <div class="picture-overlay d-flex justify-content-center align-items-center">
              <div>
                <p>SEASONAL ESSENTIALS</p>
                <h3>Must Have Moisturizing Lip Care</h3>
                <label>SHOP NOW ></label>
              </div>
            </div>
            <a>
              <figure>
                <div v-bind:style="backgroundImgs.one"></div>
              </figure>
            </a>
          </div>
        </b-col>
        <b-col class="p-0 ml-3">
          <div class="card-holder">
            <div class="picture-overlay d-flex justify-content-center align-items-center">
              <div>
                <p>START FRESH</p>
                <h3>New Makeup Removers</h3>
                <label>SHOP NOW ></label>
              </div>
            </div>
            <a>
              <figure>
                <div v-bind:style="backgroundImgs.two"></div>
              </figure>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "shopItemTop",
  props: {
    backgroundImgs: {
        type: Object,
        required: true,
        default: {}
    }
  }
};
</script>
<style scoped>
.card-holder {
  width: 100%;
  position: relative;
}

.card-holder .picture-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}

.card-holder .picture-overlay div {
  color: white;
}

.card-holder .picture-overlay label:hover {
  color: #dbfcde !important;
  cursor: pointer;
}

.card-holder a {
  display: block;
  width: 100%;
}

.card-holder figure {
  margin: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-holder figure div {
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

