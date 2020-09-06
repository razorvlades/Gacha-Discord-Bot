const gameData = [
	{
		game: "AFK Arena",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Another Eden",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "15:00"
	},
	{
		game: "Arknights",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00"
	},
	{
		game: "Ash Arms",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Astral Chronicles",
		server: "Global",
		timezone: "Asia/Singapore",
		dailyReset: "05:00"
	},
	{
		game: "Azur Lane",
		icon: 'AzurLane.jpg',
		server: "English",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		website: "https://azurlane.yo-star.com/",
		storeLinks: [
			'https://play.google.com/store/apps/details?id=com.YoStarEN.AzurLane&hl=en_US',
			'https://apps.apple.com/us/app/azur-lane/id1411126549'
		]
	},
	{
		game: "Brave Nine",
		server: "Global & Europe",
		timezone: "Etc/UTC",
		dailyReset: "20:00"
	},
	{
		game: "CIRCLET PRINCESS",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Dengeki Bunko: Crossing Void",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "12:00"
	},
	{
		game: "Destiny Child",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "DISSIDIA FINAL FANTASY OPERA OMNIA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "Dragalia Lost",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00"
	},
	{
		game: "Dream Eater",
		server: "Taiwan",
		timezone: "Asia/Taipei",
		dailyReset: "00:00"
	},
	{
		game: "Elune",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Epic Seven",
		server: "Europe",
		timezone: "Europe/Paris",
		dailyReset: "05:00"
	},
	{
		game: "Epic Seven",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "10:00"
	},
	{
		game: "Epic Seven",
		server: "Korea",
		timezone: "Asia/Seoul",
		dailyReset: "03:00"
	},
	{
		game: "Fate/Grand Order",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Fate/Grand Order",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "21:00"
	},
	{
		game: "Final Gear",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "00:00"
	},
	{
		game: "Fire Emblem Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00"
	},
	{
		game: "Girls' Frontline",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00"
	},
	{
		game: "Granblue Fantasy",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "GUNDAM BATTLE: GUNPLA WARFARE",
		server: "JP & NA",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Hero Cantare",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Americas",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "Idle Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "King's Raid",
		server: "America",
		timezone: "America/New_York",
		dailyReset: "00:00"
	},
	{
		game: "Langrisser",
		server: "Global",
		timezone: "America/Chicago",
		dailyReset: "00:00"
	},
	{
		game: "LAST CLOUDIA",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "05:00"
	},
	{
		game: "Looney Tunes World of Mayhem",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00"
	},
	{
		game: "Magia Record",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "01:00"
	},
	{
		game: "Millennium War Aigis",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Oshiro Project:RE Castle Defense",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Pokemon Masters",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Revue Starlight Re LIVE",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "05:00"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "SEA",
		timezone: "Asia/Jakarta",
		dailyReset: "05:00"
	},
	{
		game: "Sdorica",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "21:00"
	},
	{
		game: "SHIN MEGAMI TENSEI Liberation Dx2",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00"
	},
	{
		game: "TALES OF CRESTORIA",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Tokyo Afterschool Summoners",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Tokyo NECRO: SUICIDE MISSION",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Toram Online",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Valkyrie Anatomia: The Origin",
		server: "Global",
		timezone: "Brazil/West",
		dailyReset: "11:00"
	},
	{
		game: "World Flipper",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	}
];

module.exports = gameData;