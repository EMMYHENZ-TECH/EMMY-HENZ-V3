//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9mTEs0dmJyS1h4d2lYSlJuQ1dPZmtsWVlGL0tteGpTRGZHZ3lhaFhrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWtrQ3pqZU4zN2IzdmQ1YTlXbkRYQkU5M25WWUhFSlhEU3BTZHplM1NRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTFI5RU9qRUc0dUlUMlZEV0VhUHBJNk16Yy9NV2xsQkJxMW93NVc5SDE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTGJrR1pHYVFoOWpaZ01kcFlXMXBROEEyeHlsNnpQSXhWSUV5aDkzTkd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGNzZRb29mNzBnS0NDRlBydXUzY1BmWlRRS2U2SUdtVU41ZXZRVVlCSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRUdDBMNVdvdWJqeGd2b1BFbTJER3BFSkxSOTNIaXlTZG9VRDgzR0RweDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUh4SkVNMkIrbTlmSGdQTWZtMUVabEpUeERweDJvc0NNTmp0V2VPUzZFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXBoc1BFMWxkZzZEZkZ3d0xScDRuMEs5VVJTS3BJb1RvZ3hSRytsTTZWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd1UVgxTTVXZlgwUkpLMTk2N3RQMitneU1jZ1hxWmJKQXFtcEN6a0NQWlRHdzRZTXFNR0RybFVOck02SEdla08rSHUvdy91QmpDMzVvSURRYXFBVmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiI4SFpKZkx2TkRNVGN2VFBGcXIzVmhzZkcwVnROajJ0RHJhMmU2aml3R01NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIWnJ3VVV4Z1NkQ1RfLWxNR00zWGxRIiwicGhvbmVJZCI6ImU1ZGU1YzM1LTM4ZTQtNDM1Ny1hNzk4LWY3MzVhMTAxY2ViYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqUWJ5N01VVXRxVUdxSTFVMTBhbWZ1SFc0cnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVHdkFaSUJOYUE5QUFLL3Y1Q0JITVdmcDh6dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AyNzY0QUdFTk9aL3JjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InphRStwdHdDVDh1TlU1OHlRMnVhRlVDVXFEcUpRWHZUQUdwaG5HT3hMRk09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8vVGpjUTZXcm1Ma21RNDNHQi85K3dvai9BOGwweHR6Zk1VT2F3eUxLYzUySWdWclFCWVU1VE01dndGdVR1cDhRQjJPMVRPMk9PT2ptTHYvRTlBY0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTVU5FRlQ1RDl3c20zaHJjdEVYTWFEd3ZmUm5zS0VWOElhQnBlemhIVDVNbnpDTW1yc0RaaTFkNkpKc2ZyWE1LSlE4L1lhMUwwaytjVVNVNUdEbjRnUT09In0sIm1lIjp7ImlkIjoiMjM0ODEwNTYwMjQyMjoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3ODk4MDE1NDM2ODAxOToxMEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwNTYwMjQyMjoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMmhQcWJjQWsvTGpWT2ZNa05ybWhWQWxLZzZpVUY3MHdCcVlaeGpzU3hUIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODAyMzc3NywibGFzdFByb3BIYXNoIjoiM0E4ckZnIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIbmsifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
