<template>
  <div class="header">
    <div class="header-banner p-2 mb-3">
      <p class="my-2">Free Shipping Over $50 + 3 Free Samples With Every Order</p>
    </div>
    <div class="px-4 position-relative">
      <h2 class="mb-3 mt-3 mt-md-5 mb-md-0 title">kiwie</h2>
      <a class="hamburguer-menu d-block d-md-none">
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
    <div class="fixed-top mobile-menu">
      <div class="d-flex justify-content-center">
        <ul class="mobile-nav">
          <li class="d-flex justify-content-center align-items-center">
            <a href="#">Home</a>
          </li>
          <li class="d-flex justify-content-center align-items-center position-relative">
            <a href="#">Shop</a>
            <a class="arrow position-absolute" v-b-toggle.collapse-1>
              <span>
                <font-awesome-icon :icon="['fas', 'chevron-down']"/>
              </span>
            </a>
            <b-collapse id="collapse-1" class="mt-2">
              <h5>Hi!</h5>
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
  name: "Header"
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
}

.hamburguer-menu {
  padding: 5px 10px;
  position: absolute;
  right: 5%;
  transform: translatey(-146%);
  cursor: pointer;
}

.mobile-menu {
  background: #1d976c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dbfcde,
    #93f9b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #dbfcde,
    #93f9b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
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
      }
    }
  }
}

.header .title {
  letter-spacing: 4px;
}

.header-banner {
  background-color: #dbfcde;
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
  color: #009975;
}
</style>
