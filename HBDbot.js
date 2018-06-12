var CHANNEL_ACCESS_TOKEN = "YOUR_TOKEN";
var to_ID = "GROUP_ID";
var today = new Date();
var month = today.getMonth() + 1;
var date = today.getDate();

// Array of [month, date, name]
// Add your group members' birthdays!
var birthdays = [
  [3, 25, "dummy"],
];
  
// Customize message options
var messages = [
  "Wishing you a day filled with happiness and a year filled with joy. Happy birthday!",
  "You’re older today than yesterday but younger than tomorrow, happy birthday!",
];

// Emojis related to birthday
var emojis_b = [
  "\uD83C\uDF82", // cake
  "\uD83C\uDF89", // party popper
]

// Other emojis  
var emojis_o = [
  "\u2728", // sparkles
  "\uD83D\uDC95", // two hearts
  "\uD83D\uDC9B", // yellow heart
]

var messageTxt = "";

function search_birthday() {
  for (var i = 0; i < birthdays.length; i++){
    if (birthdays[i][0] == month && birthdays[i][1] == date) {
      var randNumM = Math.floor(Math.random() * messages.length);
      var randNumE1 = Math.floor(Math.random() * emojis_b.length);
      var randNumE2 = Math.floor(Math.random() * emojis_o.length);
      messageTxt = birthdays[i][2].concat("! ").concat(messages[randNumM]).concat(emojis_b[randNumE1]).concat(emojis_o[randNumE2]);
      push_message();
      break;
    }
  };
}

function push_message() {
  var postData = {
    "to": to_ID,
    "messages": [{
      "type": "text",
      "text": messageTxt,
    }]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  var response = UrlFetchApp.fetch(url, options);
}