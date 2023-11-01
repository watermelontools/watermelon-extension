# Watermelon for Visual Studio Code

[![Report an issue](https://img.shields.io/badge/-Report%20an%20issue-critical)](https://github.com/watermelontools/watermelon-extension/issues)

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/watermelontools/watermelon-extension?style=flat-square)
[![GitHub Repo stars](https://img.shields.io/github/stars/watermelontools/watermelon-extension?style=flat-square)](https://github.com/watermelontools/watermelon-extension/stargazers)
[![Contributors](https://img.shields.io/github/contributors/watermelontools/watermelon-extension?style=flat-square)](https://github.com/watermelontools/watermelon-extension/graphs/contributors)
[![Twitter Follow](https://img.shields.io/twitter/follow/WatermelonTools?style=flat-square)](https://twitter.com/intent/follow?screen_name=WatermelonTools)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/WatermelonTools.watermelon-tools?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=WatermelonTools.watermelon-tools&ssr=false)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/WatermelonTools.watermelon-tools?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=WatermelonTools.watermelon-tools&ssr=false)
![Open VSX Downloads](https://img.shields.io/open-vsx/dt/WatermelonTools/watermelon-tools?style=flat-square&label=Open%20VSX%20downloads)
![OSSF-Scorecard Score](https://img.shields.io/ossf-scorecard/github.com/watermelontools/watermelon-extension?style=flat-square)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/WatermelonTools.watermelon-tools?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=WatermelonTools.watermelon-tools&ssr=false#review-details)
[![Discord](https://img.shields.io/discord/933846506438541492?style=flat-square)](https://discord.com/invite/H4AE6b9442)

**Watermelon is an Open Source Copilot For Code Review**. Our GitHub application allows developers to pre-review GitHub Pull Requests by tracing their code context and performing static code analysis. Using LLMs to detect errors, compare intent to implementation, and give the PR a first health check.

We've built a search algorithm that indexes the most relevant [code context](https://www.watermelontools.com/post/what-is-passive-code-documentation-why-is-it-hard-to-scale-what-to-do-about-it) for a given block of code.

To obtain code context in your IDE, use this extension.

To obtain code context in your CI/CD, take a look at our [GitHub Application](https://github.com/watermelontools/watermelon)

## Integrations

We currently support the following integrations

| Watermelon Product | Git                                     | Project Management | Messaging | Documentation |
|:-------------------|:----------------------------------------| :----------------- | :-------- | :-----------  |
| IntelliJ           | GitHub, GitLab (Beta), Bitbucket (Beta)                          | Jira               | Slack     | Notion, Confluence              |
| VS Code            | GitHub, GitLab (Beta), Bitbucket (Beta) | Jira               | Slack     |               |
| GitHub App         | GitHub.                                 | Jira, Linear               | Slack     | Notion, Confluence        |

## Features

Watermelon's VS Code extension allows you to obtain business context for a file or block of code via:

- Hover to get context
- Get code context button (to obtain the complete context)

![watermelon-vscode-extension](https://i.ibb.co/3pGjBJq/IDE-1.png)

## Requirements

- macOS 10.11+, Windows 10+ or Linux
- Visual Studio Code v1.63.0+
- Visual Studio Code Insiders v1.63.0+
- VS Codium v1.63.0+ (BETA INTEGRATION)
- You must have Git locally installed (try `git --version` or [install it now](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))

## Installation

Download from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=WatermelonTools.watermelon-tools).

Alternatively, you can search for "Watermelon" in VS Code's built-in extension marketplace and install from there.  
![Download on VSCode](https://user-images.githubusercontent.com/11527621/162223094-ee24a53e-7a32-49eb-ac74-d1ab4f886d11.png)

Download from the [VS Codium Marketplace (Open VSX Registry)](https://open-vsx.org/extension/WatermelonTools/watermelon-tools)

## Commands

Watermelon comes with a few commands that you can run from [VS Code's Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette). The result is exactly the same as running a Watermelon query with the green button. Results sit in your sidebar.

| Command                | Description                                              |
| :--------------------- | :------------------------------------------------------- |
| `watermelon.start`     | Get the historical context of the selected block of code |
| `watermelon.show`      | Reveal the extension                                     |
| `watermelon.recommend` | Add the extension to the list of recommended             |

## Shortcuts

As an alternative, you can use the following shortcuts:

- `Ctrl+Shift+C` (`Cmd+Shift+C` on Mac) to view your context results

## Contributing

Check out [Contributing.md](CONTRIBUTING.md) and be aware of the [Code of Conduct](CODE_OF_CONDUCT.md)!

We're an early-stage project, therefore we still have the luxury to coordinate via short chats with our contributors. If you're interested in contributing, please join our [Discord](https://discord.com/invite/H4AE6b9442) community.
Alternatively, comment on our issues if you plan to solve one.

[![Report an issue](https://img.shields.io/badge/-Report%20an%20issue-critical)](https://github.com/watermelontools/watermelon-extension/issues)
## Analytics

We use [VS Code's telemetry library](https://github.com/microsoft/vscode-extension-telemetry). The library respects the user's decision about whether or not to send telemetry data.

We also have settings to disable it.

Watermelon [doesn't store your code](https://www.watermelontools.com/post/building-a-code-archeology-toolbox-without-storing-your-code)

---

#### About Watermelon

Watermelon is built by a globally distributed team of developers devoted to making software development easier. Join our [Discord](https://discord.com/invite/H4AE6b9442) community, follow us on [Twitter](https://twitter.com/WatermelonTools) and go to the [Watermelon blog](https://watermelon.tools/blog) to get the best programming tips.

### License

- [Apache License](license.md)
