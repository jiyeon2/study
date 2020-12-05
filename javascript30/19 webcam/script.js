const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// 1. get video from webcam : navigator.mediaDevices.getUserMedia -> Promise
function getVideo(){
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio:false
    }).then(localMediaStream => {
        // console.log(localMediaStream);
        // video.src = window.URL.createObjectURL(localMediaStream); // make video.src can understand locakMediaStream
        video.srcObject = localMediaStream;
        video.play();
    }).catch(err => {
        console.error('oh no!! please allow webcam', err);
    });
}


// 2. take frame from video and paint it into canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width, height); // size of video coming in from my webcam
    //make canvas to same size of video
    canvas.width = width;
    canvas.height = height;

    // try requestAnimationFrame
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // console.log(pixels); //= [23,11,32,54,11..] [r,g,b,a,r,g,b,a...] 

        // mess with them
        // pixels = redEffect(pixels);
        // pixeld = rgbSplit(pixels);
        pixels = greenScreen(pixels);

        // ghost effect
        // ctx.globalAlpha = 0.1;

        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16); 
};

// 3. take photo - download image of canvas and save as image file
function takePhoto() {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    // console.log(data); // jpeg:base64 ~~~ : text-based representation, attributes of the picture
    const link = document.createElement('a');
    link.href= data;
    link.setAttribute('download','handsome');
    // link.textContent = 'Download image';
    link.innerHTML = `<img src="${data}" alt="yeh"/>`;
    strip.prepend(link);
}

// 4. filter - get the pixels out of the canvas and put them back
function redEffect(pixels){
    for(let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
    }
    return pixels;
}

function rgbSplit(pixels){
    for(let i = 0; i < pixels.data.length; i+=4){
        pixels.data[i - 550] = pixels.data[i + 0]; // red
        pixels.data[i + 700] = pixels.data[i + 1]; // green
        pixels.data[i + 500] = pixels.data[i + 2]; // blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {}; // min, max green

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    })
    
    // console.log(levels); // rmin, rmax, gmin, gmax, bmin, bmax...

    for (i=0; i < pixels.data.length; i += 4){
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if ( red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // if the value is in between min and max value, set alpha to zero to take it out
                pixels.data[i + 3] = 0;
            }
    }
    return pixels;
}

getVideo();

// once video played in getVideo(), it is going to emit canplay 
video.addEventListener('canplay', paintToCanvas);