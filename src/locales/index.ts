import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Language
import vi from './lang/vi.json';
import en from './lang/en.json';

i18next.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'vi',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});
