const EventEmitter = require('events');

class Descarga extends EventEmitter{

    iniciar(){
        console.log('Iniciando descarga...')
        this.emit('inicio');
    }
    progreso(porcentaje){
        console.log('Descarga: ',porcentaje, "%")
        this.emit('progreso', porcentaje);
    }
    finalizar(){
        console.log('Descarga compelta.')
        this.emit('fin');
    }
}

const descarga = new Descarga();

descarga.on('inicio',()=> console.log("--La descarga ha empezado--"))
descarga.on('progreso',(porcentaje)=> console.log("Progreso: ",porcentaje))
descarga.on('fin',()=> console.log("--La descarga ha emepzado--"))

descarga.iniciar();
descarga.progreso(25);
descarga.progreso(70);
descarga.progreso(80);
descarga.finalizar();