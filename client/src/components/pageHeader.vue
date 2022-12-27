<template>
  <div class="navs">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/Checkout">CheckOut
      <!-- <img src="@/assets/checkout.png" alt="" /> -->
    </router-link>
  </div>
</template>

<script></script>
<style>
.navs {
  /* other styles */
  background-color: #000000; /* change the background color to black */
  height: 50px; /* reduce the height to 50px */
  /* border-radius: 1rem; */
}

.nav-link {
  /* other styles */
  color: #ffffff; /* change the text color to white */
  font-size: 1rem; /* reduce the font size */
  text-decoration: none;
  margin: 0 20px;
  padding: 0 20px; 
}

.nav-link:hover {
  background-color: #cccccc; /* change the hover color to grey */
  border-radius: 1rem;
}

.router-link-exact-active {
  /* other styles */
  background-color: #cccccc; /* change the active link color to grey */
  border-radius: 1rem;
}

:root {
  --primary-color: #000000;
  --secondary-color: #cccccc;
  --text-color: #ffffff;
}

.navs {
  /* other styles */
  background-color: var(--primary-color);
  height: 30px;
  border-radius: 1rem;
  padding-top: 5px;
}

.nav-link {
  /* other styles */
  color: var(--text-color);
  font-size: 1rem;
}

.nav-link:hover {
  background-color: var(--secondary-color);
  border-radius: 1rem;
}

.router-link-exact-active {
  /* other styles */
  background-color: var(--secondary-color);
}
</style>
