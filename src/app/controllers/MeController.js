const Course = require("../models/Course");
const { multipaleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  storedCourses(req, res, next) {

    Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
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
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipaleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
