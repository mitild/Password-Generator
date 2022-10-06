const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let length = 15
let passBox1 = document.getElementById("pass-box-1")
let passBox2 = document.getElementById("pass-box-2")



function generateRandom() {
    let keyGen = Math.floor(Math.random() * characters.length)
    return characters[keyGen]   
}

function generatePass() {
    let newPassword1 = ""
    let newPassword2 = ""
    for (let i = 0; i < length; i++) {
        newPassword1 += generateRandom()
        newPassword2 += generateRandom()
        passBox1.textContent = newPassword1
        passBox2.textContent = newPassword2  
    }
}

