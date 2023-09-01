 // background.js
document.getElementById("scrapeChat").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function:accessAttribute()
    });
  });
});

function accessAttribute() {
  // This function will be injected into the current tab's context
  // finding length l for access last div of querySelectorAll return... 
  
  var l=document.querySelectorAll('[role="row"]').length;
  var lastDiv=document.querySelectorAll('[role="row"]')[l-1];
  var message=lastDiv.outerText.split("\n");
  var childDiv=lastDiv.querySelector('.CzM4m');
  var person_status=childDiv.getAttribute("data-id").split("_");
  

  alert("last chat :\n " + message[0] +"   from  " + person_status[0]);
  console.log("manish");
   
   
 
  
  let x= Boolean(document.getElementById("main"));
  if(!x)
   {
    console.log("chat is not open");
   }
   else{
    console.log("open");
    document.getElementsByTagName("p")[0].innerHTML="u r ready to work";
   }
  

   
 
  

 
 
  
  
}

 
 

 