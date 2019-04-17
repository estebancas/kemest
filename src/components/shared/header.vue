<template>
  <div class="header">
    <div class="header-banner py-2 mb-3">
      <p class="my-2">Free Shipping Over $50 + 3 Free Samples With Every Order</p>
    </div>
    <h2 class="mt-5">kiiwie</h2>
    <b-container>
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
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #dbfcde;
}
</style>
