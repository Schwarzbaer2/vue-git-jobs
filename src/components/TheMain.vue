<template>
  <main class="main">
    <div v-if="openModal === true" class="main__modal">
      <Modal
        @open-modal="toogleMenu"
        @search-locations="onSearchLocations"
        @start-search="getJobs"
        @input-checked="toggleFulltime"
      />
    </div>

    <div class="main__search">
      <MainSearch
        @search-jobs="onSearchJobs"
        @start-search="getJobs"
        @open-modal="toogleMenu"
      />
    </div>

    <div v-if="loading">
      <PageLoader />
    </div>

    <div class="main__grid">
      <MainCard
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :mode="mode"
        @changeColor="$emit('changeColor')"
      />
    </div>

    <div class="main__button">
      <base-button @click="loadMore">Load More</base-button>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import PageLoader from "./PageLoader.vue";
import MainSearch from "./MainSearch.vue";
import MainCard from "./MainCard.vue";
import BaseButton from "./BaseButton.vue";
import Modal from "./Modal.vue";

export default {
  name: "TheMain",
  components: {
    PageLoader,
    MainCard,
    MainSearch,
    BaseButton,
    Modal,
  },
  props: ["mode"],
  data() {
    return {
      jobs: [],
      searchTerm: "",
      searchLocation: "",
      searchPage: "1",
      fullTime: "",
      openModal: false,
      loading: true,
    };
  },
  methods: {
    getJobs(event) {
      this.loading = true;
      axios
        .get(
          `https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${this.searchPage}?description=${this.searchTerm}&full_time=${this.fullTime}&location=${this.searchLocation}`
        )
        .then((response) => {
          this.jobs = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSearchJobs(event) {
      this.searchTerm = event.term;
    },
    onSearchLocations(event) {
      this.searchLocation = event.term;
    },
    toogleMenu() {
      this.openModal = !this.openModal;
    },
    toggleFulltime() {
      this.fullTime !== "on" ? (this.fullime = "on") : (this.fullTime = "");
    },
    loadMore() {},
  },
  created() {
    this.getJobs();
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 87vh;
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
