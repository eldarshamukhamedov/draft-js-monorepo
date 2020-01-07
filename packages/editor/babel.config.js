// Having a separate Babel config is the only way to get Jest to work with
// Babel 7
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
