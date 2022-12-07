let display = document.getElementById("display");
// console.log(display)
let button = Array.from(document.getElementsByClassName('inpute'));
// console.log(button)

button.map(inpute => {
    inpute.addEventListener('click', (e) => {
        // console.log('clicked')
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText)
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = " ";
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try {
                    display.innerText =eval(display.innerText);
                } catch  {
                    window.alert("Incorrect Value Enter")
                }
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})



// -------------------------------------------------------------------------

// const select = document.querySelectorAll(".")
