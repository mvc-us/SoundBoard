var extensionId = "bmncdfidapfaphjneodbadpfcbddnjnb";
function sendPost() {
    var url = document.URL;
    var startIndex = url.indexOf("v=") + 2;
    var endIndex = url.indexOf("&");
    var videoHash;
    if (endIndex < startIndex) {
    	videoHash = url.substring(startIndex);
    } else {
    	videoHash = url.substring(startIndex, endIndex);
    }
    console.log(videoHash);
     
    var startTime = _recorded_times[0];
    var endTime = _recorded_times[1];
    // alert(videoHash + startTime + " : " + endTime);
    var go = function() {
    	var evt = new CustomEvent(
    		"ytSoundBoard",
    		{
    			detail: {
    				start_time: startTime,
    				end_time: endTime,
    				video_hash: videoHash
    			},
    			bubbles: true,
    			cancelable: false
    		});
        // var evt = document.createEvent('CustomEvent', {"detail": {"start_time": startTime, "end_time": endTime, "video_hash": videoHash}});
        // evt.data = {start_time: startTime, end_time: endTime, video_hash: videoHash};
        // evt.initCustomEvent("hello", {"start_time": startTime, "end_time": endTime, "video_hash": videoHash});
        document.dispatchEvent(evt);
    };
    // console.log("Sending request to chrome runtime");
    go();
    // chrome.runtime.sendMessage(extensionId, {start_time: startTime, end_time: endTime, video_hash: videoHash});
}

function main() {
    var player = document.getElementById('movie_player');
    var time = player.getCurrentTime();
    _recorded_times.push(time);
    if (_recorded_times.length == 2) {
        sendPost();
        player.pauseVideo();
    }

    // alert(_recorded_times.length + " + " + time);
}

main();