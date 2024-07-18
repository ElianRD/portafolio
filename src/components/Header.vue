<script setup>
import { ref } from "vue";
const hamburg = ref(false);
const hamburgerOn = () => {
  hamburg.value = !hamburg.value;
  console.log(hamburg.value);
};
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/logo1.png" alt="" />
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
    <div>
      <input type="checkbox" class="checkbox" id="checkbox" />
      <label for="checkbox" class="checkbox-label">
        <!-- <font-awesome-icon icon="fa-solid fa-sun" />
        <font-awesome-icon icon="fa-solid fa-moon" /> -->
        <span class="ball"></span>
      </label>
    </div>

    <div class="container-lang">
      <img src="../assets/img/ing.png" alt="" />
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
  </header>
</template>

<style scoped lang="scss">
@import "../assets/hamburger.css";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 70px;

  background-color: $backgound-black;
  color: white;
}

.header-logo {
  margin-left: 10px;
  width: 150px;
}
.header-logo img {
  width: 100%;
  height: auto;
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
  z-index: 999;
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

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #111;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

.container-lang {
  width: 50px;
  padding: 5px;
}
.container-lang img {
  width: 100%;
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

@media screen and (min-width: 800px) {
  .header-logo {
    margin-left: 20px;
    width: 180px;
  }
  .navigation {
    background-color: initial;
    display: initial;
    flex-direction: initial;
    width: initial;
    // font-size: initial;
    // text-align: initial;
    position: initial;
    top: initial;
    bottom: initial;
    transition: initial;
    z-index: initial;
    transform: initial;
  }

  // .navigation {
  //   flex-direction: row;
  //   transform: translate(0, 0);
  //   position: initial;
  //   // top: 0px;
  // }

  .hamburger {
    display: none;
  }

  .navigation a.router-link-exact-active:nth-child(1) ~ .animation {
    left: 145px;
    top: 65px;
  }

  .navigation a.router-link-exact-active:nth-child(2) ~ .animation {
    left: 300px;
    top: 65px;
  }

  .navigation a.router-link-exact-active:nth-child(3) ~ .animation {
    left: 370px;
    top: 65px;
  }

  .navigation a.router-link-exact-active:nth-child(4) ~ .animation {
    left: 435px;
    top: 65px;
  }
  .navigation a:nth-child(1):hover ~ .animation {
    left: 145px;
    top: 65px;
  }

  .navigation a:nth-child(2):hover ~ .animation {
    left: 300px;
    top: 65px;
  }
  .navigation a:nth-child(3):hover ~ .animation {
    left: 370px;
    top: 65px;
  }
  .navigation a:nth-child(4):hover ~ .animation {
    left: 435px;
    top: 65px;
  }
}
</style>
