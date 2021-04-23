<template>
  <div class="loader">
    <img src="../assets/loader.gif" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
