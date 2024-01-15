<template>
  <div class="navbar">
    <router-link to="/" style="--link-number-color: #71a4d6">
      <span class="link-number">01.</span> About
    </router-link>
    <router-link to="/about" style="--link-number-color: #71a4d6">
      <span class="link-number">02.</span> Work
    </router-link>
    <router-link to="/contact" style="--link-number-color: #71a4d6">
      <span class="link-number">03.</span> Projects
    </router-link>
    <router-link to="/contact" style="--link-number-color: #71a4d6">
      <span class="link-number">04.</span> Contact
    </router-link>
    <router-link
      to="/resume.pdf"
      style="--link-number-color: #71a4d6"
      target="_blank"
      class="resume-button"
    >
      <span class="link-number">05.</span> Resume
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style scoped src="./styles/nav-styles.css"></style>
