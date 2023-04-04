window.addEventListener("load",function(){
    setInterval(change,1000);
})
function change(){
    let message = "インターネットやめろ！！！";
    let ph = document.getElementsByClassName("public-DraftEditorPlaceholder-inner");
    if (ph.length != 0 && ph[0].innerHTML != message){
        for(let i = 0; i < ph.length; i++){
            console.log("change");
            ph[i].innerHTML = message;
        }
    }
}
