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


  create(req, res, next) {
    res.render('courses/create')
  }

  store(req, res, next) {
    // res.render('courses/create')
    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course.save()
    .then(() => res.redirect('/'))
    .catch(next)
}}

module.exports = new CourseController();
