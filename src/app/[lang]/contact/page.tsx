import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import Contact from '@/screens/Contact';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return constructMetadata({
        title: dict.seo.contact.title,
        description: dict.seo.contact.description,
        path: '/contact'
    });
}

export default async function Page() {
    return <Contact />;
}
