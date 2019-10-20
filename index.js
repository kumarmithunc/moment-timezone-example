var moment = require('moment');
var momenttz= require('moment-timezone');
//console.log(moment().format());
//console.log(moment(new Date(1570690654007)).format('MMMM Do YYYY, h:mm:ss a'));

var anchorage = moment.tz(new Date(1570690654007), "America/Anchorage");
var kolkata = anchorage.clone().tz('Asia/Kolkata');

console.log('anchorage : ',anchorage.format('MMMM Do YYYY, h:mm:ss a'));
console.log('asia/kolkata : ',kolkata.format('MMMM Do YYYY, h:mm:ss a'));



var now = moment.utc();
// get the zone offsets for this time, in minutes
var anchorage_tz_offset = moment.tz.zone("America/Anchorage").utcOffset(now); 
var kolkata_tz_offset = moment.tz.zone("Asia/Kolkata").utcOffset(now);
// calculate the difference in hours
console.log((anchorage_tz_offset - kolkata_tz_offset) / 60);

