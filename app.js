// WORKING WITH DATES

let val;

const today = new Date(); //today's date, current time
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('6-17-2015 12:08:57');
birthday = new Date('9/10/1987');

//dates are 0 based
val = today.getMonth(); //note how the val is 1 less than the calendar month
val = today.getDate();
val = today.getDay(); //0-7, beginning at Sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //gives us a current timestamp, the amount of time that has passed since the beginning of the Unix epoch

birthday.setMonth(3); //set to April
birthday.setDate(12); //set to April 12
birthday.setFullYear(1999); //set to Apri 12, 1999
birthday.setHours(3);
birthday.setMinutes(53);
birthday.setSeconds(22);

console.log(val); //Date is a reference type, object, but we could convert with .toString()
console.log(birthday);
