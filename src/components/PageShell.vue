<template>
  <div class="one">
    <NavBar @scroll-to-section="scrollToSection" />
    <div class="section-wrapper">
      <ProfileHeader ref="profileSection" />
      <AboutSection ref="aboutSection" />
      <WorkSection ref="workSection" />
      <ProjectsSection ref="projectsSection" />
      <ContactSection ref="contactSection" />
    </div>
  </div>
</template>
<script>
import NavBar from "./nav/NavBar.vue";
import ProfileHeader from "../modules/profile-header/ProfileHeader.vue";
import AboutSection from "../modules/about/AboutSection.vue";
import WorkSection from "../modules/work/WorkSection.vue";
import ProjectsSection from "../modules/projects/ProjectsSection.vue";
import ContactSection from "../modules/contact/ContactSection.vue";
export default {
  name: "PageShell",
  components: {
    NavBar,
    ProfileHeader,
    AboutSection,
    WorkSection,
    ProjectsSection,
    ContactSection,
  },
  methods: {
    scrollToSection(sectionRef) {
      const section = this.$refs[sectionRef];
      if (section) {
        const top = section.$el.offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped src="./styles/page-shell-styles.css"></style>
