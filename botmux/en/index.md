# botmux

<video src="../img/video-v0-overview-en.mp4" controls preload="metadata" style="width:100%;border-radius:8px"></video>

<p class="lead">Remote-control your AI coding CLI from Lark. One message starts a session, and every session gets its own CLI process.</p>

botmux is a bridge. It runs a background service (the **daemon**) on your dev machine that listens to Lark messages:

* Each new topic gets its own AI coding CLI (30+ supported, including Claude Code, Codex, Cursor, OpenCode, and Antigravity)
* Every turn of CLI output is streamed live into a Lark **streaming card**
* When you want to take over, a card button opens the **Web Terminal**, so you can drive the same CLI from a browser or phone

Whether you're on your phone, at your desk, or in a terminal, you're looking at the same session.

## 5-minute start

```bash
curl -fsSL https://raw.githubusercontent.com/deepcoldy/botmux/master/install.sh | sh
botmux setup     # scan a QR code to create the Lark app → pick a CLI → pick a working directory (permissions and release are configured for you)
botmux start     # start the daemon; run botmux autostart enable to start on boot
```

Then DM the bot, or open the management page with `botmux dashboard` and create a group to start chatting.

* What you install is a **self-contained single-file binary** that doesn't need Node on the machine. It supports Linux / macOS (x64 / arm64); on Windows, use WSL2
* Prefer npm? `npm i -g botmux` works too and ships the same binary
* On a Mac you can also install the [macOS Desktop App](/botmux/en/desktop.md) to start and stop the service, open the Dashboard, and read logs with a click
* To upgrade later: `botmux update`, or rerun the curl command above (releases older than v3.18.0: curl only), then `botmux restart`

For the full walkthrough (Lark international, manual permission setup, troubleshooting), see [Quick start](/botmux/en/quickstart.md).

## What problems it solves

| Your pain | What botmux does |
|---|---|
| The CLI runs on your dev machine, so you can't see or steer it when you're away | Each turn is pushed to a Lark card; check, follow up, or interrupt from your phone, and open the Web Terminal when you need hands-on control |
| The CLI has no idea what's happening in Lark | Add the bot to a group and @ it to start working in your local codebase; `/relay` moves a running session (same CLI process, same AI memory) to another group so you can keep going there |
| One agent isn't enough | Put several bots backed by different CLIs in one group and @ whoever should do the work, e.g. have Claude Code and Codex review the same change |

## Common features

| I want to... | See |
|---|---|
| Understand the live-updating card and its buttons | [Streaming cards](/botmux/en/cards.md) |
| Drive the CLI from a browser or phone | [Web Terminal](/botmux/en/web-terminal.md) |
| Have several bots in one group split the work | [Multi-bot collaboration](/botmux/en/multi-bot.md) |
| Split a big task into parallel topics | [Multi-topic orchestration](/botmux/en/multi-topic.md) |
| Pin a card in the group that tracks a project's goal, to-dos, and sub-tasks | [Project Progress Card](/botmux/en/project-card.md) |
| Hand dev tasks to a steward and collect everything you need to decide in one place | [Decision Board and Steward](/botmux/en/decision-board.md) |
| Bring a CLI already running in a local terminal into Lark | [Session adopt (/adopt)](/botmux/en/adopt.md) |
| Move a session to another group | [Session relay (/relay)](/botmux/en/relay.md) |
| Run tasks on a schedule (alert analysis, group digests, etc.) | [Scheduled tasks](/botmux/en/schedule.md) |
| Trigger tasks from an external system | [Webhook](/botmux/en/webhook.md) · [API task trigger](/botmux/en/api-task-trigger.md) |
| Run sessions from scripts or CI without a Lark group | [Headless Automation Sessions](/botmux/en/headless-session.md) |
| Ask the AI directly in Lark doc comments | [Doc comment watching](/botmux/en/doc-comment.md) |
| Let anyone in an on-call group @ the bot for answers | [On-Call Mode](/botmux/en/oncall.md) |
| Switch CLIs, or pick a CLI for one session | [CLI adapters](/botmux/en/adapters.md) |
| Manage bots, sessions, and config in a web UI | [Dashboard](/botmux/en/dashboard.md) · [Global Settings](/botmux/en/global-settings.md) |
| Watch several sessions' progress and terminals at once | [Agent Workbench](/botmux/en/workbench.md) |
| Manage several machines in one website, open Dashboards and terminals from anywhere, and work with a team | [Central Platform (open source)](/botmux/en/platform.md) |

More: [Roles & teams](/botmux/en/roles.md) · [File sandbox](/botmux/en/sandbox.md) · [Voice summary](/botmux/en/voice.md) · [Local whiteboard](/botmux/en/whiteboard.md) · [Persistent tmux sessions](/botmux/en/tmux.md) · [Feedback storage](/botmux/en/feedback-storage.md) · [Model Proxy (experimental)](/botmux/en/model-proxy.md) · [Slash commands](/botmux/en/slash-commands.md) · [CLI commands](/botmux/en/cli-commands.md) · [Architecture overview](/botmux/en/architecture.md) · [Best practices](/botmux/en/best-practices.md)

## Design philosophy: bridge the CLI, don't rebuild the agent

botmux **does not reimplement** agent capabilities. Memory, context management, tool calls, permissions, plan mode, `/` commands, and MCP are left to the CLI itself. When a CLI upgrades, most new capabilities just work in botmux (only when a CLI changes its flags, output format, or resume behavior does the matching adapter need an update).

Just write in plain language. The daemon wraps your message and the system instructions separately in a structured format (XML tags) before handing them to the CLI, so you never have to write any special format yourself.

Compared with approaches "rebuilt on top of an Agent SDK", the difference is mainly in how things are integrated:

| Aspect | botmux | Agent SDK-based approach |
|---|---|---|
| What gets bridged | The full CLI process, with its own hooks / memory / plan mode / MCP / `/` commands | Whatever the SDK exposes |
| CLI upgrades | Most capabilities benefit directly | Depends on the SDK version and your integration |
| Memory / context | Uses the CLI's built-in memory | Depends on the SDK or your own build |
| Multiple CLIs | 30+ adapters, switch with one config change | Depends on SDK coverage |
| Multiple bots | Several bots in one group, dispatched by @ | Depends on implementation |
| Direct terminal access | With the tmux backend, `tmux attach` into the real CLI process | Depends on implementation |

➡️ Next: [Quick start](/botmux/en/quickstart.md)

> Project: <https://github.com/deepcoldy/botmux>
