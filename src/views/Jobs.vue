<template>
  <div>
    <TheHeader :class="mode" :mode="mode" @changeColor="changeColor" />
    <TheMain :class="mode" />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";

export default {
  name: "Jobs",
  components: {
    TheHeader,
    TheMain,
  },
  data() {
    return {
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
};
</script>

<style lang="scss">
.--dark {
  background: #121721;
}
</style>
