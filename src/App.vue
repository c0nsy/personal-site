<template>
  <div id="app">
    <PageShell />
  </div>
</template>

<script>
import PageShell from "./components/PageShell.vue";

export default {
  name: "App",
  components: {
    PageShell,
  },
};
</script>

<style>
/* global styles */
body {
  background: linear-gradient(
    to bottom,
    #020c16,
    #02162b
  ); /* Dark blue to semi-lighter blue gradient */
  margin: 0; /* Remove default body margin */
  padding: 0; /* Remove default body padding */
  font-family: "Arial", sans-serif; /* Set a default font family */
}
</style>
