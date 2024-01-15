<template>
  <div class="nav-bar">
    <ul class="nav-bar__options">
      <li
        v-for="item in navItems"
        :key="item.id"
        :class="{ active: item.id === activeItemId }"
        @click="setActiveItem(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="nav-bar__list">
      <div v-if="activeItemId === 1">
        <h2>
          Software Engineer
          <span class="nav-bar__list-header">@ Morningstar</span>
        </h2>
        <p class="nav-bar__list-date">June 2023 - Present</p>
        <ul class="nav-bar__list-accomplishments">
          <li>
            Contributed Significantly to the transition from Quickbase to an
            in-house software solution, resulting in a cost savings of $250,000
            annually for the company
          </li>
          <li>
            Implemented robust ETL pipelines to AWS S3 buckets, optimising data
            collection for the anomaly detection program, a critical machine
            learning component of the team's project.
          </li>
          <li>
            Successfully refactored the main routing system of the application,
            creating a dynamic and enduring solution that handles both
            authentication and entitlements-based routing.
          </li>
          <li>
            Utilised tools and languages including Vue, Python, SQL, and AWS to
            develop and maintain the product (user management, feature
            implementation, performance monitoring, and solving support issues
            clients have with the application)
          </li>
        </ul>
      </div>
      <div v-if="activeItemId === 2">
        <h2>
          Product Manager <span class="nav-bar__list-header">@ TD Synnex</span>
        </h2>
        <p class="nav-bar__list-date">April 2022 - September 2022</p>
        <ul class="nav-bar__list-accomplishments">
          <li>
            Managed vendor lines for a multitude of clients (Best Buy, Staples,
            Walmart).
          </li>
          <li>
            Increased multiple vendor portfolios by a minimum of 25% over two
            quarters
          </li>
          <li>
            Used analysis to accurately suggest to vendors which products they
            should stock allowing vendors to maximise their revenue
          </li>
        </ul>
      </div>
      <div v-if="activeItemId === 3">
        <h2>
          Media Analyst <span class="nav-bar__list-header">@ Canipre</span>
        </h2>
        <p class="nav-bar__list-date">September 2017 - April 2020</p>
        <ul class="nav-bar__list-accomplishments">
          <li>
            Participated in the enforcement of copyright laws in various
            countries which has led to a 40% decrease in the overall
            availability of pirated material.
          </li>
          <li>
            Represented the company internationally by attending the 2018
            Berlinale Film Festival, was allowed to attend due to out performing
            all other interns during the 2018 business cycle.
          </li>
          <li>
            Developed a more efficient way to analyse material using
            personalised VBA script
          </li>
        </ul>
      </div>

      <p v-if="activeItemId === 3">Canipre: Fake description for Canipre</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { id: 1, name: "Morningstar" },
        { id: 2, name: "TD Synnex" },
        { id: 3, name: "Canipre" },
      ],
      activeItemId: 1,
    };
  },
  methods: {
    setActiveItem(itemId) {
      this.activeItemId = itemId;
    },
  },
};
</script>

<style scoped src="../styles/work-section-nav-styles.css"></style>
