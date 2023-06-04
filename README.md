# Birthday Celebrator
Even if you love your friends, some times you may forget their birthday and feel bad about that. So are your friends. This script helps you to make sure to celebrate everyone's birthday in the chat group. It's set up for LINE chat app, but the most part should be compaditble with any other chat app. 

### Preparation
- Create a new LINE Channel: https://developers.line.me/en/ <br/>
Note:
  - Plan -> Developer Trial
  - Use Webhooks -> enabled

- Create a new Google Apps Script project: https://developers.google.com/apps-script/

### How it works 
1. Copy this code and paste on your Google Apps Script project.
1. Customize birthday info, message options, etc.
1. Go to LINE Developer console and check your channel's access token (if it doesn't exist or expired, issue a new one). Assign it to `CHANNEL_ACCESS_TOKEN`.
1. Go to LINE Developer console and check your channel's userID and assign it to `to_ID` (replace it with groupID later).
1. Set up a developer account with [GIPHY](https://developers.giphy.com/) and obtain an api key, assign it to `API_KEY` in `getVideo` function.
1. Set up a developer account with [Unsplash](https://unsplash.com/developers) and obtain a client ID, assign it to `ACLIENT_ID` in `getPreviewImage` function.
1. Deploy > New deployment.  
    <img width="426" alt="image" src="https://github.com/rami6/BirthdayCelebrator/assets/30137645/6fe29ddd-e062-4fbd-9a36-c18ffb414fb6">
1. Select "Web app".  
    <img width="471" alt="image" src="https://github.com/rami6/BirthdayCelebrator/assets/30137645/87c71942-734e-4d0f-badd-2b42762424cc">
1. Choose "Anyone" for access permission.  
    <img width="555" alt="image" src="https://github.com/rami6/BirthdayCelebrator/assets/30137645/e3b815fd-a4c8-4b66-a0a6-dcf7c1d471d9">
1. Copy "Current web app URL" and paste it to "Webhook URL" input form on the LINE console.
1. Become a "friend" with your channel and invite it to the chat group.
1. Send some text in the chat group, then you will get the groupID from the channel.
1. Assign the groupID to `to_ID`, delete or comment out `doPost` function.
1. Click the clock icon and set a trigger for `sendMessage` function.  
    <img width="1266" alt="image" src="https://github.com/rami6/BirthdayCelebrator/assets/30137645/003031ce-282c-4811-8a0a-f6f815519f9c">
1. Do 7-10 again
