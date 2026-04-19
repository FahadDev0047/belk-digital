import { constructMetadata } from '@/lib/seo';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/lib/i18n-config';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { WhoWeAreSection } from '@/components/home/WhoWeAreSection';

import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { TechMarquee } from '@/components/home/TechMarquee';
import { WorkTogetherSection } from '@/components/home/WorkTogetherSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { WhyWebsiteSection } from '@/components/home/WhyWebsiteSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { LocationsSection } from '@/components/home/LocationsSection';
import { TrustSection } from '@/components/home/TrustSection';
import { FAQSection } from '@/components/home/FAQSection';
import { JournalSection } from '@/components/home/JournalSection';
import { CTASection } from '@/components/home/CTASection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { NumbersSection } from '@/components/home/NumbersSection';
import { ValuesSection } from '@/components/home/ValuesSection';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale);

    return {
        ...constructMetadata({
            title: dict.seo.home.title,
            description: dict.seo.home.description,
            path: '/'
        }),
        keywords: "web design, web development, digital agency, branding, SEO, UI/UX design, custom websites",
    };
}

export default async function Page() {
    return (
        <>
            <HeroSection />
            <WhoWeAreSection />

            <ExpertiseSection />
            <TechMarquee />
            <ValuesSection />
            <ProjectsSection />
            {/* <WhyChooseSection /> */}
            {/* <WhyWebsiteSection /> */}
            {/* <ProcessSection /> */}
            <LocationsSection />
            <NumbersSection />
            <JournalSection />
            <FAQSection />
            <CTASection />
        </>
    );
}
