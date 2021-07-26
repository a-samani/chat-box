var msgID = 1 // hatman ezafe she
var mesgs = [
    { user: "reza", text: "avali", score: null, isTrue: null, ID: msgID++ },
    { user: "ali", text: "dovomi", score: null, isTrue: null, ID: msgID++ },
    { user: "reza", text: "sevomi", score: null, isTrue: null, ID: msgID++ },
    { user: "mmd", text: "char", score: null, isTrue: null, ID: msgID++ },
    { user: "reza", text: "panj", score: null, isTrue: null, ID: msgID++ },
];
var chat_box = document.getElementById("chatbox");
var clean_Btn = document.getElementById("clear")
    // // if it's admin 
    // clean_Btn.classList.remove("disable")





function checkTrue() { //         ********          in bayad ezafe she
    let id = Number(this.id.slice(this.id.indexOf('-') + 1))
    let hoof = mesgs.find(m => m.ID == id)
    if (this.checked) {
        hoof.isTrue = true
    } else {
        hoof.isTrue = null
    };
}

function giveScore() { //         ********          in  bayad ezafe she
    let id = Number(this.id.slice(this.id.indexOf('-') + 1))
    let hoof = mesgs.find(m => m.ID == id)
    hoof.score = Number(this.value)

}
for (var i in mesgs) { // ****** in kolan taqir karde *****

    const html = `<div class="message">
          <p class="msg-text">${mesgs[i].user} : ${mesgs[i].text}</p>
         <form action="" name='message'>
          <input type="text" name='score' id="score-${mesgs[i].ID}" />
          <input type="checkbox" class="IsTrue" name='accept' id="isTrue-${mesgs[i].ID}">
         </form>
          </div>`

    chat_box.insertAdjacentHTML('beforeend', html)
    document.getElementById(`isTrue-${mesgs[i].ID}`).addEventListener('change', checkTrue)
    document.getElementById(`score-${mesgs[i].ID}`).addEventListener('keyup', giveScore)
}

function send() { // ****** in kolan taqir karde *****
    var msg = document.getElementById("msg"); // taqir nakarde
    if (msg.value.length > 0) { //taqir nakarde
        var newmsg = { user: `log in user`, text: msg.value, score: null, isTrue: null, ID: msgID++ };

        mesgs.push(newmsg);

        msg.value = "";
        chat_box.value = "";
        // azin ja taiqr mikone
        const html = `<div class="message">
          <p class="msg-text">${newmsg.user} : ${newmsg.text}</p>
         <form action="" name='message'>
          <input type="text" name='score' id="score-${newmsg.ID}" />
          <input type="checkbox" class="IsTrue" name='accept' id="isTrue-${newmsg.ID}">
         </form>
          </div>`

        chat_box.insertAdjacentHTML('beforeend', html)
        document.getElementById(`isTrue-${newmsg.ID}`).addEventListener('change', checkTrue)
        document.getElementById(`score-${newmsg.ID}`).addEventListener('keyup', giveScore)


    }

}

function clear() {
    msgID = 0 // hatman ezafe she
    while (chat_box.hasChildNodes()) {
        chat_box.removeChild(chat_box.firstChild);
    }
    mesgs.length = 0
        // clear list of msg from server
}

document.getElementById("submsg").addEventListener("click", send);
document.getElementById("msg").addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        send()
    }
})
clean_Btn.addEventListener("click", clear)