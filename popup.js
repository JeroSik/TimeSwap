//Find UTC Time Offset
var time = new Date();
var currentTimeZoneOffset = time.getTimezoneOffset();
var HTMLTime = document.getElementById("CurrTimeZone");
//Format UTC Time
var hours = Math.floor(currentTimeZoneOffset / 60);
var minutes = currentTimeZoneOffset % 60;
if (hours < 10) {
  hours = "0" + hours;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (currentTimeZoneOffset > 0) {
  formatTime = "UTC-" + hours + ":" + minutes;
}
else if (currentTimeZoneOffset < 0) {
  formatTime = "UTC+" + hours + ":" + minutes;
}
HTMLTime.innerHTML = formatTime;
//Maually Set the Time Zone
function setZone() {
  var timezone = document.getElementById("timezone-offset").value;
}
