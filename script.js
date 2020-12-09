let write = document.getElementById('write')
let calc = document.getElementById('calc')
let button = document.getElementById('words')





button.addEventListener('click',()=>{
    for (let i = 0; i <write.value.length ; i++) {
        calc.innerText = `Lenght is  ${write.value.length}`
    }
})