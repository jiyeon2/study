import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int myCardCount = sc.nextInt();
        ArrayList<Integer> myCards = new ArrayList<Integer>();

        for(int i =0; i < myCardCount; i++){
            myCards.add(sc.nextInt());
        }

        int checkCardCount = sc.nextInt();
        int[] resultList = new int[checkCardCount];
        for(int i=0; i < checkCardCount; i++){
            int checkNum = sc.nextInt();
            resultList[i] = myCards.contains(checkNum) ? 1 : 0;
        }

        String result = "";
        for (int num : resultList){
            result = result + num + " ";
        }
        System.out.println(result);
    }
}