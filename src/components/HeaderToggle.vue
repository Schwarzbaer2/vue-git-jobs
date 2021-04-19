<template>
  <div class="header__toggle">
    <img src="../assets/desktop/icon-sun.svg" alt="Light Mode" />
    <BaseToggle :mode="mode" @changeColor="$emit('changeColor')" />
    <img src="../assets/desktop/icon-moon.svg" alt="Dark Mode" />
  </div>
</template>

<script>
import BaseToggle from "./BaseToggle.vue";

export default {
  name: "HeaderToggle",
  components: { BaseToggle },
  props: ["mode"],
};
</script>

<style lang="scss">
.header {
  &__toggle {
    height: 1.5rem;
    width: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
