import { constructMetadata } from '@/lib/seo';
import Locations from '@/screens/Locations';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    // Cast to any to avoid type inference issues with similarly named root property
    const seo = (dict.seo as any).locations;

    return constructMetadata({
        title: seo?.title || 'Global Service Locations',
        description: seo?.description || 'Serving clients in the USA, Europe, GCC, and Australia.',
        path: '/locations'
    });
}

export default function LocationsPage() {
    return <Locations />;
}
