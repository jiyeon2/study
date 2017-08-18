package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Ex_1697 {
	public static final int MAX = 1000000;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();

		boolean[] check = new boolean[MAX];
		int[] dist = new int[MAX];
		check[n] = true;
		dist[n] = 0;
		Queue<Integer> q = new LinkedList<>();
		q.add(n);

		while (!q.isEmpty()) {
			int now = q.remove();

			if (now == m) {
				System.out.println(dist[now]);
				break;
			}
			if (now - 1 >= 0) {
				if (check[now - 1] == false) {
					q.add(now - 1);
					check[now - 1] = true;
					dist[now - 1] = dist[now] + 1;
				}
			}

			if (now + 1 < MAX) {
				if (check[now + 1] == false) {
					q.add(now + 1);
					check[now + 1] = true;
					dist[now + 1] = dist[now] + 1;
				}
			}

			if (now * 2 < MAX) {
				if (check[2 * now] == false) {
					q.add(now * 2);
					check[2 * now] = true;
					dist[2 * now] = dist[now] + 1;
				}
			}
		}
	}
}
