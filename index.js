const Discord = require("discord.js")
const client = new Discord.Client()
const token = process.env['TOKEN']

client.on("ready", () => {
	console.log('Logging in as $ {client.user.tag}')
})

client.login(token)
