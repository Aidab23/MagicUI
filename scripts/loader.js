(function(e){
    "use strict";
    function init(e) {
        var frameCont = document.createElement("div");
        frameCont.innerHTML = "https://raw.githubusercontent.com/Aidab23/MagicGUI/main/resources/gui.html";
        document.querySelector("body").append(frameCont);
    };
    init();
})