import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';


// initializing packages
const app = express();

// settings
app.set('port', process.env.PORT || 3001);

// middlwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
