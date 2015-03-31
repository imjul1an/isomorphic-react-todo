import request from 'request';
import validator from '../utils/validator';

import config from '../../config';
import db from '../db';

export default {
  fetch: fetch,
  isValid: isValid,
  create: create,
  findById: findById,
  findByUrl: findByUrl
};

function create(modules, callback) {
}

function findById(id, callback) {
}

function findByUrl(id, callback) {
}

function fetch(options, callback) {

  var suffixUrl = options.suffixUrl || '';

  request({url: config.cmsUrl + suffixUrl, json: true}, fetchModules);

  function fetchModules(err, resp, body) {

    if(err || resp.statusCode === 404) {
      return callback(null, {message: 'No data returned', status: 404});
    }

    var modules = resp.body.page.reduce((memo, value) => {
      return memo.modules.concat(value.modules);
    });

    var metadata = { language:resp.body.language, externalId: resp.body.externalId};
    var state = {modules: modules, metadata: metadata};

    return callback(null, state);
  }
}

function isValid(data, callback) {
  validator.isValid(data, function(err, result) {
    return callback(err, result);
  });
}