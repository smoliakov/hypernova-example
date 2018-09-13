const express = require('express');
const Renderer = require('hypernova-client');
const devModePlugin = require('./devModePlugin');
const template = require('./src/pages/index.template');

const app = express();

const renderer = new Renderer({
  url: 'http://localhost:3030/batch',
  plugins: [
    devModePlugin,
  ],
});

app.get('/', (req, res) => {
  const jobs = {
    MyComponent: { name: req.query.name || 'Stranger' },
  };

  renderer.render(jobs).then(html => {
    res.send(template(html));
  });
});

app.listen(8032, () => console.log('Now listening'));
