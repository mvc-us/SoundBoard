function injectJs(link) {
    var scr = document.createElement('script');
    scr.type = "text/javascript";
    scr.src = link;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

// console.log(chrome.runtime.id);
injectJs(chrome.extension.getURL('inject.js'));