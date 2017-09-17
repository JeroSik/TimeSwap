//Find UTC Time Offset
var HTMLTime = document.getElementById("offsetOutput");
var formatTime = null;
function systemTime() {
  if (document.getElementById("timezone-offset").value == "null") {
    var time = new Date();
    var currentTimeZoneOffset = time.getTimezoneOffset();
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
  }
}

systemTime();

HTMLTime.innerHTML = formatTime;

//Maually Set the Time Zone
function setZone() {
  formatTime = "UTC" + document.getElementById("timezone-offset").value;
  systemTime();
  HTMLTime.innerHTML = formatTime;
}

$(document).ready(function(){
  //document.getElementById("manualButton").onclick = setZone();
  $("#manualButton").click(function(){
    setZone();
  });
  $("#settings").click(function(){
      $("#settingsContent").toggle(function (){
          $(this).animate({height: "200px"}, 300);
    }, function () { $(this).animate({height: "75px"}, 300);

      });
  });
  });
