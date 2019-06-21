<template>
  <div class="community-section mt-5 mb-4">
    <b-container fluid>
      <h2># Join the KIWIE commerce Community</h2>

      <b-row class="imgs-section">
        <b-col v-for="(col, index) in imgs" v-bind:key="index" class="text-center mr-3 p-0">
          <div class="img-holder">
            <div class="img-overlay">
              <div class="content">
                <b-row>
                  <b-col>
                    <a>
                      <span>4</span>
                      <font-awesome-icon :icon="['far', 'heart']"/>
                    </a>
                  </b-col>
                  <b-col>
                    <a>
                      <span>3</span>
                      <font-awesome-icon :icon="['far', 'comment']"/>
                    </a>
                  </b-col>
                </b-row>
              </div>
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
<style lang="scss" scoped>
.imgs-section {
  margin-top: 90px;
  .img-holder {
    width: 100%;
    position: relative;
    &:hover .img-overlay {
      display: flex;
      color: #C0C0C0;
    }
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
      figure {
        margin: 0;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 100%;
          height: 200px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

.img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  justify-content: center;
  align-items: center;
  .content {
    a {
      cursor: pointer;
      &:hover {
        color: white !important;
      }
      span {
        margin-right: 5px;
      }
      /deep/ svg {
        vertical-align: middle;
      }
    }
  }
}
</style>

