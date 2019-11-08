exports.seed = function(knex) {
   return knex('tasks').insert([
      //1 **********
      {
         task_desc: 'search Google',
         task_notes: 'it is free resource',
         task_completed: 0,
         pro_id: 1
      },
      {
         task_desc: 'find a good book',
         task_notes: 'buy or online',
         task_completed: 0,
         pro_id: 1
      },
      {
         task_desc: 'Lambda',
         task_notes: 'online school',
         task_completed: 0,
         pro_id: 1
      },
      //2 *****************
      {
         task_desc: 'search Google',
         task_notes: 'it is free resource',
         task_completed: 0,
         pro_id: 2
      },
      {
         task_desc: 'find a good book',
         task_notes: 'buy or online',
         task_completed: 0,
         pro_id: 2
      },
      {
         task_desc: 'Lambda',
         task_notes: 'online school',
         task_completed: 0,
         pro_id: 2
      },
      //3 **************
      {
         task_desc: 'search Google',
         task_notes: 'it is free resource',
         task_completed: 0,
         pro_id: 3
      },
      {
         task_desc: 'find a good book',
         task_notes: 'buy or online',
         task_completed: 0,
         pro_id: 3
      },
      {
         task_desc: 'Lambda',
         task_notes: 'online school',
         task_completed: 0,
         pro_id: 3
      }
   ]);
};
