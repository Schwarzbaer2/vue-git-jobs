<template>
  <div class="header__toggle">
    <img class="header__symbol" src="../assets/desktop/icon-sun.svg" alt="" />
    <BaseToggle />
    <img class="header__symbol" src="../assets/desktop/icon-moon.svg" alt="" />
  </div>
</template>

<script>
import BaseToggle from "./BaseToggle.vue";

export default {
  name: "HeaderToggle",
  components: { BaseToggle },
};
</script>

<style scoped lang="scss">
.header {
  &__toggle {
    height: 1.5rem;
    width: 7rem;
    display: flex;
    justify-content: space-between;
  }

  &__symbol {
    max-height: 1.25rem;
    max-width: 1.25rem;
  }
}
</style>
