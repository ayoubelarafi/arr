let text ="ayoub el arafi";
let codetext =window.btoa(text);

let codeetext =window.atob(codetext);

 let textarea=document.getElementById("text");
 let result=document.getElementById("result");
 let select=document.getElementById("select");

 textarea.addEventListener("input",()=>{
    seteygs();
 });
 select.addEventListener("change",()=>{
    seteygs();
 });
 function seteygs(){
     if(select.value=="deads"){
    result.value = window.atob(textarea.value) ;
     }else{
        result.value = window.btoa(textarea.value) ;
     }
 }

