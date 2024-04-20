const Course = require("../models/Course");
const { multipaleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  storedCourses(req, res, next) {

    let courseQuery = Course.find({});

    

    if(req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type
      })
    }

    Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, deleteCount]) =>
        res.render("me/stored-courses", {
          deleteCount,
          courses: multipaleMongooseToObject(courses),
        })
      )
      .catch(next);

    // Course.countDocumentsDeleted()
    //   .then((deleteCount) => {
    //     console.log(deleteCount);
    //   })
    //   .catch(next);


    // Course.find()
    //   .then((courses) =>
    //     res.render("me/stored-courses", {
    //       courses: multipaleMongooseToObject(courses),
    //     })
    //   )
    //   .catch(next);
  }

  trashCourses(req, res, next) {
    let courseQuery = Course.findDeleted({});
  
    if(req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type
      });
    }
  
    Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, deleteCount]) =>
        res.render("me/trash-courses", {
          deleteCount,
          courses: multipaleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
