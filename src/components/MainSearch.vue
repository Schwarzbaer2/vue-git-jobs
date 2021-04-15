<template>
  <div class="search">
    <input
      v-model="searchTerm"
      @input="onInput"
      @keyup.enter="startSearch"
      class="search__input"
      type="search"
      name="job-search"
      id=""
      placeholder="Filter by title"
      aria-label="Search through developer jobs"
    />

    <div class="search__icons">
      <img
        class="search__filter"
        src="../assets/mobile/icon-filter.svg"
        alt=""
      />
      <button class="search__button" @click="startSearch">
        <img src="../assets/desktop/icon-search.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSearch",
  data() {
    return {
      searchTerm: "",
    };
  },

  methods: {
    onInput() {
      this.$emit("search-jobs", { term: this.searchTerm });
    },
    startSearch() {
      this.$emit("start-search");
    },
  },
};
</script>

<style lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 28rem;
  background: #fff;
  border-radius: 0.375rem;

  &__input {
    height: 50%;
    width: 50%;
    padding: 0 0 0 1.5rem;
    border: none;
    outline: none;
  }

  &__icons {
    padding: 0 1.5rem 0 0;
  }

  &__filter {
    padding-right: 1.5rem;
  }

  &__button {
    border: none;
  }
}
</style>
