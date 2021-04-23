<template>
  <button class="button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.button {
  height: 2.5rem;
  width: 5.5rem;
  background: $primary-violet;
  color: $secondary-white;
  border: none;
  border-radius: 0.313rem;
  font-family: $kumbh-sans;
  font-weight: bold;
  outline: none;
}
</style>
