/* Customizable elements: START */

// Add your group members' birthdays!
const birthdayNameByDateByMonth = {
  3: {
    25: "Claire",
  },
  4: {
    11: "Jamie",
  },
};

const hbdMessages = [
  "Wishing you a day filled with happiness and a year filled with joy. Happy birthday!",
  "You’re older today than yesterday but younger than tomorrow, happy birthday!",
];

const partyEmojis = ["💃", "🕺", "🎂", "🎈", "🎉", "🥂"];

const symbolEmojis = ["✨", "🌟", "💛", "💕", "🎶"];

// For video search
const secondarySearchWords = [
  "cute",
  "animal",
  "dog",
  "cat",
  "girl",
  "baby",
  "child",
  "cake",
  "fireworks",
  "candle",
  "funny",
  "crazy",
  "japan",
  "party",
  "yay",
];

/* Customizable elements: END */

// Schedule to call this function everyday (i.e. "Trigger" feature of Google App Script)
function sendMessage() {
  const CHANNEL_ACCESS_TOKEN = "YOUR_TOKEN";
  const to_ID = "GROUP_ID";

  const messageText = createMessageText();

  if (!messageText) {
    return;
  }

  const messages = [
    {
      type: "text",
      text: messageText,
    },
  ];

  const gif = getVideo();
  const previewImage = getPreviewImage();

  const originalContentUrl = gif?.images?.looping?.mp4;
  const previewImageUrl = previewImage?.urls?.small;

  if (originalContentUrl && previewImageUrl) {
    messages.push({
      type: "video",
      originalContentUrl,
      previewImageUrl,
    });
  }

  const postData = {
    to: toID,
    messages,
  };

  const url = "https://api.line.me/v2/bot/message/push";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
  };

  const options = {
    method: "post",
    headers: headers,
    payload: JSON.stringify(postData),
  };

  UrlFetchApp.fetch(url, options);
}

function createMessageText() {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const birthdayPerson = birthdayNameByDateByMonth[todayMonth]
    ? birthdayNameByDateByMonth[todayMonth][todayDate]
    : undefined;
  if (birthdayPerson) {
    const hbdMessage =
      hbdMessages[Math.floor(Math.random() * hbdMessages.length)];
    const partyEmoji =
      partyEmojis[Math.floor(Math.random() * partyEmojis.length)];
    const symbolEmoji =
      symbolEmojis[Math.floor(Math.random() * symbolEmojis.length)];
    return `${birthdayPerson}! ${hbdMessage}${partyEmoji}${symbolEmoji}`;
  }

  return undefined;
}

function getVideo() {
  const API_KEY = "YOUR API KEY";
  const videoType = Math.floor(Math.random() * 2) ? "gifs" : "stickers";
  const secondarySearchWord =
    secondarySearchWords[
      Math.floor(Math.random() * secondarySearchWords.length)
    ];
  const lang = "en";
  const offset = Math.floor(Math.random() * 200);
  const url = `https://api.giphy.com/v1/${videoType}/search?api_key=${API_KEY}&q=birthday+${secondarySearchWord}&rating=g&limit=1&lang=${lang}&offset=${offset}`;
  const responseContentText = UrlFetchApp.fetch(url).getContentText();

  let contentObject;

  try {
    contentObject = JSON.parse(responseContentText);
  } catch (e) {
    return undefined;
  }

  return contentObject?.data?.length ? contentObject.data[0] : undefined;
}

function getPreviewImage() {
  const CLIENT_ID = "YOUR CLIENT ID";

  const retrievingPageNumber = Math.floor(Math.random() * 100);
  const url = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=birthday&orientation=landscape&page=${retrievingPageNumber}`;

  const responseContentText = UrlFetchApp.fetch(url).getContentText();

  let contentObject;

  try {
    contentObject = JSON.parse(responseContentText);
  } catch (e) {
    return undefined;
  }

  const results = contentObject?.results;

  return results?.length
    ? results[Math.floor(Math.random() * results.length)]
    : undefined;
}

// Use this function for only getting groupID.
// Once you get the groupID, delete or comment out this function.
function doPost(e) {
  var json = JSON.parse(e.postData.contents);
  var GID = json.events[0].source.groupId;

  messageTxt = GID;
  push_message();
}
