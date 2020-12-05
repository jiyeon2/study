import java.util.*;

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int treeCount = sc.nextInt();
        int needed = sc.nextInt();
        int[] trees = new int[treeCount];
        int max = 0;
        for(int i =0; i < treeCount; i ++){
            trees[i] = sc.nextInt();
            max = Math.max(max, trees[i]);
        }
        int start = 0;
        int end = max;
        int result = 0;
        while (start <= end){
            int cut = (start + end) /2;
            int lengthCount = 0;
            for (int i =0; i < trees.length; i ++){
                int piece = trees[i] - cut;
                if ( piece >0) {
                    lengthCount += piece;
                }
            }

            if (lengthCount >= needed){
                result = Math.max(result, cut);
                start = cut + 1;
            } else {
                end = cut - 1;
            }
        }
        System.out.println(result);
    }
}