const Course = require("../models/Course");
const { multipaleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multipaleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
