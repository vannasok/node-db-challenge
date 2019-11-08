exports.seed = function(knex) {
   return knex('project_resources').insert([
      //1 *******
      { pro_id: 1, res_id: 1 },
      { pro_id: 1, res_id: 2 },
      { pro_id: 1, res_id: 3 },

      //2 ********
      { pro_id: 2, res_id: 1 },
      { pro_id: 2, res_id: 2 },
      { pro_id: 2, res_id: 3 },

      //3 ********
      { pro_id: 3, res_id: 1 },
      { pro_id: 3, res_id: 2 },
      { pro_id: 3, res_id: 3 }
   ]);
};
