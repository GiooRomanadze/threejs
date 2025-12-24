import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

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

const rules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/consistent-type-imports': 'error',

  'prefer-const': 'error',
  'prefer-arrow-callback': 'error',
  'no-restricted-syntax': ['error', ...disallowDeclaration],
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/naming-convention': ['error', tsNaming],
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores(['**/node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  { rules },
]);
