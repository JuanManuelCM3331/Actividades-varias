#include <iostream>  // Librería necesaria para usar cout, cin y endl
#include <cstdlib>   // Librería necesaria para system() y EXIT_SUCCESS
using namespace std; // Permite usar cout y cin sin escribir std::

int main()
{
    int a, b;

    cout << "Ingresa el primer numero" << endl;
    cin >> a;

    cout << "" << a * b << endl;  // Multiplicación

        while (b!=10){
            b=b+1;
            cout << a
                 << " multiplicado por " << b
                 << ": " << (a * b)
                 << endl;
        }
        
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

#include <iostream>  // Librería necesaria para usar cout, cin y endl
#include <cstdlib>   // Librería necesaria para system() y EXIT_SUCCESS
using namespace std; // Permite usar cout y cin sin escribir std::

int main()
{
    float velocidad_inicial, velocidad_final, tiempo, aceleracion;

    cout << "Registra aqui la velocidad inicial" << endl;
    cin >> velocidad_inicial;

    cout << "Registra aqui la velocidad final" << endl;
    cin >> velocidad_final;

    cout << "Registra aqui la aceleracion" << endl;
    cin >> tiempo;

    aceleracion = (velocidad_inicial - velocidad_final) / tiempo;
    cout << "La aceleracion es: " << aceleracion << " m/s^2" << endl;

        
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

//debe preguntar la edad del hijo del usuario, debe mostrar de 0 a 6 grupo primera infancia, 
//de 6 a 12 grupo de segunda infancia y de 12 a 18 grupo de adolecencia

#include <iostream>
#include <cstdlib>
using namespace std;

int main()
{
    int edad_menor;

    cout << "Ingresa aqui la edad de tu hijo:" << endl;
    cin >> edad_menor;

    if (edad_menor <= 0) {       
        cout << "Edad no válida" << endl;
    }
    else if (edad_menor <= 5) {       
        cout << "Tu hijo pertenece al grupo de primera infancia" << endl;
    }
    else if (edad_menor <= 12) {
        cout << "Tu hijo pertenece al grupo de segunda infancia" << endl;
    }
    else if (edad_menor <= 18) {
        cout << "Tu hijo pertenece al grupo de adolescencia" << endl;
    }
    else {
        cout << "Tu hijo ya es mayor de edad" << endl;
    }
        
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// pedir 4 notas y sacar promedio.
// debajo de 3 no aprobado, 3 a 3.5 podra recuperar, mas de 3.5 aprobado

#include <iostream>
#include <cstdlib>
using namespace std;

float main(){

    float notas, nota, cantidad_notas, promedio;

    while (cantidad_notas!=4){
        cout << "Ingresa aqui la nota del 1 al 5 (4 veces)" << endl;
        cin >> nota;
        notas+=nota;
        cantidad_notas+=1;
    }

    promedio=notas/4;

    if (promedio <= 2.9) {       
        cout << "Lo siento, reprobaste." << endl;
    }
    else if (promedio >= 3.0 && promedio <= 3.4) {            
        cout << "No has aprobado, pero aun puedes recuperar." << endl;
    }
    else   {
        cout << "Felicidades, has aprobado" << endl;
    }

    system("pause");
    return EXIT_SUCCESS;
}
// Creado por Juan Manuel Cardona Molina.

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// solicite la cantidad de notas a digitar, pida la cantidad de notas
// y muestre el promedio

#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

    float notas, nota, notas_contador, cantidad_notas, promedio;

    cout << "¿Cuantas notas deseas ingresar?" << endl;
    cin>> cantidad_notas;

    while (notas_contador!=cantidad_notas){
        cout << "Ingresa aqui la nota "<< notas_contador << " del 1 al 5:"  << endl;
        cin >> nota;
        notas+=nota;
        notas_contador+=1;
    }

    promedio=notas/cantidad_notas;

    cout << "El promedio de las notas es: " << promedio << endl;
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

    float nota;
    int verficador_nota;

    do{
        cout << "Ingresa aqui la nota"<< endl;
        cin >> nota;

        cout << "Deseas ingresar otra nota? (1 para si, 0 para no)" << endl;
        cin >> verficador_nota;

    } while (verficador_nota == 1);

    cout << " Notas ingresadas correctamente "<< endl;
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

#include <iostream>
#include <cstdlib>
#include <string>
using namespace std;

int main(){

    int referencia, talla, costo, precio_venta;
    string descripcion, disponibilidad;
        
        cout << "Digite la referencia del zapato..."<< endl;
        cin >> referencia;

        cout << "Digite la descripcion del zapato..."<< endl;
        cin >> descripcion;

        cout << "Digita la talla..."<< endl;
        cin >> talla;

        cout << "Digita la letra si esta disponible o no para la venta S/N..."<< endl;
        cin >> disponibilidad;

        cout << "Digita el costo del zapato..."<< endl;
        cin >> costo;

        cout << "Digita el precio de venta del zapato..."<< endl;
        cin >> precio_venta;

        cout << " " << endl;
        cout << " " << endl;
        cout << "LOS DATOS REGISTRADOS SON LOS SIGUIENTES" << endl;
        cout << " " << endl;  
        cout << "Referencia: " << referencia << endl;
        cout << "Descripcion: " << descripcion << endl;
        cout << "Talla: " << talla << endl;
        cout << "Disponibilidad: " << disponibilidad << endl;
        cout << "Costo: " << costo << endl;
        cout << "Precio de venta: " << precio_venta << endl;
        cout << " " << endl;
        cout << "Gracias por registrar el zapato" << endl;
    
    system("pause");
    return EXIT_SUCCESS;
    // Juan Manuel Cardona Molina
}

//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
#include <iostream>
#include <cstdlib>
using namespace std;

float main(){

    float notas, nota, cantidad_notas, promedio;

    while (cantidad_notas!=4){
        cout << "Ingresa aqui la nota del 1 al 5 (4 veces)" << endl;
        cin >> nota;
        notas+=nota;
        cantidad_notas+=1;
    }

    promedio=notas/4;

    if (promedio <= 2.9) {       
        cout << "Lo siento, reprobaste." << endl;
    }
    else if (promedio >= 3.0 && promedio <= 3.4) {            
        cout << "No has aprobado, pero aun puedes recuperar." << endl;
    }
    else   {
        cout << "Felicidades, has aprobado" << endl;
    }

    system("pause");
    return EXIT_SUCCESS;
}
// Creado por Juan Manuel Cardona Molina.

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// solicite la cantidad de notas a digitar, pida la cantidad de notas
// y muestre el promedio

#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

    float notas, nota, notas_contador, cantidad_notas, promedio;

    cout << "¿Cuantas notas deseas ingresar?" << endl;
    cin>> cantidad_notas;

    while (notas_contador!=cantidad_notas){
        cout << "Ingresa aqui la nota "<< notas_contador << " del 1 al 5:"  << endl;
        cin >> nota;
        notas+=nota;
        notas_contador+=1;
    }

    promedio=notas/cantidad_notas;

    cout << "El promedio de las notas es: " << promedio << endl;
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

    float nota;
    int verficador_nota;

    do{
        cout << "Ingresa aqui la nota"<< endl;
        cin >> nota;

        cout << "Deseas ingresar otra nota? (1 para si, 0 para no)" << endl;
        cin >> verficador_nota;

    } while (verficador_nota == 1);

    cout << " Notas ingresadas correctamente "<< endl;
    system("pause");
    return EXIT_SUCCESS;
}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

#include <iostream>
#include <cstdlib>
#include <string>
using namespace std;

int main() {
    int referencia, talla, unidades;
    string descripcion, disponibilidad, tipo_zapato;
    float precio, costo, total_utilidad, utilidad, porcentaje_utilidad, total_costos, total_precios, tamaño;

    cout << "Digite la referencia del zapato..." << endl;
    cin >> referencia;

    cout << "Digite el tipo de zapato..." << endl;
    cin >> tipo_zapato;

    cout << "Digite el tamaño del zapato (cm)..." << endl;
    cin >> tamaño;

    cout << "Digita la talla..." << endl;
    cin >> talla;

    cout << "Digita la letra si esta disponible o no para la venta S/N..." << endl;
    cin >> disponibilidad;

    cout << "Digita el costo del zapato..." << endl;
    cin >> costo;

    cout << "Digita el precio de venta del zapato..." << endl;
    cin >> precio;

    cout << "Digita la cantidad de zapatos a comprar..." << endl;
    cin >> unidades;

    cout << "Digita la utilidad por unidad..." << endl;
    cin >> utilidad;

    //------------------------------------
    total_costos = costo * unidades;
    total_precios = precio * unidades;
    total_utilidad = utilidad * unidades;
    porcentaje_utilidad = (utilidad / costo) * 100;
    //------------------------------------

    cout << endl;
    cout << "LOS DATOS REGISTRADOS SON LOS SIGUIENTES" << endl;
    cout << endl;
    cout << "Referencia: " << referencia << endl;
    cout << "Descripcion: " << tipo_zapato << " " << tamaño << "(cm)" << endl;
    cout << "Talla: " << talla << endl;
    cout << "Disponibilidad: " << disponibilidad << endl;
    cout << "Cantidad de zapatos: " << unidades << endl;
    cout << "Costo unidad: " << costo << endl;
    cout << "Costo total: " << total_costos << endl;
    cout << "Precio unidad: " << precio << endl;
    cout << "Precio total de " << unidades << " unidades: " << total_precios << endl;
    cout << "Utilidad por unidad: " << utilidad << endl;
    cout << "Utilidad total: " << total_utilidad << endl;
    cout << "Porcentaje de utilidad: " << porcentaje_utilidad << "%" << endl;
    cout << endl;
    cout << "Gracias por digitar la informacion" << endl;

    system("pause");
    return EXIT_SUCCESS;
    // Juan Manuel Cardona Molina

    /* 
        Hago este comentario para relatan un problema que tuve, pues al intentar pedir los datos haciendo un
        input de "descripcion", al ingresar la cadena de texto con espacios como "tacon 10 cm", el programa
        tomaba cada dato por separado haciendo que ingresara tacon a la variable de descripcion, 10 en la de talla
        y cm en la de disponibilidad; no supe como solucionarlo y opte por separar los datos.
    */
}
