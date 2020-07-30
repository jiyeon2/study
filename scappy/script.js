const scappy = document.querySelector('.scappy');

function addScappy(e){
    const randomNum = Math.random();
    
    let newScappy = scappy.cloneNode(true);
    newScappy.style.position='absolute';
    newScappy.style.left = `${e.x-82}px`;
    newScappy.style.top = `${e.y-125}px`;
    if (randomNum > 0.7){
        newScappy.classList.add('big-head');
    }
    document.body.appendChild(newScappy);
}
document.addEventListener('click', addScappy);
console.log(scappy);