import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import Terms from '@/screens/Terms';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    // Provide default string if translation key is missing in dict type
    const title = (dict.seo as any).terms?.title || `Terms & Conditions - Belk Digital`;
    const description = (dict.seo as any).terms?.description || `Read Belk Digital's terms and conditions.`;

    return constructMetadata({
        title,
        description,
        path: '/terms'
    });
}

export default async function Page() {
    return <Terms />;
}
