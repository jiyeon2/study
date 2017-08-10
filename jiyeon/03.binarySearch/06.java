import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        while(sc.hasNextLine()){
            double x = sc.nextFloat();
            double y = sc.nextFloat();
            double c = sc.nextFloat();

            double left = 0;
            double right = Math.min(x,y);
            for(int i =0; i < 20000; i++){
               double d = (left + right ) / 2.0;
               double h1 = Math.sqrt(x*x - d*d);
               double h2 = Math.sqrt(y*y - d*d);
               double d1 = d * c / h2;
               double h = (-h1 * d1 / d) + h1;

               if (h > c) {
                   left = d;
               } else {
                   right = d;
               }

            }
            double result = Double.parseDouble(String.format("%.3f", left));
            System.out.println(result);

        }
    }
}