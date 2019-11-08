const db = require('../data/dbConfig.js');

module.exports = {
   get,
   getById,
   addTask
};

function get() {
   return db('tasks as t')
      .join('projects as p', 't.pro_id', 'p.id')
      .select(
         'p.pro_name',
         'p.pro_desc',
         't.task_desc',
         't.task_notes',
         't.pro_id',
         't.task_completed'
      );
}

function getById(id) {
   return db('tasks')
      .where({ id: id })
      .first();
}

function addTask(task) {
   return db('tasks').insert(task);
}
