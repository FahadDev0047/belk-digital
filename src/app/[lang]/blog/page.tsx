import { constructMetadata } from '@/lib/seo';
import Blog from '@/screens/Blog';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return constructMetadata({
        title: dict.seo.blog.title,
        description: dict.seo.blog.description,
        path: '/blog'
    });
}

export default function BlogPage() {
    return <Blog />;
}
