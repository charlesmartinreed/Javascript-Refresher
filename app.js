// WORKING WITH THE DOM

// WINDOW OBJECT in the browser is the user environment.
// Document object exists on the window as a property.
// Methods like console.log or alert exists on the window

// ALERT
//window.alert('Hello world'); //usually see this as alert();

// PROMPT
//const input = prompt(); //provides text input
//alert(input); //throws up an alert with the contents of our prompt call, i.e, what was typed

// CONFIRM - provides a OK/CANCEL selection box to the user
// if(confirm('Are you sure?')) {
// 	console.log('YES');
// } else {
// 	console.log('NO');
// }

//PROPERTIES

let val;
//grab window height and width
val = window.outerHeight;
val = window.outerWidth; //from the edges

val = window.innerHeight;
val = window.innerWidth; //includes the visible content like scroll bars, etc.

val = window.scrollY; //scroll point location on the current window for the user
val = window.scrollX; //these are useful for playing animations as a user scrolls

//location objects
val = window.location; //gives things like the http protocol, origin address, port #, etc
val = window.location.hostname;
val = window.location.search; //shows the query string used to reach your page


//REDIRECT
// window.location.href = "https://google.com" //sends you to google when reloading
//window.location.reload(); //reloads the page, obviously

//HISTORY OBJECT - gets browsing history
//window.history.go(-1); //sends the browser back one page
//val = window.history.length //reports the number of sites navigated to before current one

// NAVIGATOR OBJECT - details on the browser itself
//includes things like the geoLocation, userAgent, platform
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.location;


console.log(val);
