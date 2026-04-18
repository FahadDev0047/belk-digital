import { languages } from '@/lib/i18n-config';

export function getHreflang(path: string = ''): {
    canonical: string;
    languages: Record<string, string>;
} {
    const baseUrl = 'https://codenovax.com';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    const languageAlternates: Record<string, string> = {};

    languages.forEach((lang) => {
        languageAlternates[lang.code] = `${baseUrl}/${lang.code}${cleanPath}`;
    });

    return {
        canonical: `${baseUrl}/en${cleanPath}`,
        languages: languageAlternates,
    };
}

export function constructMetadata({
    title,
    description,
    path = '',
}: {
    title: string;
    description: string;
    path?: string;
}) {
    const alternates = getHreflang(path);

    return {
        title,
        description,
        alternates: {
            canonical: alternates.canonical,
            languages: alternates.languages,
        },
    };
}
