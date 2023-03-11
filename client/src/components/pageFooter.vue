<template>
  <div>
    <nav>
      <ul>
        <li class="nav-link">
          <router-link class="nav-link" to="/AboutSite"
            >About this site</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
}

.nav-link:hover {
  cursor: pointer;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-family: "Paytone One", sans-serif;
  color: black;
  background-color: white;
}

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;

  z-index: 999;
}



</style>
