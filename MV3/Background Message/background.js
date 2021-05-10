

try{

  //self.importScripts('contentScript.js');

  //Listen for messages
  chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "message"){

      //Send response
      response({text: "This is a response..."});

    }

  });

}catch(e){

  console.log('error:', e);
}
