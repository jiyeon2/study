package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Scanner;

public class Ex_10973 {

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
			if (a[i] > a[i + 1]) {
				left = Math.max(left, i);
			}
		}

		if (left == -1) {
			System.out.println(-1);
		} else {

			int right = -1;
			for (int i = left; i < n; i++) {
				if (a[left] > a[i]) {
					right = Math.max(right, i);
				}
			}

			int temp = a[left];
			a[left] = a[right];
			a[right] = temp;

			for (int i = left + 1; i < n - 1; i++) {
				for (int j = i + 1; j < n; j++) {
					if (a[i] < a[j]) {
						int tm = a[i];
						a[i] = a[j];
						a[j] = tm;
					}
				}
			}

			StringBuffer sb = new StringBuffer();

			for (int i = 0; i < n; i++) {
				sb.append(a[i] + " ");
			}
			System.out.println(sb.toString().trim());
		}

	}

}
