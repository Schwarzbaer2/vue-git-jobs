module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/_config.scss";
            @import "@/assets/_variables.scss";
            @import "@/assets/_responsive.scss";
          `,
      },
    },
  },
};
