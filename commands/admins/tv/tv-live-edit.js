module.exports = {
    name: 'tv-live-edit',
    isDeletable: true,
    isAdmin: true,
    desc: `Définis le message à envoyer lors d'un live.`,
    isEnable: true,
    execute: async (bot, message, args) => {
        const msg = args.join(' ');
        const guild = await bot.DATABASE.get('tv', 'guildId', message.guild.id);

        if (!guild) await bot.DATABASE.insert('tv', [message.guild.id, msg], ['guildId', 'twitchMessage']);
        else await bot.DATABASE.update('tv', 'twitchMessage', msg, 'guildId', guild.guildId);
        
        message.channel.send('Message de live bien mise à jour.');
    }
}