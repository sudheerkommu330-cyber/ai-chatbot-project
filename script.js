function sendMessage(){

    let input = document.getElementById("userInput");

    let message = input.value;

    let chatbox = document.getElementById("chatbox");

    if(message.trim() === ""){
        return;
    }

    // User Message
    let userMessage =
    `<div class="user">${message}</div>`;

    chatbox.innerHTML += userMessage;

    // Bot Reply
    let botReply = "I am an AI chatbot!";

    if(message.toLowerCase() === "hello"){
        botReply = "Hello! How can I help you?";
    }

    else if(message.toLowerCase() === "how are you"){
        botReply = "I am fine!";
    }

    let botMessage =
    `<div class="bot">${botReply}</div>`;

    chatbox.innerHTML += botMessage;

    input.value = "";

    chatbox.scrollTop = chatbox.scrollHeight;
}
