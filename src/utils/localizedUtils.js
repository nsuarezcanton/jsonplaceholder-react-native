/* eslint-disable import/prefer-default-export */
import I18n from 'react-native-i18n';
import en from '../locales/en';
import es from '../locales/es';
import fr from '../locales/fr';
import nl from '../locales/nl';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es,
  fr,
  nl,
};

export const getLocalizedString = (...value) => I18n.t(...value);
