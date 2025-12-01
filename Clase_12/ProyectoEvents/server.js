const express = require('express');
const fs = require('fs');
const path = require('path');

const ProcesarPedido = require('./Controllers/ProcesarPedido');

const app = express();
const port = 3000;

app.use(express.json());
app.post('/pedido', (req, res) => {
    const pedido = req.body;
    console.log("Prueba")
    const procesar = new ProcesarPedido(pedido)
    procesar.iniciar();

    procesar.on('procesar', () =>procesar.procesarP());
    procesar.on('enviar', () =>procesar.enviarP());

    procesar.onCompletado(() => {
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>
            Lista Producto
            </h1>
            <pre>
            ${JSON.stringify(pedido, null, 2)}
            </pre>
        </body>
        </html>
        `;
        fs.writeFile(path.join(__dirname, 'public','pedidoCompleto.html'), htmlContent, (err) => {
            if(err){
                console.low(err)
                res.status(500).send("Error al generar el pedido");
            }else{
                console.log("Pedido generado con exito");
            }
        });
    })
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','pedidoCompleto.html'))
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`)   
});
