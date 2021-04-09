<template>
  <main class="main">
    <div class="main__grid">
      <MainCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </main>
</template>

<script>
import MainCard from "./MainCard.vue";
import axios from "axios";

export default {
  name: "TheMain",
  components: {
    MainCard,
  },
  data() {
    return {
      jobs: null,
    };
  },
  created() {
    axios
      .get("https://cors.bridged.cc/https://jobs.github.com/positions.json")
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
  height: auto;
  padding-top: 4.5rem;
  background: $secondary-lightGrey;

  &__grid {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
}
</style>
