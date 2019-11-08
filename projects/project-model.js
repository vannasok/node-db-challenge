const db = require('../data/dbConfig.js');

module.exports = {
   get,
   getById,
   add
};

function get() {
   return db('projects');
}

function getById(id) {
   return db('projects').where({ id });
}

function add(project) {
   return db('projects').insert(project);
}
