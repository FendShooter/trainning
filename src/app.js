const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { Client } = require("pg");
// static folder
const staticPath = path.join(__dirname, "../public");

// change template folder
const viewsPath = path.join(__dirname, "../templates/views");

// change template folder
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();
app.use(express.static(staticPath));
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

const client = new Client({
  // user: "postgres",
  // host: "localhost",
  // database: "shop",
  // password: "1983",
  // port: 5432
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
client.connect();

app.get("/", (req, res) => {
  res.render("index", {
    body: "body template text",
    title: "Welcome to our home page"
  });
});

// products
let gene = Math.floor(Math.random() * 10);
console.log(gene);

app.get(`/products`, (req, res) => {
  const sql = "select * from tb_view";
  client.query(sql, (err, resl) => {
    res.send(resl.rows);
  });
});

app.get("/regis", (req, res) => {
  res.render("regis", {
    title: "Registration page."
  });
});

// pricing

app.get("/news", (req, res) => {
  res.render("news", {
    title: "Get our news letter every week.."
  });
});

// login

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login page"
  });
});

// error

app.get("*", (req, res) => {
  res.render("404-error");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
