exports.seed = function(knex) {
   return knex('resources').insert([
      { res_name: 'internet', res_desc: 'look up in the internet' },
      { res_name: 'books', res_desc: 'reading from the books' },
      { res_name: 'bootcamp', res_desc: 'learn online or campus' }
   ]);
};
