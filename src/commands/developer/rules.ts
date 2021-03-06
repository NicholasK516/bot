import { Command, CommandContext, Embed } from '@points.city/quartz'
import { Message } from 'eris'
import { TailosiveClient } from '../../@types/tailosive'

class Rules extends Command {
  client: TailosiveClient

  constructor(client: TailosiveClient) {
    super(client, {
      name: 'rules'
    })
  }

  async userPermissions(msg: Message) {
    return this.client.functions.moderator(msg)
  }

  async run(context: CommandContext) {
    try {
      if (context.message.channel.type !== 0) return
      await context.message.channel.purge(-1)
      const embed = new Embed().setImage('https://file.coffee/u/OccPTQwMy.jpeg')
      await context.message.channel.createMessage({ embed: embed })
      const embed2 = new Embed()
        .setTitle('**Tailosive Discord**')
        .setDescription(
          '**A place to discuss all things Tailosive, tech, Apple, and Tesla related!**\nTo make sure everyone has a fun time, please read the rules below.\n\nInvite your friends to [discord.gg/tailosive](https://discord.gg/tailosive)'
        )
      await context.message.channel.createMessage({ embed: embed2 })
      const embed3 = new Embed()
        .setTitle('**Discord TOS and Guidelines**')
        .setDescription(
          'This server is compliant with the Discord Terms of Service and Guidelines. We will ban if the content is not a complaint. Be sure to familiarize yourself with them here:\n- [Terms of Service](https://discordapp.com/terms)\n- [Content Guidelines](https://discordapp.com/guidelines)\n\nThe Moderators of this server reserve the right to request a member to confirm their age if they are perceived to be potentially under 13. Noncompliance will result in the assumption of being under 13.\n\n**Self Promotion:** Self Promotion is not allowed. The material will be deleted.\n**Nicknames:** Type `!nick [new nickname]` in <#548956714217766912> to submit a change request. Your request will not be approved if it is immature, a link, spammy, or impersonates Tailosive staff, such as: `Tailosive [something]`.'
        )
      await context.message.channel.createMessage({ embed: embed3 })
      const embed4 = new Embed()
        .setTitle('**Rules**')
        .setDescription(
          "- This is an **English** speaking server. Don't try to communicate in other languages, because no one will understand.\\n\n" +
            '\n' +
            '- **NSFW content is not allowed on this server.** Keep all content SFW, including profile pictures and names.\\n\n' +
            '\n' +
            '- This server allows the occasional swear word. If it goes over the top, a moderator will give you a verbal notice, followed by an official warning.\\n\n' +
            '\n' +
            '- **Do not spam** else you will be muted/banned. Spam means but is not limited to: posting the same thing across multiple channels at once, spamming characters, sending the same/similar images 3+ times, copypastas, and the excessive use of the bold and underline message markings.\\n\n' +
            '\n' +
            '- Do not purposefully include characters that may crash or lag other devices. Includes massive animated emotes.\\n\n' +
            '\n' +
            "- **The Memes:** please keep shitposting to a minimum. Moderators will allow some wholesome memes. Make sure it doesn't get excessive.\\n\n" +
            '\n' +
            '- Do not **mislead members to fake Tailosive content or sites designed to impersonate,** including fan-made sites or apps. If you wish to make something for Tailosive, please contact <@!382114176329580548> for confirmation first. That does not apply for fan-art though.\\n\n' +
            '\n' +
            '- Capitalizing more than **8 letters** in a single message, or 3 words. Does not apply to grammatical use of caps (usernames and such).\\n\n' +
            '\n' +
            '- GIFs that have the potential to cause members with epilepsy to experience seizures must be spoiler tagged and with a text warning prefacing the GIF.\\n'
        )
      await context.message.channel.createMessage({ embed: embed4 })
      const embed5 = new Embed().setDescription(
        '- Do not impersonate anyone from Tailosive, use Tailosive in your name, or use a Tailosive logo or Drew’s face as your profile picture.\\n\n' +
          '\n' +
          "- Please **don't be toxic** or smartass.\\n\n" +
          '\n' +
          '- This server logs all deleted and edited messages for in the case of an infraction.\\n\n' +
          '\n' +
          '- Please don’t ask for stuff, including nitro and money. If someone offers to give it to you, that’s fine, but don’t ask for it.\\n\n' +
          '\n' +
          '- Do not disrupt an active conversation with another unrelated topic. Please be patient or post it into a different channel.\\n\n' +
          '\n' +
          "- Mini-modding, or telling people what to do, is prohibited. If there's something that's not okay, ask a moderator to look into it.\\n\n" +
          '\n' +
          "- **Doxing and Leaking:** There is to be no leaking or doxing of other people's personal information on this server. It is up to you how much of your personal information you give, but if it gets awkwardly too much for other people, the Moderators may remove the messages and give you a quick chat about online safety.\\n\n" +
          '\n' +
          '- **Politics:** Politics is allowed in moderation. Please make sure it doesn’t get too heated. Otherwise, a moderator will give one warning → kick/ban. Keep political topics to <#482029722323255296>.\\n\n' +
          '\n' +
          '**Punishment:** If you have broken any of the rules, the Moderators may Mute, Kick, or Ban you, depending on the severity. Ban circumnavigation will result in another ban.\\n\n' +
          '\n' +
          '**Strikes:** The strike system is as follows:\n' +
          '**5 strikes** = Ban.\n' +
          '**Warn** = 1 Strike.\n' +
          '**Mute** = 2 Strikes.'
      )
      await context.message.channel.createMessage({ embed: embed5 })
      const embed6 = new Embed()
        .setTitle('**Access**')
        .setDescription(
          'To get access to the rest of the server, you must run `!serveropen8206` in the <#702261737159655535> channel. Before you do, however, please make sure you have fully read over and understood the rules.'
        )
      await context.message.channel.createMessage({ embed: embed6 })
      const embed7 = new Embed().setDescription(
        "**PLEASE NOTE:** Moderators do reserve the right to punish for things not listed on this list under the moderator's discretion. Please use common sense and, if you are unsure about anything, please ask before you take action. If you know someone who was banned, you can send them the [Ban Appeal Form](https://forms.gle/cWFziNfAThTj1BnYA)"
      )
      await context.message.channel.createMessage({ embed: embed7 })
      const embed8 = new Embed()
        .setTitle('**Roles**')
        .setDescription(
          "- <@&585531897111642153>: These are the EPIC people who boost this server. Boosters have access to the ★ channels, along with a purple role and priority.\n\n- <@&579120451079372800>: These are people who support a Tailosive channel on YouTube, Twitch, or Patreon. Supporters have access to the ★ channels and color according to the supported channel. (Instructions below to get these rewards if you are already supporting a channel)\n\n- <@&530490385932222465>: This role is gifted to members for the period they are working with a Tailosive channel.\n\n- <@&485695273482452996>: They are here to help, so don’t hesitate to tag them if you need them. Don't argue with the Moderators. If you think there is an issue, please contact <@&485694465869217793>.\n\nPlease don't ask to be mod, it's annoying."
        )
      await context.message.channel.createMessage({ embed: embed8 })
      const embed9 = new Embed()
        .setTitle('**Exclusives**')
        .setDescription(
          'This server has some channels exclusive to Patreon donors, Twitch Subscribers, and Youtube Members. If you want to access, sponsor Tailosive on any one of these services!'
        )
        .addField(
          '**Patreon**',
          'Go to [Patreon -> Settings](https://www.patreon.com/settings/account) and select **Discord** under the connections section. This should prompt you to login with your discord username and password. You will automatically be given the Patreon Member role and have access to the exclusive ★ channels once you have done this!',
          false
        )
        .addField(
          '**YouTube and Twitch**',
          'Click on the gear icon next to your user icon in discord then choose connections from the sidebar. Select either Twitch or Youtube Gaming icon and log in with the corresponding account. The Youtube and Twitch Integrations refresh every 30 minutes however you can tag <@&485694465869217793> to manually refresh the Integration. This will give you access to the exclusive ★ channels!',
          false
        )
        .addField(
          '**Points**',
          'If you can’t support Drew through YouTube, Twitch, or Patreon, but still want access to those sweet ★ chats, you can buy roles using <@484395597508509697> that gives you access to the ★ channels. All that’s needed from you is to be active anywhere on the server, which will earn you points. You can also run `p!daily`, `p!weekly`, and `p!monthly` in <#548956714217766912> to give you a little boost with your points. Special thanks to our developer <@392347814413467655> for making Points and Tailosive bot!',
          false
        )
        .setImage(
          'https://media.discordapp.net/attachments/702563699398803536/702812605219209226/Exclusives_Image.png?width=1080&height=241'
        )
      await context.message.channel.createMessage({ embed: embed9 })
      const embed10 = new Embed()
        .setTitle('**Notifications**')
        .setDescription(
          'React :bell: to this message for notifications about Tailosive Videos and Streams. To stop, just unreact.'
        )
      return context.message.channel.createMessage({ embed: embed10 })
    } catch (error) {
      return context.message.channel.createMessage({
        embed: {
          description: `Unable to send rules! Please contact **\\_Adam\\_#2917!**\n**Error:** ${error}`
        }
      })
    }
  }
}

export default Rules
