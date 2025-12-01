// promesa 2, ahora es personal.

const { readFile } = require('fs');
const getText = (nombreArchivo) => {
    return new Promise((resolve, reject) => {
        readFile(`./data/${nombreArchivo}`, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

async function read (){
  try{
    console.log(await getText("archivo.txt"));
    console.log(await getText("archivo.txt"));
    console.log(await getText("archivo.txt"));
    throw new Error ("Esto es un error no esperado.");
  } catch (error){
    console.log(error)
  }
}
read();