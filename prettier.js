/**
 * @type {import('prettier').Options}
 */
const configs = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
};

module.exports = configs;
