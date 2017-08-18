package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Arrays;
import java.util.Scanner;

public class Ex_10819 {

	static int[] a;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		a = new int[n];

		for (int i = 0; i < n; i++) {
			a[i] = sc.nextInt();
		}

		Arrays.sort(a);

		int ans = 0;
		while (next_permutation(a)) {
			int tmp = calculateABS(a);
			ans = Math.max(ans, tmp);
		}
		System.out.println(ans);
	}

	private static int calculateABS(int[] a) {
		// TODO Auto-generated method stub
		int num = a.length;
		int sum = 0;
		for (int i = 1; i < num; i++) {
			sum += Math.abs(a[i - 1] - a[i]);
		}
		return sum;
	}

	private static boolean next_permutation(int[] a) {
		// TODO Auto-generated method stub
		int num = a.length;

		int left = -1;
		for (int i = 1; i < num; i++) {
			if (a[i - 1] < a[i]) {
				left = Math.max(left, i - 1);
			}
		}

		if (left != -1) {
			int right = 0;
			for (int j = left; j < num; j++) {
				if (a[left] < a[j]) {
					right = Math.max(right, j);
				}
			}

			int temp = a[left];
			a[left] = a[right];
			a[right] = temp;

			Arrays.sort(a, left + 1, a.length);
			return true;
		} else {
			return false;
		}
	}
}
