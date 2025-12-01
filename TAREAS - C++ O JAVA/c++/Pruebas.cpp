#include <iostream>  // Librería necesaria para usar cout, cin y endl
#include <cstdlib>   // Librería necesaria para system() y EXIT_SUCCESS
using namespace std; // Permite usar cout y cin sin escribir std::

// Función principal del programa
int main()
{
    int a, b; // Declaración de dos variables enteras

    // Solicita al usuario el primer número
    cout << "Ingresa el primer numero" << endl;
    cin >> a; // Guarda el valor ingresado en la variable 'a'

    // Solicita al usuario el segundo número
    cout << "Ingresa el segundo numero" << endl;
    cin >> b; // Guarda el valor ingresado en la variable 'b'

    // Estas son operaciones, donde agarra al numero a y b y realiza la operacion, donde:
    cout << "La suma de los numeros es: " << a + b << endl;            // Suma
    cout << "La resta de los numeros es: " << a - b << endl;           // Resta
    cout << "La multiplicacion de los numeros es: " << a * b << endl;  // Multiplicación
    cout << "La division de los numeros es: " << a / b << endl;        // División entera
    cout << "El residuo es: " << a % b << endl;                        // Residuo de la división

    system("pause");     // Pausa la ejecución para que el usuario vea los resultado
    return EXIT_SUCCESS; // Indica que el programa terminó correctamente
}