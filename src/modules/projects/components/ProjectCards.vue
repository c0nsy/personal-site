<template>
  <div class="project-cards-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 250 24"
      stroke-width="1"
      stroke="#71a4d6"
      class="w-1 h-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>

    <h1 class="project-cards-title">{{ project.title }}</h1>
    <p class="project-cards-description">{{ project.description }}</p>
    <p
      v-for="(language, index) in project.languages"
      :key="'language-' + index"
      class="project-cards-languages"
    >
      {{ language }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ProjectCards",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped src="../styles/project-cards-styles.css"></style>
