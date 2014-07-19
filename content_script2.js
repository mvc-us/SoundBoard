var extensionId = "bmncdfidapfaphjneodbadpfcbddnjnb";
function injectJs(link) {
    var scr = document.createElement('script');
    scr.type = "text/javascript";
    scr.src = link;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

injectJs(chrome.extension.getURL('inject2.js'));

document.addEventListener("ytSoundBoard", function(e) {
	// alert(e.detail.end_time);
	// debugger;
    chrome.runtime.sendMessage(e.detail);
});