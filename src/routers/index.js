const newRouter = require("../routers/news");
const siteRouter = require("../routers/sites");

function route(app) {
    app.use("/news", newRouter);
    app.post("/search", (req, res) => {
        res.send("search");
    });
    app.use("/", siteRouter);
}
module.exports = route;