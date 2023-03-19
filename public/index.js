const sio = io(); //new socket connection
//basic innitialization from docs
sio.on('connect', ()=>{
    console.log(sio.id, 'connected');//upon connections these are sent
    }); 
sio.on('disconnect', ()=>{
    console.log('disconnected');
});
sio.on('user_joined', (userID)=>{
    console.log(userID, 'joined');
});
sio.on("Text_Message",(input)=>{
    var TheChatDiv = document.getElementById("chatBox"); //get the divider to later append to it
    TheChatDiv.innerHTML+=  input + "<br>"
    var chatBox = document.getElementById("chatBox");
    chatBox.scrollTop= chatBox.scrollHeight; //after message sent, scroll down
    var icq = new Audio('o_o.mp3'); //play sound
    icq.play();

  } );
sio.on('user_left', (userID)=>{
    console.log(userID, 'left');
});
sio.on('clientCounter', (counter)=>{
  console.log("user count:", counter);
});
sio.on("updateUsers", (userlist)=>{
  document.getElementById('nameSection').innerHTML = null; //nullify list before updating it
  for (let key in userlist){ //loop the usernames dictionary
    
    document.getElementById('nameSection').innerHTML += key + "<br>"; //add name and break line after each user
  }
});
sio.on("imposter", ()=>{ //for when someone tries to impersonate, stealing somebodys name
  alert("name taken!!!"); //notify
  window.location.replace(""); //refresh
});
function setNickname(){
   let nickname = document.getElementById("nickname").value; //get name input
   if (nickname!=""){ //if not empty
    sio.emit('setNick', nickname); //send for registration
   }
   else{
    alert("NO GHOSTS"); //error
    window.location.replace(""); //refresh
   }
   var x = document.getElementById("naming"); //get naming stage section 
   if (x.style.display === "none") { //if its invisible
       x.style.display = "block"; //show naming stage
       stage2.display = "none" //hide chatting stage
   } 
   else { //opposite
       x.style.display = "none"; 
       stage2.display = "block"
   }
}
function why(){ //someone clicked the forbidden button
  var song = new Audio("china.mp3"); //song
  song.play(); //play
  document.getElementById('chinaSong').style.display="none"; //hide it to prevent spam
  alert("你他妈的刚刚他妈的说我什么，你个小混蛋？ 你知道吗，我以全班第一的成绩毕业于海豹突击队，参与过多次针对基地组织的秘密突袭行动，确认击毙 300 多人。 我接受过大猩猩战争的训练，我是整个美国武装部队中的顶级狙击手。 你对我来说什么都不是，只是另一个目标。 我会用这个地球上前所未见的方式精确地消灭你，记住我他妈的话。 你认为你可以在互联网上对我说那些狗屁话吗？ 再想想，混蛋。 就在我们说话的时候，我正在联系我在美国的秘密间谍网络，现在正在追踪你的 IP，所以你最好为这场风暴做好准备，蛆虫。 这场风暴摧毁了你称之为生活的可悲的小东西。 你他妈的死了，孩子。 我可以在任何地方，任何时间，我可以用七百多种方式杀死你，而且还是徒手。 我不仅在徒手格斗方面受过广泛的训练，而且我可以使用美国海军陆战队的整个武库，我会充分利用它来把你这个可怜的屁股从大陆的脸上抹去，你这个小狗屎。 如果你能知道你的小聪明评论会给你带来什么邪恶的报复，也许你他妈的会闭嘴。 但你不能，你没有，现在你付出了代价，你这个该死的白痴。 我会在你身上大发雷霆，你会淹死在里面。 你他妈的死了，孩子。你他妈的刚刚他妈的说我什么，你个小混蛋？ 你知道吗，我以全班第一的成绩毕业于海豹突击队，参与过多次针对基地组织的秘密突袭行动，确认击毙 300 多人。 我接受过大猩猩战争的训练，我是整个美国武装部队中的顶级狙击手。 你对我来说什么都不是，只是另一个目标。 我会用这个地球上前所未见的方式精确地消灭你，记住我他妈的话。 你认为你可以在互联网上对我说那些狗屁话吗？ 再想想，混蛋。 就在我们说话的时候，我正在联系我在美国的秘密间谍网络，现在正在追踪你的 IP，所以你最好为这场风暴做好准备，蛆虫。 这场风暴摧毁了你称之为生活的可悲的小东西。 你他妈的死了，孩子。 我可以在任何地方，任何时间，我可以用七百多种方式杀死你，而且还是徒手。 我不仅在徒手格斗方面受过广泛的训练，而且我可以使用美国海军陆战队的整个武库，我会充分利用它来把你这个可怜的屁股从大陆的脸上抹去，你这个小狗屎。 如果你能知道你的小聪明评论会给你带来什么邪恶的报复，也许你他妈的会闭嘴。 但你不能，你没有，现在你付出了代价，你这个该死的白痴。 我会在你身上大发雷霆，你会淹死在里面。 你他妈的死了，孩子。你他妈的刚刚他妈的说我什么，你个小混蛋？ 你知道吗，我以全班第一的成绩毕业于海豹突击队，参与过多次针对基地组织的秘密突袭行动，确认击毙 300 多人。 我接受过大猩猩战争的训练，我是整个美国武装部队中的顶级狙击手。 你对我来说什么都不是，只是另一个目标。 我会用这个地球上前所未见的方式精确地消灭你，记住我他妈的话。 你认为你可以在互联网上对我说那些狗屁话吗？ 再想想，混蛋。 就在我们说话的时候，我正在联系我在美国的秘密间谍网络，现在正在追踪你的 IP，所以你最好为这场风暴做好准备，蛆虫。 这场风暴摧毁了你称之为生活的可悲的小东西。 你他妈的死了，孩子。 我可以在任何地方，任何时间，我可以用七百多种方式杀死你，而且还是徒手。 我不仅在徒手格斗方面受过广泛的训练，而且我可以使用美国海军陆战队的整个武库，我会充分利用它来把你这个可怜的屁股从大陆的脸上抹去，你这个小狗屎。 如果你能知道你的小聪明评论会给你带来什么邪恶的报复，也许你他妈的会闭嘴。 但你不能，你没有，现在你付出了代价，你这个该死的白痴。 我会在你身上大发雷霆，你会淹死在里面。 你他妈的死了，孩子。你他妈的刚刚他妈的说我什么，你个小混蛋？ 你知道吗，我以全班第一的成绩毕业于海豹突击队，参与过多次针对基地组织的秘密突袭行动，确认击毙 300 多人。 我接受过大猩猩战争的训练，我是整个美国武装部队中的顶级狙击手。 你对我来说什么都不是，只是另一个目标。 我会用这个地球上前所未见的方式精确地消灭你，记住我他妈的话。 你认为你可以在互联网上对我说那些狗屁话吗？ 再想想，混蛋。 就在我们说话的时候，我正在联系我在美国的秘密间谍网络，现在正在追踪你的 IP，所以你最好为这场风暴做好准备，蛆虫。 这场风暴摧毁了你称之为生活的可悲的小东西。 你他妈的死了，孩子。 我可以在任何地方，任何时间，我可以用七百多种方式杀死你，而且还是徒手。 我不仅在徒手格斗方面受过广泛的训练，而且我可以使用美国海军陆战队的整个武库，我会充分利用它来把你这个可怜的屁股从大陆的脸上抹去，你这个小狗屎。 如果你能知道你的小聪明评论会给你带来什么邪恶的报复，也许你他妈的会闭嘴。 但你不能，你没有，现在你付出了代价，你这个该死的白痴。 我会在你身上大发雷霆，你会淹死在里面。 你他妈的死了，孩子。");
  
  
}
function getInput(){
  text = document.getElementById("inpt").value; //get user text message
  if(text){ //if not empty
      sio.emit("userInput", text); //send to server
      document.getElementById("inpt").value= null; //empty input box

  }
}