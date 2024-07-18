<script setup>
import { ref, watchEffect } from "vue";

const isDarkMode = ref(localStorage.getItem("theme") === "dark-mode");

watchEffect(() => {
  if (isDarkMode.value) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
  }
});
</script>
<template>
  <div :class="theme">
    <div class="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        class="toggle-checkbox"
        v-model="isDarkMode"
      />
      <label for="toggle" class="toggle-label">
        <span class="toggle-ball"></span>
      </label>
    </div>
  </div>
</template>

<style scoped>
body {
  transition: background-color 0.3s, color 0.3s, background-image 0.3s;
  background-repeat: no-repeat;
  background-size: cover;
}

body.light-mode {
  background-color: #ffffff;
  color: #000000;
  background-image: url("../assets/img/sun.png"); /* Ruta de la imagen del sol */
}

body.dark-mode {
  background-color: #000000;
  color: #ffffff;
  background-image: url("../assets/img/moon.png"); /* Ruta de la imagen de la luna */
}

.toggle-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.toggle-checkbox {
  display: none;
}

.toggle-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 26px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s;
}

.toggle-ball {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle-checkbox:checked + .toggle-label .toggle-ball {
  transform: translateX(24px);
}

.toggle-checkbox:checked + .toggle-label {
  background-color: #66bb6a;
}
</style>
