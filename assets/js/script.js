// MOMENT - CURRENT DAY
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do'));

var currentTime = moment().get('hour');
console.log(currentTime);
