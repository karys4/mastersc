const expresslib = require("express");
const dirLibn = require("path")
const plantilla = require("ejs")

var app = expresslib()

app.use(expresslib.static('views'))
app.use(expresslib.static('public'))

app.set('view engine','ejs')

app.get('/',(req, respuesta) => {
	respuesta.render("page")

	//respuesta.sendfile(dirLib.join(__ dirname+'../views/index.ejs'

})

app.get('/contact',(req, respuesta) => {
	respuesta.render("contact")

})

app.listen(3000);
