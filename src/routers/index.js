const newRouter = require("../routers/news");
const siteRouter = require("../routers/sites");
const courseRouter = require("../routers/courses");

function route(app) {
    app.use("/news", newRouter);

    app.use("/courses", courseRouter);
    app.post("/search", (req, res) => {
        res.send("search");
    });
    app.use("/", siteRouter);
}
module.exports = route;