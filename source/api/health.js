import pack from '../../package';
import config from '../../config';

export default health;

function health(app) {
  app.get('/api/health',
    validateRequest,
    checkHealth);

  function validateRequest(req, res, next) {
    var apiKey = req.query.apiKey;

    if(!apiKey) {
      return next({message: 'Forbidden request', status: 403});
    }

    if(!validateApiToken()) {
      return next({message: 'Unauthorized request', status: 401});
    }

    function validateApiToken() {
      return config.apiKey === apiKey;
    }

    next();
  }

  function checkHealth(req, res, next) {
    res.status(200).json({
        health:{
          app: 'isomorphic-react-kit',
          env: process.env.NODE_ENV || 'development',
          version: pack.version,
          message: 'healthy'
        }
    });
  }
}