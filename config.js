const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Don't Joke with Patii!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254754783683";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254754783683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_24_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImx5RVBSR0VCQjF6dDVldGFrZXloalIxbEpobHhIVVc5eXVreGpWM3QxcEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU0NzgzNjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRkY2Qzc3REY1RDUxMjNEOUM2MEYxQTA5RDcyMDJFNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDcwNTk4NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTQ3ODM2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk2NTIyMDFEQjU3MjBDMzRDRDZFMUY0Njk4MEJBNjEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzA1OTg1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGRzZTbkdWNFNCdUpBNUdjejd0SnpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhOGRhZTU5LWJiNzctNDRjMi04MGY1LTdhODc4YTE1NGY1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNzksXG4gICAgICAyNDcsXG4gICAgICAxODEsXG4gICAgICAxODAsXG4gICAgICAxNDQsXG4gICAgICAxNjEsXG4gICAgICA5OCxcbiAgICAgIDEyMSxcbiAgICAgIDEzLFxuICAgICAgMjA0LFxuICAgICAgMjM4LFxuICAgICAgMjMyLFxuICAgICAgNjEsXG4gICAgICAyMTgsXG4gICAgICAyNixcbiAgICAgIDQ0LFxuICAgICAgMjA4LFxuICAgICAgMTcwLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDIwOCxcbiAgICAgIDEyOSxcbiAgICAgIDE5NSxcbiAgICAgIDEzLFxuICAgICAgMjEwLFxuICAgICAgNzcsXG4gICAgICAxOTQsXG4gICAgICAxMjksXG4gICAgICAyMTgsXG4gICAgICAxMTEsXG4gICAgICAxNjcsXG4gICAgICAyMjMsXG4gICAgICA3LFxuICAgICAgMTQ1LFxuICAgICAgMjQ0LFxuICAgICAgNjIsXG4gICAgICAxNzgsXG4gICAgICAxNDksXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ1k5WkVHRUlxSmlNRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlI1d1ByV3kvTThDN0VGa2kzTDM0b1pQQ0FlVGhmWHowKzRxWG15N1RiMmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibmh4Vm52Y3JwUXB2Q0VBdjBvOTRabWw4UlJoUVFCbWVoeHpJZHFrQVQvRkVXbXZOclFKaVd0bFc5ZHJIOXlrZFh3UldsRkxPNmJLSGQvUXFZc2VLQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ21RZmFmSUpUOTcxb2JTdzBqQ21RNktHY1dDNkpxR1VSU2hJV29iRlFya0svSmZpMWhZMjE3QzZ0QjlPVWplWmZoWkR0ckErcjgrSi9iSGpicklNakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTQ3ODM2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTY1MzU0NDIzOTE2NjoyM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJXSElaXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTQ3ODM2ODM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcwNTk4NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHSnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdKdC5qc29uIjogIntcImtleURhdGFcIjpcInhCN0J3WEZNaDhkRjlBZzVmYWRNUnEzZmZMcW5oRUlCcEhXT3JnTXNnRzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0ODE4NDM2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MzYyNTY2MTc0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || " , // ```『Don't Joke with Whiz® 』```",
 
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


const express = require("express");
const app = express();

// Your actual web app or bot code
app.get("/", (req, res) => {
  res.send("App is alive!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

