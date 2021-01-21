/// next.config.js
module.exports = {
  sassOptions: {
    prependData: `
        @import 'styles/utils/rem-calc';
        @import 'styles/settings/variables';
        @import 'styles/mixins/_breakpoints.scss';
    `,
  },
};
