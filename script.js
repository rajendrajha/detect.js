var user= prompt('enter your name')
var arr= setUser(user, createKey(user))
send(arr)
window.onbeforeunload=()=>{
    arr[0][0].status='offline';
    send(arr)
}