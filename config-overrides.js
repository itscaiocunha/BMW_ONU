const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  return config;
};
