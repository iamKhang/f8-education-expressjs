const Course = require("../models/Course");
const {
  multipaleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class CourseController {
  // [GET] /
  // async home(req, res) {
  //   const courses = await Course.find({});
  //   res.json(courses);
  // }

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  store(req, res, next) {
    // res.render('courses/create')
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
    .then(course => res.render("courses/edit", {
      course: mongooseToObject(course)
    }))
    .catch(next)
    
  }

  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next)
  }
}

module.exports = new CourseController();
