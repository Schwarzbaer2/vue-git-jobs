<template>
  <main class="main">
    <div class="main__search">
      <MainSearch />
    </div>

    <div class="main__grid">
      <MainCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </main>
</template>

<script>
import JobService from "../services/JobService";
import MainSearch from "./MainSearch.vue";
import MainCard from "./MainCard.vue";

export default {
  name: "TheMain",
  components: {
    MainCard,
    MainSearch,
  },
  data() {
    return {
      jobs: null,
    };
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
    padding-top: 1.2rem;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
}
</style>
