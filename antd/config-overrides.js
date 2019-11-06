const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
        config,
    );
    config.resolve.alias['@']= resolve('src');
    config.resolve.alias['STORE']= resolve('src/redux/store');
    config.resolve.alias['REDUCER']= resolve('src/redux/reducers');
    config.resolve.alias['ACTIONS']= resolve('src/redux/actions');
    return config;
};