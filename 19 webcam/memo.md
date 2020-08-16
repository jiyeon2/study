because of security restriction to getting users' webcam, 
it must be tied to 'secure origin' - website that is 'https' or localhost server

npm install(to install devDependencies(browser-sync))
npm start(npm script)

webcam video comes to <video>tag and then take a sanp shot of video and dump it into <canvas>. then we can manipulate pixels, change colors ... on <canvas>

<div class="strip"> might be somewhere we put images


1. get video from webcam
2. take frame from video and paint it onto canvas
---

- error
Uncaught (in promise) TypeError: Failed to execute 'createObjectURL' on 'URL': No function was found that matched the signature provided.

- [explanation](https://errorsea.com/solved-uncaught-typeerror-failed-to-execute-createobjecturl-on-url-no-function-was-found-that-matched-the-signature-provided/)

---

canvas ctx.getImageData(0, 0, width, height);
-> huge array of color values