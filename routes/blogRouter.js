var blogRouter = require('express').Router();
var Blog = require('../db/schemas.js').Blog;


blogRouter.route('/')
  .get(function(req, res) {
    Blog.find(function(err, blogs) {
      if(err) console.log(err);
      res.render('blogs', { blogs: blogs });
    })
  })


blogRouter.route('/new')
  .get(function(req, res) {
    if (req.user) {
      res.render('new_blog');
    } else {
      res.redirect('/login');
    }
  })
  .post(function(req, res) {
    if (req.user) {
      var blog = new Blog(req.body);
      blog.save(function(err, blog) {
        res.redirect('/admin-page');
      })
    } else {
      redirect('/login');
    }
  })


blogRouter.route('/:id')
  .get(function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
      if(err) console.log(err);
      res.render('show_blog', { blog: blog });
    })
  })
  .put(function(req, res) {
    if (req.user) {
      Blog.findById(req.params.id, function(err, blog) {
        if(err) console.log(err);
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.save(function(err) {
          if(err) console.log(err);
          res.redirect('/admin-page');
        });
      })
    } else {
      res.redirect('/login')
    }
  })


blogRouter.route('/:id/edit')
  .get(function(req, res) {
    if (req.user) {
      Blog.findById(req.params.id, function(err, blog) {
        if(err) console.log(err);
        res.render('edit_blog', { blog: blog });
      })
    } else {
      res.redirect('/login')
    }
  })


blogRouter.route('/:id/delete')
  .get(function(req, res) {
    if (req.user) {
      Blog.remove({ _id: req.params.id }, function(err) {
        if(err) console.log(err);
        res.redirect('/admin-page')
      })
    } else {
      res.redirect('/login')
    }
  })

module.exports = blogRouter;