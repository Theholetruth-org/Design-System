import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Register Tokens Studio transforms
register(StyleDictionary, {
  excludeParentKeys: true,
});

const cssCommonOptions = {
  outputReferences: true,
  outputReferenceFallbacks: true,
};

// Configuration for Style Dictionary
const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/css/',
      prefix: 'hole',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            ...cssCommonOptions,
          },
        },
      ],
    },
    scss: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/scss/',
      prefix: 'hole',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
          options: {
            ...cssCommonOptions,
          },
        },
        {
          destination: 'variables-map.scss',
          format: 'scss/map-deep',
          options: {
            ...cssCommonOptions,
          },
        },
      ],
    },
    json: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
});

// Clean and build all platforms
await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();

console.log('✅ Design tokens built successfully!');
