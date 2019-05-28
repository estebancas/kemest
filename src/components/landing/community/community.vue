<template>
  <div class="community-section mt-5 mb-4">
    <b-container fluid>
      <h2># Join the KIWIE commerce Community</h2>

      <b-row class="imgs-section">
        <b-col v-for="(col, index) in imgs" v-bind:key="index" class="text-center mr-3 p-0">
          <div class="img-holder">
            <div class="img-overlay">
              <div class="content"></div>
            </div>
            <a>
              <img v-bind:src="col.img">
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Community",
  data() {
    return {
      imgs: [
        {
          style: {
            background: 'url("https://picsum.photos/id/1022/300/300")'
          },
          img: "https://picsum.photos/id/1022/300/300"
        },
        {
          style: {
            background: 'url("https://picsum.photos/id/1023/300/300")'
          },
          img: "https://picsum.photos/id/1023/300/300"
        },
        {
          style: {
            background: 'url("https://picsum.photos/id/1039/300/300")'
          },
          img: "https://picsum.photos/id/1039/300/300"
        },
        {
          style: {
            background: 'url("https://picsum.photos/id/107/300/300")'
          },
          img: "https://picsum.photos/id/107/300/300"
        },
        {
          style: {
            background: 'url("https://picsum.photos/id/11/300/300")'
          },
          img: "https://picsum.photos/id/11/300/300"
        },
        {
          style: {
            background: 'url("https://picsum.photos/id/159/300/300")'
          },
          img: "https://picsum.photos/id/159/300/300"
        }
      ]
    };
  }
};
</script>
<style scoped>
.imgs-section {
  margin-top: 90px;
}

.img-holder {
  width: 100%;
  position: relative;
}

.img-holder .img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}

.img-holder:hover .img-overlay {
  display: block;
}

.img-holder a {
  display: block;
  width: 100%;
}

.img-holder a img {
  width: 100%;
  height: auto;
}

.img-holder a figure {
  margin: 0;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-holder a figure div {
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

