# Slackboard

Toggle active/away and set your status on Slack is very tedious. I was looking for a quick and easy way to manage both settings. So I created a simple Dashboard to quickly post [short informational messages](https://api.slack.com/docs/messages) to channels, set my [status](https://api.slack.com/docs/presence-and-status#custom_status) and toggle my [user presence](https://api.slack.com/docs/presence-and-status#user_presence). It can be used in combination with [Fluid](http://fluidapp.com/) to create a web app for macOS.

## Requirements

- A [legacy token](https://api.slack.com/custom-integrations/legacy-tokens) from Slack.
- Web server (script cannot be used with file:// due to security constraints of modern browsers).
- [Tarp.Require](https://github.com/letorbi/tarp.require) JS module loader

## What's in the box?

- A simple dashboard made with [Bootstrap](https://getbootstrap.com/), [Fontawesome](https://fontawesome.com/) and some [JQuery](http://jquery.com/).
- A version of Tarp.Require from [March 5 2018](https://github.com/letorbi/tarp.require/tree/5ab9a600d01cbe05ffc44bd050d5e368a6c1aedf).

### Features

- Settings, status messages and chat message templates configurable via config.json file
- Set Slack [presence](https://api.slack.com/docs/presence-and-status#user_presence) to 'away' or 'auto'
- Set Slack [status](https://api.slack.com/docs/presence-and-status#custom_status) to:
  - Home Office
  - AFK
  - Food
  - Coding
  - Bug Hunting
  - Do Not Disturb
  - Focus
  - Meeting
  - Traveling
  - Vacation
  - Out sick
  - [Feierabend](https://yourdailygerman.com/german-word-of-the-day-feierabend/)
  - Reset
- Send messages to a predefined default channel
  - If the message is associated with an image in the config, the image is posted to the channel, alongside the message.
  - If the message is associated to several images in the config, one of images is randomly picked and posted to the channel, alongside the message.

## To Do

~~- Fix issue with "success" and "failure" banner that is removed from the DOM after closing it via click~~

## Screenshot

![Screenshot](https://github.com/jbfriedrich/slack-dashboard/blob/master/screenshot.png "Dashboard")
