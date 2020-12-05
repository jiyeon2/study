// https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics

const video = document.querySelector('video');
const progressBar = document.querySelector('#progress');
const playButton = document.querySelector('#play');
const skipforwardButton = document.querySelector('#skip-forward');
const skipBackwardButton = document.querySelector('#skip-backward');

// console.log(video.duration);
// progressBar.max = +video.duration;
// progressBar.max NaN 뜸..
// https://stackoverflow.com/questions/40763057/trying-to-get-full-video-duration-but-returning-as-nan

// HTMLMediaElement에서 상속받은 메서드 이용
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
function playVideo(){
    video.play();
}
function stopVideo(){
    video.pause();
}
function skip(second){
    video.currentTime = video.currentTime + second;
}
video.addEventListener('timeupdate',(e) => {progressBar.value = e.target.currentTime;})
video.addEventListener('loadedmetadata', () => {progressBar.max = video.duration});
playButton.addEventListener('click', playVideo);
skipBackwardButton.addEventListener('click', () => {skip(-1)});
skipforwardButton.addEventListener('click', () => {skip(1)});
progressBar.addEventListener('change',(e) => {
    video.currentTime = e.target.value;
})
