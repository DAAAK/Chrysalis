const webpack = require('webpack');
module.exports = function override(config) {
    config.resolve = config.resolve || {};
  config.resolve.fallback = config.resolve.fallback || {};
  Object.assign(config.resolve.fallback, {
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    path: require.resolve('path-browserify'),
    vm: require.resolve('vm-browserify'),
  });

    config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve("process/browser"),
    buffer: require.resolve("buffer/"),
  };

    config.resolve.alias = {
    ...(config.resolve.alias || {}),
    "process/browser": require.resolve("process/browser"),
  };

    config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  return config;
};
