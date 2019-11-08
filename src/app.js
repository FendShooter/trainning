const express = require('express');
const path = require('path');
const hbs = require('hbs');
// static folder
const staticPath = path.join(__dirname, '../public');

// change template folder
const viewsPath = path.join(__dirname, "../templates/views");

// change template folder
const partialsPath = path.join(__dirname, "../templates/partials");


const app = express();
app.use(express.static(staticPath));
app.set('views', viewsPath)
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);



app.get('/', (req, res) => {
  res.render('index', {
    body: "body template text",
    title:"Welcome to our home page"
  });
});

// products

app.get("/products", (req, res) => {
  res.render("products", {
    body: "Select our futurist procducts",
    title: "You will really envoy them..."
  });
});


// registration

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
  res.render('404-error');
});



const port = process.env.PORT || 5000;

app.listen(port, ()=>{ console.log(`Server running on port ${port}...`);
})