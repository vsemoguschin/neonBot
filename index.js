const TelegramAPI = require('node-telegram-bot-api')

const token = '5575099005:AAFREUhpqvo12MIMn-8OumJylxogNkEV1us';

const bot = new TelegramAPI(token, { polling: true })

const start = () => {
    bot.setMyCommands([
        { command: '/info', description: 'info' },
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg.message_id)
        // await bot.sendMessage(chatId, msg.text)
        if (text === "/info") {
            return bot.sendMessage(chatId, 'Ты' + msg.from.username)
        }
        return bot.sendMessage(chatId, "nope")
    })
}

start()