package intermidiate_1_BaekJun.yeonsu.part4;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Ex_1963 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		boolean[] prime = new boolean[10001];
		for(int i=2;i<=10000;i++) {
			if(prime[i]==false) {
				for(int j=i*i;j<=10000;j+=i) {
					prime[j] = true;
				}
			}
		}
		
		for(int i=0;i<=10000;i++) {
			prime[i]=!prime[i];
		}
		
		int t = sc.nextInt();

		while (t-- > 0) {
			int n = sc.nextInt();
			int m = sc.nextInt();
			boolean[] visited = new boolean[10001];
			int[] d= new int[10001];

			Queue<Integer> q = new LinkedList<>();
			q.add(n);

			int idx = 1000;
			while (!q.isEmpty() && idx > 0) {
				int now = q.remove();


				for (int i = 1; i <= 9; i++) {

					idx = 1000;
					if (now / idx + i <= 9) {
						if (prime[now + idx * i] && visited[now + idx * i] == false) {
							d[now+idx*i] = d[now]+1;
							visited[now + idx * i] = true;
							q.add(now + idx * i);

						}
					}

					idx = 100;
					if ((now % 1000) / idx + i <= 9) {
						if (prime[now + idx * i] && visited[now + idx * i] == false) {
							d[now+idx*i] = d[now]+1;
							visited[now + idx * i] = true;
							q.add(now + idx * i);
						}
					}

					idx = 10;
					if ((now % 1000) % 100 / idx + i <= 9) {
						if (prime[now + idx * i] && visited[now + idx * i] == false) {
							d[now+idx*i] = d[now]+1;
							visited[now + idx * i] = true;
							q.add(now + idx * i);
						}
					}

					idx = 1;
					if ((((now % 1000) % 100) % 10) + i <= 9) {
						if (prime[now + idx * i] && visited[now + idx * i] == false) {
							d[now+idx*i] = d[now]+1;
							visited[now + idx * i] = true;
							q.add(now + idx * i);
						}
					}
				}
				

			}
			System.out.println(d[m]);

		}

	}



}
