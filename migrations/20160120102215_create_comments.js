
exports.up = function(knex, Promise) {
  knex.schema.createTable('commments', function(t){
    t.increments();
    t.integer('post_id')
    t.string('commenter');
    t.string('body');

  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('comments');
};
