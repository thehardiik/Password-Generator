const cursor = document.querySelector('.cursor');
const main = document.querySelector('.container')
const gen = document.querySelector('#pass');
const button = document.querySelectorAll('.button')

let generated = false;
let isSettingOpen = false;

let length = 8
let isNums = false;
let isSymb = false;

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

button[0].addEventListener("mousemove" , (e) => {
    cursor.style.height = "0px";
    cursor.style.width = "0px";
    e.stopPropagation()
})

button[1].addEventListener("mousemove" , (e) => {
    cursor.style.height = "0px";
    cursor.style.width = "0px";
    e.stopPropagation()
})

// Generating Password Functionality

const generate = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "1234567890";
    const symbols = "@#$&";
    
    let password = [];
    let finalPass = '';
    

    for(let i = 0; i < length ; i++){
        const num = Math.floor(Math.random()*letters.length);
        password[i] = letters.charAt(num);
        
    }

    if(isNums){
        const num = Math.floor(Math.random()*nums.length);
        const pos = Math.floor(Math.random()*length);
        password[pos] = nums.charAt(num);
    }

    if(isSymb){
        const num = Math.floor(Math.random()*symbols.length);
        const pos = Math.floor(Math.random()*length);
        password[pos] = symbols.charAt(num);
    }

    for(let i = 0; i < length; i++){
        finalPass = finalPass + password[i];
    }
    gen.innerHTML = finalPass;
}

let generatingInterval = setInterval(generate, 100);


button[0].addEventListener("click" , () => {
    if(generated){
        generated = false;
        generatingInterval = setInterval(generate, 100);
        button[0].innerHTML = "Stop"
    }else{
        console.log("Generating")
        clearInterval(generatingInterval)
        button[0].innerHTML = "Start"
        generated = true;
    }
})

button[1].addEventListener("click" , () => {
    if(isSettingOpen){
        isSettingOpen = false;
        
    }else{
        const settingWindow = document.createElement('div');
        settingWindow.className = "overlay";
        settingWindow.innerHTML = `<input type="range" class="range">
                                    <div class = "check"> 
                                   <input type="checkbox" class="numbers">
                                   <label for="numbers">Numbers</label>
                                   </div>
                                   <div class = "check"> 
                                   <input type="checkbox" class="symbols">
                                   <label for="symbols">Symbols</label>
                                   </div>
                                   <button class="submit">Submit</button>`;

        main.appendChild(settingWindow)

        
        const submit = document.querySelector('.submit')
        

        submit.addEventListener("click" , () => {
            const slider = document.querySelector('.range')
            length = Math.floor(slider.value/7);

            const sym = document.querySelector('.symbols')
            const num = document.querySelector('.numbers')

            isNums = num.checked;
            isSymb = sym.checked;

            settingWindow.remove()
             
        })


        isSettingOpen = true;
    }
})










