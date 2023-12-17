const cursor = document.querySelector('.cursor');
const main = document.querySelector('.container')
const gen = document.querySelector('#pass');
const button = document.querySelector('.button')
console.log(button)
console.log(gen)

main.addEventListener("mousemove" , (e) => {
    cursor.style.left = e.x + 10 + "px";
    cursor.style.top = e.y + 10 + "px";
    cursor.style.height = "30px";
    cursor.style.width = "30px";
})

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

const generatingInterval = setInterval(generate, 200);


button.addEventListener("click" , () => {
    clearInterval(generatingInterval)
    console.log('Hello')
})




