import { MetadataRoute } from 'next';
import { getDictionary } from '@/lib/i18n';
import { i18n, Locale } from '@/lib/i18n-config';
import { blogPostsEN } from '@/i18n/blogPosts';

const baseUrl = 'https://belkdigital.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/about',
        '/blog',
        '/contact',
        '/faq',
        '/locations',
        '/privacy',
        '/services',
        '/terms',
        '/work',
    ];

    let sitemap: MetadataRoute.Sitemap = [];

    for (const locale of i18n.locales) {
        // 1. Static Routes
        for (const route of routes) {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        }

        // 2. Dynamic Blog Posts
        // Using English posts to get slugs as they are consistent across languages
        for (const post of blogPostsEN) {
            sitemap.push({
                url: `${baseUrl}/${locale}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }

        // 3. Dynamic Services
        const dict = await getDictionary(locale as Locale);
        if (dict.services?.items) {
            dict.services.items.forEach((service: any) => {
                sitemap.push({
                    url: `${baseUrl}/${locale}/services/${service.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly',
                    priority: 0.9,
                });
            });
        }
    }

    return sitemap;
}
