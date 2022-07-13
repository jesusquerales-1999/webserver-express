const express = require('express');
const app = express();
const hbs =require('hbs');
/**Esto se utiliza para servir contenido estatico en la web
 * Es un midelware.
 */
app.use( express.static( __dirname + '/public'));


hbs.registerPartials( __dirname + '/views/parciales');

app.set('view engine', 'hbs');




app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Sr Querales',
        anio: new Date().getFullYear()
    });
});


app.get('/about',(req,res)=>{
    res.render('about',{
        anio: new Date().getFullYear()
    });
});


app.listen(process.env.PORT,()=>{
    console.log('App corriendo en el puerto',process.env.PORT);
})
