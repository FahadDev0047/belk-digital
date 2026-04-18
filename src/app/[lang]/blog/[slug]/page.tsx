import Blog from '@/screens/Blog';
import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import { blogPostsEN, blogPostsAR, blogPostsFR } from '@/i18n/blogPosts';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as Locale);

    // Find post
    let post;
    if (lang === 'ar') post = blogPostsAR.find(p => p.slug === slug);
    else if (lang === 'fr') post = blogPostsFR.find(p => p.slug === slug);
    else post = blogPostsEN.find(p => p.slug === slug);

    return constructMetadata({
        title: post ? post.title : dict.seo.blog.title,
        description: post ? post.excerpt : dict.seo.blog.description,
        path: `/blog/${slug}`
    });
}

export default function BlogDetailPage() {
    return <Blog />;
}
