const http = require('http');
const fs = require('fs');
const https = require('https');
const { error } = require('console');

const server = http.createServer((req, res) => {
  if (req.url === "/") {

    res.writeHead(200, { 'content-type': 'text/plain' });

    fs.readFile("./data/archivo.txt", "utf-8", (err, data) => {
      if (err) {
        res.write("error al leer el archivo");
      } else {
        res.write("contenido del archivo :\n\n" + data + "\n\n\n");

      }

      https
        .get("https://jsonplaceholder.typicode.com/todos/1", (resp) => {
          let jsonData = "";

          resp.on("data", (chunk) => {
            jsonData += chunk;
          });

          resp.on("end", () => {
            res.write(
              "datos de la solicitud HTTPS:\n\n" +
                JSON.stringify(JSON.parse(jsonData), null, 2) +
                "\n\n"
            );

            setTimeout(() => {
              res.write("temporizador completado despues de 5 segundos");
              res.end();
            }, 5000);
          });
        })
        .on("error", (err) => {
          res.write("Error en la solicitud" + err);
          res.end();
        });
    });

  } else {
    res.statusCode = 404;
    res.end("no existe la pagina");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
