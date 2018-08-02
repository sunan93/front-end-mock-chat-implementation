function addChatBox(input) {
    if(document.getElementsByClassName("personSearch")[0].value.length === 0) {
        alert('Please enter a user name');
        return;
    }
    // console.log(activeUsers.indexOf(document.getElementsByClassName("personSearch")[0].value));
    if(activeUsers.indexOf(document.getElementsByClassName("personSearch")[0].value) !== -1) {
        alert('This chat is already active!!');
        return;
    }
    activeUsers.push(document.getElementsByClassName("personSearch")[0].value);
    
    
    createChatBox(document.getElementsByClassName("personSearch")[0].value);
    
}

function insertChat(event) {
    var input = event.target;
    console.log(input.parentNode);
    var temp = input;
    var msg = document.getElementById(input.parentNode.children[0].id).value;
    var tempDate = new Date();
    var timeStamp = tempDate.getHours() + ":" + tempDate.getMinutes(); 
    var sender = input.parentNode.parentNode.id;
    console.log(sender, msg, timeStamp);
    appendChat({name: sender, timeStamp: timeStamp, msg: msg});
    updateChats({name: sender, timeStamp: timeStamp, msg: msg});
    document.getElementById(input.parentNode.children[0].id).value = "";
}
function appendChat(chatDetails) {
    chatData.push({
        name: chatDetails.name,
        timeStamp: chatDetails.timeStamp,
        msg: chatDetails.msg,
    });
}
function updateChats(chatDetails) {
    var chats = document.getElementsByClassName('chatBox');
    for(var i = 0; i < chats.length; i++) {
        if(chatDetails.name === chats[i].id) {
            chats[i].children[1].appendChild(createChatRow(chatDetails, true));
        } else {
            chats[i].children[1].appendChild(createChatRow(chatDetails, false));
        }
        // console.log(chats[i].children[1]);
    }
}
