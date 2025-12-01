import java.util.Scanner;

public class asdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int cantidadEstudiantes;
        int opcion;
        double sumaNotas, promedio;

        System.out.println("=== Cálculo de Promedios por Materia ===");
        System.out.println("1. Matemáticas");
        System.out.println("2. Español");
        System.out.println("3. Inglés");
        System.out.print("Seleccione la materia: ");
        opcion = sc.nextInt();

        switch (opcion) {
            case 1:
                System.out.print("Ingrese la cantidad de estudiantes: ");
                cantidadEstudiantes = sc.nextInt();
                sumaNotas = 0;

                for (int i = 1; i <= cantidadEstudiantes; i++) {
                    System.out.print("Ingrese la nota del estudiante " + i + ": ");
                    double nota = sc.nextDouble();
                    sumaNotas += nota;
                }

                promedio = sumaNotas / cantidadEstudiantes;
                System.out.println("El promedio de Matemáticas es: " + promedio);
                break;

            case 2:
                System.out.print("Ingrese la cantidad de estudiantes: ");
                cantidadEstudiantes = sc.nextInt();
                sumaNotas = 0;
                int contador = 1;

                while (contador <= cantidadEstudiantes) {
                    System.out.print("Ingrese la nota del estudiante " + contador + ": ");
                    double nota = sc.nextDouble();
                    sumaNotas += nota;
                    contador++;
                }

                promedio = sumaNotas / cantidadEstudiantes;
                System.out.println("El promedio de Español es: " + promedio);
                break;

            case 3:
                System.out.print("Ingrese la cantidad de estudiantes: ");
                cantidadEstudiantes = sc.nextInt();
                sumaNotas = 0;
                int i = 1;

                do {
                    System.out.print("Ingrese la nota del estudiante " + i + ": ");
                    double nota = sc.nextDouble();
                    sumaNotas += nota;
                    i++;
                } while (i <= cantidadEstudiantes);

                promedio = sumaNotas / cantidadEstudiantes;
                System.out.println("El promedio de Inglés es: " + promedio);
                break;

            default:
                System.out.println("Opción no válida. Intente nuevamente.");
                break;
        }

        sc.close();
    }
}
// con un switch calcular las medidas en grados de los angulos (teniendo en cuenta el tipo de triangulo)
// finalmente, calcular el area del triangulo, sin importar el tipo.
//
// equilatero: 3 lados iguales, 3 angulos iguales de 60 grados.
//
// isosceles: 2 lados iguales, 2 angulos iguales.
//
// escaleno: 3 lados diferentes, 3 angulos diferentes.
//

