import _ from 'lodash';
import React from 'react';
import async from 'async';

import Navigation from '../../public/js/components/navigation';
import App from '../../public/js/components/app';
import Footer from '../../public/js/components/footer';

import modules from  '../models/modules';

function response(res, body) {
  res.set({
    'Content-Type': 'text/html',
    'Content-Length': Buffer.byteLength(body),
  });

  res.write(body);
  res.status(200).end();
}

function staticService(app) {
  app.get('/*', function (req, res, next) {
    async.waterfall([
      fetchState,
      render
    ], function (err, body) {
      if(err) {
        next(err);
      }

      response(res, body);
    });

    function fetchState(done) {
      modules.fetch({suffixUrl: req.url}, done);
    }

    function render(state, done) {
      var appState = state ? state : '';

      var nav = React.renderToString(new Navigation());
      var footer = React.renderToString(new Footer());

      var stat = {nav: nav, footer: footer, app: '/build/main.js'};
      var content = React.renderToString(new App({state: appState}));

      res.render('master.ejs',
        _.extend({ content: content, state: JSON.stringify(appState)}, stat), done);
    }
  });
}

export default staticService;