# eslint-config-anan

[![npm version](https://img.shields.io/npm/v/eslint-config-anan.svg)](https://www.npmjs.com/package/eslint-config-anan)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-anan.svg)](https://www.npmjs.com/package/eslint-config-anan)
[![license](https://img.shields.io/npm/l/eslint-config-anan.svg)](./LICENSE)
[![Build Status](https://github.com/anan-saleh/eslint-config-anan/actions/workflows/ci.yml/badge.svg)](https://github.com/anan-saleh/eslint-config-anan/actions)
[![code style: anan](https://img.shields.io/badge/code%20style-anan-2ecc71.svg)](https://github.com/anan-saleh/eslint-config-anan)

A shareable ESLint flat config with my preferred stylistic rules, React, TypeScript, and hooks best practices.  
This package lets you enforce a consistent code style across your projects.

---

## Installation

Install the package along with ESLint:

```bash
npm install --save-dev eslint eslint-config-anan

## Usage

Create an `eslint.config.js` file in the root of your project:

```js
import eslintConfigAnan from "eslint-config-anan";

export default [
  ...eslintConfigAnan,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // You can add project-specific overrides here
    },
  },
];
