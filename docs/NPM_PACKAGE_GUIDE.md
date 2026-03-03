# NPM Package Setup Guide

This guide explains how the design tokens are packaged and published as an npm package, following Figma's recommended structure for design system distribution.

## 📦 Package Structure

The design tokens are distributed as an npm package: `@theholetruth-org/design-tokens`

### Directory Layout

```
design-tokens/              # Package root
├── package.json           # Package manifest
├── README.md             # Package documentation
├── LICENSE               # MIT license (copied from root)
├── variables.css         # CSS custom properties
├── variables.scss        # SCSS variables
├── variables-map.scss    # SCSS nested maps
└── tokens.json          # Raw JSON tokens
```

## 🔧 Package Configuration

### package.json

The `design-tokens/package.json` defines the package:

```json
{
  "name": "@theholetruth-org/design-tokens",
  "version": "1.0.0",
  "description": "Design tokens for HOLE Foundation",
  "main": "variables.css",
  "style": "variables.css",
  "files": [...],
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@theholetruth-org"
  }
}
```

Key fields:
- `name`: Scoped package name (@organization/package)
- `main`: Default export (CSS file)
- `style`: Points to main stylesheet
- `files`: Lists files included in the package
- `publishConfig`: GitHub Packages registry

## 🚀 Publishing Process

### Automatic Publishing (CI/CD)

The repository includes a GitHub Actions workflow that:

1. **Triggers on**:
   - Push to `main` branch
   - Changes to `tokens/**`, `build-tokens.js`, or `package.json`

2. **Build Process**:
   ```bash
   npm ci                    # Install dependencies
   npm run build            # Build tokens with Style Dictionary
   ```

3. **Package Preparation**:
   - Copies built files to `design-tokens/` directory
   - Copies LICENSE from root
   - Updates package version based on commit message

4. **Version Bumping**:
   - `[major]` in commit → major version bump (1.0.0 → 2.0.0)
   - `[minor]` in commit → minor version bump (1.0.0 → 1.1.0)
   - Default → patch version bump (1.0.0 → 1.0.1)

5. **Publish**:
   - Publishes to GitHub Packages
   - Pushes version update back to repository

### Manual Publishing

For local testing or manual releases:

```bash
# Build tokens
npm run build

# Navigate to package directory
cd design-tokens

# Copy built files
cp ../build/css/variables.css .
cp ../build/scss/variables.scss .
cp ../build/scss/variables-map.scss .
cp ../build/json/tokens.json .
cp ../LICENSE .

# Update version (choose one)
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.0 → 1.1.0
npm version major  # 1.0.0 → 2.0.0

# Publish to GitHub Packages
npm publish
```

## 📥 Installing the Package

### Setup Authentication

Users need to authenticate with GitHub Packages.

#### Option 1: .npmrc (Per Project)

Create `.npmrc` in the project root:

```
@theholetruth-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

#### Option 2: .yarnrc.yml (Yarn Users)

Create `.yarnrc.yml`:

```yaml
npmRegistryServer: "https://registry.yarnpkg.com"
npmScopes:
  theholetruth-org:
    npmAuthToken: "YOUR_GITHUB_PAT"
    npmAlwaysAuth: true
    npmRegistryServer: "https://npm.pkg.github.com"
```

### Install the Package

```bash
npm install @theholetruth-org/design-tokens

# or with yarn
yarn add @theholetruth-org/design-tokens
```

## 🎨 Using the Package

### CSS

```css
@import '@theholetruth-org/design-tokens/variables.css';

.component {
  color: var(--hole-text-primary);
  background: var(--hole-surface-background);
  padding: var(--hole-spacing-md);
}
```

### SCSS Variables

```scss
@import '@theholetruth-org/design-tokens/variables.scss';

.component {
  color: $hole-text-primary;
  background: $hole-surface-background;
}
```

### SCSS Maps

```scss
@import '@theholetruth-org/design-tokens/variables-map.scss';

.component {
  color: map-get($hole-tokens, 'text', 'primary');
}
```

### JSON

```javascript
import tokens from '@theholetruth-org/design-tokens/tokens.json';

console.log(tokens);
```

## 🔄 Version Management

### Semantic Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Breaking changes
  - Removing tokens
  - Renaming tokens
  - Changing token structure

- **MINOR** (0.X.0): New features
  - Adding new tokens
  - Adding new token categories
  - Non-breaking enhancements

- **PATCH** (0.0.X): Bug fixes
  - Fixing token values
  - Documentation updates
  - Build process improvements

### Commit Message Tags

Control versioning with commit message tags:

```bash
# Major version bump
git commit -m "refactor: rename all color tokens [major]"

# Minor version bump
git commit -m "feat: add elevation tokens [minor]"

# Patch version bump (default)
git commit -m "fix: correct primary color value"

# Skip CI/CD
git commit -m "docs: update README [skip ci]"
```

## 📊 Package Contents

### Output Formats

| Format | File | Description |
|--------|------|-------------|
| CSS | `variables.css` | CSS custom properties |
| SCSS | `variables.scss` | SCSS variables |
| SCSS | `variables-map.scss` | SCSS nested maps |
| JSON | `tokens.json` | Flat JSON object |

### File Sizes (Approximate)

- CSS: ~10-50 KB
- SCSS: ~10-50 KB
- JSON: ~5-20 KB

*Sizes vary based on the number of tokens*

## 🔒 Publishing to GitHub Packages

### Why GitHub Packages?

- **Private packages**: Keep tokens private to your organization
- **Free for public repos**: No cost for public repositories
- **Integrated with GitHub**: Uses same authentication
- **Version control**: Built-in version history

### Permissions

To publish, you need:
- Write access to the repository
- GitHub token with `write:packages` scope

The GitHub Actions workflow uses:
```yaml
permissions:
  contents: write
  packages: write
```

## 🚨 Troubleshooting

### Issue: Cannot Install Package

**Error**: `404 Not Found - GET https://npm.pkg.github.com/@theholetruth-org/design-tokens`

**Solutions**:
- Verify package has been published
- Check authentication token has `read:packages` scope
- Ensure `.npmrc` is configured correctly

### Issue: Publishing Fails

**Solutions**:
- Verify GitHub token has `write:packages` scope
- Check package version hasn't been published already
- Ensure `package.json` has correct `publishConfig`

### Issue: Version Not Updating

**Solutions**:
- Check commit message includes version tag (`[major]`, `[minor]`)
- Verify workflow completed successfully
- Check GitHub Actions logs for errors

## 📚 Best Practices

1. **Always test locally** before publishing
2. **Use semantic versioning** appropriately
3. **Document breaking changes** in release notes
4. **Keep package.json updated** with accurate metadata
5. **Test package installation** in a separate project

## 🔗 Resources

- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [npm Package Documentation](https://docs.npmjs.com/packages-and-modules)
- [Semantic Versioning](https://semver.org/)

---

For questions or issues, please open an issue in the repository.
