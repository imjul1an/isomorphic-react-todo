import config from '../../config';
import validator from '../utils/validator';

export default itemService;

function itemService (app) {
  //add, remove, getAll, getById
  app.post('/api/items',
    validateRequest,
    validateData,
    add);

  function validateRequest(req, res, next) {
    var body = req.body;

    if(!body || !body.accessToken) {
      return next({message: 'Forbidden request', status: 403});
    }

    if(!validateAccessToken()) {
      return next({message: 'Unauthorized request', status: 401});
    }

    if(!body.data){
      return next({message: 'Bad request, data is missing', status: 400});
    }

    function validateAccessToken() {
      return config.accessToken === body.accessToken;
    }

    next();
  }

  function validateData(req, res, next) {
    var data = req.body;

    validator.isValid(data.data, function(err, result) {
      if(err) {
        return next({message: err, status: 422});
      }

      next();
    });
  }

  function add(req, res) {
    res.status(201).end();
  }
}