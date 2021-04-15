<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__location">
        <img src="../assets/desktop/icon-location.svg" alt="" />
        <input
          v-model="searchLocation"
          @input="onInput"
          class="modal__searchInput"
          type="search"
          name="searchLocation"
          id="searchLocation"
          placeholder="Filter by location"
        />
      </div>
      <div class="modal__fullTime">
        <p>
          <input
            class="modal__checkbox"
            type="checkbox"
            name="searchFullTime"
            id="searchFullTime"
          />
          Full Time Only
        </p>
      </div>
      <div
        class="modal__button"
        @click="
          openModal();
          startSearch();
        "
      >
        <base-button>Search</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "Modal",
  components: { BaseButton },
  methods: {
    openModal() {
      this.$emit("open-modal");
    },
    onInput() {
      this.$emit("search-locations", { term: this.searchLocation });
    },
    startSearch() {
      this.$emit("start-search");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  &__inner {
    height: 217px;
    width: 327px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    padding-left: 1.5rem;
    background-color: $secondary-white;
    border-radius: 0.375rem;
  }

  &__location {
    display: flex;
    align-items: center;
  }

  &__searchInput {
    margin-left: 1rem;
    border: 0;
    outline: 0;
    font-size: 1rem;
  }

  &__checkbox {
    margin-right: 1rem;
  }

  &__fullTime {
    font-weight: bold;
  }
}
</style>
