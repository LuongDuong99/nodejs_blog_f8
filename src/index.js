const express = require("express");
// const morgan = require("morgan");
const handlebars = require("express-handlebars");
// const create = require('express-handlebars')
const path = require('path')
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "resources/views")));

// MVC
const route = require("./routers")
const a = express.Route()

// HTTP logger
// app.use(morgan("combined"));

//Template engine
// app.engine("handlebars", handlebars());
app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// app.use(express.urlencoded({
//     extended: true
// }))
// app.use(express.json)


//Route init
route(app);


app.listen(port, () => {
    console.log(`=>>>>>>>>>>> http://localhost:${port}`);
});