module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/_config.scss";
            @import "@/assets/_themes.scss";
            @import "@/assets/_typography.scss";
            @import "@/assets/_responsive.scss";

          `,
      },
    },
  },
};
