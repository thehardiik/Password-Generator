const cursor = document.querySelector('.cursor');
const main = document.querySelector('.container')
const gen = document.querySelector('#pass');
const button = document.querySelector('.button')
let generated = false;

// Cursor Functionality

main.addEventListener("mousemove" , (e) => {
    cursor.style.left = e.x  + "px";
    cursor.style.top = e.y + "px";
    cursor.style.height = "30px";
    cursor.style.width = "30px";
})

gen.addEventListener("mousemove" , (e) => {
    cursor.style.height = "50px";
    cursor.style.width = "50px";
    cursor.style.left = e.x  + "px";
    cursor.style.top = e.y + "px";
    e.stopPropagation()
})

button.addEventListener("mousemove" , (e) => {
    cursor.style.height = "0px";
    cursor.style.width = "0px";
    e.stopPropagation()
})

// Generating Password Functionality

const generate = () => {
    const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#@$&";
    const j = 8
    let password = ""

    for(let i = 0; i < j ; i++){
        const num = Math.floor(Math.random()*arr.length);
        password = password + arr.charAt(num);
        
    }
    
    gen.innerHTML = password;
}

let generatingInterval = setInterval(generate, 100);


button.addEventListener("click" , () => {
    if(generated){
        generated = false;
        generatingInterval = setInterval(generate, 100);
        button.innerHTML = "Stop Generating"
    }else{
        console.log("Generating")
        clearInterval(generatingInterval)
        button.innerHTML = "Start Generating"
        generated = true;
    }
})






