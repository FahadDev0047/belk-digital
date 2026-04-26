import 'server-only';
import { i18n, Locale } from './i18n-config';

// We enumerate all dictionaries here for better tree-shaking and static analysis
const dictionaries = {
    en: () => import('./dictionaries/en').then((module) => module.default),
    es: () => import('./dictionaries/es').then((module) => module.default),
    fr: () => import('./dictionaries/fr').then((module) => module.default),
    de: () => import('./dictionaries/de').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    // Check if locale is valid, fallback to default if not (safety net)
    if (!i18n.locales.includes(locale)) {
        console.warn(`Invalid locale '${locale}', falling back to '${i18n.defaultLocale}'`);
        return dictionaries[i18n.defaultLocale]();
    }
    return dictionaries[locale]();
};
