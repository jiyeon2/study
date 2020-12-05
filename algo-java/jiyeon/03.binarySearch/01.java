import java.util.*;

class Main {
    public static boolean check(int[] a, int m, int x) {
        int cnt = 0;
        for (int i=0; i<a.length; i++) {
            cnt += a[i]/x;
        }
        return cnt >= m;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int owned = sc.nextInt(); // 이미 가진 랜선 개수
        int needed = sc.nextInt(); // 필요한 랜선 개수
        int[] lines = new int[owned]; // 가지고 있는 랜선 길이 저장한 배열
        
        int max = 0; // 잘린 랜선의 최대 길이
        for (int i=0; i< owned; i++) {
            lines[i] = sc.nextInt();
            max = Math.max(max, lines[i]);
        }
        
        int result = 0;
        int start = 1;
        int end = max;
        while (start <= end) {
            int x = (start + end)/2;
            int lineCount = 0;
            for (int i =0; i < lines.length; i++){
                lineCount += lines[i] / x;
            }
            if ( lineCount >= needed) {
                result = Math.max(result, x);
                start = x+1;
            } else {
                end = x-1;
            }
        }
        System.out.println(result);
    }
}

