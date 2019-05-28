<template>
  <div class="landing">
    <CustomCarousel/>

    <shopItemTop :backgroundImgs="backgroundImgs"/>

    <CardSlider/>

    <shopItemBottom :backgroundImgs="backgroundImgs"/>
  </div>
</template>
<script>
import CustomCarousel from "./carousel.vue";
import CardSlider from "./slider/cardSlider.vue";
import shopItemTop from "./shopItems/shopItemTop.vue"
import shopItemBottom from "./shopItems/shopItemBottom.vue"

export default {
  name: "LandingPage",
  components: {
    CustomCarousel,
    CardSlider,
    shopItemTop,
    shopItemBottom
  },
  data() {
    return {
      backgroundImgs: {
        one: {
          backgroundImage: 'url("https://picsum.photos/500?image=824")'
        },
        two: {
          backgroundImage: 'url("https://picsum.photos/id/189/2048/1536")'
        },
        three: {
          backgroundImage: 'url("https://picsum.photos/id/1056/3988/2720")'
        },
        four: {
          backgroundImage: 'url("https://picsum.photos/id/1014/1000/585")'
        }
      }
    };
  }
};
</script>
<style scoped>
.landing {
  padding: 0 5%;
  margin-top: 210px;
}
</style>
