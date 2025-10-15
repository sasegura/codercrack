import en from './translations/en.json';
import es from './translations/es.json';

const translations = {
  en,
  es,
};

export type Language = keyof typeof translations;

export const getTranslator = (lang: Language) => {
  const dictionary = translations[lang];

  return (key: string): string => {
    const keys = key.split('.');
    let result: any = dictionary;

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Return the key if translation is not found
      }
    }

    return typeof result === 'string' ? result : key;
  };
};
