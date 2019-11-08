exports.up = function(knex) {
   return (
      knex.schema
         //project table
         .createTable('projects', tb => {
            tb.increments();
            //
            tb.string('pro_name', 255).notNullable();
            tb.string('pro_desc', 255);
            tb.boolean('pro_completed')
               .notNullable()
               .defaultTo(0);
         })
         //resources table
         .createTable('resources', tb => {
            tb.increments();
            //
            tb.string('res_name', 255).notNullable();
            tb.string('res_desc', 255);
         })
         //tasks table
         .createTable('tasks', tb => {
            tb.increments();
            //
            tb.string('task_desc', 255).notNullable();
            tb.string('task_notes', 255);
            tb.boolean('task_completed')
               .notNullable()
               .defaultTo(0);
            tb.integer('pro_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('projects')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
         })
         //pro-res table
         .createTable('project_resources', tb => {
            tb.increments();
            //
            tb.integer('pro_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('projects')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');

            tb.integer('res_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('resources')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
         })
   );
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('project_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks');
};
