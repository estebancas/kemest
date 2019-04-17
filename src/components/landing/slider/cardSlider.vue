<template>
  <div id="slider" class="slider" @mousemove="mouseMoving($event)">
    <div class="slider-cards" :style="`transform: translate3d(${cardsX}px,0,0)`">
      <div
        @mousedown="startDrag($event)"
        @mouseup="stopDrag($event)"
        v-for="(slide, index) in slides"
        :key="index"
        class="slider-card"
      >
        <img :src="slide.image" :alt="slide.title" draggable="false">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSlider",
  data() {
    return {
      slides: [
        {
          title: "Ready Player One",
          image:
            "https://picsum.photos/200/300/?random"
        },
        {
          title: "Avengers: Infinity War",
          image:
            "https://picsum.photos/200/300/?random"
        },
        {
          title: "Coco",
          image:
            "https://picsum.photos/200/300/?random"
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
  width: 900px;
  margin: 20px 50px;
  z-index: 1;
}

.slider-card {
  display: inline-block;
  background-color: grey;
  overflow: hidden;
  width: 260px;
  height: 360px;
  margin-right: 30px;
  border-radius: 12px;
}

.slider-card img {
  width: 100%;
}
</style>

