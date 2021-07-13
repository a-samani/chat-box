var mesgs = [
  { user: "reza", text: "asfjhdjkfasaasfasfkadskfhadshfjkasl", inchat: false },
  { user: "ali", text: "hello", inchat: false },
  { user: "reza", text: "asffaf", inchat: false },
  { user: "mmd", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
  { user: "reza", text: "asfjhdjkfkadskfhadshfjkasl", inchat: false },
];
var chat_box = document.getElementById("chatbox");

for (var i in mesgs) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(`${mesgs[i].user} : ${mesgs[i].text}`); 
  node.appendChild(textnode);
  chat_box.appendChild(node);
}
function send (){
  var msg = document.getElementById("msg");
  if (msg.value.length > 0) {
    var newmsg = { user: `log in user`, text: msg.value };
  mesgs.push(newmsg);
  
  msg.value = "";
  chat_box.value = "";
  var node = document.createElement("p");
  var textnode = document.createTextNode(`${newmsg.user} : ${newmsg.text}`);
  node.appendChild(textnode);
  chat_box.appendChild(node);
  }
  
}

document.getElementById("submsg").addEventListener("click", send);
document.getElementById("msg").addEventListener("keypress",function(e){
  if (e.keyCode == 13) {
    e.preventDefault();
    send()
}
})