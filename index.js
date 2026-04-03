import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create-post", (req, res) => {
  const { title, content, category } = req.body;
  console.log({ title, content, category });
  res.render("index.ejs", { title, content, category });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
