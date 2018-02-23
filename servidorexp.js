const expresslib = require("express");
const dirLibn = require("path")
const plantilla = require("ejs")
const parseador = require("body-parser")
var fs = require("fs"); //Agregado referente a Tarea

//Agregado referente a Tarea
fs.writeFile("/mastersc/public/storage", "Hey there!", function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

var app = expresslib()
var jsonParseador = parseador.json()
var urlparser = parseador.urlencoded(extended:false));


app.use(expresslib.static('views'))
app.use(expresslib.static('public'))
app.set('view engine','ejs')

app.get('/',(req, respuesta) => {
	respuesta.render("page")

	//respuesta.sendfile(dirLib.join(__ dirname+'../views/index.ejs'

})

app.get('/contact',(req, respuesta) => {
	respuesta.render("contact")
	//respuesta.sendfile(dirLib.join(__ dirname+'../views/index.ejs'

})

app.get('/contact',(req, respuesta) => {
	console.log('contact')
	//respuesta.sendfile(dirLib.join(__ dirname+'../views/index.ejs'

})
// POST /login gets urlencoded bodies
app.post('/contact', urlparser, function (req, respuesta) => {
  respuesta.send('Recibido', + req.body.name + req.body.email + req.body.phone + req.body.website + req.body.message)
  //console.log(req.body.name);
})






app.listen(3000);
