/**
 * Hybrid Analyzer: Uses ESLint with jsx-a11y plugin for comprehensive accessibility checking
 */

import { ESLint } from 'eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * ESLint flat config for accessibility checking
 */
const eslintConfig = {
  overrideConfigFile: true,
  baseConfig: [
    {
      files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
      languageOptions: {
        parser: babelParser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
          requireConfigFile: false,
          babelOptions: {
            presets: ['@babel/preset-react'],
          },
        },
        globals: {
          // Browser globals
          window: 'readonly',
          document: 'readonly',
          navigator: 'readonly',
          console: 'readonly',
          // Node globals
          process: 'readonly',
          __dirname: 'readonly',
          __filename: 'readonly',
          module: 'readonly',
          require: 'readonly',
          exports: 'readonly',
        },
      },
      plugins: {
        react,
        'jsx-a11y': jsxA11y,
      },
      rules: {
        // Set all jsx-a11y rules to error for strict checking
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/control-has-associated-label': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/media-has-caption': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
        'jsx-a11y/no-noninteractive-tabindex': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};

/**
 * Maps ESLint rule IDs to WCAG criteria
 */
const ruleToWCAG = {
  'jsx-a11y/alt-text': ['1.1.1'],
  'jsx-a11y/anchor-has-content': ['2.4.4'],
  'jsx-a11y/anchor-is-valid': ['2.4.4'],
  'jsx-a11y/aria-activedescendant-has-tabindex': ['4.1.2'],
  'jsx-a11y/aria-props': ['4.1.2'],
  'jsx-a11y/aria-proptypes': ['4.1.2'],
  'jsx-a11y/aria-role': ['4.1.2'],
  'jsx-a11y/aria-unsupported-elements': ['4.1.2'],
  'jsx-a11y/autocomplete-valid': ['1.3.5'],
  'jsx-a11y/click-events-have-key-events': ['2.1.1'],
  'jsx-a11y/control-has-associated-label': ['4.1.2'],
  'jsx-a11y/heading-has-content': ['2.4.6'],
  'jsx-a11y/html-has-lang': ['3.1.1'],
  'jsx-a11y/iframe-has-title': ['4.1.2'],
  'jsx-a11y/img-redundant-alt': ['1.1.1'],
  'jsx-a11y/interactive-supports-focus': ['2.1.1'],
  'jsx-a11y/label-has-associated-control': ['3.3.2'],
  'jsx-a11y/media-has-caption': ['1.2.2'],
  'jsx-a11y/mouse-events-have-key-events': ['2.1.1'],
  'jsx-a11y/no-access-key': ['2.4.1'],
  'jsx-a11y/no-autofocus': ['2.4.3'],
  'jsx-a11y/no-distracting-elements': ['2.2.2'],
  'jsx-a11y/no-interactive-element-to-noninteractive-role': ['4.1.2'],
  'jsx-a11y/no-noninteractive-element-interactions': ['4.1.2'],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': ['4.1.2'],
  'jsx-a11y/no-noninteractive-tabindex': ['2.1.1'],
  'jsx-a11y/no-redundant-roles': ['4.1.2'],
  'jsx-a11y/no-static-element-interactions': ['4.1.2'],
  'jsx-a11y/role-has-required-aria-props': ['4.1.2'],
  'jsx-a11y/role-supports-aria-props': ['4.1.2'],
  'jsx-a11y/scope': ['1.3.1'],
  'jsx-a11y/tabindex-no-positive': ['2.4.3'],
};

/**
 * Provides fix suggestions for common violations
 */
const fixSuggestions = {
  'jsx-a11y/alt-text': [
    'Add alt attribute with meaningful description',
    'For decorative images, use alt=""',
    'Describe what the image conveys, not just what it looks like',
  ],
  'jsx-a11y/click-events-have-key-events': [
    'Add onKeyDown handler for Enter and Space keys',
    'Or replace div with semantic button element',
    'Ensure keyboard users can interact with this element',
  ],
  'jsx-a11y/no-static-element-interactions': [
    'Use semantic HTML like <button> for interactive elements',
    'Add role="button" and tabIndex={0} if div must be used',
    'Include keyboard event handlers (onKeyDown)',
  ],
  'jsx-a11y/label-has-associated-control': [
    'Add htmlFor attribute linking label to input id',
    'Or wrap input inside label element',
    'Or use aria-label directly on the input',
  ],
  'jsx-a11y/interactive-supports-focus': [
    'Add tabIndex={0} to make element keyboard focusable',
    'Ensure element has a role attribute defining its purpose',
    'Consider using semantic HTML instead',
  ],
  'jsx-a11y/aria-role': [
    'Use a valid ARIA role from the specification',
    'Common roles: button, link, menuitem, tab, checkbox',
    'See: https://www.w3.org/TR/wai-aria-1.2/#roles',
  ],
  'jsx-a11y/media-has-caption': [
    'Add controls attribute to video/audio elements',
    'Provide captions or transcripts for media content',
    'Use <track> element for closed captions',
  ],
  'jsx-a11y/no-autofocus': [
    'Remove autoFocus to avoid disrupting user navigation',
    'Let users control focus themselves',
    'Only use autoFocus when explicitly requested by user',
  ],
  'jsx-a11y/tabindex-no-positive': [
    'Remove positive tabIndex values',
    'Use tabIndex={0} to include in natural tab order',
    'Use tabIndex={-1} to programmatically focus only',
  ],
  'jsx-a11y/aria-props': [
    'Fix the ARIA property name (check spelling)',
    'Ensure ARIA attributes are valid',
    'See: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def',
  ],
  'jsx-a11y/role-has-required-aria-props': [
    'Add required ARIA properties for this role',
    'Check ARIA specification for role requirements',
    'Ensure all mandatory properties are present',
  ],
  'jsx-a11y/heading-has-content': [
    'Add text content to heading elements',
    'Headings should not be empty',
    'Provide clear, descriptive heading text',
  ],
  'jsx-a11y/iframe-has-title': [
    'Add title attribute describing iframe purpose',
    'Title helps users understand iframe content',
    'Example: <iframe title="Video player" />',
  ],
  'jsx-a11y/no-distracting-elements': [
    'Remove <marquee> or <blink> elements',
    'Use CSS animations instead if needed',
    'Provide way to pause animations',
  ],
  'jsx-a11y/anchor-has-content': [
    'Add text content or aria-label to link',
    'Links should clearly indicate their purpose',
    'Avoid empty anchor elements',
  ],
  'jsx-a11y/anchor-is-valid': [
    'Provide valid href attribute for links',
    'Use <button> instead for non-navigation actions',
    'Ensure href is not # or javascript:void(0)',
  ],
};

/**
 * Analyze file using ESLint with jsx-a11y plugin
 */
export async function analyzeFileHybrid(content, filePath = 'temp.jsx') {
  const eslint = new ESLint(eslintConfig);
  
  try {
    // Lint the content
    const results = await eslint.lintText(content, { filePath });
    
    if (results.length === 0 || !results[0].messages) {
      return [];
    }

    // Transform ESLint messages to our violation format
    const violations = results[0].messages
      .filter(msg => msg.ruleId && msg.ruleId.startsWith('jsx-a11y/'))
      .map(msg => ({
        id: msg.ruleId,
        severity: msg.severity === 2 ? 'error' : 'warning',
        message: msg.message,
        description: msg.message,
        line: msg.line,
        column: msg.column,
        endLine: msg.endLine,
        endColumn: msg.endColumn,
        wcagCriteria: ruleToWCAG[msg.ruleId] || [],
        fix: msg.fix ? 'Auto-fixable' : 'Manual fix required',
        suggestions: fixSuggestions[msg.ruleId] || [
          'Review WCAG 2.2 documentation',
          'Consult accessibility team for guidance',
        ],
      }));

    return violations;
  } catch (error) {
    console.error('ESLint analysis error:', error);
    // Fallback to empty array if ESLint fails
    return [];
  }
}
