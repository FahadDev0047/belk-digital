import Services from '@/screens/Services';
import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as Locale);

    // Find service to get specific title/description
    const service = dict.services?.items?.find((item: any) => item.slug === slug);

    // Fallback to generic services metadata if not found
    const title = service ? `${service.title} - Belk Digital` : dict.seo.services.title;
    const description = service ? service.description : dict.seo.services.description;

    return constructMetadata({
        title,
        description,
        path: `/services/${slug}`
    });
}

export default function ServiceDetailPage() {
    return <Services />;
}
