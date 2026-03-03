# Contributing to HOLE Design System

Thank you for your interest in contributing to the HOLE Design System! This guide will help you understand our workflow and best practices.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Token Guidelines](#token-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Figma account (for Token Studio)
- Token Studio plugin installed in Figma

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Design-System.git
   cd Design-System
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/Theholetruth-org/Design-System.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development Workflow

### Working with Token Studio

**Recommended approach for designers:**

1. Open Figma and the Token Studio plugin
2. Configure GitHub sync:
   - Repository: `YOUR_USERNAME/Design-System`
   - Branch: Create a new branch for your changes
   - Path: `tokens/`
3. Make changes in Token Studio
4. Push changes to GitHub via the plugin
5. Create a Pull Request

### Working Directly with Files

**Recommended for developers:**

1. Create a feature branch:
   ```bash
   git checkout -b feature/add-new-tokens
   ```

2. Edit token files in `tokens/` directory:
   - Follow the existing JSON structure
   - Use Token Studio format specifications

3. Build tokens locally to test:
   ```bash
   npm run build
   ```

4. Check the output in `build/` directory

5. Commit your changes:
   ```bash
   git add .
   git commit -m "Add new spacing tokens [minor]"
   ```

6. Push to your fork:
   ```bash
   git push origin feature/add-new-tokens
   ```

### Testing Your Changes

Before submitting a PR:

1. **Build the tokens**:
   ```bash
   npm run build
   ```

2. **Verify the output**:
   - Check `build/css/variables.css`
   - Check `build/scss/variables.scss`
   - Ensure no build errors

3. **Test in a real project** (if possible):
   - Link the package locally
   - Import and use the tokens
   - Verify they work as expected

## 🎨 Token Guidelines

### Naming Conventions

Follow these naming patterns:

- **Core tokens**: `{category}.{name}.{variant}`
  - Example: `colors.primary.500`
  - Example: `spacing.md`

- **Semantic tokens**: `{component}.{property}.{state}`
  - Example: `button.primary.background`
  - Example: `text.primary`

### Token Structure

```json
{
  "tokenName": {
    "value": "#FF0000",
    "type": "color",
    "description": "Optional description"
  }
}
```

### Token Types

Supported types:
- `color` - Color values
- `spacing` - Spacing/sizing values
- `borderRadius` - Border radius values
- `fontFamilies` - Font family stacks
- `fontSizes` - Font size values
- `fontWeights` - Font weight values
- `lineHeights` - Line height values

### Token References

Use references to maintain consistency:

```json
{
  "semantic": {
    "background": {
      "value": "{colors.neutral.white}",
      "type": "color"
    }
  }
}
```

### Best Practices

1. **Use semantic tokens**: Create semantic aliases for core tokens
2. **Keep it DRY**: Use token references instead of duplicating values
3. **Document your tokens**: Add descriptions for complex or important tokens
4. **Group related tokens**: Organize tokens logically in separate files
5. **Consider themes**: Ensure tokens work across light and dark themes
6. **Test thoroughly**: Build and test tokens before submitting

## 📝 Commit Message Guidelines

### Format

```
<type>: <subject> [version-bump]

[optional body]
```

### Types

- `feat` - New feature or tokens
- `fix` - Bug fix or token value correction
- `docs` - Documentation changes
- `refactor` - Restructuring tokens without changing output
- `style` - Code style changes (formatting, etc.)
- `chore` - Maintenance tasks

### Version Bump Tags

Add these tags to control automatic versioning:

- `[major]` - Breaking changes (removing/renaming tokens)
- `[minor]` - New features (adding tokens)
- No tag - Patch version (fixing values, documentation)
- `[skip ci]` - Skip CI/CD pipeline

### Examples

```bash
# Adding new tokens (minor)
git commit -m "feat: add elevation shadow tokens [minor]"

# Fixing token values (patch)
git commit -m "fix: correct primary color value"

# Breaking change (major)
git commit -m "refactor: rename spacing tokens for consistency [major]"

# Skip CI
git commit -m "docs: update README [skip ci]"
```

## 🔄 Pull Request Process

### Before Submitting

- [ ] Tokens build successfully (`npm run build`)
- [ ] No build errors or warnings
- [ ] Changes are tested (if possible)
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow guidelines
- [ ] Branch is up to date with main

### PR Template

Use this template for your PR description:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New tokens (minor)
- [ ] Token value updates (patch)
- [ ] Breaking changes (major)
- [ ] Documentation
- [ ] Other (describe)

## Changes Made
- Added X tokens
- Updated Y values
- Removed Z (if applicable)

## Testing
How were these changes tested?

## Screenshots (if applicable)
Add screenshots showing the tokens in use

## Checklist
- [ ] Builds successfully
- [ ] Follows naming conventions
- [ ] Documentation updated
- [ ] Tested in real project (optional)
```

### Review Process

1. Submit your PR
2. Automated checks will run:
   - Token build validation
   - Formatting checks
3. A maintainer will review your PR
4. Address any feedback
5. Once approved, your PR will be merged
6. Tokens will be automatically published to npm

## 🐛 Reporting Issues

### Bug Reports

Include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Build output or error messages
- Your environment (Node version, OS, etc.)

### Feature Requests

Include:
- Clear description of the feature
- Use cases and benefits
- Examples of desired tokens
- Any related design mockups

## 🤔 Questions?

- Check existing issues and discussions
- Ask in the project's discussion board
- Contact the design system team

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the HOLE Design System! 🎉
