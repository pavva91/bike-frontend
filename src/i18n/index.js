import { createI18n } from 'vue-i18n'
import messages from '../lang'

export default createI18n({
  // locale: 'en',
  // fallbackLocale: 'en',
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})
