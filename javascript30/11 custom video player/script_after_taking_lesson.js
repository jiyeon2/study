// 1. ui만들기

// 2. Dom element 가져오기
const videoContainer = document.querySelector('.video-container');
const video = videoContainer.querySelector('#video');
const playButton = videoContainer.querySelector('#play');
const progressBar = videoContainer.querySelector('#progress-bar');
const volumnInput = videoContainer.querySelector('#volume');
const skipButtons = videoContainer.querySelectorAll('button[data-skip]');
const fullScreenButton = videoContainer.querySelector('#full-screen');
// 3. 함수(이벤트 핸들러) 만들기
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function togglePlay(){
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function togglePlayButtonIcon() {
    const icon = video.paused ? '&#9658;' : '&#9646;&#9646;';
    playButton.innerHTML = icon;
}

function changeVolume() {
    video.volume = this.value;
}

function updateProgressBar() {
    progressBar.value = (video.currentTime / video.duration)*100;
}

function scrub(e) {
    if (!mouseDown) return;
    const newCurrentTime = (e.offsetX / progressBar.clientWidth) * video.duration;
    video.currentTime = newCurrentTime;
}

function toggleFullScreen() {
    // 이걸 쓰면 커스텀 컨트롤러 쓸수없음
    if (video.requestFullscreen) {
        video.requestFullscreen();
      }

    videoContainer.classList.toggle('fullscreen');
}


// 4. 이벤트 리스너 연결
skipButtons.forEach(button => {
    button.addEventListener('click', skip);
})
playButton.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButtonIcon);
video.addEventListener('pause', togglePlayButtonIcon);
video.addEventListener('timeupdate', updateProgressBar);

volumnInput.addEventListener('change', changeVolume);

let mouseDown = false;
progressBar.addEventListener('mousedown', () => mouseDown = true);
progressBar.addEventListener('mouseup', () => mouseDown = false);
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', scrub);

fullScreenButton.addEventListener('click',toggleFullScreen);