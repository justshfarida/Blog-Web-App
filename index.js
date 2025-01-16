import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
const app = express();
const port=3000;

let blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

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

// Create a new blog
app.post("/create", (req, res) => {
    const { title, content, image } = req.body;
    blogs.push({ id: Date.now(), title, content, image });
    res.redirect("/");
});

// Delete a blog by ID
app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id);
    res.redirect("/");
});
app.get("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
      return res.status(404).send("Blog not found");
  }

  res.render("update.ejs", { blog });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id); // Extract the ID from the URL
  const { title, content, image } = req.body; // Extract updated fields from the request body

  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
  }

  // Update the blog properties
  if (title) blog.title = title;
  if (content) blog.content = content;
  if (image) blog.image = image;

  res.redirect("/");
});
app.listen(3000, () => {
    console.log('Server is running on port '+port);
  });
// About page
app.get('/about', (req, res) => {
  res.render('about.ejs');
});

// Contact page
app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});
