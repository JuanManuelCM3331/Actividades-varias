const EventEmitter = require('events');
class ProcesarPedido extends EventEmitter{
    constructor(pedi){
        super();
        this.pedido = pedi
    }
    iniciar(){
        console.log("Iniciando el procedimineto del pedido...",
        this.pedido)
        setTimeout(()=>{
        console.log("Pedido Recibido...");
        this.emit("procesar");
        },5000);
    }
    procesarP(){
        setTimeout(()=>{
        console.log("Procesando pedido...");
        this.emit("enviar");
        },5000);
    }
    enviarP(){
        setTimeout(()=>{
        console.log("Enviando pedido...");
        this.emit("Completado");
        },5000);
    }
    onCompletado(callback){
        this.on('Completado',callback)
    }
}
module.exports = ProcesarPedido;