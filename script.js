var mesgs = [
    { user: "reza", text: "asfjhdjkfasaasfasfkadskfhadshfjkasl", },
    { user: "ali", text: "hello", },
    { user: "reza", text: "asffaf", inchat: false },
    { user: "mmd", text: "asfjhdjkfkadskfhadshfjkasl", },
    { user: "reza", text: "asfjhdjkfkadskfhadshfjkasl", },
];
var chat_box = document.getElementById("chatbox");
var clean_Btn = document.getElementById("clear")
    // // if it's admin 
    // clean_Btn.classList.remove("disable")

for (var i in mesgs) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(`${mesgs[i].user} : ${mesgs[i].text}`);
    node.appendChild(textnode);
    chat_box.appendChild(node);
}

function send() {
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

function clear() {

    while (chat_box.hasChildNodes()) {
        chat_box.removeChild(chat_box.firstChild);
    }
    mesgs.length = 0
        // clear list of msg from server
}

function convertToCSV(obj) {
    var exp, ctr, keys, column, line, data;
    data = obj.data || null;
    if (data == null || !data.length) return null;
    column = obj.columnDelimiter || ',';
    line = obj.lineDelimiter || '\n';
    keys = Object.keys(data[0])
    exp = '';
    exp += keys.join(column);
    exp += line;
    data.forEach(o => {
        ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) exp += column;
            exp += o[key];
            ctr++;
        });
        exp += line;

    });
    return exp

}

function downloadCSV(obj) {
    var data, name, link;
    var csv = convertToCSV({ data: mesgs })
    if (csv == null) return;
    name = 'export.csv'
    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', name);
    link.click();
}

document.getElementById("submsg").addEventListener("click", send);
document.getElementById("msg").addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        send()
    }
})
clean_Btn.addEventListener("click", clear)