let timerInterval;
const timeDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const form = document.customForm;

const buttonHandler = (e) => {
  const seconds = +e.target.dataset.time;
  timer(seconds);
};
const submitHandler = (e) => {
  e.preventDefault();
  const min = +e.target.minutes.value;
  e.target.minutes.value = "";
  if (isNaN(min)) {
    alert("숫자를 입력해주세요");
    e.target.minutes.focus();
    return;
  }
  timer(min * 60);
};
buttons.forEach((button) => button.addEventListener("click", buttonHandler));
form.addEventListener("submit", submitHandler);
// input[name=minutes]에 submit이벤트핸들러 달았더니 작동 안함
// 폼에서 submit 발생하는 경우
// 1. to click <input type="submit"> or <input type="image">.
// 2. press Enter on an input field

const timer = (seconds) => {
  timerInterval && clearInterval(timerInterval);
  let now = Date.now(); // 타임스탬프(1970년 1월 1일부터 현재까지의 밀리초) 반환
  let finishTime = now + seconds * 1000; // 밀리초 단위이므로 초에 1000을 곱해야 한다
  displayTime(seconds);
  displayEndTime(finishTime);

  timerInterval = setInterval(() => {
    //밀리초 단위로 계산한 것을 초단위로 바꾼다
    const leftSeconds = Math.round((finishTime - Date.now()) / 1000);

    if (leftSeconds < 0) {
      clearInterval(timerInterval);
      return; // -1 이하는 디스플레이 되지 않도록
    }
    displayTime(leftSeconds);
  }, 1000);
};

const displayTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSecond = seconds % 60;

  // timeDisplay.innerHTML = `${minutes}:${
  //   remainderSecond < 10 ? "0" : ""
  // }${remainderSecond}`;
  const timeText = `${minutes}:${(remainderSecond + "").padStart(2, "0")}`;
  timeDisplay.innerHTML = timeText;
  document.title = timeText;
};

const displayEndTime = (timeStamp) => {
  const endTime = new Date(timeStamp);
  const hour = endTime.getHours(); // Date.getTime은 뭐지??
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minute = endTime.getMinutes();
  const adjustedMinute = (minute + "").padStart(2, "0");
  const timeText = `${adjustedHour}:${adjustedMinute} 에 돌아올게요`;
  endTimeDisplay.innerHTML = timeText;
};
