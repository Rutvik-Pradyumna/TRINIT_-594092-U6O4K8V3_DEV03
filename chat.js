let chatContainer=document.getElementById("chatContainer");
let userInput=document.getElementById("userInput");
let sendMsgBtn=document.getElementById("sendMsgBtn");

let url="https://apis.ccbp.in/wiki-search?search=";

function sendQuery(item){

    let replyMsg=document.createElement("p");
    if(item.length===0 || userInput.value===""){
        replyMsg.textContent="Please Ask Valid Question...";
        replyMsg.classList.add("reply-msg","p-3","ml-3");
        chatContainer.appendChild(replyMsg);
        userInput.value="";
        return;
    }
    else {
        userInput.value="";
        replyMsg.textContent="Use the below link";
    }
    replyMsg.classList.add("reply-msg","p-3","ml-3");
    chatContainer.appendChild(replyMsg);

    let replyLink=document.createElement("a");
    replyLink.textContent=item[0].link;
    replyLink.href=item[0].link;
    replyLink.setAttribute("target","_blank");
    replyLink.classList.add("reply-link","p-3","ml-3");
    chatContainer.appendChild(replyLink);
}

function fetchQuery(){
    let val=userInput.value;
    
    let inputContainer=document.createElement("div");
    inputContainer.classList.add("d-flex","flex-row","justify-content-end","pr-3");
    chatContainer.appendChild(inputContainer);

    let inputMsg=document.createElement("p");
    inputMsg.textContent=val;
    inputMsg.classList.add("send-msg","p-3");
    inputContainer.appendChild(inputMsg);

    fetch(url+val)
    .then(function(res){
        return res.json();
    })
    .then(function(body){
        sendQuery(body.search_results);
    })
}

sendMsgBtn.addEventListener("click",fetchQuery);
userInput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        fetchQuery();
    }
})