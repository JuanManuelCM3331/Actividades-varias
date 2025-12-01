const EventEmitter = require('events');
const emisor = new EventEmitter();

emisor.on('saludo',(nombre) => {
    console.log(`Hola, ${nombre}`)
})
emisor.on('progreso',(porcentaje) => {
    console.log(`proceso, ${porcentaje}`)
})
emisor.on('mensaje',(usuario,contenido) => {
    console.log(`[${usuario}]: ${contenido}`)
})

emisor.on('inicio',() => console.log(`El proceso ha comenzado`))
emisor.on('fin',() => console.log(`El proceso ha terminado`))
emisor.once('conectar',() => console.log(`Conexion establecida`))

emisor.emit('inicio')
emisor.emit('progreso',10)
emisor.emit('progreso',30)
emisor.emit('progreso',80)
emisor.emit('conectar')
emisor.emit('saludo','juan')
emisor.emit('mensaje','juan','listo el sistema')
emisor.emit('fin')
emisor.emit('conectar')
