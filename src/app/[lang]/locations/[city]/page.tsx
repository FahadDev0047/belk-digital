import Locations from '@/screens/Locations';
import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

const cityToRegionMap: Record<string, string> = {
    'new-york': 'usa',
    'los-angeles': 'usa',
    'london': 'europe',
    'dubai': 'gcc',
    'abu-dhabi': 'gcc',
    'riyadh': 'gcc',
    'jeddah': 'gcc',
    'sydney': 'australia',
    'usa': 'usa',
    'uae': 'gcc',
    'ksa': 'gcc',
    'europe': 'europe',
    'uk': 'europe',
    'canada': 'canada',
    'toronto': 'canada',
    'vancouver': 'canada',
    'australia': 'australia',
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string; city: string }>;
}): Promise<Metadata> {
    const { lang, city } = await params;
    const dict = await getDictionary(lang as Locale);

    const regionKey = cityToRegionMap[city];
    const content = regionKey && (dict.locations?.cityPages as any)?.[regionKey];

    const title = content?.title
        ? `${content.title} - Belk Digital`
        : dict.seo?.locations?.title || 'Global Service Locations';
    const description = content?.intro
        || dict.seo?.locations?.description
        || 'Serving clients in the USA, Europe, GCC, and Australia.';

    return constructMetadata({
        title,
        description,
        path: `/locations/${city}`,
    });
}

export default function LocationCityPage() {
    return <Locations />;
}
