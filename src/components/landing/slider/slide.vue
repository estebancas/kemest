<template>
  <div class="slider-card">
    <div class="picture-overlay">
      <a>
        <img
        :src="img"
        draggable="false"
        @mousedown="triggerStartDrag($event)"
        @mouseup="triggerStopDrag($event)"
        >
      </a>
    </div>
    <div class="item-description pt-2 d-flex">
      <label class="item-name m-0">{{name}}</label>
      <label class="item-price m-0">${{price}}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleSlider",
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
  },
  methods: {
    triggerStartDrag(e) {
      this.$emit("mousedown", e);
    },
    triggerStopDrag(e) {
      this.$emit("mouseup", e);
    }
  }
};
</script>
<style scoped>
.slider-card {
  display: inline-block;
  overflow: hidden;
  width: 565px;
  height: 565px;
  margin-right: 30px;
}

.slider-card img {
  width: 100%;
}

.picture-overlay {
    height: 90%;
}

.picture-overlay a {
    width: 100%;
    height: 100%;
    display: block;
}

.picture-overlay a img {
    width: 100%;
    height: 100%;
}

.item-description {

}
</style>

