// commands/shafi.js
module.exports = {
  name: 'shafi',
  alias: ['shafi', 'shifa', 'barkat'],
  description: 'Shows info and tribute about Minato 😎',
  category: 'fun',

  lastUsed: {},

  async run({ conn, m }) {
    try {
      const chatId = m.chat;
      const sender = m.sender;

      if (!this.lastUsed[chatId]) this.lastUsed[chatId] = {};
      if (!this.lastUsed[chatId][sender]) this.lastUsed[chatId][sender] = 0;

      this.lastUsed[chatId][sender] += 1;

      if (this.lastUsed[chatId][sender] % 2 === 1) {
        // Odd times: Show image with caption
        await conn.sendMessage(chatId, {
          image: { url: 'https://files.catbox.moe/ryo6vn.jpg' }, // your image link
          caption: `👑 *Minato Namikaze* 👑\n\n✨ The creator of *Minato-MD* ✨\n💖 A anime lover & bot master 🤖\n🔥 Always innovating, always shining 🌟`
        }, { quoted: m });

      } else {
        // Even times: Show good lines about you
        const messages = [
          `🌟 *Minato Namikaze* 🌟\nA leader in coding & style 💻\nBringing fun & power to WhatsApp 💬🚀`,
          `💖 *Minato Namikaze* 💖\nYour friendly developer 😎\nAlways coding with passion & heart ✨`,
          `🔥 *Minato Namikaze* 🔥\nMastermind of bots 👑\Minato-MD is his legacy 🤖`
        ];

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        await conn.sendMessage(chatId, {
          text: randomMsg,
          mentions: [sender],
        }, { quoted: m });
      }

    } catch (err) {
      console.error('❌  command error:', err);
      await conn.sendMessage(m.chat, {
        text: '💔 Oops! Something went wrong while showing Minato Namikaze info...',
      }, { quoted: m });
    }
  }
};
