const express = require('express');
const app = express();
const puerto = 8080;

app.listen(puerto, (error)=>{
  if(error){
    console.log(`Se produjo un error ${error}`)
  }else{
    console.log(`Servidor escuchando puerto: ${puerto}`)
  }
})