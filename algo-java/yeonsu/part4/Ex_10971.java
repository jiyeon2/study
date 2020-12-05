package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Arrays;
import java.util.Scanner;

public class Ex_10971 {

	static int[] d;

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		d = new int[n];

		for (int i = 0; i < n; i++) {
			d[i] = i;
		}

		int[][] w = new int[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				w[i][j] = sc.nextInt();
			}
		}

		Arrays.sort(d);

		int min_weight = Integer.MAX_VALUE;
		int weight = 0;
		while (next_permutaion(d)) {
			weight = sum_weight(d, w, n);
			min_weight = Math.min(weight, min_weight);
		}
		System.out.println(min_weight);
	}

	private static int sum_weight(int[] d, int[][] w, int n) {
		// TODO Auto-generated method stub
		int sum = 0;
		boolean flag = true;
		int ans = Integer.MAX_VALUE;
		for (int i = 0; i < n - 1; i++) {
			if (w[d[i]][d[i + 1]] == 0)
				flag = false;
			else
				sum += w[d[i]][d[i + 1]];
		}

		if (flag && w[d[n - 1]][d[0]] != 0) {
			sum += w[d[n - 1]][d[0]];
			if(ans>sum) ans=sum;
		}
		return ans;
	}

	private static boolean next_permutaion(int[] d) {
		// TODO Auto-generated method stub
		int num = d.length;

		int left = -1;
		for (int i = 0; i < num - 1; i++) {
			if (d[i] < d[i + 1]) {
				left = Math.max(left, i);
			}
		}

		if (left == -1) {
			return false;
		} else {
			int right = 0;

			for (int i = left; i < num; i++) {
				if (d[left] < d[i]) {
					right = Math.max(right, i);
				}
			}

			int temp = d[left];
			d[left] = d[right];
			d[right] = temp;

			Arrays.sort(d, left + 1, num);
			return true;
		}
	}

}
