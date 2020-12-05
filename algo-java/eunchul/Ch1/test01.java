package backjun.eunchul.middle.Ch2;

import java.util.*;

public class test01 {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		
		int m = sc.nextInt();
		HashMap<Integer,Boolean> a = new HashMap<>();
		for(int i=0 ; i<m ; i++)
			a.put(sc.nextInt(),true);
		int n = sc.nextInt();
		int[] b = new int[n];
		for(int i=0 ; i<n ; i++)
			b[i] = sc.nextInt();
		
		for(int i=0 ; i<n ; i++) {
			if(a.containsKey(b[i]))
				System.out.print("1 ");
			else
				System.out.print("0 ");
		}
	}
}
