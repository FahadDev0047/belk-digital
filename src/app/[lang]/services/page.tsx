import { constructMetadata } from '@/lib/seo';
import Services from '@/screens/Services';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return constructMetadata({
        title: dict.seo.services.title,
        description: dict.seo.services.description,
        path: '/services'
    });
}

export default function ServicesPage() {
    return <Services />;
}
