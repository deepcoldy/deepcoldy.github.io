# botmux

<video src="../img/video-v0-overview-en.mp4" controls preload="metadata" style="width:100%;border-radius:8px"></video>

<p class="lead">Add AI coding tools to a Lark group, just like bringing in a teammate.</p>

Ask them to write code, investigate issues, review changes, or report progress on a schedule. Follow, reply, or interrupt from your phone, then pick up the same task when you're back at your computer.

## Get started in 3 steps

### 1. Install

```bash
curl -fsSL https://raw.githubusercontent.com/deepcoldy/botmux/master/install.sh | sh
```

Linux and macOS (x64 / arm64) are supported, with no Node required to run botmux; on Windows, use WSL2.

### 2. Scan to configure your first bot

```bash
botmux setup
```

Follow the wizard to scan with Lark, choose an installed and signed-in CLI, and pick a default working directory. App creation, permissions, and publishing are handled for you.

### 3. Start it and add it to a group

```bash
botmux start
```

Add the bot to a Lark group and @ it with “How do I build this project?” or “Help me fix this error.” You can also DM the bot instead of creating a group.

➡️ Installing for the first time? Follow the [Quickstart](/botmux/en/quickstart.md) and check [Prerequisites](/botmux/en/prerequisites.md) for the CLI, tmux, and other requirements.

> Mac users can also install the signed and notarized [Botmux Desktop app](/botmux/en/desktop.md). In the current version, first-time use still requires one command-line initialization; an existing configuration opens directly.

## Everyday uses

| I want to… | Try this / learn more |
|---|---|
| Write code and fix issues | “@bot Fix this error and add a test for it.” · [Live cards](/botmux/en/cards.md) |
| Investigate incidents and answer on-call questions | “@bot What is the most likely cause in these logs?” · [On-call mode](/botmux/en/oncall.md) |
| Have several AIs review a change | Let different bots inspect it independently · [Multi-bot collaboration](/botmux/en/multi-bot.md) |
| Schedule updates | “Every weekday morning, summarize yesterday's progress and today's risks.” · [Scheduled tasks](/botmux/en/schedule.md) |
| Keep up from a phone | Reply or interrupt anytime, and take over when needed · [Web Terminal](/botmux/en/web-terminal.md) |
| Continue work from a computer | Adopt a running session or move it to another group · [Adopt](/botmux/en/adopt.md) · [Relay](/botmux/en/relay.md) |

## Explore more when you need it

* **Parallel work and orchestration**: [Multi-topic collaboration](/botmux/en/multi-topic.md) · [Project progress card](/botmux/en/project-card.md) · [Decision board and steward](/botmux/en/decision-board.md)
* **Teams and automation**: [Roles and teams](/botmux/en/roles.md) · [Webhook](/botmux/en/webhook.md) · [Headless sessions](/botmux/en/headless-session.md)
* **Management and customization**: [Dashboard](/botmux/en/dashboard.md) · [Voice summaries](/botmux/en/voice.md) · [File sandbox](/botmux/en/sandbox.md)
* **Multiple machines and teams**: [Central Platform (open source)](/botmux/en/platform.md); a single machine doesn't need it

[See the 30+ supported CLIs and agents](/botmux/en/adapters.md), or browse the feature pages in the sidebar for full guides.

## Advanced information

* **Configuration and commands**: [CLI commands](/botmux/en/cli-commands.md) · [Slash commands](/botmux/en/slash-commands.md) · [bots.json](/botmux/en/bots-json.md) · [Global settings](/botmux/en/global-settings.md) · [Best practices](/botmux/en/best-practices.md)
* **How it works**: [Architecture](/botmux/en/architecture.md) · [Session and topic model](/botmux/en/session-model.md)
* **Need help?**: [FAQ / Troubleshooting](/botmux/en/faq.md) · [Common pitfalls](/botmux/en/pitfalls.md)

> Project: <https://github.com/deepcoldy/botmux>
