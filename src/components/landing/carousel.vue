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
      :img-width="carousel.width"
      :img-height="carousel.height"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        :img-src="`https://picsum.photos/${this.carousel.width}/${this.carousel.height}/?image=52`"
      ></b-carousel-slide>

      <b-carousel-slide
        :img-src="`https://picsum.photos/${this.carousel.width}/${this.carousel.height}/?image=54`"
      ></b-carousel-slide>

      <b-carousel-slide
        :img-src="`https://picsum.photos/${this.carousel.width}/${this.carousel.height}/?image=58`"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CustomCarousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      carousel: {
        width: 1024,
        height: 400
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    ...mapActions('Globals', ['fetchViewportDevice']),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    handleResize() {
      this.fetchViewportDevice()
        .then(data => {
          if (data.isMobile) {
            this.carousel.width = data.innerWidth;
            this.carousel.height = data.innerWidth;
          }
        });
    }
  },
};
</script>

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
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
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
