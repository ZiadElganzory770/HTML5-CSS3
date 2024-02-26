var video = document.getElementById("myVideo");
var isMuted = false;
var timeDisplay = document.getElementById("timeDisplay");
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    isMuted = false;
  } else {
    video.muted = true;
    isMuted = true;
  }
  updateMuteButton();
}

function setVolume(volume) {
  video.volume = volume;
  if (volume == 0) {
    video.muted = true;
    isMuted = true;
  } else {
    video.muted = false;
    isMuted = false;
  }
  updateMuteButton();
}

function setPosition(position) {
  var duration = video.duration;
  var targetTime = (position / 100) * duration;
  video.currentTime = targetTime;
}

function updateMuteButton() {
  var muteButton = document.querySelector("button[onclick='toggleMute()']");
  muteButton.textContent = isMuted ? "Unmute" : "Mute";
}

function setSpeed(speed) {
  video.playbackRate = speed;
}

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (remainingSeconds < 10 ? "0" : "") +
    remainingSeconds
  );
}

video.addEventListener("timeupdate", function () {
  var currentTime = video.currentTime;
  var duration = video.duration;
  var currentTimeFormatted = formatTime(currentTime);
  var durationFormatted = formatTime(duration);
  timeDisplay.textContent = currentTimeFormatted + " / " + durationFormatted;
  var percentage = (currentTime / duration) * 100;
  document.getElementById("timeRange").value = percentage;
  document.getElementById("positionRange").value = percentage;
});
