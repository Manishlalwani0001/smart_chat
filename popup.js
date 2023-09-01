  import { getCurrentTab } from "./utils.js";

  document.addEventListener("DOMContentLoaded", async()=>{
    const activeTab= await getCurrentTab();
   
    
    if(!activeTab.url.includes("web.whatsapp.com") )
    {
      const box=document.getElementsByClassName("box")[0];
      box.innerHTML ='<div class="chat"> This Extension only for Whats App web...</div>';
   
    } 
    
});


