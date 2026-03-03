# HOLE Design System

Repository for the HOLE Foundation and theholetruth project frontend design systems.

This repository integrates with **Figma** for design templates and **Token Studio** (formerly Figma Tokens) for managing design tokens, enabling seamless synchronization between design and development.

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Token Studio Setup](#token-studio-setup)
- [Using the Design Tokens](#using-the-design-tokens)
- [Publishing to npm](#publishing-to-npm)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This design system provides:

- **Design Tokens**: Centralized design decisions (colors, spacing, typography, etc.)
- **Token Studio Integration**: GitHub Sync for Figma Token Studio plugin
- **Multi-format Output**: CSS, SCSS, JavaScript, and JSON formats
- **Theme Support**: Built-in light and dark theme tokens
- **Automated Publishing**: CI/CD pipeline for npm package publishing

## 📁 Repository Structure

```
Design-System/
├── tokens/                    # Token Studio design tokens (synced from Figma)
│   ├── $themes.json          # Theme configurations
│   ├── core.json             # Core design tokens (colors, spacing, etc.)
│   └── semantic/             # Semantic/theme-specific tokens
│       ├── light.json        # Light theme tokens
│       └── dark.json         # Dark theme tokens
├── build-tokens.js           # Style Dictionary build script
├── design-tokens/            # npm package structure
│   ├── package.json          # Package configuration
│   └── README.md             # Package documentation
├── build/                    # Generated token files (auto-generated)
│   ├── css/                  # CSS variables
│   ├── scss/                 # SCSS variables and maps
│   ├── js/                   # JavaScript/ES6 modules
│   └── json/                 # JSON format
├── .github/
│   └── workflows/
│       └── build-and-publish.yml  # CI/CD workflow
└── package.json              # Root package configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Figma account (for Token Studio integration)
- Token Studio plugin installed in Figma

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Theholetruth-org/Design-System.git
   cd Design-System
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build design tokens**:
   ```bash
   npm run build
   ```

   This will generate tokens in multiple formats in the `build/` directory.

## 🎨 Token Studio Setup

### Configuring Token Studio in Figma

1. **Install Token Studio Plugin**:
   - Open Figma
   - Go to Plugins → Browse all plugins
   - Search for "Tokens Studio for Figma"
   - Install the plugin

2. **Configure GitHub Sync**:
   - Open Token Studio plugin in Figma
   - Go to Settings → Sync → GitHub
   - Configure with these settings:
     - **Repository**: `Theholetruth-org/Design-System`
     - **Branch**: `main` (or your working branch)
     - **File Path**: `tokens/`
     - **Personal Access Token**: Your GitHub PAT with `repo` scope

3. **Sync Structure**:
   - The plugin will sync token files to the `tokens/` directory
   - `$themes.json` defines your theme configurations
   - Token files are organized by category (core, semantic)

### Token Organization

- **Core Tokens** (`core.json`): Base design decisions
  - Colors (primary, secondary, neutral, status colors)
  - Spacing scale
  - Border radius values
  - Typography (font families, sizes, weights, line heights)

- **Semantic Tokens** (`semantic/light.json`, `semantic/dark.json`):
  - Theme-specific token aliases
  - Surface colors (background, foreground, cards)
  - Text colors (primary, secondary, disabled, links)
  - Component tokens (buttons, status indicators)

### Adding New Tokens

1. **In Figma with Token Studio**:
   - Open Token Studio plugin
   - Add or modify tokens in the appropriate set
   - Push changes to GitHub using the plugin's sync feature

2. **Manually in the Repository**:
   - Edit the appropriate JSON file in `tokens/`
   - Follow the Token Studio JSON format
   - Commit and push changes
   - Tokens will be built automatically via GitHub Actions

## 📦 Using the Design Tokens

### Installing the Package

The design tokens are published as an npm package to GitHub Packages.

#### Setup GitHub Packages Authentication

Create or update `.npmrc` in your project:

```
@theholetruth-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

#### Install the Package

```bash
npm install @theholetruth-org/design-tokens
```

### Usage Examples

#### CSS
```css
@import '@theholetruth-org/design-tokens/variables.css';

.button {
  background-color: var(--hole-button-primary-background);
  color: var(--hole-button-primary-text);
  padding: var(--hole-spacing-md);
  border-radius: var(--hole-border-radius-md);
}
```

#### SCSS
```scss
@import '@theholetruth-org/design-tokens/variables.scss';

.card {
  background: $hole-surface-card;
  border: 1px solid $hole-surface-border;
  padding: $hole-spacing-lg;
}
```

#### JavaScript/TypeScript
```javascript
import tokens from '@theholetruth-org/design-tokens/tokens.js';

const theme = {
  primaryColor: tokens.colors.primary['500'],
  spacing: tokens.spacing.md,
};
```

## 🔄 Publishing to npm

The repository includes automated publishing via GitHub Actions:

### Automatic Publishing

- Tokens are automatically built and published when changes are pushed to `main`
- Version bumping:
  - Include `[major]` in commit message for major version bump
  - Include `[minor]` in commit message for minor version bump
  - Default: patch version bump

### Manual Publishing

```bash
# Build tokens
npm run build

# Navigate to package directory
cd design-tokens

# Copy built files
cp ../build/css/variables.css .
cp ../build/scss/*.scss .
cp ../build/js/tokens.js .
cp ../build/json/tokens.json .

# Publish
npm publish
```

## 🤝 Contributing

### Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**:
   - Update tokens in Figma using Token Studio and sync, OR
   - Manually edit token JSON files

3. **Build and test**:
   ```bash
   npm run build
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new color tokens [minor]"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**

### Commit Message Convention

- `[major]` - Breaking changes (e.g., removing or renaming tokens)
- `[minor]` - New features (e.g., adding new tokens)
- No tag - Patch updates (e.g., fixing token values)
- `[skip ci]` - Skip CI build

## 📚 Additional Resources

- [Token Studio Documentation](https://docs.tokens.studio/)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Figma Plugin Documentation](https://www.figma.com/plugin-docs/)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For issues and questions:
- Open an issue in this repository
- Contact the design system team

---

Built with ❤️ by The Hole Foundation
