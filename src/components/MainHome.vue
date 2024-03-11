<script setup>
import { ref } from "vue";
import ArticleHome1 from "./ArticleHome1.vue";
import ArticleHome2 from "./ArticleHome2.vue";
</script>

<template>
  <section class="section1 home">
    <ArticleHome2 />
    <ArticleHome1 />
  </section>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  height: auto;
  flex-flow: row wrap;
  color: white;
  background-color: $backgound-black;
}

@media screen and (min-width: 370px) {
  .home-text-content h1 {
    font-size: 4;
  }
  .home-text-content h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    /* color: #1abc9c; */
    position: absolute;
  }
}
@media screen and (min-width: 760px) {
}
@media screen and (min-width: 800px) {
  .article1 {
    order: 1; /* Cambia el orden del primer artículo */
  }

  .article2 {
    order: 2; /* Cambia el orden del segundo artículo */
  }
}
@media screen and (min-width: 910px) {
  .home-text-content h1 {
    font-size: 5rem;
  }
}
</style>
