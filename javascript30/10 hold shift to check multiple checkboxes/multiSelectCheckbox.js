const checkboxes = document.querySelectorAll('input[type=checkbox]');
let lastCheckedBox = null;

function handleChecked(e) {
    let inBetween = false;

    // e.shiftKey로 shiftKey 눌렸는 지 알 수 있다
    // e.keyCode === 16확인 할 필요가 없었다
    if (e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            // 마지막 체크된 박스 이거나 현재 체크된 박스 일 때만
            // inBetween 값을 전환한다
            // lastCheckedBox가 2번째고, 현재 체크된 박스가 5번째일때
            // inBetween값은 2번째 박스에서 true가 되고
            // 3,4번째는 inBetween전환하는 if문에 걸리지 않으므로 inBetween값은 계속 true이다
            // 현재 체크된 5번 박스에서 inBetween값이 다시 false로 바뀐다
        
            // 이전에 만들었던 방법은 마지막 클릭된 박스 인덱스를 저장해두고
            // 현재 클릭된 박스 인덱스를 찾아서
            // 그 사이 인덱스를 순회하면서 clicked에 true를 넣는 방식이었다
            // 강의에서 보여준 방법이 구질구질하게 인덱스 찾고 하는 과정없이 깔끔하고 보기 좋다
            if (checkbox === this || checkbox == lastCheckedBox){
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastCheckedBox = e.target;
}

// 'change'이벤트 말고 'click'이벤트를 쓴 이유가 있었는데 까먹었다
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleChecked);
})

