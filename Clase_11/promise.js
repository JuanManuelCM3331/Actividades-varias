const promesa = new promise ((resolve, reject) => {
    const exito = false;
    if (exito) {
        resolve("La promesa se cumplió con éxito.");
    }
    else {
        reject("Error: La promesa no se cumplió.");
    }
});

promesa(
then(result => console.log(result))
.catch(error => console.error(error))
)
