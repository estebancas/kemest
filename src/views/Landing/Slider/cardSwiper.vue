<template>
  <b-row class="m-0">
    <b-col cols="12" class="p-0">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(slide, index) in slides" v-bind:key="index">
          <OrderItem :img="slide.image" :price="slide.price" :name="slide.name"/>
        </swiper-slide>
        <div class="swiper-button-prev d-block d-md-none" slot="button-prev"></div>
        <div class="swiper-button-next d-block d-md-none" slot="button-next"></div>
      </swiper>
    </b-col>
  </b-row>
</template>
<script>
import OrderItem from "../../Orders/item";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

export default {
  name: "CardSwiper",
  components: {
    OrderItem,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          }
        }
      },
      slides: [
        {
          name: "test one",
          image: "https://picsum.photos/id/114/3264/2448",
          price: "29.00"
        },
        {
          name: "test two",
          image: "https://picsum.photos/id/114/3264/2448",
          price: "23.80"
        },
        {
          name: "test three",
          image: "https://picsum.photos/id/114/3264/2448",
          price: "30"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-button-prev {
  left: -5px;
}

.swiper-button-next {
  right: -5px;
}

.swiper-button-next,
.swiper-button-prev {
  top: 45%;
  background-size: 15px 44px;
}
</style>

