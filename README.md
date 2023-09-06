<h1 align="center">
  <a href="https://nice-maintainer.dev" alt="Nice Maintainer Homepage">🌸 Nice Maintainer</a>
</h1>

<div align="center">
  <strong>Tools to make maintaining packages a little more pleasant for everyone.</strong>
</div>
<div align="center">
  Use Chrome Extensions, VSCode Extensions (TODO), and more to make your life easier and your repositories welcoming.
</div>

## 😇 What is Nice Maintainer?

> **Nice Maintainer is still under development.** Use the Chrome Extension first and give feedback on what you'd like to see next!

Nice Maintainer is designed to be a set of tools (Chrome Extension, VSCode Extension, consistent tone, and language translation (TODO)) that you can use to manage your repository's tone and voice when working with other developers.

Basically, you plug in an OpenAI key, and it will let you rewrite your PRs, issues, and more to be more welcoming and friendly.

You can override its system prompts for your entire team if you'd like a team-wide constraints or a particular format for how you respond.

It's only been tested on English so far, but it should work for any language that OpenAI supports.

## ⛙ Why not GitHub Copilot?

1. It repeats itself a lot.
2. You can't commit the tone and voice to Git using the `.nice-maintainer` file.
3. There's no translation support.
4. You have no control over the model.
5. It doesn't integrate it naturally into your toolchain (yet, I bet they'll get there in a bit)!

## 🧹 Contributing

You're welcome to contribute to Nice Maintainer! Do this by adding Issues, triaging issues, or submitting PRs.

## 🌸 Features

- **Chrome Extension** - Rewrite your PRs, issues, and more to be more welcoming and friendly.
  - Require submission through Nice Maintainer
- **VSCode Extension** - (TODO)
- **Config File (.nice-maintainer, .nice-maintainer.json)** - (TODO)
  - Team-wide constraints (overrides) or a particular format for how you respond. (TODO)
  - GPT model selection, e.g. gpt-3.5 vs. gpt-4 (TODO)
  - Agnostic to LLM model selection (TODO)
  - Config File Autocomplete
- **CLI** - easily add `.nice-maintainer` presets (TODO)
- **Docs** - (TODO)
