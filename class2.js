function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 


var countDownDate = new Date("May 22, 2020 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 document.getElementById("graduate").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function changeImage() {
            var image = document.getElementById('myImage');
            if (image.src.match("inspo.jpg")) {
                image.src = "invest.jpg";
            }
  else if (image.src.match("invest.jpg")) {
                image.src = "welcome.jpg";
            }
            else if (image.src.match("welcome.jpg")) {
                image.src = "switch.jpg";
            }
  else if (image.src.match("switch.jpg")) {
                image.src = "inspo.jpg";
            }
        }

function changeImageBack() {
            var image = document.getElementById('myImage');
            if (image.src.match("inspo.jpg")) {
                image.src = "switch.jpg";
            }
  else if (image.src.match("invest.jpg")) {
                image.src = "inspo.jpg";
            }
            else if (image.src.match("welcome.jpg")) {
                image.src = "invest.jpg";
            }
  else if (image.src.match("switch.jpg")) {
                image.src = "welcome.jpg";
            }
        }