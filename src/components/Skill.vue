<script setup>
import { ref } from "vue";
import CardSkill from "./CardSkill.vue";
</script>

<template>
  <section class="skills">
    <div class="skills-text-container">
      <h2 class="skill-title">Technical skills</h2>
      <p class="skills-text">
        These are the technological skills I've honed during my university
        years, gained through coursework and personal projects I've built.
      </p>
    </div>
    <div class="skill-cards">
      <article class="article-skill">
        <h3>frontend</h3>
        <div class="cards-container">
          <CardSkill
            skill="HTLM"
            img="html-svgrepo-com.svg"
            alt="logo de html"
          />
          <CardSkill
            skill="CSS"
            img="css-3-svgrepo-com.svg"
            alt="logo de css"
          />
          <CardSkill
            skill="Tailwind"
            img="tailwind-svgrepo-com.svg"
            alt="logo de tailwind"
          />
          <CardSkill
            skill="SASS"
            img="sass-svgrepo-com.svg"
            alt="logo de Sass"
          />
          <CardSkill
            skill="JavaScript"
            img="js-svgrepo-com.svg"
            alt="logo de JavaScript"
          />
          <CardSkill
            skill="Vue JS"
            img="vue-9-logo-svgrepo-com.svg"
            alt="logo de vue js"
          />
        </div>
      </article>
      <article class="article-skill">
        <h3>Backend</h3>
        <div class="cards-container">
          <CardSkill
            skill="Node JS"
            img="node2-svgrepo-com.svg"
            alt="logo de node js"
          />
          <CardSkill
            skill="Express JS"
            img="express-svgrepo-com.svg"
            alt="logo de Express"
          />
          <CardSkill
            skill="Python"
            img="python-svgrepo-com.svg"
            alt="logo de Python"
          />
          <CardSkill
            skill="Flask"
            img="flask-svgrepo-com.svg"
            alt="logo de flask "
          />
          <CardSkill
            skill="C#"
            img="c-sharp-svgrepo-com.svg"
            alt="logo de c-sharp"
          />
        </div>
      </article>
      <article class="article-skill">
        <h3>Database</h3>
        <div class="cards-container">
          <CardSkill
            skill="SQL Server"
            img="sql-server-icon-8.png"
            alt="logo de SQL Server"
          />
          <CardSkill
            skill="PostgreSQL"
            img="postgresql-svgrepo-com.svg"
            alt="logo de postgresql"
          />
          <CardSkill
            skill="MySQL"
            img="mysql-svgrepo-com.svg"
            alt="logo de mysql"
          />
        </div>
      </article>
      <article class="article-skill">
        <h3>tools and others</h3>
        <div class="cards-container">
          <CardSkill skill="GIT" img="git-svgrepo-com.svg" alt="logo de GIT" />
          <CardSkill
            skill="GitHub"
            img="github-142-svgrepo-com.svg"
            alt="logo de GitHub"
          />
          <CardSkill
            skill="Figma"
            img="figma-svgrepo-com.svg"
            alt="logo de Figma"
          />
          <CardSkill
            skill="MS Office"
            img="office-1-logo-svgrepo-com.svg"
            alt="logo de Office"
          />
          <CardSkill skill="GIT" img="git-svgrepo-com.svg" alt="logo de GIT" />
        </div>
      </article>
      <article class="article-skill">
        <h3>I am learning</h3>
        <p>
          These are the technological skills I've honed during my university
          years, gained through coursework and personal projects I've built.
        </p>
        <div class="cards-container">
          <CardSkill
            skill="React"
            img="react-svgrepo-com.svg"
            alt="logo de React"
          />

          <CardSkill
            skill="ASP.NET"
            img="aspnet-svgrepo-com.svg"
            alt="logo de ASP.NET"
          />
          <CardSkill
            skill="NestJS"
            img="nestjs-svgrepo-com.svg"
            alt="logo de NestJS"
          />
          <CardSkill
            skill="MongoDB"
            img="mongo-svgrepo-com.svg"
            alt="logo de MongoDB"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../sass/section.scss";
.skills {
  width: 100%;
  text-align: center;
  padding: 20px 10px;
}

.skill-title {
  font-size: 2.5rem;
}
.skills-text {
  font-size: 1.6rem;
  margin: 12px 0 16px;
}

.skill-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.article-skill {
  flex: 0.5 0.5 300px;
  padding: 10px 20px;
  margin: 0 10px 10px;
  border-radius: 15px;
  min-height: 300px;
  max-width: 450px;
  border: 1px $primary-color solid;
}
.article-skill h3 {
  padding-bottom: 10px;
  font-size: 2rem;
}
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (min-width: 760px) {
  .skills {
    text-align: initial;
  }
}

@media screen and (min-width: 1024px) {
  .skill-title {
    font-size: 4rem;
  }
  .skills-text {
    font-size: 1.8rem;
  }
}
</style>
