import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import FAQ from '@/screens/FAQ';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return constructMetadata({
        title: dict.seo.faq.title,
        description: dict.seo.faq.description,
        path: '/faq'
    });
}

export default async function Page() {
    return <FAQ />;
}
