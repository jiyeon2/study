package backjun.eunchul.middle.Ch2;

import java.util.*;

public class test02 {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		
		int m = sc.nextInt();
		int[] a = new int[20000001];
		while(m-->0)
			a[sc.nextInt()+10000000]++;
		int n = sc.nextInt();
		while(n-->0)
			System.out.print(a[sc.nextInt()+10000000]+" ");
	}
}
