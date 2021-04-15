<template>
  <main class="main">
    <div class="main__search">
      <MainSearch @search-jobs="onSearchJobs" />
    </div>

    <div class="main__grid">
      <MainCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>

    <div class="main__button">
      <base-button>Load More</base-button>
    </div>
  </main>
</template>

<script>
import JobService from "../services/JobService";
import MainSearch from "./MainSearch.vue";
import MainCard from "./MainCard.vue";
import BaseButton from "./BaseButton.vue";

export default {
  name: "TheMain",
  components: {
    MainCard,
    MainSearch,
    BaseButton,
  },
  data() {
    return {
      jobs: null,
      searchTerm: "",
    };
  },
  methods: {
    onSearchJobs(event) {
      this.searchTerm = event.term;
    },
  },
  created() {
    JobService.getJobs()
      .then((response) => {
        this.jobs = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
  background: $secondary-lightGrey;

  &__search {
    transform: translateY(-50%);
  }

  &__grid {
    padding: 1.2rem 0;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }

  &__button {
    padding-bottom: 3.875rem;
  }
}
</style>
