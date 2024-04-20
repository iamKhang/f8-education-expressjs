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

  delete(req, res, next){
    Course.delete({_id: req.params.id}, req.body)
    .then(()=> res.redirect('back'))
    .catch(next)
  }

  forceDelete(req, res, next){
    Course.deleteOne({_id: req.params.id})
    .then(()=> res.redirect('back'))
    .catch(next)
  }

  restore(req, res, next){
    Course.restore({_id: req.params.id})
    .then(()=> res.redirect('back'))
    .catch(next)
  }

  // [POST] /handle-form-actions
  handleFormActions(req, res, next){
    if (req.body.actions === 'delete') {
      Course.delete({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
    } else {
      res.json(req.body)
    }
  }

  // [POST] /handle-form-trash-actions
  handleFormTrashActions(req, res, next){

    console.log(req.body.actions)
    switch(req.body.actions){
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
        break;
      case 'restore':
        Course.restore({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
        break;
      default:
        res.json({message: 'Action is invalid'})
    }
  }
}

module.exports = new CourseController();
