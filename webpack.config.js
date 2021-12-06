const path = require('path');
const nodeExternals = require('webpack-node-externals');
const externals = [nodeExternals()]; // in order to ignore all modules in node_modules folder
const externalsPresets = {node: true}; // in order to ignore built-in modules like path, fs, etc.

const {optimization} = require('./webpack/setting/optimization');
const {rules} = require('./webpack/setting/module/rules');
const {alias} = require('./webpack/setting/resolve/alias');
const {extensions} = require('./webpack/setting/resolve/extensions');
const {plugins} = require('./webpack/setting/plugins');
const {devServer} = require('./webpack/setting/dev-server');

const {
    isDevelopment,
    isProduction,
    pathToDist,
    cwd,
    nodeEnvironment,
    isBuildLibrary,
    isFront,
    isBack,
    isServerProdBuild,
    polyfillList,
} = require('./webpack/config');

const configFront = {
    entry: [...polyfillList, './www/css/root.scss', './www/root.tsx'],
    output: {
        pathinfo: false,
        path: path.join(cwd, pathToDist),
        publicPath: isDevelopment ? '/' : '',
        filename: isDevelopment ? '[name].js' : 'index.js',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
        assetModuleFilename: isDevelopment
            ? 'build-asset/[name]----[hash:6][ext][query]'
            : 'build-asset/[hash:6][ext][query]',
    },
    target: ['web', 'es5'],
    mode: nodeEnvironment,
    devtool: isDevelopment ? 'source-map' : false,
    optimization,
    module: {rules},
    resolve: {alias, extensions},
    plugins,
    devServer,
};

const configBack = {
    ...configFront,
    entry: ['./server/server.tsx'],
    optimization: isServerProdBuild ? optimization : {minimize: false},
    target: 'node',
    devtool: isServerProdBuild ? false : 'source-map',
    externalsPresets,
    externals,
};

const configLibraryFront = {
    entry: ['./www/library/library.ts'],
    output: {
        pathinfo: false,
        path: path.join(cwd, 'dist'),
        publicPath: '',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    target: ['web', 'es5'],
    mode: nodeEnvironment,
    devtool: false,
    optimization,
    module: {rules},
    resolve: {alias, extensions},
    plugins,
    devServer,
    externalsPresets,
    externals,
};

const configLibraryBack = {...configLibraryFront};

let webpackConfigBySide = null;
webpackConfigBySide = isFront ? configFront : webpackConfigBySide;
webpackConfigBySide = isBack ? configBack : webpackConfigBySide;

let webpackConfigBuildLibraryBySide = null;
webpackConfigBuildLibraryBySide = isFront ? configLibraryFront : webpackConfigBuildLibraryBySide;
webpackConfigBuildLibraryBySide = isBack ? configLibraryBack : webpackConfigBuildLibraryBySide;

const webpackConfig = isBuildLibrary ? webpackConfigBuildLibraryBySide : webpackConfigBySide;

// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
// webpackConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = webpackConfig;
