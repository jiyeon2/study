package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Arrays;
import java.util.Scanner;

public class Ex_10972 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[] a = new int[n];

		for (int i = 0; i < n; i++) {
			a[i] = sc.nextInt();
		}

		int left = -1;
		for (int i = 0; i < n - 1; i++) {
			if (a[i] < a[i + 1]) {
				left = Math.max(i, left);
			}
		}

		if (left == -1) {
			System.out.println(-1);
		} else {
			int right = 0;
			for (int j = left; j < n; j++) {

				if (a[j] > a[left]) {
					right = Math.max(right, j);
				}
			}

			int temp = a[left];
			a[left] = a[right];
			a[right] = temp;

			Arrays.sort(a, left + 1, a.length);
			StringBuilder output = new StringBuilder();
			for (int i = 0; i < n; i++)
				output.append(a[i] + " ");
			System.out.println(output.toString().trim());
		}

	}

}
