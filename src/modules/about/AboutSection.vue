<template>
  <div class="about-section-wrapper">
    <h1>
      <span class="header-number">01.</span> About
      <hr class="section-divider" />
    </h1>
    <div class="about-section-text">
      <p>
        Hey, my name is Connor, and I am passionate about creating scalable
        solutions for business professionals. My interest in software
        engineering sprouted from my highschool experience, where I discovered
        my love for problem solving and creating innovative products.
      </p>
      <p>
        Today, I am a software professional who has worked on numerous projects.
        Such as
        <span class="about-section-text__highlight"
          >developing an in-house solution to replace a third party data
          management system</span
        >,
        <span class="about-section-text__highlight">
          Google Maps clone that is specific to my university</span
        >,
        <span class="about-section-text__highlight"
          >Sentiment analysis machine learning models</span
        >,
        <span class="about-section-text__highlight"
          >Data processing using ETLs (Extract, Transform, Load)</span
        >, and
        <span class="about-section-text__highlight"
          >Automated Sports Arbitraging web application</span
        >.
      </p>
      <p>
        Here are a
        <span class="about-section-text__emphasis">few</span> technologies/tools
        I've been working with recently:
      </p>
      <div class="about-section-text__lists">
        <ul>
          <li>Python</li>
          <li>JavaScript (ES6+)</li>
          <li>Vue</li>
          <li>NextJS</li>
          <li>MySQL</li>
        </ul>
        <ul>
          <li>AWS</li>
          <li>Git</li>
          <li>Docker</li>
          <li>Harness</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped src="./styles/about-section-styles.css"></style>
