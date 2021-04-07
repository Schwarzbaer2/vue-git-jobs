module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/_variables.scss";
            @import "@/assets/_reset.scss";
          `,
      },
    },
  },
};
