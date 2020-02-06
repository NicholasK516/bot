const { Event } = require('quartz')

class GuildBanAddListener extends Event {
  constructor (client) {
    super(client, {
      name: 'guildBanAdd'
    })
  }

  async run (guild, user) {
    if (guild.id !== this.client.config.main_guild) return
    let reason = 'No reason given'
    let moderator = 'Unknown'
    const audit = await this.client.functions.fetchLastAudit(guild, 22)
    if (!audit || audit.actionType !== 22) return
    const target = audit.target
    const member = audit.member
    if (audit.reason) reason = audit.reason
    if (member && member.id) moderator = `<@${member.id}>`
    if (member && member.id === this.client.user.id) return
    if (target.id !== user.id) return
    const embed = this.client.embed()
      .title('**Member Banned**')
      .field('Member', `${user.mention} \`${user.username}#${user.discriminator}\``, true)
      .thumbnail(user.avatarURL || user.defaultAvatarURL)
      .timestamp(new Date())
      .color(0xFF0000)
      .footer(`ID: ${user.id} | ${this.client.config.embed.text}`, this.client.config.embed.icon)
    if (moderator) {
      embed.field('Moderator', moderator, true)
    }
    if (reason) {
      embed.field('Reason', reason)
    }
    return this.client.createMessage(this.client.config.channels.log_channel, { embed: embed })
  }
}

module.exports = GuildBanAddListener
