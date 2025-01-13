import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port=3000;

let blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
    res.render("index.ejs", {blogs: blogs}));
app.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(blog => blog.id === id);
    if (blog) {
      res.render("blog.ejs", { blog });
    } else {
      res.status(404).send("Blog not found");
    }
});  
app.get("/form",(req, res) =>
    res.render("create.ejs"));

app.post("/create", (req, res) => {
    const { title, content, image } = req.body;
    blogs.push({ id: blogs.length + 1, title, content, image });
    res.redirect("/");
  });  
app.delete("/delete", (req, res) =>{});
app.put("/update", (req, res) =>{});
app.listen(3000, () => {
    console.log('Server is running on port '+port);
  });