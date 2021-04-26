<template>
  <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
    <article>
      <div
        class="card"
        :class="mode"
        :mode="mode"
        @changeColor="$emit('changeColor')"
      >
        <div v-if="job.company_logo === null" class="card__image-alternative">
          <p>{{ job.company }}</p>
        </div>
        <div v-else>
          <img class="card__image" :src="job.company_logo" :alt="job.company" />
        </div>

        <p class="card__info">{{ timestamp }} &bull; {{ job.type }}</p>
        <div class="card__title">
          <h3 v-if="job.title.length < 20">{{ job.title }}</h3>
          <h3 v-else>{{ job.title.substring(0, 23) + ".." }}</h3>
        </div>
        <div class="card__firm">
          <p>{{ job.company }}</p>
        </div>
        <div class="card__location">
          <h4>{{ job.location }}</h4>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
import moment from "moment";
export default {
  props: ["mode", "job"],
  computed: {
    timestamp: function() {
      return moment(new Date(this.job.created_at)).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.card {
  height: 14rem;
  width: 20rem;
  padding: 0 2rem;
  background: $secondary-white;
  cursor: pointer;

  &__image-alternative {
    height: 3rem;
    width: 15rem;
    padding-top: 0.2rem;
    color: $primary-violet;
  }

  &__image {
    transform: translateY(-50%);
    z-index: 2;
    max-height: 3rem;
    max-width: 16rem;
    border-radius: 0.938rem;
    box-shadow: 0px 5px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    object-fit: scale-down;
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

  &:hover {
    transition-timing-function: ease-in-out;
    transition: 0.25s;
    transform: scale(1.1);
  }
}

.--dark {
  background: $primary-blue;
  color: $secondary-white;
}
</style>
