import eslintConfigNext from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...eslintConfigNext,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
