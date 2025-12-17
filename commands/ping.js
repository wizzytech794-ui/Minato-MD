const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= (24 * 60 * 60);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;
    return time.trim();
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: '🏓 Pinging...' }, { quoted: message });
        const end = Date.now();

        const ping = Math.round((end - start) / 2);
        const uptime = formatTime(process.uptime());

        const replyText = 
`╔═══❖•ೋ° °ೋ•❖═══╗
 ✨ *Minato-MD* ✨
╚═══❖•ೋ° °ೋ•❖═══╝

⚡ *Ping:* ${ping}ms
⏳ *Uptime:* ${uptime}
🌐 *Mode:* ${settings.mode || 'Public'}

🇯🇵 *Mata Mata!*`;

        await sock.sendMessage(chatId, { text: replyText, quoted: message });
    } catch (err) {
        console.error('Ping error:', err);
        await sock.sendMessage(chatId, { text: '💀 Minato-MD crashed while pinging!' });
    }
}

module.exports = pingCommand;
