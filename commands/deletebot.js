module.exports = async function deleteBotCommand(sock, chatId, userMessage, senderId) {
  const fakeLeaveMsg = `
⚠️ *Minato-MD is being deleted from this chat...*

🔧 Deleting core files...
🧠 Erasing memory...
📴 Shutting down commands...

💥 *BOT HAS BEEN REMOVED FROM GROUP*

Goodbye forever... 😵
  `;

  await sock.sendMessage(chatId, { text: fakeLeaveMsg });
  await sleep(5000);

  const fakeJoinMsg = `
🔄 *SYSTEM OVERRIDE DETECTED*
🔁 *Auto-Rejoining...*

🔐 Security Patched
✅ *Minato-MD IS BACK ONLINE!*

👁️ Someone tried to delete me... *Minato don't die that easy.*
  `;

  await sock.sendMessage(chatId, { text: fakeJoinMsg });
};
