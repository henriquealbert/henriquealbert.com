/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'none',
  semi: false,
  singleQuote: true
}
