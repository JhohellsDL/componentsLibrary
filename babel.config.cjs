module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false, // Deshabilita la transformación de módulos ES6
      },
    ],
    '@babel/preset-react', // Si estás usando React
    '@babel/preset-typescript', // Si estás usando TypeScript
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Usa runtime helpers
    '@babel/plugin-proposal-class-properties', // Si usas propiedades de clase
  ],
};