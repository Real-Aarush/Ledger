import express from "express";
import bodyParser from "body-parser";



const app = express();

const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index.ejs",{blogs: list_of_blogs});
});


app.get("/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/new", (req, res) => {
    console.log(req.body);
    res.render("new", { added: true });

   const current_blog = {
        id: list_of_blogs.length + 1,
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
        date: req.body.date
     }
     list_of_blogs.push(current_blog);
});

app.post("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    list_of_blogs = list_of_blogs.filter(post => post.id !== id);

    res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
    res.render("edit.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




let list_of_blogs =[
    {id: 1,
    title:"Welcome to Ledger",
    content:"This is a sample entry to show how a post looks on the home page. Swap this block for your real data.",
    date: "Aug 16, 2026",
    time:"10:24 AM"
}

]

