<script setup>
import { ref } from "vue";
const { skill, img, alt } = defineProps(["skill", "img", "alt"]);
const url = `src/assets/logos/${img}`;
</script>

<template>
  <article class="card-skill">
    <img class="" :src="url" :alt="alt" />
    <p>{{ skill }}</p>
  </article>
</template>

<style scoped lang="scss">
.card-skill {
  border-radius: 15px;
  padding: 10px 15px;
  // padding: 10px 20px;
  margin: 5px;
  border: 1px solid $primary-color;
  text-align: center;
  flex: 0.5 0.5 60px;
}
.card-skill p {
  font-size: 1.4rem;
  font-weight: 600;
}
.card-skill img {
  width: 50px;
}
@media screen and (min-width: 760px) {
  .card-skill img {
    // width: 60px;
  }
}
</style>
