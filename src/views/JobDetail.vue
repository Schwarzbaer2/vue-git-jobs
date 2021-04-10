<template>
  <TheHeader />
  <div class="job" v-if="job">
    <article>
      <header>
        <div class="job__header">
          <img class="job__logo" :src="job.company_logo" :alt="job.company" />
          <p>{{ job.company }}</p>
          <button>Lalal</button>
        </div>
      </header>

      <div class="job__content">
        <p>1w ago &bull; {{ job.type }}</p>
        <h3>{{ job.title }}</h3>
        <p>{{ job.location }}</p>

        <div>{{}}</div>
        <div class="job__description" v-html="job.description"></div>
      </div>
    </article>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import JobService from "../services/JobService";
export default {
  props: ["id"],
  components: {
    TheHeader,
  },
  data() {
    return {
      job: null,
    };
  },
  created() {
    JobService.getJob(this.id)
      .then((response) => {
        this.job = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.job {
  display: flex;
  justify-items: center;
  padding: 0 3rem;
  background: $secondary-lightGrey;
  width: 100%;

  &__header {
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateY(-10%);
    background: $secondary-white;
    border-radius: 0.375rem;
  }

  &__content {
    background: $secondary-white;
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 0.375rem;
  }

  &__description p {
    padding-top: 2rem;
    line-height: 1.625rem;
  }

  &__logo {
    max-height: 50px;
    max-width: 16rem;
  }
}
</style>
