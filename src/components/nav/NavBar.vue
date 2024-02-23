<template>
  <div class="navbar">
    <a
      @click="$emit('scroll-to-section', 'aboutSection')"
      style="--link-number-color: #71a4d6"
    >
      <span class="link-number">01.</span> About
    </a>
    <a
      @click="$emit('scroll-to-section', 'workSection')"
      style="--link-number-color: #71a4d6"
    >
      <span class="link-number">02.</span> Work
    </a>
    <a
      @click="$emit('scroll-to-section', 'projectsSection')"
      style="--link-number-color: #71a4d6"
    >
      <span class="link-number">03.</span> Projects
    </a>
    <a
      @click="$emit('scroll-to-section', 'contactSection')"
      style="--link-number-color: #71a4d6"
    >
      <span class="link-number">04.</span> Contact
    </a>
    <a
      href="/resources/connor_resume_swe.pdf"
      style="--link-number-color: #71a4d6"
      target="_blank"
      class="resume-button"
    >
      <span class="link-number">05.</span> Resume
    </a>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    scrollToSection(sectionRef) {
      const section = this.$parent.$refs[sectionRef];
      if (section) {
        const top = section.$el.offsetTop;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
@import "./styles/nav-styles.css";
</style>
