// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNative from "eslint-plugin-react-native";

export default [
  // 1. Configurações base do ESLint
  pluginJs.configs.recommended,

  // 2. Configuração completa para React e React Native
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Aplica estas regras a todos os seus arquivos de código

    // Plugins que serão usados
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
      'react-native': pluginReactNative,
    },

    // Opções da linguagem
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ESSENCIAL: Habilita a análise do código JSX
        },
      },
      // Definição de variáveis globais que existem no ambiente React Native
      globals: {
        ...globals.browser, // fetch, console, etc.
        ...pluginReactNative.environments['react-native'].globals, // __DEV__, etc.
      },
    },

    // Regras
    rules: {
      // Importa as regras recomendadas para React e Hooks
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      // Regras úteis do plugin do React Native
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "warn", // Avisa sobre estilos inline
      "react-native/no-raw-text": "error", // Proíbe texto fora de componentes <Text>

      // Ajustes para o ecossistema React moderno (JSX Transform)
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off" // Opcional, mas comum em projetos que não usam PropTypes
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  }
];