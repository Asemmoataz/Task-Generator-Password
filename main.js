let upperCase = "ABCDEFGHIJKLMNOPQRSUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "@#$%!^&*+_-=(){}[]"

let button = document.getElementById('generate')
button.addEventListener("click", generate)

let result = document.getElementById('password')
function generate() {
    let characters = ""
    if(document.getElementById("uppercase").checked){
        characters += upperCase
    }
     if (document.getElementById("lowercase").checked){
        characters += lowerCase
    }
     if (document.getElementById("numbers").checked){
        characters += numbers
    }
     if(document.getElementById("symbols").checked){
        characters += symbols
    }
    let length = (document.getElementById("length").value)
    
    let password = ""
    for (i = 0 ; i < length ; i++){
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    result.value = password
}

let spanNum = document.getElementById('length-value')
let inputRange = document.getElementById('length')

inputRange.addEventListener('input',function(){
    spanNum.innerHTML =  inputRange.value
})
// i can use spanNum.textContent 

function copyPassword(){
    navigator.clipboard.writeText(result.value)
    alert('Password is Copied')
}









