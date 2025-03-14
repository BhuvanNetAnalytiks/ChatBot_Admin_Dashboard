const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Find the workspace root, typically this is two levels above (../../)
const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

const config = {
  // Watch all directories in the monorepo, including the root for shared packages
  watchFolders: [
    workspaceRoot, // This ensures Metro watches files outside the project root (monorepo setup)
    path.resolve(__dirname, '../../packages/components/snowflake-ui/mobile'), // Watch the snowflake-ui mobile package
    path.resolve(__dirname, '../../packages/shared'), // Watch the shared packages
  ],

  resolver: {
    // Resolve modules from the project node_modules and the workspace node_modules
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'), // Current project node_modules
      path.resolve(workspaceRoot, 'node_modules'), // Root monorepo node_modules
    ],

    // Handle any symlink issues (ensure Metro does not try to resolve symlinked React Native dependencies)
    blockList: exclusionList([
      /node_modules\/.*\/node_modules\/react-native\/.*/, // Exclude duplicate React Native modules
    ]),

    // Support for symlinks and ensure compatibility across workspaces
    resolverMainFields: ['react-native', 'browser', 'main'],

    // Alias for snowflake-ui to resolve mobile components
    extraNodeModules: {
      '@snowflake-ui/mobile': path.resolve(__dirname, '../../packages/components/snowflake-ui/mobile'),
      '@shared/core': path.resolve(__dirname, '../../packages/shared'),
    },

    // Extensions that Metro should resolve for React Native (including TypeScript)
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'native.ts', 'native.tsx'],
  },

  transformer: {
    // Enable support for inline requires to improve performance
    inlineRequires: true,
  },
};

// Merge the default config with the custom config for Yarn workspaces
module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
