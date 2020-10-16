module.exports = function (api) {
  api.cache(false)
  const moduleResolver = [
    'module-resolver',
    {
      root: ['.'],
      alias: {
        '@app/configs': './app/config',
        '@app/screens': './app/screens',
        '@app/theming': './app/theming',
        '@app/themes': './app/theme',
        '@app/state': './app/state',
        '@app/components': './app/components',
        i18n: './i18n',
      },
    },
  ]
  const plugins = [
    moduleResolver,
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
  ]
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {},
    },
    plugins,
  }
}
