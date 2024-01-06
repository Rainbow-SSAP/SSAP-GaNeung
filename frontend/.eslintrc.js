module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }], // 쌍따옴표 사용
    "@typescript-eslint/semi": ["error", "always"], // 세미콜론 사용
    "@typescript-eslint/explicit-function-return-type": "off", // 함수 반환 타입 명시 끄기
    "@typescript-eslint/space-before-function-paren": "off", // 함수 괄호 앞 공백 끄기
    "@typescript-eslint/no-floating-promises": "off", // 미해결 프로미스 끄기
    "@typescript-eslint/strict-boolean-expressions": "off", // 엄격한 불리언 표현 끄기
    "@typescript-eslint/no-misused-promises": "off", // 잘못 사용된 프로미스 끄기
    "@typescript-eslint/consistent-type-imports": "off", // 일관된 타입 임포트 끄기
    "@typescript-eslint/comma-dangle": "off", // 후행 쉼표 표시 끄기
    "@typescript-eslint/non-nullable-type-assertion-style": "off", // null,undefined 대신 !로 간결 표시 끄기
  },
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },
};
