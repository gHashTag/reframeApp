const reactRouter = require('@reframe/react-router'); // npm install @reframe/react-router
const reactNativeWeb = require('@reframe/react-native-web')

module.exports = {
    plugins: [
      reactRouter(),
      reactNativeWeb()
    ],
};
