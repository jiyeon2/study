package backjun.eunchul.middle.Ch2;

import java.util.*;

public class test03 {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();
		int[] a = new int[n+m];
		int[] b = new int[m];
		for(int i=0 ; i<n ; i++)
			a[i] = sc.nextInt();
		for(int i=0 ; i<m ; i++)
			b[i] = sc.nextInt();
		System.arraycopy(b, 0, a, n, m);
		Arrays.sort(a);
		for(int i : a)
			System.out.print(i+" ");
	}
	
}
