import {resolve} from 'node:path';

import Backend from 'i18next-fs-backend';
import {RemixI18Next} from 'remix-i18next/server';

import i18n from '~/localization/i18n'; // your i18n configuration file

import {getSupportedLanguageFromRequest} from './resource';

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs as string[],
    fallbackLanguage: i18n.fallbackLng as string,
    findLocale: async (request: Request): Promise<string> => {
      return getSupportedLanguageFromRequest(request) as string;
    },
  },
  i18next: {
    ...i18n,
    backend: {
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  },
  plugins: [Backend],
});

export default i18next;
