const Course = require("../models/Course");

class SiteController {
  // [GET] /
  // async home(req, res) {
  //   const courses = await Course.find({});
  //   res.json(courses);
  //   // res.render('home')
  // }

   home(req, res, next) {
    Course.find({})
    .then(courses => res.render('home',{
      title: 'TEST TITLE'
    }))
    .catch(next)
  }

  // [Get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
