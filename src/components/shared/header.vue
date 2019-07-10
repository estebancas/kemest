<template>
  <div class="header">
    <div class="header-banner p-2 mb-3">
      <p class="my-2">Free Shipping Over $50 + 3 Free Samples With Every Order</p>
    </div>
    <div class="px-4 position-relative">
      <h2 class="mb-3 mt-3 mt-md-5 mb-md-0 title">kiwie</h2>
      <a class="hamburguer-menu d-block d-md-none" v-on:click="isOpen = true">
        <span>
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </span>
      </a>
    </div>
    <b-container class="d-none d-md-block">
      <b-row>
        <b-col cols="12 p-0">
          <div class="nav d-flex justify-content-center">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="isOpen" class="fixed-top mobile-menu">
      <a class="close-mobile-menu" v-on:click="isOpen = false">
        <span>
          <font-awesome-icon :icon="['fas', 'times']"/>
        </span>
      </a>
      <div class="d-flex justify-content-center">
        <ul class="mobile-nav">
          <li class="d-flex justify-content-center align-items-center">
            <a href="#">Home</a>
          </li>
          <li
            class="d-flex justify-content-center align-items-center position-relative flex-column"
          >
            <a href="#">Shop</a>
            <a class="arrow position-absolute" v-b-toggle.collapse-1>
              <span>
                <font-awesome-icon :icon="['fas', 'chevron-down']"/>
              </span>
            </a>
            <b-collapse id="collapse-1" class="mt-2">
              <ul style="margin: 0 !important">
                <li>
                  <a href="#">Flower Pots</a>
                </li>
                <li>
                  <a href="#">Cement crafts</a>
                </li>
                <li>
                  <a href="#">Exfoliants</a>
                </li>
              </ul>
            </b-collapse>
          </li>
          <li class="d-flex justify-content-center align-items-center">
            <a href="#">Press</a>
          </li>
          <li class="d-flex justify-content-center align-items-center">
            <a href="#">About</a>
          </li>
          <li class="d-flex justify-content-center align-items-center">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: white;
  @media screen and (max-width: 768px) {
    position: unset;
  }
}

.hamburguer-menu {
  padding: 5px 10px;
  position: absolute;
  right: 5%;
  transform: translatey(-146%);
  cursor: pointer;
}

.mobile-menu {
  background-color: $primary-color;
  height: 100%;
  .close-mobile-menu {
    padding: 5px 10px;
    position: absolute;
    top: 4%;
    right: 9%;
    font-size: 27px;
  }
  ul {
    list-style: none;
    width: 100%;
    margin-top: 40%;
    padding: 0;
    li {
      min-height: 45px;
      a {
        font-size: 25px;
        color: black;
      }
      .arrow {
        right: 25%;
        font-size: 20px;
        padding: 5px 10px;
        top: 0px;
      }
    }
  }
}

.header .title {
  letter-spacing: 4px;
}

.header-banner {
  background-color: $primary-color;
}

.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav ul li {
  float: left;
}

.nav ul li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  font-size: 18px;
}

.nav ul li a:hover {
  color: $secondary-color;
}
</style>
