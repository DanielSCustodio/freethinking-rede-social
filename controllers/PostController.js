/* const Post = require('../models/Post');
const User = require('../models/User'); */

module.exports = class PostController {
  static async showPosts(_req, res) {
    res.render('posts/home');
  }

  static async dashboard(req, res) {
    res.render('posts/dashboard');
  }
};
