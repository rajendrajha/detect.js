const _CHANNEL = new BroadcastChannel('server')
let _ARR=[]
let i=0;
const createKey=(username)=>{
    var result     = '';
    var char       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLength = char.length;
    if(username){
        for ( var i = 0; i < username.length; i++ ) {
            result += char.charAt(Math.floor(Math.random() * charLength));
        }
    }else{
        for ( var i = 0; i < 6; i++ ) {
            result += char.charAt(Math.floor(Math.random() * charLength));
        }
    }
    return result;
}
const setUser=(username, key)=>{
    let _NAME= username;
    let _KEY= key;
    let user=[
        {
            name: _NAME,
            keys: _KEY,
            number: i+1,
            status: 'online'
        }
    ]
    _ARR.push(user);
    i++
    return _ARR;
}
_CHANNEL.onmessage = function (e) {
    if(e.data[0][0].name=='null'){
        console.log(`A user with id: ${e.data[0][0].keys} is ${e.data[0][0].status}....`)
    }else{
        console.log(`${e.data[0][0].name} with id: ${e.data[0][0].keys} is ${e.data[0][0].status}....`)
    }
};
function send(user_array){
    _CHANNEL.postMessage(user_array)
}
