import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  // fallbackLng: 'en',
  // debug: true,
  // resources: {},
  // interpolation: {
  //   escapeValue: false,
  // },
  react: {
    wait: true,
    useSuspense: false,
  },
});

export default i18n;
