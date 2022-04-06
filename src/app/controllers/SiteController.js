const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // [GET] /
  home(req, res, next) {
    // Course.find({}, function(err, courses) {
    //     if (!err) {
    //         res.json(courses);
    //     } else {
    //         res.status(400).json({ error: "ERROR !!!" });
    //     }
    // });

    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("home", { courses : mutipleMongooseToObject(courses) });
      })
      .catch(next);

    // res.render("home");
  }
  // [GET] / search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
