import java.util.*;

class Main{
    public static int search(int[] arr, int target, int first, int last){
        int mid;
        if (first > last) {
            return 0;
        } else {
            mid = (first+last)/2;
            if ( target == arr[mid]){
                return 1;
            } else if( target < arr[mid]){
                return search(arr, target, first, mid-1);
            } else {
                return search(arr, target, mid+1,last);
            }
        }

    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int myCardCount = sc.nextInt();
        int[] myCards = new int[myCardCount];

        for(int i =0; i < myCardCount; i++){
            myCards[i] = sc.nextInt();
        }
        Arrays.sort(myCards);

        int otherCardCount = sc.nextInt();
        for(int i =0; i<otherCardCount; i++){
            int thisCard = sc.nextInt();
            System.out.print(search(myCards, thisCard, 0, myCards.length -1)+ " ");
        }

    }
}