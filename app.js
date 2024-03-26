const express = require('express');
var http = require('http');
const app = express();

const host = '0.0.0.0';
const port = 3000;

app.use("/images", express.static(__dirname + '/assets/images'));

app.listen(port, host, () => {
  console.log(`Servidor funcionando na porta ${port}`)
});