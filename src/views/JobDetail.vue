<template>
  <TheHeader :class="mode" :mode="mode" @changeColor="changeColor" />
  <div class="job" :class="mode" v-if="job">
    <article>
      <div class="job__article">
        <header>
          <div class="job__header" :class="mode">
            <img class="job__logo" :src="job.company_logo" :alt="job.company" />
            <h3>{{ job.company }}</h3>

            <base-button>Company Site</base-button>
          </div>
        </header>

        <div class="job__content" :class="mode">
          <p class="job__info">
            {{ timestamp }} &bull;
            {{ job.type }}
          </p>
          <div class="job__company">
            <h3 class="">{{ job.title }}</h3>
          </div>
          <div class="job__location">
            <h4>{{ job.location }}</h4>
          </div>

          <div class="job__apply" :class="mode">
            <base-button>Apply Now</base-button>
          </div>

          <div class="job__description" v-html="job.description"></div>
        </div>
      </div>
    </article>

    <div class="job__footer">
      <div class="job__contact">
        <h3>How to Apply</h3>

        <div v-html="job.how_to_apply"></div>
      </div>

      <div class="job__apply" :class="mode">
        <base-button>
          Apply Now
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import JobService from "../services/JobService";
import TheHeader from "@/components/TheHeader.vue";
import BaseButton from "../components/BaseButton.vue";
import "../assets/_responsive.scss";

export default {
  name: "JobDetail",
  props: ["id", "mode"],
  components: {
    TheHeader,
    BaseButton,
  },
  data() {
    return {
      job: null,
      mode: "",
    };
  },
  methods: {
    changeColor() {
      if (this.mode === "--dark") {
        this.mode = "light";
      } else {
        this.mode = "--dark";
      }
    },
  },
  computed: {
    timestamp: function() {
      return moment(new Date(this.job.created_at)).fromNow();
    },
  },

  watch: {
    mode: function() {
      localStorage.setItem("mode", JSON.stringify(this.mode));
    },
  },

  updated() {
    this.mode = JSON.parse(localStorage.getItem("mode"));
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

  &__article {
    max-width: 37rem;
  }

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

  &__footer {
    width: 100%;
    max-width: 43rem;
  }

  &__contact {
    width: 100%;
    padding: 2rem 1.5rem 2rem 1.5rem;
    margin-bottom: 2rem;
    background-image: url("../assets/mobile/bg-pattern-detail-footer.svg");
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
    display: flex;
    justify-content: center;
    align-items: center;
    background: $secondary-white;
    border-radius: 0.375rem;
  }
}

.job__content.--dark {
  background: $primary-blue;
  color: $secondary-white;
}

.job__apply.--dark {
  background: $primary-blue;
  color: $secondary-white;
}

.job__header.--dark {
  background: $primary-blue;
  color: $secondary-white;
}

.--dark {
  background: $primary-dark;
  color: $secondary-white;
}
</style>
