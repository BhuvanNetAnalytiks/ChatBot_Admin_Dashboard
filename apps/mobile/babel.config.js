module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@snowflake-ui/mobile': '../../packages/components/snowflake-ui/mobile',
          '@shared/core': '../../packages/shared',
        },
        extensions: ['.native.ts', '.native.tsx', '.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    ],
  ],
};
