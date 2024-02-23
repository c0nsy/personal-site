<template>
  <div class="work-section-wrapper">
    <h1>
      <div class="header-text">
        <span class="header-number">02. </span> Work Experience
      </div>

      <hr class="section-divider" />
    </h1>
    <div class="work-section-nav">
      <WorkNav />
    </div>
  </div>
</template>
<script>
import WorkNav from "./components/WorkNav.vue";
export default {
  name: "WorkSection",
  components: {
    WorkNav,
  },
};
</script>
<style scoped>
@import "./styles/work-section-styles.css";
</style>
