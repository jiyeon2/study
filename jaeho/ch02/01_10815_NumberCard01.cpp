#include <iostream>
#include <algorithm>

using namespace std;

int main(void)
{
    cin.sync_with_stdio(false);
    
    int n, m;
    int arr[500000];
    
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    sort(arr, arr + n);
    
    cin >> m;
    
    for (int i = 0; i < m; i++) {
        int input;
        cin >> input;
        
        int result = binary_search(arr, arr + n, input);
        
        cout << result << ' ';
    }
    
    cout << '\n';
    
    return 0;
}
