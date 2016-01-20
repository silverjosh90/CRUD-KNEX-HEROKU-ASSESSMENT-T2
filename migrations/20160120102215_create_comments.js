
exports.up = function(knex, Promise) {
  return knex.schema.createTable('commments', function(t){
    t.increments();
    t.integer('post_id')
    t.string('commenter');
    t.string('body');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
