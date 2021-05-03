/// next.config.js
module.exports = {
  sassOptions: {
    prependData: `
        @import 'styles/utils/rem-calc';
        @import 'styles/utils/add-asset-prefix';
        @import 'styles/settings/variables';
        @import 'styles/mixins/_breakpoints.scss';
        $node-env: ${process.env.NODE_ENV};
    `,
  },
  images: {
    domains: ['d3ddu43d9lttf7.cloudfront.net'],
  },
};
