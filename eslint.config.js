import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...fixupConfigRules(tseslint.configs.recommended),
  ...fixupConfigRules(pluginReactConfig),
  ...fixupConfigRules([
    {
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ]),
];
