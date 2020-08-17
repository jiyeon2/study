const house = document.querySelector('.building');

house.addEventListener('click', hide);
house.addEventListener('hide', function(e) {
    console.log(e);
    if (confirm('Would you like to provoke preventDefault?')){
        e.preventDefault();
    }
});

function hide() {
    let event = new CustomEvent('hide',{
        cancelable: true,
        detail:{
            description: 'hide house'
        }
    });

    const returnFromDispatchEvent = house.dispatchEvent(event) 
    console.log(returnFromDispatchEvent);
    if (!returnFromDispatchEvent){
        alert('canceled hiding by handler');
    } else{
        house.hidden = true;
    }
}

