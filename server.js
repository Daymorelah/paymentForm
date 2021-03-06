import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.dev.js';

/* eslint-disable no-console */

const PORT = process.env.PORT || 3003;
const app = express();
const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Sever is up and running on port ${PORT}`);
  }
});
