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
    document.getElementById("countdown").innerText = days + "days" + hours + "hours"
    + minutes + "minutes" + seconds + "seconds";

    if (timeDifference === 0){
        clearInterval(x);
        document.getElementById("countdown").innerText = "It's finally summer!!";
    }
}, 1000);
    





// //To display current time as a reference
// var showCurrentTime = function(){
//     var clock = document.getElementById("clock");
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var meridian = "AM";

//     //Set time in hours
//     if (hours >= noon){
//         meridian = "PM";
//     }

//     if (hours > noon){
//         hours = hours - 12;
//     }

//     //Set time in minutes
//     if (minutes < 10){
//         minutes = "0" + minutes;
//     }

//     //Set time in seconds
//     if (seconds < 10){
//         seconds = "0" + seconds;
//     }

//     //Put together hours, minutes, and seconds
//     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

//     clock.innerText = clockTime;
// };

// //Setting the clock to decrease
// var updateClock = function(){
//     var time = new Date().getHours();
//     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

//     if (time === partytime){
//         image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//         messageText = "It's almost here!";
//     }
//     else if (time === wakeuptime){
//         image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//         messageText = "Almost there!";
//     }

//     console.log(messageText);
//     timeEventJS.innerText = messageText;

//     showCurrentTime();
// };

// updateClock();

// //Have the clock decrease 1 second at a time
// var oneSecond = 1000;
// setInterval(updateClock, oneSecond);

