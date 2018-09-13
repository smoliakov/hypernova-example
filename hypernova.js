const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

const bundle = require('./ssr/ssr-bundle');

// hypernova({
//   devMode: true,
//
//   getComponent(name) {
//     if (name === 'MyComponent.hypernova.js') {
//       return require('./build/main.9160062d8d3f40932080');
//     }
//     return null;
//   },
//
//   port: 3030,
// });


hypernova({
  devMode: true,
  port: 3030,

  getComponent(name) {
    return renderReact('MyComponent', bundle.default);

    return null;
  },
});
