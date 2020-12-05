package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.Scanner;

public class Ex_1107 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		int cur = 100;

		int channel = sc.nextInt();
		int dmg_bnt_cnt = sc.nextInt();
		int[] dmg_bnt = new int[dmg_bnt_cnt];
		for (int i = 0; i < dmg_bnt_cnt; i++) {
			dmg_bnt[i] = sc.nextInt();
		}

		int[] bnt = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

		for (int i = 0; i < bnt.length; i++) {
			for (int j = 0; j < dmg_bnt_cnt; j++) {
				if (bnt[i] == dmg_bnt[j]) {
					bnt[i] = -1;
				}
			}
		}
		int one_num = 0;
		int close_num = 10;
		long cnt = 0;
		int idx = 1;

		if (channel == cur) {
			System.out.println(0);
		} else {
			while (channel != 0) {
				one_num = channel % 10;

				if (bnt[one_num] == -1) {
					cnt++;

					for (int i = 0; i < bnt.length; i++) {
						if (bnt[i] == -1)
							continue;
						else {
							close_num = Math.min(close_num, Math.abs(one_num - bnt[i]));
						}
					}
					cnt += close_num * idx;
				} else {
					cnt++;
				}
				channel /= 10;
				idx *= 10;
			}
			System.out.println(cnt);

		}
	}
}
