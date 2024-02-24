const Course = require("../models/Course");
const {multipaleMongooseToObject} = require('../../utils/mongoose')

class SiteController {
  // [GET] /
  // async home(req, res) {
  //   const courses = await Course.find({});
  //   res.json(courses);
  // }

  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("home", { courses: multipaleMongooseToObject(courses)});
      })
      .catch(next);
  }

  // [Get] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
