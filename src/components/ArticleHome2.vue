<script setup>
import { ref } from "vue";
</script>

<template>
  <article class="article2">
    <div class="foto-container">
      <img
        class="foto"
        src="../assets/WhatsApp_Image_2023-10-23_at_10.40.27_PM-removebg.png"
        alt=""
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
.article2 {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
}
.foto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding-top: 40px;
}
.foto {
  width: 280px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  border: 2px solid rgb(2, 116, 249);
  margin: 0 auto;
}

@media screen and (min-width: 400px) {
}
@media screen and (min-width: 800px) {
  .foto-container {
    padding-top: 0px;
  }
  .foto {
    width: 350px;
  }
}

@media screen and (min-width: 1024px) {
  .foto {
    width: 400px;
  }
}
</style>
