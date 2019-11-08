exports.seed = function(knex) {
   return knex('projects').insert([
      //1 ********
      {
         pro_name: 'HTML/CSS/JS',
         pro_desc: 'learn how to create a website',
         pro_completed: 0
      },
      //2 *********
      {
         pro_name: 'FRONT-END',
         pro_desc: 'learn how to make website interactive',
         pro_completed: 0
      },
      //3 ***********
      {
         pro_name: 'BACK-END',
         pro_desc: 'learn how to store data from clients-server',
         pro_completed: 0
      }
   ]);
};
