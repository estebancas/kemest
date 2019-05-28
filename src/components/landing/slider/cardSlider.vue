<template>
  <div id="slider" class="slider" @mousemove="mouseMoving($event)">
    <div class="slider-cards" :style="`transform: translate3d(${cardsX}px,0,0)`">
      <!-- <div
        @mousedown="startDrag($event)"
        @mouseup="stopDrag($event)"
        v-for="(slide, index) in slides"
        :key="index"
        class="slider-card"
      >
        <img :src="slide.image" :alt="slide.title" draggable="false">
      </div> -->
      <SingleSlider
        v-for="(slide, index) in slides"
        @mousedown="startDrag($event)"
        @mouseup="stopDrag($event)"
        v-bind:key="index"
        v-bind:img="slide.image"
        v-bind:price="slide.price"
        v-bind:name="slide.name">
      </SingleSlider>
    </div>
  </div>
</template>
<script>
import SingleSlider from "./slide.vue";

export default {
  name: "CardSlider",
  components: {
    SingleSlider
  },
  data() {
    return {
      slides: [
        {
          name: "test one",
          image:
            "https://picsum.photos/200/300/?random",
          price: "29.00"
        },
        {
          name: "test two",
          image:
            "https://picsum.photos/200/300/?random",
          price: "23.80"
        },
        {
          name: "test three",
          image:
            "https://picsum.photos/200/300/?random",
          price: "30"
        }
      ],
      selectedIndex: 0,
      dragging: false,
      initialMouseX: 0,
      initialCardsX: 0,
      cardsX: 0
    };
  },
  computed: {
    selectedSlide() {
      return this.slides[this.selectedIndex];
    }
  },
  methods: {
    startDrag(e) {
      this.dragging = true;
      this.initialMouseX = e.pageX;
      this.initialCardsX = this.cardsX;
    },
    stopDrag(e) {
      this.dragging = false;

      const cardWidth = 290;
      const nearestSlide = -Math.round(this.cardsX / cardWidth);
      this.selectedIndex = Math.min(
        Math.max(0, nearestSlide),
        this.slides.length - 1
      );
    },
    mouseMoving(e) {
      if (this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX;
        const targetX = this.initialCardsX + dragAmount;
        this.cardsX = targetX;
      }
    }
  }
};
</script>
<style scoped>
.slider {
  overflow: hidden;
}

.slider-cards {
  position: relative;
  width: 1785px;
  margin: 20px 5px;
  z-index: 1;
}
</style>

