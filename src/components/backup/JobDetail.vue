<template>
  <TheHeader />
  <div class="job" v-if="job">
    <article>
      <header>
        <div class="job__header">
          <img class="job__logo" :src="job.company_logo" :alt="job.company" />
          <h3>{{ job.company }}</h3>

          <base-button>Company Site</base-button>
        </div>
      </header>

      <div class="job__content">
        <p class="job__info">1w ago &bull; {{ job.type }}</p>
        <div class="job__company">
          <h3 class="">{{ job.title }}</h3>
        </div>
        <div class="job__location">
          <h4>{{ job.location }}</h4>
        </div>

        <div class="job__apply">
          <base-button>Apply Now</base-button>
        </div>

        <div class="job__description" v-html="job.description"></div>
      </div>
    </article>

    <div class="job__contact">
      <h3>How to Apply</h3>

      <div v-html="job.how_to_apply"></div>
    </div>

    <div class="job__apply">
      <base-button>
        Apply Now
      </base-button>
    </div>
  </div>
</template>

<script>
import JobService from "../services/JobService";
import TheHeader from "@/components/TheHeader.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  props: ["id"],
  components: {
    TheHeader,
    BaseButton,
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
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0 3rem;
  background: $secondary-lightGrey;
  width: 100%;

  &__header {
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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

  &__info {
    padding-bottom: 0.688rem;
    color: $secondary-darkGrey;
  }

  &__company {
    padding-bottom: 0.688rem;
  }

  &__location {
    color: $primary-violet;
  }

  &__description {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0.5rem;
    }

    p {
      padding: 1.5rem 0;
      line-height: 1.625rem;
    }

    ul,
    ol {
      line-height: 1.625rem;
      margin: 0.5rem 0 0 1.5rem;
    }

    li {
      padding: 0.25rem 0;
    }
  }

  &__logo {
    max-height: 3.125rem;
    max-width: 16rem;
    transform: translateY(-85%);
    border-radius: 0.938rem;
    box-shadow: 0px 5px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }

  &__contact {
    min-width: 100%;
    max-width: 100%;
    padding: 2rem 1.5rem 2rem 1.5rem;
    margin-bottom: 2rem;
    background-image: url("../assets/mobile/bg-pattern-header.svg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.375rem;
    overflow: hidden;
    color: $secondary-white;
    line-height: 1.625rem;

    a {
      color: $secondary-white;
    }

    p {
      padding-top: 1.75rem;
    }

    ol,
    ul {
      margin-left: 1.5rem;
    }

    li {
      padding: 0.25rem;
    }
  }

  &__apply {
    min-height: 6rem;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $secondary-white;
    border-radius: 0.375rem;
  }
}
</style>
