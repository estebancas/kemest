<template>
  <div class="slider-card px-3">
    <div class="picture-holder">
      <a>
        <figure>
          <img :src="img" draggable="false">
        </figure>
      </a>
      <div class="picture-overlay text-center">QUICK VIEW</div>
    </div>
    <div class="item-description pt-2 d-flex">
      <b-row>
        <b-col sm="12" class="text-left">
          <label class="item-name m-0">{{name}}</label>
        </b-col>
        <b-col sm="12" class="text-left">
          <label class="item-price m-0">${{price}}</label>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderItem",
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin desktop-card() {
  &:hover .picture-overlay {
    height: 10%;
  }
  // &:hover a img {
  //   -webkit-transform: scale(1.3);
  //   transform: scale(1.3);
  // }
}
.slider-card {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.picture-holder {
  height: 90%;
  position: relative;
  @media (min-width: 768px) {
    @include desktop-card();
  }
}

.picture-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f9f9f9;
  cursor: pointer;
  height: 0;
  overflow: hidden;
  transition: 0.5s ease;
}

.picture-holder a {
  width: 100%;
  height: 100%;
  display: block;
}

.picture-holder a figure {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.picture-holder a img {
  width: 100%;
  height: 100%;

  /*zoom in animation*/
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

// .picture-holder:hover a img {
//   -webkit-transform: scale(1.3);
//   transform: scale(1.3);
// }
</style>

