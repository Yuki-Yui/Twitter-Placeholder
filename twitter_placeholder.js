const message = "インターネットやめろ！！！";

function change(){
    const ph = document.getElementsByClassName("public-DraftEditorPlaceholder-inner");
    if (ph.length != 0 && ph[0].innerHTML != message){
        for(let i = 0; i < ph.length; i++){
            ph[i].innerHTML = message;
        }
    }
}

const observer = new MutationObserver(function(){
    change();
});
observer.observe(document.body, {childList: true, subtree: true});