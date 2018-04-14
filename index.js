const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = ''

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.on('message', msg => {

  const chatId = msg.chat.id

  bot.sendMessage(chatId, 'Inline keyboard', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Google',
            url: 'https://google.com'
          }
        ],
        [
          {
            text: 'Reply',
            callback_data: 'reply'
          },
          {
            text: 'Forward',
            callback_data: 'forward'
          }
        ]
      ]
    }
  })

})

bot.on('callback_query', query => {
  // bot.sendMessage(query.message.chat.id, debug(query))

  bot.answerCallbackQuery(query.id, `${query.data}`)
})
