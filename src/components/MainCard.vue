<template>
  <article>
    <div class="card">
      <img class="card__image" src="https://via.placeholder.com/50" alt="" />
      <p class="card__info">5h ago &bull; Full Time</p>
      <div class="card__title">
        <h3>Senior Software Engineer</h3>
      </div>
      <div class="card__firm">
        <p>So Digital Inc.</p>
      </div>
      <div class="card__location">
        <h4>Remote, Seoul, Tokyo, Mountain View, San Fransisco</h4>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "MainCard",
};
</script>

<style scoped lang="scss">
.card {
  height: 14rem;
  width: 20rem;
  padding: 0 2rem;
  background: $secondary-white;

  &__image {
    transform: translateY(-50%);
    border-radius: 0.938rem;
  }

  &__info {
    color: $secondary-darkGrey;
  }

  &__title {
    padding: 0.813rem 0 1.063rem 0;
  }

  &__firm {
    padding-bottom: 1.625rem;
    color: $secondary-darkGrey;
  }

  &__location {
    color: $primary-violet;
  }
}
</style>
