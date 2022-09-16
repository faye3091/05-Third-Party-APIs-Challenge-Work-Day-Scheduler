//shows today's date and time
var todaysDate = moment().format("dddd, MMMM Do YYYY [at] h:mm:ss a");
$("#currentDay").text(todaysDate);
//time needs to add 1 second every second

//add the timeblocks
//time blocks will be color coded. depending what time it is at the moment
