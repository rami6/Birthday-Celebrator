# BirthdayCelebrator
Even if you love your friends in a chat group, some times you forget their birthday. So as the other members. Then, it's time to make a bot which certainly celebrate every member's birthday!<br/>
This code is for LINE chat app. But, you can use some parts of this code for the other chat apps' bot services. 

### Preparation
- Create a new LINE Channel: https://developers.line.me/en/ <br/>
Note:
  - Plan -> Developer Trial
  - Use Webhooks -> enabled

- Create a new Google Apps Script project: https://developers.google.com/apps-script/

### How it works 
1. Copy this code and paste on your Google Apps Script project
2. Customize birthday info, message options, etc.
3. Go to LINE Developer console and check your channel's access token(if it's not exist or expired, issue new one). Assign it to `CHANNEL_ACCESS_TOKEN`
4. Go to LINE Developer console and check your channel's userID and assign it to `to_ID`(replace it with groupID later)
5. Publish > Deploy as web app<br/><img width="406" alt="screen shot 2018-06-12 at 1 59 44 am" src="https://user-images.githubusercontent.com/30137645/41280719-8066eb50-6de4-11e8-8d69-413117d4d538.png">
6. The last one of settings for deploy:<br/><img width="191" alt="screen shot 2018-06-12 at 2 03 07 am" src="https://user-images.githubusercontent.com/30137645/41281000-3b8e1ba6-6de5-11e8-959b-4b7320d4e868.png">
7. Copy "Current web app URL" and paste it to "Webhook URL" input form on the LINE console
8. Be friend with your channel and invite it to the chat group
9. Send some text in the chat group, then you will get the groupID from the channel.
10. Assign the groupID to `to_ID`. delete or comment out `function doPost(e){...}`
11. Click the clock icon and set trigger<br/><img width="1116" alt="screen shot 2018-06-12 at 2 24 22 am" src="https://user-images.githubusercontent.com/30137645/41282034-d96b0ba2-6de7-11e8-9598-cf4a3b860d98.png">
12. Do 5-7 again
