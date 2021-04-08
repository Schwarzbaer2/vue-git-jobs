<template>
  <div>
    <TheHeader />
    <TheMain />
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
};
</script>
