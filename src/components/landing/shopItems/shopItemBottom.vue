<template>
  <div class="shop-items-top mt-4 mb-4">
    <b-container fluid>
      <b-row>
        <b-col cols=12 md="5" class="p-0 mr-0 mb-4 mb-md-0 pr-md-3 col text-center">
          <div class="card-holder">
            <div class="picture-overlay d-flex justify-content-center align-items-center">
              <div>
                <p class="mb-5">PICK UP YOUR MAKEUP</p>
                <h3 class="mb-5">New Service - Collect in Store</h3>
                <label>ORDER NOW ></label>
              </div>
            </div>
            <a>
              <figure>
                <div v-bind:style="backgroundImgs.three"></div>
              </figure>
            </a>
          </div>
        </b-col>
        <b-col cols="12" md="7" class="p-0 text-center">
          <div class="card-holder">
            <div
              class="picture-overlay right-picture d-flex justify-content-start align-items-center pl-5 text-left"
            >
              <div>
                <p class="text-left mb-5">ALL ABOUT THE BASE</p>
                <h3 class="text-left mb-4">Nude Liquid Matte Foundation</h3>
                <label class="text-left">SHOP NOW ></label>
              </div>
            </div>
            <a>
              <figure>
                <div v-bind:style="backgroundImgs.four"></div>
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
  name: "ShopItemTop",
  props: {
    backgroundImgs: {
      type: Object,
      required: true,
      default: () => {}
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

.right-picture h3 {
  width: 60%;
}
</style>

