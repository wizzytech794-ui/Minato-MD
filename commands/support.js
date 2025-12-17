module.exports = {
  name: "support",
  alias: ["helpbot", "support", "pathanupport"],
  description: "Get Minato-MDsupport links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *Minato-MD - SUPPORT CENTER* 🛠️



💬 *WhatsApp Support Group:*  
https://chat.whatsapp.com/J7vrHWPe01ABOJ6CAkGo1C

📲 *Telegram Support:*  
https://t.me/@Minato_Namikaze359

🧑‍💻 *GitHub Repository:*  
https://github.com/minatonamikaze359/Minato-MD

📞 *Bot Admin:*  
wa.me/8801405706180

📞 *Bot Owner:*  
wa.me/8801719741293

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using Minato-MD!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
