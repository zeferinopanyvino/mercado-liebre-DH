const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


app.use(express.static((__dirname) + '/public'));
/*const publicFolderPath= path.resolve(__dirname, './public');
app.use(expres..static(publicFolderPath));   */ 
app.get("/", function(req, res){
    res.send("Hola mundo!")
})

app.listen(PORT, function(){console.log(`corriendo en puerto${PORT}`)})
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});