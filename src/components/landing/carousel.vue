<template>
  <div class="carousel-holder">
    <div class="caroucel-overlay d-flex justify-content-center align-items-center">
      <div class="overlay-info">
        <p class="mb-5">Discover your new addiction</p>

        <h2 class="my-4">Mineral Based Makeup Products</h2>

        <label>SHOP NOW ></label>
      </div>
    </div>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "CustomCarousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-holder {
  position: relative;
}

.carousel-holder .caroucel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  opacity: 0.5;
}

.overlay-info {
  color: white;
}

.overlay-info p {
  font-size: 25px;
  letter-spacing: 2px;
}

.overlay-info h2 {
  letter-spacing: 1px;
}

.overlay-info label:hover {
  color: #dbfcde !important;
  cursor: pointer;
}
</style>
