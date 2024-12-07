const TelegramBot=require("node-telegram-bot-api")
const dotenv=require("dotenv")
const axios=require("axios")
const path=require("path")
const { json } = require("stream/consumers")
const envpath=path.resolve(__dirname,"./.env")
dotenv.config({path:envpath})
const bot=new TelegramBot(process.env.TELEGRAM_BOT,{polling:true})

bot.onText(/\/joke/,async(option)=>{
    const res= await axios.get("https://official-joke-api.appspot.com/random_joke")
    const data=await res.data
    bot.sendMessage(option.chat.id,data.setup+","+data.punchline)
})

