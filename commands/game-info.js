const { getGameInfo } = require('../gameController');
const Discord = require('discord.js');

/*
    game: "Azur Lane",
    icon: './game-icons/AzurLane.jpg',
    server: "English",
    timezone: "America/Los_Angeles",
    dailyReset: "00:00",
    website: "https://azurlane.yo-star.com/",
    storeLinks: [
        'https://play.google.com/store/apps/details?id=com.YoStarEN.AzurLane&hl=en_US',
        'https://apps.apple.com/us/app/azur-lane/id1411126549'
    ]
*/

const path = require('path');
const iconDir = path.dirname(require.main.filename) + '/game-icons/';

const moment = require('moment-timezone');

const local_timezone = 'America/Los_Angeles'

function buildEmbed(game) {
    const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(game.game)
	.setURL(game.website)
	//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription(game.server)
    .attachFiles([iconDir + game.icon])
	.setThumbnail(`attachment://${game.icon}`)
	.addFields(
        { name: 'Server Reset Time', value: `${game.timeUTC} UTC`, inline: true },
        { name: 'Local Reset Time', value: `${game.timeLocal} ${local_timezone.replace('_', ' ')}`, inline: true },
		// { name: '\u200B', value: ' ' },
        { name: 'Time Until Reset', value: 'Some value here', inline: true },
        { name: 'Current Server Time', value: 'Some value here', inline: true },
	)
	// .addFields(
	// 	//{ name: 'Server Reset Time', value: `${game.dailyReset} UTC` },
	// 	// { name: '\u200B', value: '\u200B' },
	// 	{ name: 'Time Until Reset', value: 'Some value here', inline: true },
    //     { name: 'Current Server Time', value: 'Some value here', inline: true },
	// )
	//.setImage(`attachment://${game.icon}`)
	.setTimestamp()
    .setFooter('Created by @razorvlades', `attachment://${game.icon}`);
    
    return embed;
}

module.exports = {
	name: 'game-info',
	description: 'Display information for specified game',
	usage: '[game name]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Please provide the name of a game');

			return message.channel.send(data, { split: true });
        }
        
        const name = args.join(' ');

        
        let info = getGameInfo(name);

        //const timeUTC = moment.utc(info.dailyReset, "HH:mm");
        const time = moment.tz(info.dailyReset, "HH:mm", info.timezone);
        //const timeConverted = timeUTC.tz('America/Chicago')//.format("HH:mm");
        const timeUTC = time.utc();
        console.log('UTC: ', timeUTC.format("HH:mm"));
        info.timeUTC = timeUTC.format("HH:mm");
        const timeLocal = timeUTC.tz('America/Chicago');
        info.timeLocal = timeLocal.format("HH:mm");
        console.log('Local: ', timeLocal.format("HH:mm"));

		const embed = buildEmbed(info);

        message.channel.send(embed);
		//message.channel.send(data, { split: true });
	},
};