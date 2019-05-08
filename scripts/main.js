var countdown = setInterval(function() { 
    //Set up the end of the countdown - first day of summer!
    var summer = new Date("june 21, 2019 00:00:00").getTime();

    //The difference between today and the end of the countdown
    var rightNow = new Date().getTime();
    var timeDifference = summer - rightNow;

    //Calculations to display as days, hours, minutes, secondse
    var days = Math.floor(timeDifference / (1000*60*60*24));
    var hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    //Display countdown
    document.getElementById("countdown").innerText = days + "days " + hours + "hours "
    + minutes + "minutes " + seconds + "seconds";

    if (timeDifference === 0){
        clearInterval(x);
        document.getElementById("countdown").innerText = "It's finally summer!!";
    }

}, 1000);

var temp = document.getElementById("temperature");
temp.addEventListener('click', (event) => {
    event.target.toggle('done');
  }, false);