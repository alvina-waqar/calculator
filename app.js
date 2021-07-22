var a = document.getElementById('answer')

function insertnum(num){
    a.value += num
}
insertnum(num)

function answer(){
    a.value=eval(a.value)
}
function reset(){
    a.value = " "
}