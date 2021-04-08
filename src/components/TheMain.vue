<template>
  <main class="main">
    <div class="main__grid">
      <MainCard />
      <MainCard />
    </div>
  </main>
</template>

<script>
import MainCard from "./MainCard.vue";

export default {
  name: "TheMain",
  components: {
    MainCard,
  },
};
</script>

<style lang="scss">
.main {
  height: 100vh;
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
