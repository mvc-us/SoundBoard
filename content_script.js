function play() {
  if (player) {
    var prop;
    for (prop in player)
    {
      console.log(prop);
    }
    alert("playing video");
    player.playVideo();
  }
}


var player = document.getElementById("movie_player");
play();
// alert(ytplayer);
// var time = ytplayer.getCurrentTime();
// alert(time);