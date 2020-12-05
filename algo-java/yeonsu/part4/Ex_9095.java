package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Arrays;
import java.util.Scanner;

public class Ex_9095 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int t = sc.nextInt();
		
		while(t-->0) {
			int n = sc.nextInt();
			
			int[] DP = new int[15];
			Arrays.fill(DP, 0);
			DP[0]=1;
			
			for(int i=1;i<=n;i++) {
				
				if(i-1>=0) DP[i] += DP[i-1];
				if(i-2>=0) DP[i] += DP[i-2];
				if(i-3>=0) DP[i] += DP[i-3];
			}
			
			System.out.println(DP[n]);
		}
	}

}
