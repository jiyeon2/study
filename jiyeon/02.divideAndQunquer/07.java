import java.util.*;

class Main{
    public static StringBuffer sb = new StringBuffer();
    public static boolean hasSameValue(int[][] img, int x, int y, int size){
        for (int i = x; i < x + size; i++){
            for (int j = y; j < y + size ; j++){
                if (img[x][y] != img[i][j]){
                    System.out.println(img[x][y] != img[i][j]);
                    return false;
                }
            }
        }
        return true;
    }

    public static void solve(int[][] img, int x, int y, int size){
        if (hasSameValue(img, x,y,size)){
            sb.append(img[x][y]);
//            System.out.print(img[x][y]);
        } else {
            sb.append("(");
//            System.out.print("(");
            int newSize = size/2;
            for (int i=0; i < 2; i++){
                for (int j = 0; j < 2; j ++){
                    solve(img, x + newSize * i, y + newSize*j, newSize);
                }
            }
            sb.append(")");
//            System.out.print(")");
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[][] image = new int[size][size];
        for(int i =0; i < size; i++){
            for (int j =0; j < size; j++){
                image[i][j] = sc.nextInt();
            }
        }
        solve(image, 0,0,size);


    }
}