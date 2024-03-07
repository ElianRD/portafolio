<script setup>
import { ref } from "vue";
</script>

<template>
  <nav class="header-nav">
    <ul class="nav-ul">
      <li><a href="#home">Home</a></li>
      <li><a href="#about-me">About Me</a></li>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="contact">Contact</a></li>
      <div class="animation start-home"></div>
    </ul>
  </nav>
</template>

<style scoped>
.header {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 65px;
  background-color: #5e4b4b;
  position: sticky;
  top: 0px;
  z-index: 999;
}

.header-logo {
  padding-left: 5px;
  width: 250px;
}
.header-logo h2 {
  font-family: "Agbalumo", sans-serif;
  font-size: 35px;
}
.logo-e {
  /* display: inline-block; */
  /* height: 60px; */
  width: 60px;
  vertical-align: -10px;
  /* font-size: 55px; */
}
.bxl-internet-explorer {
  font-size: 55px;
}
/* .header-nav {
  display: none;
}
.header-nav-active {
  display: block;
} */

.nav-ul {
  list-style: none;
  transform: translate(0, 0);
}
.nav-ul li {
  position: relative;
  display: block;
  text-align: center;
  z-index: 1;
  padding: 20px;
}

.hamburger {
  position: absolute;
  top: 5px;
  right: 10px;
}
.animation {
  position: absolute;
  /* height: 100%; */
  height: 5px;
  /* top: 0; */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background-color: var(--color-secundario);
  width: 100px;
  border-radius: 8px;
  transition: all 0.5s ease 0s;
}

.nav-ul .start-home,
li:nth-child(1):hover ~ .animation {
  top: 50px;
  color: var(--menu-text-color);
}

.nav-ul li:nth-child(2):hover ~ .animation {
  top: 110px;
}
.nav-ul li a:hover {
  color: var(--menu-text-color);
}
.nav-ul li:nth-child(3):hover ~ .animation {
  top: 170px;
  color: var(--menu-text-color);
}

.nav-ul li:nth-child(4):hover ~ .animation {
  top: 230px;
}
.nav-ul li :hover {
  color: var(--menu-text-color);
}

.nav-ul li a {
  width: 100%;
  display: inline-block;
  font-size: 1.8rem;
  font-family: var(--font-family-menu);
  text-decoration: none;
  color: #ffffff;
  line-height: 2rem;
  z-index: 1;
}
.btn-scroll {
  position: sticky;
  bottom: 50px;
  right: 50px;
  padding: 5px;
}
.hidden {
  visibility: hidden;
  opacity: 0;
}

@media screen and (min-width: 800px) {
  .header {
    /* background-color: rgb(89, 94, 94); */
    display: flex;
    justify-content: space-between;
  }
  .nav-ul li {
    display: inline-block;
    text-align: center;
  }
  .header-nav {
    display: block;
    padding-top: 5px;
  }
  .hamburger {
    display: none;
  }

  .nav-ul .start-home,
  li:nth-child(1):hover ~ .animation {
    top: 55px;
    left: 10px;
  }

  .nav-ul li:nth-child(2):hover ~ .animation {
    top: 55px;
    left: 110px;
  }

  .nav-ul li:nth-child(3):hover ~ .animation {
    top: 55px;
    left: 210px;
  }

  .nav-ul li:nth-child(4):hover ~ .animation {
    top: 55px;
    left: 310px;
  }
}
</style>
