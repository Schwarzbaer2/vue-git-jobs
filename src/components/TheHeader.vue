<template>
  <header>
    <div class="header">
      <div class="header__top">
        <router-link class="header__logo" to="/">
          <h1>devjobs</h1>
        </router-link>
        <HeaderToggle />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderToggle from "./HeaderToggle.vue";

export default {
  name: "TheHeader",
  components: { HeaderToggle },
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8.5rem;
  width: 100%;
  padding: 2rem 1.5rem 0rem 1.5rem;
  background-color: $secondary-lightGrey;
  background-image: url("../assets/mobile/bg-pattern-header.svg");
  background-size: cover;
  background-repeat: no-repeat;

  &__top {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: baseline;
  }

  &__logo {
    text-decoration: none;
    color: $secondary-white;
  }
}
</style>
