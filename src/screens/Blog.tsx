"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, Clock, User, Tag, CheckCircle } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';
import { getBlogPosts } from '@/i18n/blogPosts';

const categories = ['all', 'business', 'design', 'seo', 'performance'] as const;

const Blog = () => {
  const { slug } = useParams();
  const { language, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get localized blog posts based on current language
  const blogPosts = getBlogPosts(language);

  // Single blog post view
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href={`/${language}/blog`} className="btn-outline">
              {t.blog?.backToBlog || "Back to Blog"}
            </Link>
          </div>
        </div >
      );
    }

    return (
      <>


        <section className="pt-32 pb-16">
          <div className="container-wide max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/${language}/blog`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <ArrowRight className={cn("w-4 h-4", isRTL ? "" : "rotate-180")} />
                {t.blog.backToBlog}
              </Link>

              {/* Featured Image */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-8 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                />
              </div>

              <span className="badge-accent mb-4 inline-block">
                {t.blog.categories[post.category as keyof typeof t.blog.categories]}
              </span>
              <h1 className={cn("text-headline mb-6", isRTL && "text-right")}>{post.title}</h1>

              <div className={cn(
                "flex flex-wrap gap-6 text-sm text-muted-foreground mb-12 py-4 border-y border-border",
                isRTL && "flex-row-reverse"
              )}>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : (language === 'de' ? 'de-DE' : (language === 'fr' ? 'fr-FR' : 'en-US')), {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} {t.blog.readTime}
                </span>
              </div>

              <div className={cn("prose prose-lg max-w-none dark:prose-invert", isRTL && "text-right")}>
                <p className="text-xl md:text-2xl font-medium text-foreground mb-10 leading-relaxed border-l-4 border-accent-warm pl-6">
                  {post.excerpt}
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">{language === 'ar' ? 'مقدمة' : (language === 'fr' ? 'Introduction' : (language === 'de' ? 'Einführung' : 'Introduction'))}</h2>
                <p>{post.content.intro}</p>

                {post.content.sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mt-12 mb-6">{section.title}</h2>
                    <p>{section.content}</p>

                    {section.points && (
                      <ul className="my-8 space-y-2 list-none pl-0">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent-warm mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <h2 className="text-2xl font-bold mt-12 mb-6">{language === 'ar' ? 'خاتمة' : (language === 'fr' ? 'Conclusion' : (language === 'de' ? 'Fazit' : 'Conclusion'))}</h2>
                <p>{post.content.conclusion}</p>
              </div>

              {/* Need Expert Help CTA */}
              <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold mb-4">{t.blog.postCta.title}</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t.blog.postCta.subtitle}
                </p>
                <Link href={`/${language}/contact`} className="btn-primary inline-flex">
                  {t.nav.contact}
                </Link>
              </div>

            </motion.div>
          </div>
        </section>

        <CTASection />
      </>
    );
  }

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Blog listing page
  return (
    <>


      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn("max-w-3xl text-center mx-auto", isRTL && "text-right")}
          >
            <span className="badge-accent mb-4 inline-block">{t.blog.badge}</span>
            <h1 className="text-display mb-6">{t.blog.title}</h1>
            <p className="text-subtitle">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn Section - Moved Above Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h3 className={cn("text-2xl font-bold mb-8 text-center", isRTL && "font-display")}>
              {t.blog.whatYouWillLearn.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {t.blog.whatYouWillLearn.items.map((item: string, index: number) => (
                <div key={index} className={cn(
                  "flex items-center gap-3 bg-background p-4 rounded-xl border border-border",
                  isRTL && "flex-row-reverse text-right"
                )}>
                  <CheckCircle className="w-5 h-5 text-accent-warm flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Moved Below 'What You'll Learn' */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {t.blog.categories[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Link
                  href={`/${language}/blog/${post.slug}`}
                  className="block bg-card rounded-2xl border border-border overflow-hidden card-hover group h-full"
                >
                  {/* Blog Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className={cn(
                      "flex items-center gap-3 mb-4",
                      isRTL && "flex-row-reverse"
                    )}>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-warm bg-accent-warm/10 px-2 py-1 rounded-full">
                        <Tag className="w-3 h-3" />
                        {t.blog.categories[post.category as keyof typeof t.blog.categories]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} {t.blog.readTime}
                      </span>
                    </div>

                    <h2 className={cn(
                      "text-lg font-display font-semibold mb-3 group-hover:text-accent-warm transition-colors line-clamp-2",
                      isRTL && "text-right"
                    )}>
                      {post.title}
                    </h2>

                    <p className={cn(
                      "text-body text-sm line-clamp-3 mb-4",
                      isRTL && "text-right"
                    )}>
                      {post.excerpt}
                    </p>

                    <div className={cn(
                      "flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50",
                      isRTL && "flex-row-reverse"
                    )}>
                      <span className="font-medium text-foreground">{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Blog;
