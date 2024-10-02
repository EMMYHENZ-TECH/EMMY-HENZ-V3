const fs = require('fs');
const path = require('path');
const os = require('os');
const Config = require('../config');
const { fancytext, tiny, runtime, formatp, prefix } = require("../lib");
const long = String.fromCharCode(0x200e);
const readmore = long.repeat(0xfa1);
const astro_patch = require("../lib/plugins");

// Path to the anime audio folder
const audioFolderPath = path.join(__dirname, '../lib');

// Function to send smooth anime background audio
async function sendAnimeBackgroundAudio(context, fileName) {
  try {
    const filePath = path.join(audioFolderPath, fileName);
    if (fs.existsSync(filePath)) {
      const audio = fs.readFileSync(filePath);  // Read the audio file
      const messageOptions = {
        audio: audio, 
        mimetype: 'audio/mpeg'
      };
      // Send audio message using the correct sendMessage function
      await context.sendMessage(context.chat, messageOptions);
    } else {
      throw new Error('File not found.');
    }
  } catch (error) {
    await context.error(`Error sending background audio: ${error.message}`, error);
  }
}

// Variable to keep track of the current design index
let currentDesignIndex = 0;

// Function to get the next menu design
function getNextMenuDesign() {
  const designs = [
    {
      header: "┏━━⟪ *{botname}* ⟫━━⦿\n",
      lineSeparator: "┃ ",
      commandPrefix: "✨ ",
      footer: "━━━━━━━━━━━━━━━",
      emoji: "🌸",
      greetingText: "Welcome to your serene command center!",
    },
    {
      header: "━━━[ *{botname}* ]━━━\n",
      lineSeparator: "┃ ",
      commandPrefix: "⭐ ",
      footer: "━━━━━━━━━━━",
      emoji: "🌟",
      greetingText: "Enjoy the magical commands!",
    },
    {
      header: "【 *{botname}* 】\n",
      lineSeparator: "┃ ",
      commandPrefix: "💫 ",
      footer: "━━━━━━━━━━━━━",
      emoji: "🎌",
      greetingText: "Explore the enchanting commands below!",
    }
  ];

  // Get the current design
  const design = designs[currentDesignIndex];
  
  // Update the index for the next design
  currentDesignIndex = (currentDesignIndex + 1) % designs.length;

  return design;
}

// Command handler with subtle anime theme
astro_patch.smd({
  'cmdname': "menu",
  'desc': "Displays a calm, readable command list",
  'react': '✨',
  'type': 'user',
  'filename': __filename
}, async (context, message) => {
  try {
    // Display the menu first
    const { commands } = require("../lib");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const currentDate = currentTime.toLocaleDateString();
    let greeting = "";

    // Anime-style greetings based on time of day
    if (hours >= 5 && hours < 12) {
      greeting = "🏙 *Good Morning* 🏙 - Time for a fresh start!";
    } else if (hours >= 12 && hours < 18) {
      greeting = "🌅 *Good Afternoon* 🌅 - Keep up the great work!";
    } else if (hours >= 18 && hours < 22) {
      greeting = "🌆 *Good Evening* 🌆 - Unwind and relax!";
    } else {
      greeting = "🌙 *Good Night* 🌙 - Rest and recharge!";
    }

    // Choose the next menu design
    const design = getNextMenuDesign();

    // Organize commands by category
    const commandCategories = {};
    commands.forEach(cmd => {
      if (!cmd.dontAddCommandList && cmd.pattern) {
        if (!commandCategories[cmd.category]) {
          commandCategories[cmd.category] = [];
        }
        commandCategories[cmd.category].push(cmd.pattern);
      }
    });

    // Build the menu content based on the chosen design
    const header = design.header.replace("{botname}", Config.botname);
    const lineSeparator = design.lineSeparator;
    const footer = design.footer;

    let menuContent = `${header}`;
    menuContent += `${lineSeparator}👑 *Owner:* ${Config.ownername}\n`;
    menuContent += `${lineSeparator}🕒 *Uptime:* ${runtime(process.uptime())}\n`;
    menuContent += `${lineSeparator}💻 *RAM Usage:* ${formatp(os.totalmem() - os.freemem())}\n`;
    menuContent += `${lineSeparator}📅 *Date:* ${currentDate}\n`;
    menuContent += `${lineSeparator}📊 *Total Commands:* ${978}\n`;
    menuContent += `${lineSeparator}${greeting}\n\n`;

    // List commands by category in an organized manner
    for (const category in commandCategories) {
      menuContent += `${design.emoji} *${tiny(category)}* ${design.emoji}\n`;
      commandCategories[category].forEach(cmd => {
        menuContent += `┃   ${design.commandPrefix}${fancytext(cmd, 1)}\n`;
      });
    }

    menuContent += `${footer}\n\n${design.emoji} *${Config.botname}* - Your assistant\n`;
    menuContent += `©2024 *EMMY HENZ*\n${readmore}`;

    // Send the menu with a "forwarded" tag
    const menuOptions = {
      'caption': menuContent,
      'contextInfo': {
        'forwardingScore': 100, 
        'isForwarded': true,
        'externalAdReply': {
          'title': 'EMMY_HENZ-V3',
          'sourceUrl': 'https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C'
        }
      },
      'ephemeralExpiration': 3000
    };

    // Send the menu
    await context.sendUi(context.chat, menuOptions, context);

    // Play soft background audio after sending the menu
    await sendAnimeBackgroundAudio(context, 'Emmy.mp3');

  } catch (error) {
    await context.error(`Error: ${error.message}`, error);
  }
});