const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://suhail-md-3-saf040.onrender.com"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://twoem1:twoemuri@cluster0.z9cywwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/JLmSbTfqf4I2Kh4SNJcWgM?mode=ac_c";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JLmSbTfqf4I2Kh4SNJcWgM?mode=ac_c";
global.website =process.env.GURL || "https://chat.whatsapp.com/JLmSbTfqf4I2Kh4SNJcWgM?mode=ac_c" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*ᴄᴀʟʟ ᴍᴇ ᴡʜɪᴢ*" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254740841168";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740841168";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/LXHBQF0Z/logo.jpg" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254754783683,254740841168";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254754783683,254740841168";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254754783683,254740841168";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlp4Yzd3THZtNjQxVDNOb0Jpckw0L2lUN0tSM3IrL21CRWZkOUF3TGVuR0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFYUm9wSXFZU0VPd1NWMWpjUFQwX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM3ODAyMDQtZmY5MC00MmJmLWIxOWEtNDJkYTE3YzY1YjVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDE5NixcbiAgICAgIDE5NSxcbiAgICAgIDEwNSxcbiAgICAgIDIyNixcbiAgICAgIDIzMCxcbiAgICAgIDE2OCxcbiAgICAgIDc2LFxuICAgICAgMjI5LFxuICAgICAgMjUxLFxuICAgICAgMjI3LFxuICAgICAgMTI1LFxuICAgICAgODUsXG4gICAgICA2NCxcbiAgICAgIDYxLFxuICAgICAgMTc0LFxuICAgICAgMjM0LFxuICAgICAgMTI2LFxuICAgICAgMTQ2LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDg5LFxuICAgICAgMTQwLFxuICAgICAgMTczLFxuICAgICAgMjUsXG4gICAgICA4MSxcbiAgICAgIDgsXG4gICAgICAxNTcsXG4gICAgICA0NixcbiAgICAgIDQyLFxuICAgICAgNTYsXG4gICAgICAxNDIsXG4gICAgICAyMTYsXG4gICAgICAyMjMsXG4gICAgICAxMTYsXG4gICAgICAyMzYsXG4gICAgICAxMzAsXG4gICAgICA1MSxcbiAgICAgIDIzLFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYVk4SUFFRUpqcnhjTUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJsL3NablBJK1hTYTNGRnlPaEt0eS80QmJ4TGk2UmxibFdWd0UzWVJ4alk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVJDek9OdmI4cE5CYmJlV3U4bkFmWDYyT05FYmUzUmppU3RieDFNZUJsTzhVMEJQQ05LR1lyV1hRaWNRZTE3N0F4UjRUM3NaSjhDMGpHSVZxRnp3QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK2xjL202STF0cnJONmt3OW9CekVXRlJpN0NjTy81UDBRMWF3bmdqandpNVJ1RTJPUW8xNUFnS01nZzdJYURFVEo2L2VLaXJSR1BVSlp6QnZOMWd0Z1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDA4NDExNjg6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXaGl6XCIsXG4gICAgXCJsaWRcIjogXCIzMDc5NTQ2OTE2ODg3MTo3OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MDg0MTE2ODo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUyMjY2MTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGpRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIakouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjUHR6UVd1UENDZ1Z1OEh4RkJudE5zYU5XS3ArNE9iMTZPcjBMbDhEeU1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzMxMzA1MTY2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqSy5qc29uIjogIntcImtleURhdGFcIjpcImxFMEJTQzllNXZ3b29BY3JMaU5FTVJmRFpMOGhhOE5CWnRPckdhL0w1RGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGpMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTEvM3cxakp2eGQ4ZHFsRTZxcDVVUUhKRDgzUEVZUFMrSEFZSG5ocXNYOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NTc5OTcwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIak0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhZDZ4bzFMU1ZjZ25iY3p4UkpPTXNGZGNwVm1qR3FrMThxREVOZVFSZHU0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGpOLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1drVG43TmdIQXpldkxVV3QwL0tXZDlhYmFxTlVTeC9LbEdGamowdzZTQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NTc5OTcwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIak8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGNGs2YzJ0eTF2U0tGOFJyL1Y2cGRXQnUzY2RWbUJ6YlBrcUtzWEkyc2o4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDk4MTgwNDI4MDdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIalAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuMUtzZTcrTzVyNFNBWHVWSXRzNG1NbkhKS29EOFhIbjd1VXNQWDBIajkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqUS5qc29uIjogIntcImtleURhdGFcIjpcImtFWHBnck8zWjdIdU1KckdqemFDb0VuRHh3V3Rad2FIeko0NTBFTWVuajA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDE3Mjg1NTE2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqUi5qc29uIjogIntcImtleURhdGFcIjpcIjdsWnJQL0w5TTZnWXFWRmVvcURsVDVQdjI1UXA0VHBYRFVOcDNjak5TSG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwMTczMTA2MzE0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGpTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMG1rOWpKU0craHU2NVcyNkRHRGxHNU14RVFMQUpBSnpVNHB3c3VUWHlZND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NTc5OTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUwMTc5NzM1ODc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGpULmpzb24iOiAie1wia2V5RGF0YVwiOlwiRW1jSHZycFVFUjZKV0NWU0NtbUp2bkVjc0JKeUZ1UFoybUQ0eU5xSUdGRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NTc5OTc0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIalUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwT2Zsa3BHV2pvRkw5OEovRVJxbWsxUHNyWXNMR1BUY3JXMDRWUkF0dVlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTUzNTQ0Nzk2NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqVi5qc29uIjogIntcImtleURhdGFcIjpcIldOZWJycklHc3dNZ2dIZW5VUS9VR2ppdjl5d1Bvc255aGxSK3lxUVBvZEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxNTM2OTEzNzU1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGpXLmpzb24iOiAie1wia2V5RGF0YVwiOlwidFg0SzRlZzhIN1ppbFppS0tabENvNVNyZjZnMWM2WnBtWXRSWFJwMWlHcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1NTc5OTc0LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqWC5qc29uIjogIntcImtleURhdGFcIjpcIkI2RkcwRU1MRTBycjl0cVhPR2V5aU5wLyszSzZjV2pIKytNbUNVMjI1MHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3NCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIalkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmNHVuV2laTzdRRW93RDRHTDUwYWJoNUtmMC9nZ2VoM2ZXMzN3NEdxbit3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzU1Nzk5NzQsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTk0NDc2NzE1OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhqWi5qc29uIjogIntcImtleURhdGFcIjpcInVqbWw4RmtXOFAxSWxaZkxQNFZIV09pNGlpakFiMmxQS2dTQTNiekg1SFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NTU3OTk3NCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxOTg4NTg5NDAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "Just Whiz" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Whiz",
  ownername:process.env.OWNER_NAME|| "Whiz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
