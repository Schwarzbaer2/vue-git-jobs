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
  height: 3rem;
  width: 7.3rem;
  background: $primary-violet;
  color: $secondary-white;
  border: none;
  border-radius: 0.313rem;
  font-family: $kumbh-sans;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  &:hover {
    background: $primary-lightViolet;
  }
}

.--isSmall {
  height: 3rem;
  width: 7.3rem;
}
</style>
