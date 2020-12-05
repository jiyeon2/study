import java.util.*;

class Main{
    public static boolean hasEnough(int[] houses, int routerNum, int dist){
        int cnt = 1;
        int lastRouter = houses[0];
        for (int i =0; i < houses.length; i++){
            if( houses[i] - lastRouter >= dist ){
                cnt ++;
                lastRouter = houses[i];
            }
        }
        return cnt >= routerNum;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int houseNum = sc.nextInt();
        int routerNum = sc.nextInt();
        int[] houses = new int[houseNum];
        for(int i=0; i < houseNum; i ++){
            houses[i] = sc.nextInt();
        }
        Arrays.sort(houses);

        int result = 1;
        int min = 1;
        int max = houses[houses.length - 1] - houses[0];

        while(min <= max){
            int dist = (min + max)/2;
            if(hasEnough(houses, routerNum, dist)){
                result = Math.max(result, dist);
                min = dist + 1;
            } else {
                max = dist - 1;
            }
        }

        System.out.println(result);

    }
}