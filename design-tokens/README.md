# @theholetruth-org/design-tokens

Design tokens package for the HOLE Foundation and theholetruth project.

## Installation

### For npm users:

```bash
npm install @theholetruth-org/design-tokens
```

### For yarn users:

```bash
yarn add @theholetruth-org/design-tokens
```

## Usage

### CSS

Import the CSS variables in your project:

```css
@import '@theholetruth-org/design-tokens/variables.css';

/* Use the tokens */
.my-component {
  color: var(--hole-text-primary);
  background-color: var(--hole-surface-background);
  padding: var(--hole-spacing-md);
}
```

### SCSS

Import the SCSS variables:

```scss
@import '@theholetruth-org/design-tokens/variables.scss';

.my-component {
  color: $hole-text-primary;
  background-color: $hole-surface-background;
  padding: $hole-spacing-md;
}
```

Or use the SCSS map:

```scss
@import '@theholetruth-org/design-tokens/variables-map.scss';

.my-component {
  color: map-get($hole-tokens, 'text', 'primary');
}
```

### JSON

Import the raw JSON tokens for build tools:

```javascript
import tokens from '@theholetruth-org/design-tokens/tokens.json';
```

## Available Tokens

- **Colors**: Primary, secondary, neutral, success, warning, error, info
- **Spacing**: xs, sm, md, lg, xl, xxl
- **Border Radius**: none, sm, md, lg, full
- **Typography**: Font families, sizes, weights, line heights
- **Semantic Tokens**: Surface, text, button, status (with light and dark theme support)

## License

MIT
