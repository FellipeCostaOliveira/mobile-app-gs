/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        espaco: {
          fundo:    '#020b18',
          superficie:'#061220',
          cartao:   '#0a1a2a',
          borda:    '#0f2a42',
          brilho:   '#1a3a5c',
          destaque: '#378ADD',
          escuro:   '#185FA5',
          azul:     '#85B7EB',
        },
        alerta: {
          vermelho: '#E24B4A',
          amarelo:  '#EF9F27',
          verde:    '#1D9E75',
        },
      },
    },
  },
  plugins: [],
};