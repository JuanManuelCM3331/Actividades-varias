const fs = require('fs');
const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname)));

const getData = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await result.json();

        const tablasFilas = data.map(item => {
            return `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed ? "Si completado" : "No completado"}</td>
            </tr>
            `
        }).join("");

        const templatePath = path.join(__dirname, 'tabla.html');
        const outPath = path.join(__dirname, 'datosAPI.html');

        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8').replace('<!-- datos de la tabla -->', tablasFilas);

        fs.writeFileSync(outPath, htmlTemplate, 'utf-8');
        console.log("Archivo creado con exito");
    } catch (error) {
        console.log("Error: ", error);
    }
};
getData().then(() => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'datosAPI.html'));
    });
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
});