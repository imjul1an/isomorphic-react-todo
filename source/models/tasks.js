var config = require('../../config');
var db = require('../db')(config);
// import db from '../db';
var ObjectId = require('mongojs').ObjectId;

export default {
  fetch: fetch,
  create: create,
  findById: findById
};

function fetch(options, callback) {
  db.tasks.find({}, callback);
}

function create(item, callback) {
  db.tasks.insert(item, callback);
}

function findById(id, callback) {
  if (typeof id === 'string') {
    id = new ObjectId(id);
  }

  db.tasks.findOne({_id: id}, callback);
}