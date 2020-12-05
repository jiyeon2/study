#include <iostream>
#include <algorithm>

using namespace std;

int arr[2200][2200];
int cnt[3] = { 0 };

bool isSame(int x, int y, int n)
{
    for (int i = x; i < x + n; i++) {
        for (int j = y; j < y + n; j++) {
            if (arr[x][y] != arr[i][j]) {
                return false;
            }
        }
    }
    
    return true;
}

void counting(int x, int y, int n)
{
    if (isSame(x, y, n)) {
        ++cnt[arr[x][y] + 1];
        return;
    }
    
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            counting(x + i * n / 3, y + j * n / 3, n / 3);
        }
    }
}

int main(void)
{
    int n;
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }
    
    counting(0, 0, n);
    
    for (int i = 0; i < 3; i++) {
        cout << cnt[i] << ' ';
    }
    
    return 0;
}
