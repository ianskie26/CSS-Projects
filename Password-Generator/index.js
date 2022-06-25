let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")

let value1 = document.getElementById("range").value


function updateTextInput(val) {
    value1 = document.getElementById("range").value;
  }

function generatePassword() {
    let arr = [];
    while (arr.length < 4) {
        let randomStr = ""
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'
        for (let i = 0; i < value1; i++) {
            randomStr += chars.charAt(Math.floor(Math.random()*chars.length))
        }
        let r = randomStr
        arr.push(r)
    }
    password1.value = arr[0]
    password2.value = arr[1]
    password3.value = arr[2]
    password4.value = arr[3]
}

function copyText(value) {
    navigator.clipboard.writeText(value);

}
