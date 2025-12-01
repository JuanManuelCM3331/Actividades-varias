import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double lado1, lado2, lado3, altura;
        String tipo = "";

        System.out.println("Ingrese la medida del lado 1:");
        lado1 = sc.nextDouble();
        System.out.println("Ingrese la medida del lado 2:");
        lado2 = sc.nextDouble();
        System.out.println("Ingrese la medida del lado 3:");
        lado3 = sc.nextDouble();
        System.out.println("Ingrese la medida de la altura (correspondiente a la base que elija):");
        altura = sc.nextDouble();

        if (lado1 == lado2 && lado2 == lado3) {
            System.out.println("El triángulo es equilátero");
            tipo = "equilatero";
        } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            System.out.println("El triángulo es isósceles");
            tipo = "isosceles";
        } else {
            System.out.println("El triángulo es escaleno");
            tipo = "escaleno";
        }

        switch (tipo) {
            case "equilatero":
                System.out.println("Todos los ángulos de un triángulo equilátero son 60°.");
                System.out.println("Área = " + (lado1 * altura) / 2);
                break;

            case "isosceles":
                double base, ladosIguales;
                if (lado1 == lado2) {
                    base = lado3;
                    ladosIguales = lado1;
                } else if (lado2 == lado3) {
                    base = lado1;
                    ladosIguales = lado2;
                } else {
                    base = lado2;
                    ladosIguales = lado1;
                }

                double anguloBase = Math.toDegrees(Math.atan((base / 2) / altura));
                double anguloVertice = 180 - 2 * anguloBase;

                System.out.println("Ángulo 1 (base izquierda): " + anguloBase + "°");
                System.out.println("Ángulo 2 (base derecha): " + anguloBase + "°");
                System.out.println("Ángulo 3 (vértice): " + anguloVertice + "°");

                System.out.println("Área = " + (base * altura) / 2);
                break;

            case "escaleno":
                double area = (lado1 * altura) / 2;

                double A = Math.toDegrees(Math.acos((Math.pow(lado2, 2) + Math.pow(lado3, 2) - Math.pow(lado1, 2)) / (2 * lado2 * lado3)));
                double B = Math.toDegrees(Math.acos((Math.pow(lado1, 2) + Math.pow(lado3, 2) - Math.pow(lado2, 2)) / (2 * lado1 * lado3)));
                double C = 180 - A - B;

                System.out.println("Ángulo A: " + A + "°");
                System.out.println("Ángulo B: " + B + "°");
                System.out.println("Ángulo C: " + C + "°");

                System.out.println("Área = " + area);
                break;

            default:
                System.out.println("Tipo de triángulo no reconocido.");
                break;
        }
        sc.close();
    }
}