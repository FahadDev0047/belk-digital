import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import Privacy from '@/screens/Privacy';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    // Provide default string if translation key is missing in dict type
    const title = (dict.seo as any).privacy?.title || `Privacy Policy - CodeNovaX`;
    const description = (dict.seo as any).privacy?.description || `Learn how CodeNovaX protects and manages your personal information.`;

    return constructMetadata({
        title,
        description,
        path: '/privacy'
    });
}

export default async function Page() {
    return <Privacy />;
}
