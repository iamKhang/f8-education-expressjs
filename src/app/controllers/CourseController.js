const Course = require("../models/Course");
const { multipaleMongooseToObject,mongooseToObject } = require("../../utils/mongoose");

class CourseController {
  // [GET] /
  // async home(req, res) {
  //   const courses = await Course.find({});
  //   res.json(courses);
  // }

  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
    .then(course  => {
        res.render('courses/show', {course: mongooseToObject(course)})
    })
    .catch(next)
  }
}

module.exports = new CourseController();
