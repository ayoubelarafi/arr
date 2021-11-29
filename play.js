class player {
    constructor(){
var heightMain=document.getElementById("player");
heightMain.style.height=screen.height+"px";
if(screen.width<620){
    heightMain.style.width=screen.width+"px";
}
var heightDiv=document.getElementById("content");
heightDiv.style.height=screen.height-300+"px";
    }
}

onload = new player();
//class buttons  
     class Audio_Player{
    constructor(){
this.audio_file=document.getElementById("audio_file");
this.title_audio=document.getElementById("title_radio");
this.play_pause_add=document.getElementById("play_pause");
this.isPlayed;
this.play_pause_add.addEventListener("click",() =>{
this.play_pause();
});

 }
 
 play_pause(){
     if(this.isPlayed==false){
         this.play_pause_add.src ="pause.png";
        this.audio_file.play();
        this.isPlayed=true;
     }else{this.play_pause_add.src ="play.png";
         this.audio_file.pause();
        this.isPlayed=false;
     }
 }
}
onload= new Audio_Player();