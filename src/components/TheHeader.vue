<template>
  <header>
    <div class="header">
      <div class="header__top">
        <h1>devjobs</h1>
        <HeaderToggle />
      </div>

      <div class="header__search">
        <HeaderSearch />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderToggle from "./HeaderToggle.vue";
import HeaderSearch from "./HeaderSearch.vue";

export default {
  name: "TheHeader",
  components: { HeaderToggle, HeaderSearch },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8.5rem;
  width: 100vw;
  padding: 2rem 1.5rem 0rem 1.5rem;
  background-image: url("../assets/mobile/bg-pattern-header.svg");
  background-size: cover;
  background-repeat: no-repeat;

  &__top {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: baseline;
    color: $secondary-white;
  }

  &__search {
    margin-top: 2rem;
  }
}
</style>
