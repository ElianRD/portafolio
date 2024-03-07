<script setup>
import { ref } from "vue";
const hamburg = ref(false);
const hamburgerOn = () => {
  hamburg.value = !hamburg.value;
  console.log(hamburg);
};
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/prog-gris.png" alt="" />
    </div>

    <div
      class="hamburger hamburger--spin"
      @click="hamburgerOn"
      :class="{ 'is-active': hamburg }"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>

    <nav
      @click="hamburgerOn"
      class="navigation"
      :class="{ 'navigation-active': hamburg }"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About me</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <div class="animation start-home"></div>
    </nav>
    <!-- <nav class="header-nav">
        <ul class="nav-ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="contact">Contact</a></li>
          <div class="animation start-home"></div>
        </ul>
      </nav> -->
  </header>
</template>

<style scoped lang="scss">
@import "../assets/hamburger.css";
.header {
  display: flex;
  width: 100%;
  min-height: 70px;
  // height: 70px;
  background-color: $backgound-black;
  color: white;
}
.navigation {
  background-color: $backgound-black;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  position: fixed;
  top: 69px;
  bottom: 0;
  transition: all 0.3s;
  transform: translate(-100%, 0);
}
.navigation-active {
  transform: translate(0, 0);
}

.navigation {
  a.router-link-exact-active {
    color: white;
  }
}

.animation {
  position: absolute;
  /* height: 100%; */
  height: 5px;
  /* top: 0; */
  // bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background-color: $primary-color;
  width: 100px;
  border-radius: 8px;
  transition: all 0.5s ease 0s;
}
.navigation a {
  // background-color: $backgound-black;
  color: $primary-color;
  text-decoration: none;

  z-index: 1;
  padding: 20px;
}

.navigation a.router-link-exact-active:nth-child(1) ~ .animation {
  top: 45px;
}

.navigation a.router-link-exact-active:nth-child(2) ~ .animation {
  top: 110px;
}

.navigation a.router-link-exact-active:nth-child(3) ~ .animation {
  top: 170px;
}

.navigation a.router-link-exact-active:nth-child(4) ~ .animation {
  top: 235px;
}
.navigation a:nth-child(1):hover ~ .animation {
  top: 45px;
}

.navigation a:nth-child(2):hover ~ .animation {
  top: 110px;
}
.navigation a:nth-child(3):hover ~ .animation {
  top: 170px;
}
.navigation a:nth-child(4):hover ~ .animation {
  top: 235px;
}

.navigation a:hover {
}
</style>
