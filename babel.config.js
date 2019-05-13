module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
          alias: {
            '@app/components': './src/components',
            '@app/navigation': './src/navigation',
            '@app/screens': './src/screens',
            '@app/stores': './src/stores',
            '@app/config': './src/config',
            '@app/themes': './src/themes',
          },
        },
      ],
    ],
  };
};
