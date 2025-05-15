# Contributing Guidelines

Thanks for your interest in contributing! Please follow these guidelines to help us keep the project clean and consistent.

## ✅ Commit Message Format

Use the following **conventional commit** types:

| **Type**   | **Purpose**             | **Example**                         |
| ---------- | ----------------------- | ----------------------------------- |
| `feat`     | Add a new feature       | `feat: add dark mode support`       |
| `ui`       | UI-only changes         | `ui: tweak header layout`           |
| `improve`  | General enhancements    | `improve: refine search logic`      |
| `refactor` | Internal code cleanup   | `refactor: simplify form handler`   |
| `fix`      | Bug fixes               | `fix: correct mobile nav behavior`  |
| `docs`     | Documentation changes   | `docs: update contributing section` |
| `config`   | Build or config updates | `config: adjust Vite config`        |
| `api`      | API-related changes     | `api: add new blog endpoint`        |

> 💡 Follow the format: `type: short description`. Write clear, meaningful commit messages.

## 🌿 Branch Naming

Use clear, descriptive names:

* `feat/new-section`
* `fix/footer-links`
* `refactor/sidebar-logic`

## 🔁 Pull Request Guidelines

* PRs must target the **`development`** branch.
* Use this format:

```md
### Title
Short, descriptive title.

### Description
Explain _what_ and _why_ you changed.

### Changes
- Change 1
- Change 2
```

* Label your PR (e.g., `feature`, `bug`, `docs`).
* Always request review from **@Gazi2050**.

## 💡 Code Standards

* Include **JSDoc** comments for exported functions.
* Keep code **clean**, **modular**, and **readable**.
* Follow existing **file structure** and **naming conventions**.
* Before committing, run these commands to verify everything works:

```bash
npm run dev      # start dev server with live reload
npm run build    # build production version
npm run preview  # preview the production build locally
```

Thank you for contributing to the PackSmith site! 💙
