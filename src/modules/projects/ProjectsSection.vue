<template>
  <div class="projects-section-wrapper">
    <h1>
      <span class="header-number">03.</span> Projects
      <hr class="section-divider" />
    </h1>
    <div class="project-cards">
      <ProjectCards
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>
<script>
import ProjectCards from "./components/ProjectCards.vue";
import projectsList from "./utils/project-section-projects-list.js";
export default {
  name: "ProjectsSection",
  components: {
    ProjectCards,
  },
  data() {
    return {
      projects: projectsList.projects,
    };
  },
};
</script>
<style scoped src="./styles/projects-section-styles.css"></style>
