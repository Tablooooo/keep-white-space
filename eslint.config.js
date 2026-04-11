const googleConfig = require('eslint-config-google');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        location: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
      },
    },
    rules: {
      ...googleConfig.rules,
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'max-len': ['error', { 'code': 200 }], // Évite les erreurs sur les longues lignes
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',

      // ON DÉSACTIVE LES RÈGLES QUI BLOQUENT TON CODE NON MODIFIABLE :
      'no-var': 'off', // Autorise le 'var' à la ligne 336
      'no-redeclare': 'off', // Autorise la redéclaration de 'y'
      'no-undef': 'off', // Ignore l'erreur sur getTimeStr
      'no-unused-vars': 'off', // Ignore les 'e' non utilisés dans les catch
      'no-empty': 'off', // Autorise les blocs catch {} vides
      'no-self-assign': 'off', // Autorise location.href = location.href
      'comma-dangle': 'off', // Évite les erreurs de virgules manquantes
    },
  },
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
