(() => {
  const getProjectBrowserConfig = require('/Users/xyz/reframeApp/node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js');

  const projectBrowserConfig = getProjectBrowserConfig();

  projectBrowserConfig.addPlugins([
    require('/Users/xyz/reframeApp/node_modules/@reframe/react/browser.js')(),
    require('/Users/xyz/reframeApp/node_modules/@reframe/path-to-regexp/browser.js')(),
  ]);
})();

(() => {
  const getProjectBrowserConfig = require('/Users/xyz/reframeApp/node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js');

  const projectBrowserConfig = getProjectBrowserConfig();

  let pageConfig = require('/Users/xyz/reframeApp/pages/GameOfThronesPage/GameOfThronesPage.config.js');
  pageConfig = (pageConfig||{}).__esModule===true ? pageConfig.default : pageConfig;

  projectBrowserConfig.setCurrentPageConfig(pageConfig);
})();

require('/Users/xyz/reframeApp/node_modules/@reframe/browser/browserEntry.js');
