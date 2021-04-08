<template>
  <header class="header">
    <h1 class="header__title">devjobs</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 8.5rem;
  width: 100%;
  padding: 2rem 1.5rem 0rem 1.5rem;
  background-image: url("../assets/mobile/bg-pattern-header.svg");
  background-size: cover;
  background-repeat: no-repeat;

  &__title {
    color: $secondary-white;
  }
}
</style>
