<script setup>
import { ref } from "vue";
</script>

<template>
  <article class="article1 home-text">
    <div class="presentacion home-text-content">
      <h1>Hi<span class="mano">👋</span>, I am</h1>
      <h1>Elian Encarnacion</h1>
      <div class="wave-container">
        <h2 class="border">Software Development</h2>
        <h2 class="wave">Software Development</h2>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim corporis
        maxime esse minus, unde dolorum molestiae alias iusto sunt sapiente
        minima officia similique libero sint sequi Voluptas, quo
        doloribus.facere debitis fugiat deserunt consectetur distinctio placeat
        cupiditate nemo.
      </p>
      <div class="btn-cv">
        <a download="Elian cv" href="./ElianCV (1).pdf"
          ><span><i class="bx bxs-file-pdf"></i></span>Check Resume</a
        >
        <a href=""
          ><span><i class="bx bx-phone-call"></i></span> Contact Me</a
        >
      </div>
    </div>
    <div class="redes">
      <a href=""><i class="bx bxl-linkedin-square"></i></a>
      <a href=""><i class="bx bxl-gmail"></i></a>
      <a href=""><i class="bx bxl-github"></i></a>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article1 {
  margin: 0 auto;
  height: auto;
  flex: 1 1 400px;
  padding-bottom: 50px;
}
.home-text-content {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}
.home-text-content h1 {
  font-size: 3rem;
}
.mano {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: moveAndBack 2s linear infinite;
}
.home-text-content h2 {
  font-size: 2.2rem;
  line-height: 3rem;
  /* color: #1abc9c; */
  position: absolute;
}
.wave-container {
  width: 100%;
}
.border {
  color: rgb(255, 255, 255);
  text-shadow: -0.5px -0.5px 0 rgb(255, 255, 255), 0.5px -0.5px 0 white,
    0.5px 0.5px 0 #1abc9c, 0.5px 0.5px 0 #1abc9c;
}
.wave {
  color: #1abc9c;
  animation: wave 2s ease-in-out infinite;
}
.home-text-content p {
  margin-top: 40px;
  font-size: 1.6rem;
  padding: 10px 0;
}

.btn-cv a {
  position: relative;
  display: inline-block;
  width: 240px;
  text-align: center;

  border: 2px solid #1abc9c;
  padding: 10px 10px;

  border-radius: 10px;
  background: $primary-color;
  color: $backgound-black;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 700;
  z-index: 1;
  transition: 0.9s;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10px;
}
.btn-cv a:hover {
  color: $primary-color;
}
.btn-cv a:nth-child(2) {
  color: $primary-color;
  background-color: $backgound-black;
}

.btn-cv a:nth-child(2):hover {
  color: $backgound-black;
}

.btn-cv a::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: $backgound-black;
  z-index: -1;
  transition: 0.5s;
}
.btn-cv a:nth-child(2)::before {
  background-color: $primary-color;
}
.btn-cv a:hover::before {
  width: 100%;
}

/* iconos de las redes sociales */

.redes {
  display: flex;
  justify-content: space-between;
  left: 40px;
  bottom: 20px;
  width: 200px;
  margin: auto;
}
.redes a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 50px;
  height: 50px;
  color: #1abc9c;
  font-size: 35px;
  border: 2px solid #1abc9c;
  border-radius: 50%;
  transition: all 0.5s;
  z-index: 1;
  overflow: hidden;
}
.redes a:hover {
  border: 2px solid #0a66c2;
  color: #0a66c2;
}
.redes a:nth-child(2):hover {
  color: rgb(255, 0, 0);
  border: 2px solid rgb(255, 0, 0);
}
.redes a:nth-child(3):hover {
  color: black;
  border: 2px solid black;
}
.redes a::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ffffff;
  z-index: -1;
  transition: 0.5s;
}
.redes a:hover:before {
  width: 100%;
}

@keyframes moveAndBack {
  0%,
  100% {
    transform: translateX(0) rotate(-10deg);
  }
  50% {
    transform: translateX(0) rotate(45deg);
  }
}
@keyframes wave {
  0%,
  100% {
    clip-path: polygon(
      0% 47%,
      10% 48%,
      33% 54%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

@media screen and (min-width: 400px) {
  .home-text-content h1 {
    font-size: 4rem;
  }
  .home-text-content h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    /* color: #1abc9c; */
    position: absolute;
  }
}
@media screen and (min-width: 760px) {
  .btn-cv a:nth-child(2) {
    margin-left: 20px;
  }

  .home-text-content h1 {
    font-size: 4rem;
  }
  .home-text-content h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    position: absolute;
  }
}

@media screen and (min-width: 800px) {
  .btn-cv a:nth-child(2) {
    margin-left: 0px;
  }
  .home-text-content {
    text-align: start;
  }
  .home-text-content h1 {
    font-size: 4rem;
  }

  .redes {
    margin: 0px;
    margin-left: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .home-text-content h1 {
    font-size: 5rem;
  }
  .home-text-content p {
    margin-top: 40px;
    font-size: 2rem;
    padding: 10px 0;
  }

  .btn-cv a {
    width: initial;
  }
  .btn-cv a:nth-child(2) {
    margin-left: 20px;
  }
}
</style>
