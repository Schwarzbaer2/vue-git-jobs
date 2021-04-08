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
  background: $primary-violet;

  &__title {
    color: $secondary-white;
  }
}
</style>
