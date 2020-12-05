package intermidiate_1_BaekJun.yeonsu.part4;

import java.awt.Point;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Ex_1525 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		int[][] a = new int[3][3];
		
		int x=0,y=0;
		for(int i=0;i<3;i++) {
			for(int j=0;j<3;j++) {
				a[i][j] = sc.nextInt();
				if(a[i][j]==0) {
					x=i; y=j;
				}
			}
		}
		
		int[][] map = new int[3][3];
		map[x][y] = 0;
		
		Queue<Point> q = new LinkedList<>();
		q.add(new Point(x,y));
		
		while(!q.isEmpty()) {
			int hx = q.remove().x;
			int hy = q.remove().y;
		}
		
		
		
		
	}

}
