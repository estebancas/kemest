<template>
  <div class="landing px-0 px-md-5">
    <CustomCarousel/>

    <ShopItemTop :backgroundImgs="backgroundImgs"/>

    <CardSwiper/>

    <ShopItemBottom :backgroundImgs="backgroundImgs"/>

    <Community/>
  </div>
</template>
<script>
import CustomCarousel from "./carousel";
import CardSwiper from "./Slider/cardSwiper";
import ShopItemTop from "./ShopItems/shopItemTop";
import ShopItemBottom from "./ShopItems/shopItemBottom";
import Community from "./Community";

export default {
  name: "LandingPage",
  components: {
    CustomCarousel,
    ShopItemTop,
    ShopItemBottom,
    Community,
    CardSwiper
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
<style lang="scss" scoped>
.landing {
  margin-top: 210px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
}
</style>
