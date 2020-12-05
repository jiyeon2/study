package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Scanner;

public class Ex_1476 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		int[] a = new int[3];

		for (int i = 0; i < 3; i++) {
			a[i] = sc.nextInt();
		}

		int[] m = { 15, 28, 19 };
		int total_m = 15 * 28 * 19;

		int[] n = new int[3];
		for (int i = 0; i < 3; i++) {
			n[i] = total_m / m[i];
		}

		int[] s = new int[3];

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < m[i]; j++) {
				if ((n[i] * j) % m[i] == 1) {
					s[i] = j;
					break;
				}
			}
		}

		int total = 0;
		for (int i = 0; i < 3; i++) {
			total += n[i] * s[i] * a[i];
		}

		if (total % total_m == 0) {
			System.out.println(total_m);
		} else {
			System.out.println(total % 7980);
		}

	}
}
