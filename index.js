const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  // middleware
  console.log(req.method, req.path);
  next();
}); // console.log the request before doing anything else

// app.use(express.static("public")); // serve static files from the /public folder

app
  .route("/")
  .get((req, res) => {
    res.render("index.ejs", { user: "bob" });
  })
  .post((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: post "
    );
    res.send("We create a resource ");
  })
  .put((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: put "
    );
    res.send("We update a resource ");
  })
  .delete((req, res) => {
    console.log(
      "date: " + new Date().toDateString() + " route: / method: delete "
    );
    res.send("We delete a resource ");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
