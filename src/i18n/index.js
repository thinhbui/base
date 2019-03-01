// import { I18n } from '../navigators/Drawer';
import I18n from 'react-native-i18n';

import en from './locales/en';
import vi from './locales/vi';

I18n.fallbacks = true;

I18n.translations = {
  en,
  vi,
};

I18n.locale = 'en';

export default I18n;
