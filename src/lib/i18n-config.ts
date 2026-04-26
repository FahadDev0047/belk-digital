export const languages = [
    { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
    { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
] as const;

export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
