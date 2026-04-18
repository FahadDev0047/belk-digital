import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import Work from '@/screens/Work';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return constructMetadata({
        title: dict.seo.work.title,
        description: dict.seo.work.description,
        path: '/work'
    });
}

export default async function Page() {
    return <Work />;
}
