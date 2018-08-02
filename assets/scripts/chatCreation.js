function createChatBox(name) {
    var boxCount = document.getElementsByClassName("chatBox").length;
    if(boxCount > 5) {
        alert('cannot open anymore chats!!');
        return;
    }
    var boxPosition = (19*boxCount + 1) + "vw";
    var chatBox = document.createElement('div');
    chatBox.id = name;
    chatBox.className = "chatBox";
    chatBox.style.left = boxPosition;
    chatBox.appendChild(createChatHeader(name));
    chatBox.appendChild(createChartContent(name));
    chatBox.appendChild(createTypeSection(name));
    document.getElementsByClassName('chatSpace')[0].appendChild(chatBox);
}

function createChatHeader(name) {
    var chatHeader = document.createElement('div');
    chatHeader.className = 'chatHeader';
    var nameHolder = document.createElement('div');
    nameHolder.className = 'name';
    nameHolder.innerHTML = name;
    chatHeader.appendChild(nameHolder);
    return chatHeader;
}

function createChartContent() {
    var chatContent = document.createElement('div');
    chatContent.className = 'chatContent';
    console.log(chatData);
    if(chatData.length == 0) {
        return chatContent;
    }
    else {
        for(var i = 0; i<chatData.length; i++) {
            console.log(chatData[i]);
            chatContent.appendChild(createChatRow(chatData[i], false));
        }
    }
    return chatContent;
}

function createTypeSection(name) {
    var typeMsg = document.createElement('div');
    typeMsg.className = 'typeMsg';
    var textarea = document.createElement('textarea');
    textarea.className = "chatInput";
    textarea.id = 'newText:' + name;
    typeMsg.appendChild(textarea);
    var sendMsg  = document.createElement('div');
    sendMsg.className = 'sendMsg';
    sendMsg.innerHTML = '&#8680';
    sendMsg.addEventListener("click", insertChat, false);
    typeMsg.appendChild(sendMsg);
    return typeMsg;
}
function createChatRow(chatDetails, sameNameInd) {
    var chatRow = document.createElement('div');
    chatRow.className = 'chatRow';
    var chatRowSender = document.createElement('div');
    chatRowSender.className = 'chatRowSender';
    chatRowSender.innerHTML = sameNameInd===true?'You': chatDetails.name;
    chatRow.appendChild(chatRowSender);
    var chatMsgContent = document.createElement('div');
    chatMsgContent.className = 'chatMsgContent';
    var chatMsg = document.createElement('div');
    chatMsg.className = 'chatMsg';
    chatMsg.innerHTML = chatDetails.msg;
    var timeStamp = document.createElement('div');
    timeStamp.className = 'timeStamp';
    timeStamp.innerHTML = chatDetails.timeStamp;
    chatMsgContent.appendChild(chatMsg);
    chatMsgContent.appendChild(timeStamp);
    chatRow.appendChild(chatMsgContent);
    return chatRow;
}