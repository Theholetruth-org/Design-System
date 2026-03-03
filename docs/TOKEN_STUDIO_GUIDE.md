# Token Studio Configuration Guide

This guide explains how to set up and configure Token Studio (formerly Figma Tokens) for the HOLE Design System.

## 📋 Overview

Token Studio is a Figma plugin that enables you to manage design tokens directly in Figma and sync them with GitHub. This ensures design and code stay in sync.

## 🔧 Initial Setup

### Step 1: Install Token Studio Plugin

1. Open Figma
2. Go to **Plugins** → **Browse all plugins**
3. Search for **"Tokens Studio for Figma"**
4. Click **Install**

### Step 2: Create a GitHub Personal Access Token

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a descriptive name (e.g., "Token Studio - Design System")
4. Select the following scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click **Generate token**
6. **Copy and save the token** - you won't be able to see it again!

### Step 3: Configure GitHub Sync in Token Studio

1. Open your Figma file
2. Open Token Studio plugin (**Plugins** → **Tokens Studio for Figma**)
3. Click the **Settings** icon (⚙️)
4. Go to **Sync** tab
5. Select **GitHub** as the sync provider
6. Fill in the configuration:

   ```
   Repository: Theholetruth-org/Design-System
   Branch: main
   File Path: tokens/
   Base Branch: main
   Personal Access Token: [paste your token]
   ```

7. Click **Save** and then **Push to GitHub** to verify the connection

## 📁 Repository Structure

Token Studio syncs files to the `tokens/` directory with this structure:

```
tokens/
├── $themes.json          # Theme configurations
├── core.json             # Core tokens (colors, spacing, typography)
└── semantic/             # Semantic token sets
    ├── light.json        # Light theme semantic tokens
    └── dark.json         # Dark theme semantic tokens
```

## 🎨 Token Organization

### Core Tokens (`core.json`)

Contains the foundational design decisions:

- **Colors**: Brand colors with variants (100-900)
- **Spacing**: Consistent spacing scale
- **Border Radius**: Border radius values
- **Typography**: Font families, sizes, weights, line heights

### Semantic Tokens (`semantic/light.json`, `semantic/dark.json`)

Contains theme-specific token aliases that reference core tokens.

## 🔗 Using Token References

Token references allow semantic tokens to reference core tokens:

```json
{
  "surface": {
    "background": {
      "value": "{colors.neutral.white}",
      "type": "color"
    }
  }
}
```

## 🔄 Syncing Workflow

### Pulling Changes from GitHub

1. Open Token Studio in Figma
2. Click **Settings** → **Sync**
3. Click **Pull from GitHub**

### Pushing Changes to GitHub

1. Make changes to tokens in Token Studio
2. Click **Settings** → **Sync**
3. Review changes in the diff view
4. Add a commit message
5. Click **Push to GitHub**

## 📚 Additional Resources

- [Token Studio Documentation](https://docs.tokens.studio/)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)

---

For more detailed information, see the full documentation in this repository.
