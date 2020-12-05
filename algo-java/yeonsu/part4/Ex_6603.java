package intermidiate_1_BaekJun.yeonsu.part4;

import java.util.*;

public class Ex_6603 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		int k;
		Stack<Integer> stack = new Stack<>();

		while ((k = sc.nextInt()) != 0) {
			int[] a = new int[k];

			for (int i = 0; i < k; i++) {
				a[i] = sc.nextInt();
			}

			for (int i = 0; i <= k-6; i++) {
				stack.push(a[i]);
				DFS(i, a, stack);
				stack.pop();
			}
			System.out.println();
		}

	}

	private static void DFS(int v, int[] a, Stack<Integer> st) {
		if (st.size() == 6) {
			for (int i = 0; i < 6; i++) {
				System.out.print(st.get(i) + " ");
			}
			System.out.println();
		} else {
			for (int i = v + 1; i < a.length; i++) {
				st.push(a[i]);
				DFS(i, a, st);
				st.pop();
			}
		}
	}

}
