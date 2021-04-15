<template>
  <div class="modal">
    <div class="modal__inner">
      <img src="../assets/desktop/icon-location.svg" alt="" />
      <input
        type="search"
        name="searchLocation"
        id="searchLocation"
        placeholder="Filter by location"
      />

      <input type="checkbox" name="searchFullTime" id="searchFullTime" />
      <p>Full Time Only</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
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
    background-color: $secondary-white;
  }
}
</style>
