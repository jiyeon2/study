package backjun.eunchul.middle.Ch2;

import java.util.*;

public class test04 {
	static int[] c = new int[3];
	static int[] d = {0,1,2};
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[][] a = new int[n][n];
		for(int i=0 ; i<n ; i++)
			for(int j=0 ; j<n ; j++)
				a[i][j] = sc.nextInt()+1;
		run(a,0,0,n);
		for(int i : c)
			System.out.println(i);
	}	
	static void run(int[][] a,int x, int y, int n) {
		int key=a[y][x];
		if(n==1) {
			c[key]++;
			return;
		}
		boolean flag = false;
		for(int i=x ; i<x+n ; i++) {
			for(int j=y ; j<y+n ; j++) {
				if(key!=a[j][i])
					flag=true;
			}
			if(flag) break;
		}
		if(flag) {
			for(int i=0 ; i<d.length ; i++)
				for(int j=0 ; j<d.length ; j++)
					run(a,x+i*(n/3),y+j*(n/3),n/3);
		}
		else 
			c[key]++;
	}
}
