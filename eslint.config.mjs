import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const plugins = { perfectionist };

const disallowDeclaration = [
  'FunctionExpression',
  'FunctionDeclaration',
  'ClassDeclaration',
  'TSEnumDeclaration',
  'TSInterfaceDeclaration',
];

const tsNaming = {
  selector: 'typeAlias',
  format: ['PascalCase', 'camelCase'],
  custom: { regex: '^(.*(Fn|Type|Props|State|Keys))$', match: true },
};

const sortAttributes = {
  groups: [
    'key',
    'name',
    'ref',
    'id',
    'className',
    'shorthand-prop',
    { group: 'unknown', type: 'unsorted' },
    'multiline-prop',
    'callback',
  ],
  customGroups: [
    { groupName: 'key', elementNamePattern: 'key' },
    { groupName: 'ref', elementNamePattern: 'ref' },
    { groupName: 'id', elementNamePattern: 'id' },
    { groupName: 'name', elementNamePattern: 'name' },
    { groupName: 'className', elementNamePattern: 'className' },
    { groupName: 'callback', elementNamePattern: '^on[A-Z].*' },
  ],
};

const rules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/consistent-type-imports': 'error',

  'prefer-const': 'error',
  'prefer-arrow-callback': 'error',
  'no-restricted-syntax': ['error', ...disallowDeclaration],
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/naming-convention': ['error', tsNaming],

  'perfectionist/sort-imports': ['error', { type: 'line-length', newlinesBetween: 0, sortSideEffects: true }],
  'perfectionist/sort-jsx-props': ['error', sortAttributes],
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores(['**/node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  { plugins, rules },
]);
