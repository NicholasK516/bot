'use strict'

const { Command } = require('quartz')

class Warnings extends Command {
  constructor (client) {
    super(client, {
      name: 'warnings'
    })
  }

  userPermissions (msg) {
    return this.client.functions.moderator(msg)
  }

  async run (msg, args) {
    try {
      const member = args[0] && this.client.functions.getUserFromMention(args[0]) ? msg.guild.members.get(this.client.functions.getUserFromMention(args[0]).id) : undefined
      if (!member) {
        let warnings = await this.client.cases.get(msg.guild.id)
        if (warnings && warnings.length > 0) warnings = await warnings.filter(c => c.type === 'warn')
        if (!warnings || warnings <= 0) {
          msg.delete()
          return msg.embed(`${msg.author.mention}, I am surprised! 0 warnings in the server!`)
        }
        warnings.sort((a, b) => +b.caseID - +a.caseID)
        warnings.length = 19
        const embed = this.client.embed()
          .color(this.client.config.embed.color)
          .footer(this.client.config.embed.text, this.client.config.embed.icon)
        embed.title('**Warnings**')
        for (const c of warnings) {
          if (c) {
            const user = this.client.users.get(c.userID)
            const mod = this.client.users.get(c.moderatorID)
            if (user && mod) embed.field(`#${c.caseID} | **${this.client.functions.escapeRegex(user.username)}#${user.discriminator}**`, `**Reason:** \`${c.reason}\`\n**Moderator:** ${mod.mention} (\`${mod.username}#${mod.discriminator}\`)`)
          }
        }
        embed.field('Full List', '[You can checkout the full list here](https://mods.tailosive.net/cases)')
        return msg.channel.createMessage({ embed: embed })
      } else {
        let warnings = await this.client.cases.get(msg.guild.id, null, member.id)
        if (warnings && warnings.length > 0) warnings = await warnings.filter(c => c.type === 'warn')
        if (!warnings || warnings <= 0) {
          msg.delete()
          return msg.embed(`${msg.author.mention}, I am surprised! ${member.mention} has 0 warnings!`)
        }
        warnings.sort((a, b) => +b.caseID - +a.caseID)
        warnings.length = 19
        const embed = this.client.embed()
          .color(this.client.config.embed.color)
          .footer(this.client.config.embed.text, this.client.config.embed.icon)
        embed.title('**Warnings**')
        embed.description(`${member.user.mention}`)
        for (const c of warnings) {
          if (c) {
            const mod = this.client.users.get(c.moderatorID)
            if (mod) embed.field(`Case #${c.caseID}`, `**Reason:** \`${c.reason}\`\n**Moderator:** ${mod.mention} (\`${mod.username}#${mod.discriminator}\`)`)
          }
        }
        embed.field('Full List', '[You can checkout the full list here](https://mods.tailosive.net/cases)')
        return msg.channel.createMessage({ embed: embed })
      }
    } catch (error) {
      console.log(error)
      return msg.embed(`Beep Boop. A error has happened!\n\`\`\`${error.message}\`\`\``)
    }
  }
}

module.exports = Warnings
