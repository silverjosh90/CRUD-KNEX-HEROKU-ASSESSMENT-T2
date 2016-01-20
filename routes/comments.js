var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var server = require('../serverlogic/serverlogic.js')

router.get('/:post_id/comments', function(req, res, next) { var query = "SELECT * FROM comments where post_id="+req.params.post_id
server.runQuery(query, function(post){
  var posts = post.rows
  res.json({"SUCCESS": posts});
})
});

module.exports = router;
