
var express = require('express');
var app = express();
var port = 5555;

const git = require('simple-git')("../pruebasGit/");

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/checkout/:version', function (req, res) {
    git.checkout("master",()=>{
        git.checkout(req.params.version);
    });

    res.json("ok")
    
});

app.get('/tags', function (req, res) {


    git.tags((err, tags) => console.log(tags.all));
    //git.tags((err, tags) => console.log("Latest available tag: %s", tags.latest));
    
    // git.tag(["v1.0.1"], (e) => console.log(e))
    //git.pushTags("origin")
    
    //git.checkout("nuevaTag", () => console.log())
    
    //git.branchLocal((a,branches)=>res.json(branches.all));
    git.tags((err, tags) => res.json( tags.all));
    
});

app.get('/branch', function (req, res) {


    git.tags((err, tags) => console.log(tags.all));
    //git.tags((err, tags) => console.log("Latest available tag: %s", tags.latest));
    
    // git.tag(["v1.0.1"], (e) => console.log(e))
    //git.pushTags("origin")
    
    //git.checkout("nuevaTag", () => console.log())
    
    git.tags((err, tags) => console.log("Latest available tag: %s", tags.latest));

    git.branchLocal((a,branches)=>console.log(branches.current));
    git.branchLocal((a,branches)=>res.json(branches));
    
    
});

app.listen(port, function () {
    console.log(`
    |-----------------------------------|
    | testing probando en puerto ${ port } !\t|
    |-----------------------------------|
    `);
});