import en from '~/../public/locales/en?url';
import ar from '~/../public/locales/ar?url';

const languages = ['en', 'ar'] as const;

export type Language = (typeof languages)[number];
export type Resource = typeof en;

export const languagesDefault = 'en' as Language;
export const languagesSupported = [...languages];

export const resources: Record<Language, Resource> = {
  en,
  ar,
};

export const getSupportedLanguage = (val?: string): Language | undefined => {
  if (!val) return undefined;
  const lang = String(val).toLowerCase() as Language;

  return languagesSupported.includes(lang) ? lang : undefined;
};

export const getSupportedLanguageFromRequest = (request: Request): Language | undefined => {
  const {pathname} = new URL(request.url);
  const pathLang = pathname.split('/')?.[1];

  return getSupportedLanguage(pathLang);
};
