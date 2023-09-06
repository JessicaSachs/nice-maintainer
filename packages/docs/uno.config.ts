import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetTypography
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' }
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetTypography(),
    presetUno({
      dark: 'media'
      // dark: 'class'
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
