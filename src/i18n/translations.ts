export type Language = 'en' | 'ar' | 'fr' | 'de';

export const languages: { code: Language; name: string; nativeName: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
];

export const translations = {
  en: {
    seo: {
      home: {
        title: 'Digital Transformation Agency | Web Design & Development',
        description: 'Belk Digital delivers high-performance websites, custom web applications, and SEO services to help businesses grow globally.'
      },
      about: {
        title: 'About Belk Digital | Global Digital Agency',
        description: 'Learn about our mission to empower businesses through technology. We are a team of experts dedicated to your digital success.'
      },
      services: {
        title: 'Web Design, Development & SEO Services',
        description: 'Explore our comprehensive suite of digital services including custom web design, SaaS development, and outcome-based SEO.'
      },
      locations: {
        title: 'Global Service Locations',
        description: 'Serving clients in the USA, Europe, GCC, and Australia with remote-first digital excellence.'
      },
      blog: {
        title: 'Digital Insights & Tech Blog',
        description: 'Read our latest articles on web development trends, SEO strategies, and digital transformation tips.'
      },
      contact: {
        title: 'Contact Us | Start Your Project',
        description: 'Ready to transform your digital presence? Get in touch with our team today for a free consultation.'
      },
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about our services, pricing, process, and support.'
      }
    },
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      work: 'Our Work',
      locations: 'Locations',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ',
      bookCall: 'Book a Call',
    },
    // Hero Section
    hero: {
      badge: 'Digital Excellence',
      title: 'SCALE',
      subtitle: 'High-performance digital solutions crafted for the modern web',
      cta: 'Explore Services',
      ctaSecondary: 'Our Work',
      ctaContact: "Schedule a Consult",
      socialProof: "Relied on by brands across the globe",
      stats: {
        projects: 'Projects Delivered',
        clients: 'Happy Clients',
        countries: 'Countries Served',
        years: 'Years Experience',
      },
      trust: {
        projects: '50+ Projects',
        performance: 'High Performance',
        seo: 'SEO-Optimized',
      },
    },
    // Why Choose Us
    whyChoose: {
      badge: 'Why Belk Digital',
      title: 'Expertise You Can Trust',
      subtitle: 'We combine strategic thinking with technical excellence to deliver results that matter.',
      features: [
        {
          title: 'Strategic Approach',
          description: 'Every project starts with understanding your goals. We craft solutions that align with your business objectives.',
        },
        {
          title: 'Global Experience',
          description: 'Working with clients across continents gives us unique insights into diverse markets and user behaviors.',
        },
        {
          title: 'Technical Excellence',
          description: 'Our team stays ahead of the curve with the latest technologies and best practices in web development.',
        },
        {
          title: 'Ongoing Partnership',
          description: 'We don\'t just build and leave. We\'re committed to your long-term success with continuous support.',
        },
      ],
    },
    // Technical Expertise Section
    technicalExpertise: {
      title: 'Technical Expertise',
    },
    // Why Website Section
    whyWebsite: {
      badge: 'Digital Foundation',
      title: 'Why Your Business Needs a Professional Website',
      subtitle: 'In today\'s digital-first world, your website is often the first impression customers have of your business.',
      points: [
        {
          title: '24/7 Availability',
          description: 'Your website works around the clock, providing information and generating leads even while you sleep.',
        },
        {
          title: 'Credibility & Trust',
          description: 'A professional website establishes legitimacy and builds trust with potential customers.',
        },
        {
          title: 'Wider Reach',
          description: 'Break geographical barriers and reach customers anywhere in the world.',
        },
        {
          title: 'Cost-Effective Marketing',
          description: 'Digital marketing through your website offers the best ROI compared to traditional advertising.',
        },
      ],
    },
    // Services
    services: {
      badge: 'What We Do',
      title: 'Global Web, SaaS & SEO Services for Scalable Business Growth',
      subtitle: 'We deliver end-to-end digital services that help businesses in the US, Europe, GCC, and Australia build, optimize, and scale high-performance digital platforms.',
      microScope: 'Web Design • Web Development • SaaS • SEO • Digital Marketing • Support',
      common: {
        whoForTitle: 'Who This Service Is For',
        whyChooseTitle: 'Why Choose Belk Digital for {service}',
        processTitle: 'Our Process for Delivering {service}',
        growthTitle: 'How This Service Supports Long-Term Business Growth',
        ctaTitle: 'Ready to Get Started with {service}?',
        ctaSubtitle: 'Let’s discuss your goals and see how we can help you scale.',
        benefitsTitle: 'Business Benefits of Our {service}',
        includesTitle: 'What\'s Included in Our {service}',
      },
      items: [
        {
          title: 'Custom Web Design & UI/UX',
          description: 'Unique designs that capture your brand essence and engage visitors.',
          slug: 'custom-web-design',
          detailTitle: 'Custom Web Design Services for High-Growth Businesses',
          detailSubtitle: 'We provide Custom Web Design for businesses in the US, Europe, GCC, and Australia, focused on performance, scalability, and measurable results.',
          whoFor: ['Startups & Scaleups', 'SaaS & Technology Companies', 'Ecommerce & DTC Brands', 'Enterprises & Agencies'],
          includes: [
            'Brand-aligned visual identity',
            'Responsive & mobile-first layouts',
            'UX-focused page structures',
            'Conversion-driven design systems',
            'Interactive prototypes & handoff'
          ],
          benefits: [
            'Stronger brand positioning',
            'Higher engagement & conversions',
            'Improved performance & scalability',
            'Better ROI on digital investment'
          ],
          whyChoose: [
            { title: 'Global-first delivery', description: 'Experience with US, EU, GCC & AU clients.' },
            { title: 'Strategy-led execution', description: 'Not just templates, but tailored strategy.' },
            { title: 'SEO & Performance', description: 'Built-in optimization from day one.' },
            { title: 'Long-term support', description: 'We are partners in your growth.' }
          ],
          process: [
            { title: 'Discovery & Analysis', description: 'Understanding your brand and goals.' },
            { title: 'Strategy & Planning', description: 'Defining the roadmap and UX.' },
            { title: 'Design & Prototyping', description: 'Creating visual assets and interactions.' },
            { title: 'Handoff & Support', description: 'Seamless transition to development.' }
          ],
          growthSupport: 'Our design services ensure your digital presence is built to scale, optimized for global markets, and designed to convert traffic into revenue.'
        },
        {
          title: 'Website Redesign & Optimization',
          description: 'Revitalize your existing site with modern aesthetics and improved UX.',
          slug: 'website-redesign',
          detailTitle: 'Website Redesign & Optimization Services for Modern Brands',
          detailSubtitle: 'We revitalize websites for businesses in the US, Europe, GCC, and Australia, focusing on modern aesthetics and improved conversion rates.',
          whoFor: ['Legacy Businesses', 'Rebranding Comepanies', 'Low-performance Sites', 'Growing Startups'],
          includes: [
            'Full UI/UX audit',
            'Modern visual overhaul',
            'Performance optimization',
            'Mobile responsiveness fix',
            'SEO structure improvements'
          ],
          benefits: [
            'Renewed brand image',
            'Increased organic traffic',
            'Lower bounce rates',
            'Higher lead generation'
          ],
          whyChoose: [
            { title: 'Data-driven redesign', description: 'Decisions based on analytics, not guesswork.' },
            { title: 'Seamless migration', description: 'No data loss or downtime.' },
            { title: 'SEO preservation', description: 'We keep your rankings safe.' },
            { title: 'Future-proof tech', description: 'Built on modern stacks.' }
          ],
          process: [
            { title: 'Audit & Analysis', description: 'Reviewing current performance.' },
            { title: 'Strategy & Concept', description: 'Defining the new look and feel.' },
            { title: 'Development & Migration', description: 'Building and moving content.' },
            { title: 'Launch & Monitor', description: 'Ensuring everything works perfectly.' }
          ],
          growthSupport: 'A redesign isn\'t just cosmetic; it\'s a strategic move to improve performance, SEO, and user retention for long-term growth.'
        },
        {
          title: 'Branding & Digital Identity',
          description: 'Create a cohesive brand identity that resonates with your audience.',
          slug: 'branding',
          detailTitle: 'Branding & Digital Identity Services that Resonate',
          detailSubtitle: 'We craft powerful brand identities for businesses in the US, Europe, GCC, and Australia, ensuring consistency and impact.',
          whoFor: ['New Ventures', 'Rebranding Companies', 'Digital-First Brands', 'Global Enterprises'],
          includes: [
            'Logo & visual identity design',
            'Brand guidelines & typography',
            'Voice & tone development',
            'Social media assets',
            'Marketing collateral design'
          ],
          benefits: [
            'Instant brand recognition',
            'Consistent customer experience',
            'Increased perceived value',
            'Emotional connection with users'
          ],
          whyChoose: [
            { title: 'Strategic alignment', description: 'Design that matches your business goals.' },
            { title: 'Cross-cultural appeal', description: 'Identities that work globally.' },
            { title: 'Scalable systems', description: 'Growth-ready assets.' },
            { title: 'Full-service creative', description: 'From logo to full rollout.' }
          ],
          process: [
            { title: 'Brand Discovery', description: 'Uncovering your core values.' },
            { title: 'Visual Strategy', description: 'Defining the look and feel.' },
            { title: 'Identity Design', description: 'Creating logos and assets.' },
            { title: 'Brand Guidelines', description: 'Documenting the system.' }
          ],
          growthSupport: 'A strong brand identity builds trust and loyalty, essential foundations for sustainable long-term business growth.'
        },
        {
          title: 'UI/UX & Conversion Design',
          description: 'User-centered design that maximizes engagement and conversions.',
          slug: 'ui-ux-design',
          detailTitle: 'UI/UX & Conversion Design Services for Better ROI',
          detailSubtitle: 'We optimize user journeys for businesses in the US, Europe, GCC, and Australia, turning visitors into loyal customers.',
          whoFor: ['SaaS Platforms', 'E-commerce Stores', 'Complex Web Apps', 'Lead Gen Sites'],
          includes: [
            'User research & persona building',
            'Wireframing & user flows',
            'Interactive prototyping',
            'Usability testing',
            'Conversion rate optimization (CRO)'
          ],
          benefits: [
            'Higher conversion rates',
            'Reduced churn',
            'Improved user satisfaction',
            'Data-backed design decisions'
          ],
          whyChoose: [
            { title: 'User-centric approach', description: 'Design for real people.' },
            { title: 'Data-driven Iteration', description: 'Continuous improvement.' },
            { title: 'Complex system experts', description: 'We handle tough UX challenges.' },
            { title: 'Global accessibility', description: 'Inclusive design for all.' }
          ],
          process: [
            { title: 'Research', description: 'Understanding user needs.' },
            { title: 'Structure', description: 'Information architecture & flows.' },
            { title: 'Design', description: 'High-fidelity UI creation.' },
            { title: 'Validation', description: 'Testing with real users.' }
          ],
          growthSupport: 'Optimized UX directly impacts revenue by removing friction and encouraging user action, fueling business growth.'
        },
        {
          title: 'Web & SaaS Development',
          description: 'Robust, scalable websites built with cutting-edge technologies.',
          slug: 'web-development',
          detailTitle: 'Web & SaaS Development Services for Scalable Products',
          detailSubtitle: 'We build robust digital products for businesses in the US, Europe, GCC, and Australia, ensuring scalability and performance.',
          whoFor: ['Tech Startups', 'Enterprise SaaS', 'Digital Agencies', 'Innovation Labs'],
          includes: [
            'Custom frontend development',
            'Backend API architecture',
            'Database design & management',
            'Third-party integrations',
            'Cloud infrastructure setup'
          ],
          benefits: [
            'High performance & speed',
            'Secure & scalable architecture',
            'Seamless user experience',
            'Easy maintenance & updates'
          ],
          whyChoose: [
            { title: 'Modern tech stack', description: 'React, Next.js, Node.js experts.' },
            { title: 'Clean code standards', description: 'Maintainable and documented.' },
            { title: 'Agile methodology', description: 'Fast iterations and feedback.' },
            { title: 'DevOps integration', description: 'CI/CD and automated testing.' }
          ],
          process: [
            { title: 'Architecture', description: 'Planning the tech stack.' },
            { title: 'Development', description: 'Sprints and coding.' },
            { title: 'Testing', description: 'QA and bug fixing.' },
            { title: 'Deployment', description: 'Live launch and monitoring.' }
          ],
          growthSupport: 'Scalable codebases allow your product to grow with your user base without expensive rewrites or performance bottlenecks.'
        },
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'Improve visibility and drive organic traffic to your website.',
          slug: 'seo-optimization',
          detailTitle: 'SEO Services for Long-Term Organic Growth',
          detailSubtitle: 'We drive organic traffic for businesses in the US, Europe, GCC, and Australia through technical precision and content strategy.',
          whoFor: ['Local Businesses', 'E-commerce Sites', 'Content Publishers', 'Service Providers'],
          includes: [
            'Technical SEO audit',
            'Keyword research & strategy',
            'On-page optimization',
            'Content strategy & clustering',
            'Link building & outreach'
          ],
          benefits: [
            'Sustainable traffic growth',
            'Higher search rankings',
            'Improved brand authority',
            'Qualified lead generation'
          ],
          whyChoose: [
            { title: 'White-hat techniques', description: 'Safe, long-term strategies.' },
            { title: 'Data-driven insights', description: 'Reporting that makes sense.' },
            { title: 'Technical expertise', description: 'We fix deep code issues.' },
            { title: 'Global focus', description: 'Multilingual & international SEO.' }
          ],
          process: [
            { title: 'Audit', description: 'Finding opportunities and errors.' },
            { title: 'Strategy', description: 'Planning keywords and content.' },
            { title: 'Optimization', description: 'Implementing fixes and changes.' },
            { title: 'Reporting', description: 'Tracking progress monthly.' }
          ],
          growthSupport: 'SEO provides the highest ROI over time, building a self-sustaining channel of potential customers for your business.'
        },
        {
          title: 'Website Maintenance, Support & Server Management',
          description: 'Keep your website secure, updated, and performing at its best.',
          slug: 'maintenance',
          detailTitle: 'Maintenance & Support Services for Peace of Mind',
          detailSubtitle: 'We ensure uptime and security for businesses in the US, Europe, GCC, and Australia, so you can focus on your core business.',
          whoFor: ['High-Traffic Sites', 'Corporate Portals', 'E-commerce Platforms', 'Mission-Critical Apps'],
          includes: [
            '24/7 uptime monitoring',
            'Security patches & updates',
            'Daily functionality checks',
            'Server performance tuning',
            'Regular backups & recovery'
          ],
          benefits: [
            'Reduced downtime risks',
            'Enhanced security posture',
            'Consistent performance',
            'Predictable IT costs'
          ],
          whyChoose: [
            { title: 'Proactive monitoring', description: 'We fix issues before they break.' },
            { title: 'Expert support team', description: 'Direct access to developers.' },
            { title: 'Transparent reporting', description: 'Know exactly what we do.' },
            { title: 'Flexible plans', description: 'Scale support as you need.' }
          ],
          process: [
            { title: 'Onboarding', description: 'Setting up monitoring tools.' },
            { title: 'Optimization', description: 'Initial fix and tune-up.' },
            { title: 'Routine Care', description: 'Weekly/Monthly tasks.' },
            { title: 'Emergency Response', description: 'Fast action when needed.' }
          ],
          growthSupport: 'Reliable infrastructure is the backbone of digital growth. We keep your foundation strong so you can build upon it.'
        },
        {
          title: 'Shopify Development & E-commerce Solutions',
          description: 'Build powerful online stores with Shopify that drive sales and growth.',
          slug: 'shopify-development',
          detailTitle: 'Shopify Development & E-commerce Solutions for Growing Brands',
          detailSubtitle: 'We create high-converting Shopify stores for businesses in the US, Europe, GCC, and Australia, optimized for maximum revenue and customer satisfaction.',
          whoFor: ['E-commerce Startups', 'DTC Brands', 'Retail Businesses', 'Online Marketplaces'],
          includes: [
            'Custom Shopify theme development',
            'Third-party integrations & apps',
            'Payment gateway setup',
            'Inventory management system',
            'Conversion rate optimization'
          ],
          benefits: [
            'Increased online sales',
            'Streamlined operations',
            'Enhanced user experience',
            'Mobile-first shopping'
          ],
          whyChoose: [
            { title: 'Shopify experts', description: 'Certified developers with proven results.' },
            { title: 'Conversion-focused design', description: 'Built to maximize sales.' },
            { title: 'Scalable architecture', description: 'Grows with your business.' },
            { title: 'Full-service support', description: 'From setup to scaling.' }
          ],
          process: [
            { title: 'Discovery & Planning', description: 'Understanding your products and goals.' },
            { title: 'Design & Development', description: 'Creating your unique store.' },
            { title: 'Integration & Testing', description: 'Adding features and quality checks.' },
            { title: 'Launch & Optimize', description: 'Going live and improving conversions.' }
          ],
          growthSupport: 'Shopify provides a powerful, scalable platform for e-commerce growth. We help you leverage it to its fullest potential for sustainable revenue.'
        },
        {
          title: 'Custom CMS Development & Content Management',
          description: 'Empower your team with tailor-made content management systems.',
          slug: 'custom-cms',
          detailTitle: 'Custom CMS Development for Ultimate Content Control',
          detailSubtitle: 'We build bespoke content management systems for businesses in the US, Europe, GCC, and Australia that need complete control over their digital content.',
          whoFor: ['Publishing Companies', 'Enterprise Businesses', 'Multi-brand Organizations', 'Content-heavy Sites'],
          includes: [
            'Tailored CMS architecture',
            'Custom admin panel design',
            'Role-based access control',
            'API integration capabilities',
            'Multi-language support'
          ],
          benefits: [
            'Complete content control',
            'Streamlined workflows',
            'Enhanced security',
            'Unique functionality'
          ],
          whyChoose: [
            { title: 'Fully customizable', description: 'Built exactly to your specs.' },
            { title: 'Scalable & future-proof', description: 'Grows with your needs.' },
            { title: 'User-friendly interface', description: 'Easy for non-technical teams.' },
            { title: 'Performance optimized', description: 'Fast and efficient.' }
          ],
          process: [
            { title: 'Requirements Analysis', description: 'Defining your content needs.' },
            { title: 'Architecture Design', description: 'Planning the system structure.' },
            { title: 'Development & Testing', description: 'Building and validating features.' },
            { title: 'Training & Deployment', description: 'Launching and onboarding your team.' }
          ],
          growthSupport: 'A custom CMS gives you the flexibility and control that off-the-shelf solutions cannot match, enabling unique digital experiences.'
        },
      ],
      viewAll: 'View All Services',
      learnMore: 'Learn More',
      includes: 'What\'s Included',
      benefits: 'Benefits',
      whatWeCover: {
        title: 'What Our Digital Services Cover',
        items: [
          { title: 'Strategy-Led Design & Development', description: 'We align design and code with your business goals from day one.' },
          { title: 'Scalable Architecture & Clean Code', description: 'Building systems that grow with your business without technical debt.' },
          { title: 'SEO-First & Performance-Driven Builds', description: 'Optimized for search engines and speed to maximize reach.' },
          { title: 'Secure, Maintainable & Future-Ready Systems', description: 'Security and maintainability are built into our core process.' },
        ],
      },
      whoFor: {
        title: 'Who Our Services Are Designed For',
        items: [
          { title: 'Startups & Scaleups', description: 'Rapidly launching and scaling digital products.' },
          { title: 'SaaS & Technology Companies', description: 'Building complex platforms and tools.' },
          { title: 'Ecommerce & DTC Brands', description: 'Driving sales through optimized shopping experiences.' },
          { title: 'Enterprises & Agencies', description: 'Large-scale digital transformation and partner support.' },
        ],
      },
      whyChoose: {
        title: 'Why Choose Belk Digital for Digital Services',
        items: [
          { title: 'Global-First Service Delivery', description: 'Experience delivering to US, Europe, and GCC markets.' },
          { title: 'Business-Driven Digital Strategy', description: 'We focus on metrics that matter to your bottom line.' },
          { title: 'SEO & Performance at the Core', description: 'Technical excellence that drives organic growth.' },
          { title: 'Long-Term Support & Partnership', description: 'We are your long-term technology partner.' },
        ],
      },
      process: {
        title: 'Our Process for Delivering High-Impact Digital Solutions',
        items: [
          { title: 'Discovery & Requirements Analysis', description: 'Understanding your unique challenges and opportunities.' },
          { title: 'Strategy & Technical Planning', description: 'Creating a detailed roadmap for success.' },
          { title: 'Design, Development & Optimization', description: 'Executing with precision and agile methodology.' },
          { title: 'Launch, Support & Continuous Growth', description: 'Ensuring a smooth launch and ongoing improvement.' },
        ],
      },
      cta: {
        title: 'Ready to Scale Your Business with Expert Digital Services?',
        subtitle: 'Let’s discuss your goals and build a solution that drives measurable growth.',
        button: 'Start Your Project',
        buttonSecondary: 'Schedule a Call',
      }
    },
    // Process
    process: {
      badge: 'Our Process',
      title: 'From Vision to Reality',
      subtitle: 'A proven methodology that delivers exceptional results every time.',
      steps: [
        { number: '01', title: 'Discovery', description: 'We dive deep into your business, goals, and target audience to create a strategic foundation.' },
        { number: '02', title: 'Strategy', description: 'Developing a comprehensive plan that aligns with your objectives and market positioning.' },
        { number: '03', title: 'Design', description: 'Creating visually stunning designs that reflect your brand and engage your users.' },
        { number: '04', title: 'Development', description: 'Building your website with clean code, optimal performance, and scalability in mind.' },
        { number: '05', title: 'Launch', description: 'Rigorous testing and seamless deployment to bring your vision to life.' },
        { number: '06', title: 'Growth', description: 'Ongoing optimization and support to ensure continued success and improvement.' },
      ],
    },
    // Locations
    locations: {
      badge: 'Global Reach',
      title: 'Global Digital Services Across the US, Europe, GCC & Australia',
      subtitle: 'We partner with businesses across key global markets, delivering web, SaaS, SEO, and digital solutions tailored to regional needs.',
      locationsGridTitle: 'Our Global Service Locations',
      viewAll: 'View All Locations',
      regions: {
        usa: 'United States (US Digital Services)',
        uae: 'United Arab Emirates (GCC Digital Services)',
        ksa: 'Saudi Arabia (GCC Digital Services)',
        europe: 'United Kingdom & Europe',
        australia: 'Australia (APAC Region)',
        canada: 'Canada (North America)',
      },
      servicesWeProvide: {
        title: 'Digital Services We Provide Across All Regions',
        items: [
          'Custom Web Design & UI/UX',
          'Web & SaaS Development',
          'Website Redesign & Optimization',
          'Search Engine Optimization (SEO)',
          'Digital Marketing & Growth',
          'Maintenance, Support & Server Management',
        ],
      },
      howWeWork: {
        title: 'How We Deliver Projects Globally',
        items: [
          { title: 'Remote-first collaboration', description: 'Seamless collaboration across time zones.' },
          { title: 'Dedicated project managers', description: 'Clear communication and single point of contact.' },
          { title: 'Region-aware strategy', description: 'Execution tailored to local market needs.' },
          { title: 'Secure, scalable delivery', description: 'High standards of security and performance.' },
        ],
      },
      dontSeeLocation: {
        title: 'Serving Clients Worldwide Beyond Listed Locations',
        description: 'We work with clients worldwide. No matter where you\'re based, we can deliver exceptional digital solutions tailored to your market.',
        button: 'Talk to Our Global Team',
      },
      whyChoose: {
        title: 'Why Global Businesses Choose Belk Digital',
        items: [
          { title: 'Proven experience across 45+ countries', description: 'We understand global digital landscapes.' },
          { title: 'Global delivery with local understanding', description: 'Bridging the gap between global standards and local needs.' },
          { title: 'SEO & performance-focused development', description: 'Building for visibility and speed.' },
          { title: 'Long-term partnership approach', description: 'We are invested in your sustained growth.' },
        ],
      },
      cta: {
        title: 'Ready to Work with a Global Digital Partner?',
        subtitle: 'Let’s discuss how we can support your business—wherever you’re located.',
      },
      cityPages: {
        usa: {
          title: 'Digital Services Company in the United States',
          intro: 'Belk Digital provides web design, web development, SaaS solutions, SEO, and digital marketing services to businesses across the United States. We help companies compete, scale, and grow in one of the world\'s most competitive digital markets.',
          excellence: {
            title: 'Delivering Digital Excellence in the United States',
            body: 'US businesses demand speed, performance, and innovation. We build digital solutions that meet enterprise-grade expectations while supporting long-term growth and flexibility.',
          },
          services: {
            title: 'Our Digital Services in the United States',
            items: [
              'Custom Web Design & UI/UX',
              'Website Redesign & Optimization',
              'Web & SaaS Development',
              'Search Engine Optimization (SEO)',
              'Digital Marketing & Growth',
              'Website Maintenance, Support & Server Management',
            ],
          },
          whoWeWorkWith: {
            title: 'Who We Work With in the United States',
            items: [
              'Startups & Scaleups',
              'SaaS & Technology Companies',
              'Ecommerce & DTC Brands',
              'Enterprises & Professional Service Firms',
            ],
          },
          whyChoose: {
            title: 'Why US Businesses Choose Belk Digital',
            items: [
              { title: 'Experience working with global and US-based companies', description: 'We understand the US market landscape.' },
              { title: 'Performance-driven, SEO-first development', description: 'Building for speed and visibility from day one.' },
              { title: 'Scalable architecture for growing businesses', description: 'Solutions that grow with your company.' },
              { title: 'Reliable long-term support', description: 'We support you beyond the launch.' },
            ],
          },
          howWeDeliver: {
            title: 'How We Deliver Projects Globally',
            body: 'Our remote-first delivery model allows us to work efficiently across time zones while maintaining high standards of quality and accountability. Every project follows a structured process focused on clarity, performance, and measurable results.',
          },
          cta: {
            title: 'Ready to Build a High-Performance Digital Presence in the United States?',
            subtitle: 'Let’s discuss how Belk Digital can help your business grow with scalable, future-ready digital solutions.',
          },
        },
        europe: {
          title: 'Digital Services Company in the United Kingdom & Europe',
          intro: 'Belk Digital delivers custom web design, SaaS development, SEO, and digital marketing services to businesses across the UK and Europe. We support organizations looking for reliable, compliant, and scalable digital solutions.',
          excellence: {
            title: 'Delivering Digital Excellence in Europe',
            body: 'European businesses require a balance of innovation, usability, and regulatory awareness. Our solutions are built with performance, accessibility, and scalability at the core.',
          },
          services: {
            title: 'Our Digital Services in Europe',
            items: [
              'Custom Web Design & UI/UX',
              'Website Redesign & Optimization',
              'Web & SaaS Development',
              'Search Engine Optimization (SEO)',
              'Digital Marketing & Growth',
              'Website Maintenance, Support & Server Management',
            ],
          },
          whoWeWorkWith: {
            title: 'Who We Work With in Europe',
            items: [
              'Startups & Scaleups',
              'SaaS & Technology Companies',
              'Ecommerce & DTC Brands',
              'Enterprises & Professional Service Firms',
            ],
          },
          whyChoose: {
            title: 'Why European Businesses Choose Belk Digital',
            items: [
              { title: 'Global delivery with region-aware execution', description: 'Tailored to European standards and regulations.' },
              { title: 'Clean, scalable, and compliant development practices', description: 'Focus on GDPR and accessibility standards.' },
              { title: 'SEO strategies aligned with European markets', description: 'Targeting local and regional search intent.' },
              { title: 'Long-term partnership approach', description: 'Building lasting relationships.' },
            ],
          },
          howWeDeliver: {
            title: 'How We Deliver Projects Globally',
            body: 'Our remote-first delivery model allows us to work efficiently across time zones while maintaining high standards of quality and accountability. Every project follows a structured process focused on clarity, performance, and measurable results.',
          },
          cta: {
            title: 'Ready to Build a High-Performance Digital Presence in Europe?',
            subtitle: 'Let’s discuss how Belk Digital can help your business grow with scalable, future-ready digital solutions.',
          },
        },
        gcc: {
          title: 'Digital Services Company in the GCC',
          intro: 'Belk Digital provides web development, SaaS solutions, SEO, and digital marketing services to businesses across the GCC region. We support fast-growing companies in building strong digital foundations.',
          excellence: {
            title: 'Delivering Digital Excellence in the GCC',
            body: 'The GCC market is rapidly evolving and highly competitive. We help businesses establish strong digital presence with scalable, secure, and future-ready platforms.',
          },
          services: {
            title: 'Our Digital Services in the GCC',
            items: [
              'Custom Web Design & UI/UX',
              'Website Redesign & Optimization',
              'Web & SaaS Development',
              'Search Engine Optimization (SEO)',
              'Digital Marketing & Growth',
              'Website Maintenance, Support & Server Management',
            ],
          },
          whoWeWorkWith: {
            title: 'Who We Work With in the GCC',
            items: [
              'Startups & Scaleups',
              'SaaS & Technology Companies',
              'Ecommerce & DTC Brands',
              'Enterprises & Professional Service Firms',
            ],
          },
          whyChoose: {
            title: 'Why GCC Businesses Choose Belk Digital',
            items: [
              { title: 'Experience serving diverse international markets', description: 'Bringing global quality to local projects.' },
              { title: 'Business-focused digital strategies', description: 'Solutions that drive ROI.' },
              { title: 'Performance and security-driven development', description: 'Mots de passe rapides, sécurisés et fiables.' },
              { title: 'Reliable communication and delivery', description: 'Professional project management.' },
            ],
          },
          howWeDeliver: {
            title: 'How We Deliver Projects Globally',
            body: 'Our remote-first delivery model allows us to work efficiently across time zones while maintaining high standards of quality and accountability. Every project follows a structured process focused on clarity, performance, and measurable results.',
          },
          cta: {
            title: 'Ready to Build a High-Performance Digital Presence in the GCC?',
            subtitle: 'Let’s discuss how Belk Digital can help your business grow with scalable, future-ready digital solutions.',
          },
        },
        australia: {
          title: 'Digital Services Company in Australia',
          intro: 'Belk Digital partners with Australian businesses to deliver web design, web development, SEO, and digital marketing solutions that support sustainable growth and long-term success.',
          excellence: {
            title: 'Delivering Digital Excellence in Australia',
            body: 'Australian businesses value reliability, performance, and clarity. Our digital solutions are designed to perform consistently while scaling with business growth.',
          },
          services: {
            title: 'Our Digital Services in Australia',
            items: [
              'Custom Web Design & UI/UX',
              'Website Redesign & Optimization',
              'Web & SaaS Development',
              'Search Engine Optimization (SEO)',
              'Digital Marketing & Growth',
              'Website Maintenance, Support & Server Management',
            ],
          },
          whoWeWorkWith: {
            title: 'Who We Work With in Australia',
            items: [
              'Startups & Scaleups',
              'SaaS & Technology Companies',
              'Ecommerce & DTC Brands',
              'Enterprises & Professional Service Firms',
            ],
          },
          whyChoose: {
            title: 'Why Australian Businesses Choose Belk Digital',
            items: [
              { title: 'Global expertise with local market understanding', description: 'We connect you with global best practices.' },
              { title: 'Clean, maintainable, and scalable code', description: 'Built to last and easy to maintain.' },
              { title: 'SEO-driven digital strategies', description: 'Growth-focused approach.' },
              { title: 'Long-term support and optimization', description: 'Your partner for the long haul.' },
            ],
          },
          howWeDeliver: {
            title: 'How We Deliver Projects Globally',
            body: 'Our remote-first delivery model allows us to work efficiently across time zones while maintaining high standards of quality and accountability. Every project follows a structured process focused on clarity, performance, and measurable results.',
          },
          cta: {
            title: 'Ready to Build a High-Performance Digital Presence in Australia?',
            subtitle: 'Let’s discuss how Belk Digital can help your business grow with scalable, future-ready digital solutions.',
          },
        },
        canada: {
          title: 'Digital Services Company in Canada',
          intro: 'Belk Digital partners with Canadian businesses to deliver web design, web development, SEO, and digital marketing solutions that support sustainable growth and long-term success.',
          excellence: {
            title: 'Delivering Digital Excellence in Canada',
            body: 'Canadian businesses value quality, innovation, and reliability. We deliver digital solutions that meet these standards while helping you scale globally.',
          },
          services: {
            title: 'Our Digital Services in Canada',
            items: [
              'Custom Web Design & UI/UX',
              'Website Redesign & Optimization',
              'Web & SaaS Development',
              'Search Engine Optimization (SEO)',
              'Digital Marketing & Growth',
              'Website Maintenance, Support & Server Management',
            ],
          },
          whoWeWorkWith: {
            title: 'Who We Work With in Canada',
            items: [
              'Startups & Scaleups',
              'SaaS & Technology Companies',
              'Ecommerce & DTC Brands',
              'Enterprises & Professional Service Firms',
            ],
          },
          whyChoose: {
            title: 'Why Canadian Businesses Choose Belk Digital',
            items: [
              { title: 'Global expertise with local market understanding', description: 'Experience across North American markets.' },
              { title: 'Clean, maintainable, and scalable code', description: 'Built to last and easy to maintain.' },
              { title: 'SEO-driven digital strategies', description: 'Growth-focused approach.' },
              { title: 'Long-term support and optimization', description: 'Your partner for the long haul.' },
            ],
          },
          howWeDeliver: {
            title: 'How We Deliver Projects Globally',
            body: 'Our remote-first delivery model allows us to work efficiently across time zones while maintaining high standards of quality and accountability. Every project follows a structured process focused on clarity, performance, and measurable results.',
          },
          cta: {
            title: 'Ready to Build a High-Performance Digital Presence in Canada?',
            subtitle: 'Let’s discuss how Belk Digital can help your business grow with scalable, future-ready digital solutions.',
          },
        },
      }
    },
    // Trust Section
    trust: {
      badge: 'Our Track Record',
      title: 'Built on Trust & Excellence',
      subtitle: 'Years of experience delivering results that exceed expectations.',
      items: [
        { value: '50+', label: 'Projects Completed' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '12+', label: 'Countries Served' },
        { value: '4', label: 'Years in Business' },
      ],
    },
    // FAQ Preview
    faq: {
      badge: 'Common Questions',
      title: 'Frequently Asked Questions',
      subtitle: 'Quick answers to help you make informed decisions.',
      viewAll: 'View All FAQs',
      items: [
        {
          question: 'How long does it take to build a website?',
          answer: 'Timeline varies based on complexity. A typical business website takes 4-8 weeks, while more complex projects may take 8-12 weeks or more.',
        },
        {
          question: 'What is your pricing structure?',
          answer: 'We offer customized pricing based on your specific needs. Projects typically range from $5,000 to $50,000+ depending on scope and complexity.',
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Absolutely! We work with clients globally and have experience with diverse markets, time zones, and cultural considerations.',
        },
        {
          question: 'What happens after the website is launched?',
          answer: 'We offer ongoing maintenance packages to keep your site secure, updated, and optimized. We\'re partners in your long-term success.',
        },
      ],
    },
    // CTA Section
    cta: {
      title: 'Ready to Transform Your Digital Presence?',
      subtitle: 'Let\'s discuss how we can help your business grow online.',
      button: 'Start Your Project',
      buttonSecondary: 'Schedule a Call',
    },
    whoWeAre: {
      badge: 'Who are we?',
      title: 'We are global digital solutions company building high-performance websites, SaaS platforms, and scalable digital products that drive real business impact.',
      aboutBtn: 'About Belk Digital',
      teamBtn: 'Meet the Team',
    },
    // Footer
    footer: {
      description: 'We craft exceptional digital experiences that help businesses thrive in the modern world.',
      quickLinks: 'Quick Links',
      services: 'Services',
      locations: 'Locations',
      contact: 'Contact',
      email: 'Email Us',
      whatsapp: 'WhatsApp',
      copyright: 'Belk Digital. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    about: {
      aboutUs: { line1: 'About', line2: 'Us' },
      hero: {
        badge: 'Since 2015',
        title: 'Crafting Digital Excellence',
        titleHighlight: 'Since 2015',
        subtitle: 'We combine strategic thinking with technical excellence to create digital solutions that not only look exceptional but deliver measurable business results. From startups to enterprises, we’ve helped organizations worldwide strengthen and scale their digital presence.',
      },
      mission: {
        title: 'Growth-Focused. Performance-Driven. Built for the Long Term.',
        subtitle: '',
        body: 'At Belk Digital, we believe every business deserves a powerful and future-ready digital presence. Our mission is to simplify complex digital challenges through thoughtful design, scalable development, and performance-focused execution. We partner with businesses across industries to build digital platforms that support growth, improve visibility, and create long-term value.',
      },
      stats: {
        title: 'Our Global Impact in Numbers',
        items: [
          { value: '50+', label: 'Clients Served' },
          { value: '80+', label: 'Projects Completed' },
          { value: '10+', label: 'Countries Served' },
          { value: '98%', label: 'Client Satisfaction' },
        ]
      },
      whatWeDo: {
        title: 'What We Do at Belk Digital',
        subtitle: 'We offer end-to-end digital services designed to help businesses compete, scale, and succeed in today’s digital-first world.',
        items: [
          { title: 'Custom Web Design', description: 'Tailored, award-winning designs that capture your brand essence and engage your unique audience.' },
          { title: 'Website Redesign & Optimization', description: 'Transform outdated sites into high-performing assets with improved UX and modern aesthetics.' },
          { title: 'Branding & Identity', description: 'Strategic brand identity design that resonates with your target market and builds lasting trust.' },
          { title: 'UI/UX Design', description: 'User-centered design focused on intuitive navigation, accessibility, and maximizing conversion rates.' },
          { title: 'Web & SaaS Development', description: 'Scalable, secure, and robust development for complex websites and software-as-a-service platforms.' },
          { title: 'Search Engine Optimization (SEO)', description: 'Data-driven SEO strategies to boost organic visibility, rankings, and traffic globally.' },
          { title: 'Maintenance & Support', description: 'Proactive maintenance, security monitoring, and reliable support to keep your digital assets running smoothly.' },
        ],
      },
      values: {
        title: 'Our Core Values That Drive Every Project',
        subtitle: 'Our values guide how we work, how we collaborate, and how we deliver results for our clients.',
        badge: 'Our Values',
        items: [
          { title: 'Innovation in Digital Solutions', description: 'We stay ahead of evolving technologies and trends to deliver modern, future-ready digital experiences.' },
          { title: 'Commitment to Excellence', description: 'Every project receives our full attention to detail, quality, and execution.' },
          { title: 'Efficiency Without Compromise', description: 'We optimize workflows and processes to deliver results faster—without sacrificing quality.' },
          { title: 'Integrity & Transparent Partnerships', description: 'We believe in honest communication, accountability, and long-term client relationships.' },
        ],
      },
      whoWeWorkWith: {
        badge: 'WHO',
        title: 'We Work With',
        heading: 'Who We Work With',
        chapter: 'Chapter',
        items: [
          {
            title: 'Startups & Scaleups',
            description: 'Helping emerging businesses build strong digital foundations and scalable platforms.',
            detail: 'We specialize in navigating the chaotic early stages of growth, providing agile development and scalable architecture that evolves with your funding rounds and user base.'
          },
          {
            title: 'SaaS & Technology Companies',
            description: 'Designing and developing advanced digital products for fast-growing tech-driven businesses.',
            detail: 'From complex dashboard interfaces to high-performance marketing sites, we build the digital infrastructure that powers the world\'s leading technology companies.'
          },
          {
            title: 'Ecommerce & DTC Brands',
            description: 'Creating seamless shopping experiences that drive engagement and conversions.',
            detail: 'We combine emotional brand storytelling with rigorous conversion rate optimization to build online stores that not only look beautiful but sell effectively.'
          },
          {
            title: 'Enterprises & Agencies',
            description: 'Scalable solutions tailored for large organizations and strategic partners.',
            detail: 'We act as a seamless extension of your internal teams, delivering enterprise-grade security, compliance, and reliability for mission-critical digital initiatives.'
          },
        ],
      },
      whyChoose: {
        title: 'Why Choose Belk Digital as Your Digital Partner',
        items: [
          { title: 'Global-First Strategy', description: 'Solutions designed for international reach, scalability, and cross-market performance.' },
          { title: 'Business-Driven Design & Development', description: 'Every decision is guided by business goals, ROI, and measurable outcomes.' },
          { title: 'SEO & Performance at the Core', description: 'Built-in optimization for speed, search visibility, and user experience.' },
          { title: 'Long-Term Partnership Approach', description: 'We grow with our clients, providing ongoing support, optimization, and evolution.' },
        ],
      },
      team: {
        title: 'Expert Digital Talent with a Global Delivery Model',
        subtitle: 'Our distributed team collaborates across time zones to deliver seamless digital solutions worldwide. We combine strategic leadership with hands-on execution to ensure consistency, quality, and reliability on every project.',
        badge: 'Our Team',
        roles: [
          { role: 'Creative & Design Leads', count: '4+', description: '' },
          { role: 'Senior Web & SaaS Developers', count: '12+', description: '' },
          { role: 'UX & Conversion Specialists', count: '6+', description: '' },
          { role: 'Global Project Managers', count: '5+', description: '' },
        ],
      },
      approach: {
        title: 'Our Approach to Delivering Digital Success',
        subtitle: 'Delivering digital success through a proven, structured methodology.',
        stepLabels: ['Step One', 'Step Two', 'Step Three', 'Step Four'],
        badgeLabels: ['Discovery', 'Planning', 'Execution', 'Launch'],
        growth: 'GROWTH',
        items: [
          { title: 'Discovery & Business Understanding', description: 'We start by understanding your goals, audience, market position, and challenges to define a clear strategic direction.' },
          { title: 'Strategy & Technical Planning', description: 'We create a comprehensive roadmap covering design, technology, content structure, and performance goals.' },
          { title: 'Design, Development & Optimization', description: 'Agile execution with a strong focus on quality, usability, scalability, and optimization.' },
          { title: 'Launch, Support & Continuous Growth', description: 'Seamless deployment followed by ongoing support, monitoring, and continuous improvement.' },
        ],
      },
    },
    work: {
      title: 'Proven Digital Results for',
      titleHighlight: 'Global Businesses',
      subtitle: 'Explore real-world projects where we’ve helped businesses in the US, Europe, GCC, and Australia achieve measurable digital growth.',
      badge: 'Case Studies',
      statsTitle: 'Our Impact Across Global Digital Projects',
      caseStudies: {
        title: 'Featured Case Studies',
        filters: ['Web Design', 'Web Development', 'SaaS Platforms', 'SEO & Digital Marketing'],
        ecommerce: { title: 'E-commerce Platform' },
        saas: { title: 'SaaS Dashboard' },
        mobile: { title: 'Mobile App' }
      },
      methodologyTitle: 'Our Methodology for Delivering Consistent Digital Results',
      methodologySubtitle: 'Our proven methodology ensures consistent, high-quality results for every project.',
      methodologyBadge: 'Our Methodology',
      industriesTitle: 'Industry Experience Across Global Markets',
      industriesSubtitle: 'Our experience spans across multiple industries, bringing best practices from each.',
      industriesBadge: 'Industry Experience',
      methodology: [
        { title: 'Strategic Discovery & Business Analysis', description: 'We begin every project with deep research into your business, competitors, and target audience.' },
        { title: 'User-Centered Design & UX Strategy', description: 'Our designs prioritize user experience, ensuring intuitive navigation and engagement.' },
        { title: 'Agile Development & Iteration', description: 'Iterative development with regular check-ins keeps you involved throughout the process.' },
        { title: 'Quality Assurance & Performance Testing', description: 'Rigorous testing across devices and browsers ensures flawless performance.' },
        { title: 'Post-Launch Support & Optimization', description: 'Post-launch maintenance and optimization keep your site performing at its best.' },
      ],
      industries: [
        'E-commerce & Retail',
        'Healthcare & Medical',
        'Finance & Fintech',
        'Real Estate',
        'Education & E-learning',
        'Technology & SaaS',
        'Hospitality & Travel',
        'Professional Services',
      ],
      trust: {
        title: 'Trusted by Businesses for Long-Term Digital Partnerships',
        subtitle: 'Many of our projects are protected by NDAs, but our client retention and satisfaction speak for themselves.',
        body: 'We believe transparency and collaboration are key to successful partnerships. Our process is designed to keep you informed and confident at every step.',
        items: [
          'Transparent Communication',
          'Regular Progress Updates',
          'Clear Deliverables',
          'Post-Launch Support',
        ],
      },
      whyAgain: {
        title: 'Why Clients Choose Belk Digital Again',
        items: [
          { title: 'Consistent delivery across complex projects', description: 'We deliver on time and on budget, every time.' },
          { title: 'Clear communication & transparency', description: 'No jargon, just clear updates and honest advice.' },
          { title: 'Measurable business outcomes', description: 'We focus on KPIs that matter to your growth.' },
          { title: 'Long-term support & optimization', description: 'We stay with you to ensure continued success.' },
        ],
      },
      cta: {
        title: 'Ready to Build Results Like These for Your Business?',
        subtitle: 'Let’s discuss how we can deliver measurable growth for your digital initiatives.',
      },
    },
    blog: {
      title: 'Insights, Strategies & Digital Growth Resources',
      subtitle: 'Stay updated with expert insights, strategies, and best practices in web design, development, SEO, performance optimization, and digital growth. At Belk Digital, we share practical knowledge to help businesses in the US, Europe, GCC, and Australia make informed digital decisions.',
      badge: 'Our Blog',
      readTime: 'read',
      backToBlog: 'Back to Blog',
      categories: {
        all: 'All',
        business: 'Business & Strategy',
        design: 'Design & UX',
        seo: 'SEO & Visibility',
        performance: 'Performance & Optimization'
      },
      whatYouWillLearn: {
        title: 'What You’ll Learn from Our Blog',
        items: [
          'How to build scalable digital platforms',
          'How SEO and performance impact revenue',
          'How design influences conversions',
          'How businesses choose the right digital partners'
        ]
      },
      postCta: {
        title: 'Need Expert Help with This?',
        subtitle: 'If you’re looking to implement these strategies for your business, our team can help you plan, build, and scale with confidence.'
      }
    },
    contact: {
      badge: 'Let’s Start a Conversation',
      title: 'Let’s Start a',
      titleHighlight: 'Conversation',
      subtitle: 'Whether you’re planning a new website, redesigning an existing platform, or scaling a digital product, our team is here to help. Reach out to discuss your goals and explore how Belk Digital can support your growth.',
      form: {
        name: 'Name',
        namePlaceholder: 'Let us know who we’re speaking with',
        email: 'Email',
        emailPlaceholder: 'Where we can reach you',
        subject: 'Subject',
        subjectPlaceholder: 'Briefly describe your inquiry',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project, goals, or questions',
        submit: 'Send Message',
        helperText: 'Share a few details about your project, and our team will get back to you with the next steps. All inquiries are handled confidentially.',
        privacyText: 'We respect your privacy. Your information is never shared.'
      },
      info: {
        title: 'Other Ways to Reach Us',
        email: { label: 'Email Us', desc: 'For general inquiries, project discussions, and partnership opportunities.' },
        whatsapp: { label: 'WhatsApp', desc: 'Quick questions or direct communication with our team.' },
        schedule: { label: 'Book a Call', desc: 'Book a discovery call to discuss your requirements in detail.' },
      },
      headings: {
        formTitle: 'Send Us a Message', // Kept for backward compat if needed temporarily
        otherWays: 'Other Ways to Reach Us',
      },
      global: {
        title: 'We Work Globally',
        description: 'Based in multiple time zones, we collaborate with clients across the United States, Europe, GCC, and Australia. Our remote-first delivery model ensures seamless communication and consistent project execution regardless of location.',
      },
      process: {
        title: 'What Happens After You Contact Us?',
        steps: [
          { title: 'Review', description: 'We review your message and requirements' },
          { title: 'Response', description: 'A team member reaches out within one business day' },
          { title: 'Discovery', description: 'We schedule a discovery call if needed' },
          { title: 'Plan', description: 'You receive clear next steps and recommendations' }
        ]
      },
      who: {
        title: 'Who Typically Reaches Out to Us',
        subtitle: 'If you’re looking for a reliable, long-term digital partner, you’re in the right place.',
        items: [
          'Founders and startup teams',
          'SaaS and technology companies',
          'Ecommerce and DTC brands',
          'Enterprises and professional service firms',
          'Marketing and product teams'
        ]
      },
      before: {
        title: 'Before You Contact Us',
        items: [
          'We do not offer one-size-fits-all solutions',
          'Every project starts with strategy and discovery',
          'We focus on scalable, long-term digital growth',
          'Confidentiality and transparency are standard',
        ]
      },
      finalCta: {
        title: 'Ready to Discuss Your Project?',
        subtitle: 'Tell us about your goals, challenges, and timeline. Our team will help you determine the best path forward for your digital initiatives.',
        button: 'Start a Project'
      }
    },
    faqCategories: [
      {
        name: 'Pricing & Payments',
        questions: [
          { q: 'What is your pricing structure?', a: 'We offer customized pricing based on your specific needs. Projects typically range from $5,000 for basic websites to $50,000+ for complex enterprise solutions.' },
          { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans. Typically, we require 50% upfront and 50% upon completion.' },
          { q: 'Are there any hidden costs?', a: 'No hidden costs. Our quotes are comprehensive and include everything discussed.' },
          { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit cards, and PayPal.' },
        ]
      },
      {
        name: 'Process & Timeline',
        questions: [
          { q: 'How long does it take to build a website?', a: 'Timeline varies based on complexity. A typical business website takes 4-8 weeks.' },
          { q: 'What is your design and development process?', a: 'Our process includes: Discovery → Strategy → Design → Development → Testing → Launch → Support.' },
          { q: 'How many revision rounds are included?', a: 'Our standard packages include 2-3 rounds of revisions per design phase.' },
          { q: 'Will I be involved in the process?', a: 'Absolutely! Your input is crucial. We schedule regular meetings and provide project updates.' },
        ]
      },
      {
        name: 'Global Delivery',
        questions: [
          { q: 'Do you work with international clients?', a: 'Yes! We work with clients globally and have experience across Americas, Europe, Middle East, and Asia-Pacific.' },
          { q: 'What languages do you support?', a: 'We can build multilingual websites in any language.' },
          { q: 'How do you handle different time zones?', a: 'We\'re flexible with meeting times and use asynchronous communication effectively.' },
          { q: 'Do you provide RTL (Right-to-Left) support?', a: 'Yes, we have extensive experience building websites with full RTL support.' },
        ]
      },
      {
        name: 'Support & Maintenance',
        questions: [
          { q: 'What happens after the website is launched?', a: 'We offer ongoing maintenance packages that include security updates, performance monitoring, and support.' },
          { q: 'Do you offer hosting services?', a: 'We help set up reliable hosting solutions and can manage hosting on your behalf.' },
          { q: 'How quickly do you respond to support requests?', a: 'We respond to urgent issues within 2-4 hours and non-urgent requests within 24 hours.' },
          { q: 'Can I update the website content myself?', a: 'Yes! We build websites with user-friendly CMS and provide training.' },
        ]
      },
      {
        name: 'Technical',
        questions: [
          { q: 'What technologies do you use?', a: 'We use modern technologies including React, Next.js, WordPress, Shopify, and custom solutions.' },
          { q: 'Will my website be mobile-responsive?', a: 'Absolutely! All our websites are built mobile-first and are fully responsive.' },
          { q: 'Do you optimize websites for SEO?', a: 'Yes, SEO best practices are built into every website we create.' },
          { q: 'Will I own the website code?', a: 'Yes, upon final payment, you own all website code and assets.' },
        ]
      }
    ],
    privacy: {
      badge: 'Privacy Policy',
      title: 'Your Privacy,',
      titleHighlight: 'Our Priority',
      subtitle: 'At Belk Digital, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.',
      lastUpdated: 'Last Updated: February 2, 2026',
      effectiveDate: 'Effective Date: January 1, 2026',
      sections: {
        informationCollect: {
          title: 'Information We Collect',
          items: [
            'Personal identification information (Name, email address, phone number, etc.)',
            'Usage data and browsing patterns on our website',
            'Technical information including IP address, browser type, and device information',
            'Cookies and similar tracking technologies',
            'Communication preferences and marketing data'
          ]
        },
        howWeUse: {
          title: 'How We Use Your Information',
          items: [
            'To provide, maintain, and improve our services',
            'To communicate with you about updates, offers, and important information',
            'To personalize your experience and deliver relevant content',
            'To analyze usage patterns and optimize our website performance',
            'To comply with legal obligations and protect our rights'
          ]
        },
        dataSecurity: {
          title: 'Data Security',
          items: [
            'We implement industry-standard security measures to protect your data',
            'All sensitive information is encrypted during transmission using SSL/TLS',
            'Access to personal data is restricted to authorized personnel only',
            'Regular security audits and updates to maintain data protection',
            'Secure data storage with encrypted backups'
          ]
        },
        informationSharing: {
          title: 'Information Sharing',
          items: [
            'We do not sell, trade, or rent your personal information to third parties',
            'Data may be shared with trusted service providers who assist our operations',
            'Information may be disclosed when required by law or legal process',
            'Business transfers: data may be transferred in case of merger or acquisition',
            'With your explicit consent for specific purposes'
          ]
        },
        yourRights: {
          title: 'Your Rights',
          items: [
            'Access and review your personal information',
            'Request correction or deletion of your data',
            'Opt-out of marketing communications at any time',
            'Request data portability in a structured format',
            'Lodge a complaint with relevant data protection authorities'
          ]
        },
        cookies: {
          title: 'Cookies Policy',
          items: [
            'Essential cookies for website functionality',
            'Analytics cookies to understand user behavior',
            'Marketing cookies for personalized advertising (with consent)',
            'You can control cookie preferences through your browser settings',
            'Some features may not work properly if cookies are disabled'
          ]
        }
      },
      contact: {
        title: 'Questions About Privacy?',
        description: 'If you have any questions or concerns about our privacy policy, please don\'t hesitate to contact us. Our team is here to help and ensure your privacy concerns are addressed.',
        button: 'Contact Us'
      }
    },
    terms: {
      badge: 'Terms & Conditions',
      title: 'Terms &',
      titleHighlight: 'Conditions',
      subtitle: 'Please read these terms and conditions carefully before using Belk Digital services. These terms govern your use of our website and services.',
      lastUpdated: 'Last Updated: February 2, 2026',
      effectiveDate: 'Effective Date: January 1, 2026',
      sections: {
        acceptance: {
          title: 'Acceptance of Terms',
          items: [
            'By accessing and using Belk Digital services, you accept and agree to be bound by these Terms and Conditions',
            'If you disagree with any part of these terms, you may not access our services',
            'We reserve the right to update these terms at any time without prior notice',
            'Continued use of our services after changes constitutes acceptance of modified terms',
            'These terms apply to all visitors, users, and others who access our services'
          ]
        },
        servicesUsage: {
          title: 'Services & Usage',
          items: [
            'Belk Digital provides web development, design, and digital marketing services',
            'Services are provided on an "as is" and "as available" basis',
            'We reserve the right to modify, suspend, or discontinue services at any time',
            'You must be at least 18 years old to use our services',
            'You are responsible for maintaining the confidentiality of your account'
          ]
        },
        intellectualProperty: {
          title: 'Intellectual Property',
          items: [
            'All content, designs, and materials delivered are owned by Belk Digital until full payment',
            'Upon full payment, specified intellectual property rights transfer to the client',
            'You may not reproduce, distribute, or create derivative works without permission',
            'Trademarks, logos, and service marks displayed are property of their respective owners',
            'Belk Digital retains the right to showcase completed work in our portfolio'
          ]
        },
        payment: {
          title: 'Payment & Billing',
          items: [
            'Payment terms are specified in individual project agreements',
            'All fees are non-refundable unless otherwise stated in writing',
            'Late payments may incur additional charges and service suspension',
            'Prices are subject to change with 30 days notice',
            'You are responsible for all applicable taxes and transaction fees'
          ]
        },
        refund: {
          title: 'Refund & Cancellation',
          items: [
            'Refund eligibility depends on project stage and agreement terms',
            'Cancellations must be submitted in writing to be valid',
            'Work completed up to cancellation point will be charged',
            'Deposits are generally non-refundable except in cases of service non-delivery',
            'Refund requests are reviewed on a case-by-case basis within 14 business days'
          ]
        },
        liability: {
          title: 'Limitation of Liability',
          items: [
            'Belk Digital is not liable for any indirect, incidental, or consequential damages',
            'Our liability is limited to the amount paid for the specific service',
            'We are not responsible for third-party content, services, or products',
            'Service interruptions due to technical issues or force majeure are not grounds for liability',
            'You agree to indemnify Belk Digital against claims arising from your use of services'
          ]
        },
        prohibited: {
          title: 'Prohibited Activities',
          items: [
            'Using services for any unlawful purpose or illegal activity',
            'Attempting to gain unauthorized access to our systems or networks',
            'Transmitting viruses, malware, or any harmful code',
            'Impersonating any person or entity or misrepresenting affiliation',
            'Interfering with or disrupting the integrity of our services'
          ]
        },
        warranties: {
          title: 'Warranties & Disclaimers',
          items: [
            'Services are provided without warranties of any kind, express or implied',
            'We do not guarantee uninterrupted, timely, secure, or error-free service',
            'We do not warrant that results will meet your requirements',
            'Any material downloaded is at your own risk and discretion',
            'We disclaim all warranties including merchantability and fitness for a particular purpose'
          ]
        }
      },
      governing: {
        title: 'Governing Law',
        description: 'These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Belk Digital operates. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.',
        description2: 'By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you have any questions, please contact our legal team.'
      }
    },
  },
  ar: {
    seo: {
      home: {
        title: 'وكالة التحول الرقمي | تصميم وتطوير المواقع',
        description: 'تقدم Belk Digital مواقع عالية الأداء وتطبيقات ويب مخصصة وخدمات SEO لمساعدة الشركات على النمو عالمياً.'
      },
      about: {
        title: 'عن Belk Digital | وكالة رقمية عالمية',
        description: 'تعرف على مهمتنا لتمكين الشركات من خلال التكنولوجيا. نحن فريق من الخبراء المكرسين لنجاحك الرقمي.'
      },
      services: {
        title: 'خدمات تصميم وتطوير المواقع و SEO',
        description: 'استكشف مجموعة خدماتنا الرقمية الشاملة بما في ذلك تصميم المواقع المخصص وتطوير SaaS و SEO القائم على النتائج.'
      },
      work: {
        title: 'أعمالنا ودراسات الحالة',
        description: 'شاهد محفظة مشاريعنا الناجحة. نبني مواقع حائزة على جوائز ومنتجات رقمية للعملاء في جميع أنحاء العالم.',
        caseStudies: {
          ecommerce: { title: 'منصة التجارة الإلكترونية' },
          saas: { title: 'لوحة تحكم SaaS' },
          mobile: { title: 'تطبيق الجوال' }
        }
      },
      locations: {
        title: 'مواقع الخدمة العالمية',
        description: 'نخدم العملاء في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا بتميز رقمي عن بعد.'
      },
      blog: {
        title: 'رؤى رقمية ومدونة تقنية',
        description: 'اقرأ أحدث مقالاتنا حول اتجاهات تطوير الويب واستراتيجيات SEO ونصائح التحول الرقمي.'
      },
      contact: {
        title: 'اتصل بنا | ابدأ مشروعك',
        description: 'جاهز لتحويل حضورك الرقمي؟ تواصل مع فريقنا اليوم للحصول على استشارة مجانية.'
      },
      faq: {
        title: 'الأسئلة الشائعة',
        description: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وأسعارنا وعملياتنا والدعم.'
      }
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      // services: 'خدماتنا',
      // work: 'أعمالنا',
      // locations: 'مواقعنا',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
      bookCall: 'احجز مكالمة',
    },
    hero: {
      badge: 'التميز الرقمي',
      title: 'توسع',
      titleHighlight: '',
      subtitle: 'حلول رقمية عالية الأداء مصممة لتناسب الويب الحديث',
      cta: 'مشاهدة أعمالنا',
      ctaSecondary: 'استعرض خدماتنا',
      ctaContact: 'احجز استشارة',
      socialProof: 'تعتمد عليه العلامات التجارية حول العالم',
      stats: {
        projects: 'مشروع منجز',
        clients: 'عميل سعيد',
        countries: 'دولة خدمناها',
        years: 'سنوات خبرة',
      },
      trust: {
        projects: 'أكثر من 50 مشروعاً',
        performance: 'أداء عالٍ',
        seo: 'مُحسّن لمحركات البحث',
      },
    },
    whyChoose: {
      badge: 'لماذا Belk Digital',
      title: 'خبرة يمكنك الوثوق بها',
      subtitle: 'نجمع بين التفكير الاستراتيجي والتميز التقني لتقديم نتائج مهمة.',
      features: [
        {
          title: 'نهج استراتيجي',
          description: 'كل مشروع يبدأ بفهم أهدافك. نصمم حلولاً تتوافق مع أهداف عملك.',
        },
        {
          title: 'خبرة عالمية',
          description: 'العمل مع عملاء عبر القارات يمنحنا رؤى فريدة حول الأسواق المتنوعة.',
        },
        {
          title: 'تميز تقني',
          description: 'فريقنا يواكب أحدث التقنيات وأفضل الممارسات في تطوير الويب.',
        },
        {
          title: 'شراكة مستمرة',
          description: 'لا نبني ونرحل. نحن ملتزمون بنجاحك على المدى الطويل.',
        },
      ],
    },
    whyWebsite: {
      badge: 'الأساس الرقمي',
      title: 'لماذا يحتاج عملك إلى موقع احترافي',
      subtitle: 'في عالم اليوم الرقمي، موقعك هو أول انطباع للعملاء عن عملك.',
      points: [
        {
          title: 'متاح على مدار الساعة',
          description: 'موقعك يعمل طوال الوقت، يوفر المعلومات ويجذب العملاء حتى أثناء نومك.',
        },
        {
          title: 'المصداقية والثقة',
          description: 'موقع احترافي يؤسس الشرعية ويبني الثقة مع العملاء المحتملين.',
        },
        {
          title: 'وصول أوسع',
          description: 'كسر الحواجز الجغرافية والوصول للعملاء في أي مكان في العالم.',
        },
        {
          title: 'تسويق فعال',
          description: 'التسويق الرقمي عبر موقعك يوفر أفضل عائد مقارنة بالإعلانات التقليدية.',
        },
      ],
    },
    services: {
      badge: 'ماذا نفعل',
      title: 'خدمات الويب، البرمجيات كخدمة، وتحسين محركات البحث العالمية لنمو الأعمال القابلة للتوسع',
      subtitle: 'نقدم خدمات رقمية شاملة تساعد الشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا على بناء وتحسين وتوسيع المنصات الرقمية عالية الأداء.',
      microScope: 'تصميم الويب • تطوير الويب • البرمجيات كخدمة • تحسين محركات البحث • التسويق الرقمي • الدعم',
      common: {
        whoForTitle: 'لمن هذه الخدمة',
        whyChooseTitle: 'لماذا تختار Belk Digital لـ {service}',
        processTitle: 'عمليتنا لتقديم {service}',
        growthTitle: 'كيف تدعم هذه الخدمة نمو الأعمال الطويل الأمد',
        ctaTitle: 'جاهز للبدء بـ {service}؟',
        ctaSubtitle: 'دعنا نناقش أهدافك ونرى كيف يمكننا مساعدتك في التوسع.',
        benefitsTitle: 'فوائد الأعمال من {service} لدينا',
        includesTitle: 'ماذا تشمل {service} لدينا',
      },
      items: [
        {
          title: 'تصميم ويب مخصص وواجهة مستخدم',
          description: 'تصاميم فريدة تجسد جوهر علامتك التجارية وتجذب الزوار.',
          slug: 'custom-web-design',
          detailTitle: 'خدمات تصميم ويب مخصص للأعمال عالية النمو',
          detailSubtitle: 'نقدم تصميم ويب مخصص للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، مع التركيز على الأداء وقابلية التوسع والنتائج القابلة للقياس.',
          whoFor: ['الشركات الناشئة والصاعدة', 'شركات البرمجيات والتكنولوجيا', 'العلامات التجارية للتجارة الإلكترونية', 'المؤسسات والوكالات'],
          includes: [
            'هوية بصرية متوافقة مع العلامة التجارية',
            'تخطيطات متجاوبة وتراعي الجوال أولاً',
            'هياكل صفحات تركز على تجربة المستخدم',
            'أنظمة تصميم مدفوعة بالتحويل',
            'نماذج أولية تفاعلية وتسليم'
          ],
          benefits: [
            'تعزيز مكانة العلامة التجارية',
            'مشاركة وتحويلات أعلى',
            'تحسين الأداء وقابلية التوسع',
            'عائد استثمار أفضل على الاستثمار الرقمي'
          ],
          whyChoose: [
            { title: 'تسليم عالمي', description: 'خبرة مع عملاء أمريكا وأوروبا والخليج وأستراليا.' },
            { title: 'تنفيذ استراتيجي', description: 'ليس مجرد قوالب، بل استراتيجية مفصلة.' },
            { title: 'SEO والأداء', description: 'تحسين مدمج من اليوم الأول.' },
            { title: 'دعم طويل الأمد', description: 'نحن شركاء في نموك.' }
          ],
          process: [
            { title: 'الاكتشاف والتحليل', description: 'فهم علامتك التجارية وأهدافك.' },
            { title: 'الاستراتيجية والتخطيط', description: 'تحديد خارطة الطريق وتجربة المستخدم.' },
            { title: 'التصميم والنماذج', description: 'إنشاء الأصول المرئية والتفاعلات.' },
            { title: 'التسليم والدعم', description: 'انتقال سلس للتطوير.' }
          ],
          growthSupport: 'تضمن خدمات التصميم لدينا بناء وجودك الرقمي للتوسع، وتحسينه للأسواق العالمية، وتصميمه لتحويل الزيارات إلى إيرادات.'
        },
        {
          title: 'إعادة تصميم وتحسين المواقع',
          description: 'تجديد موقعك الحالي بجماليات حديثة وتجربة مستخدم محسنة.',
          slug: 'website-redesign',
          detailTitle: 'خدمات إعادة تصميم وتحسين المواقع للعلامات التجارية الحديثة',
          detailSubtitle: 'نقوم بتجديد المواقع للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، مع التركيز على الجماليات الحديثة ومعدلات التحويل المحسنة.',
          whoFor: ['الشركات القديمة', 'شركات إعادة العلامة التجارية', 'المواقع منخفضة الأداء', 'الشركات الناشئة النامية'],
          includes: [
            'تدقيق كامل لواجهة وتجربة المستخدم',
            'تجديد بصري حديث',
            'تحسين الأداء',
            'إصلاح التجاوب مع الجوال',
            'تحسينات هيكل SEO'
          ],
          benefits: [
            'صورة علامة تجارية متجددة',
            'زيادة الزيارات العضوية',
            'معدلات ارتداد أقل',
            'توليد عملاء محتملين أعلى'
          ],
          whyChoose: [
            { title: 'إعادة تصميم مدفوعة بالبيانات', description: 'قرارات مبنية على التحليلات لا التخمين.' },
            { title: 'نقل سلس', description: 'لا فقدان للبيانات أو توقف.' },
            { title: 'حماية SEO', description: 'نحافظ على تصنيفاتك آمنة.' },
            { title: 'تقنيات جاهزة للمستقبل', description: 'مبنية على تقنيات حديثة.' }
          ],
          process: [
            { title: 'التدقيق والتحليل', description: 'مراجعة الأداء الحالي.' },
            { title: 'الاستراتيجية والمفهوم', description: 'تحديد الشكل والمظهر الجديد.' },
            { title: 'التطوير والنقل', description: 'بناء ونقل المحتوى.' },
            { title: 'الإطلاق والمراقبة', description: 'ضمان عمل كل شيء بشكل مثالي.' }
          ],
          growthSupport: 'إعادة التصميم ليست مجرد تجميل؛ إنها خطوة استراتيجية لتحسين الأداء، و SEO، والاحتفاظ بالمستخدمين للنمو الطويل الأمد.'
        },
        {
          title: 'الهوية التجارية والرقمية',
          description: 'إنشاء هوية علامة تجارية متماسكة تتفاعل مع جمهورك.',
          slug: 'branding',
          detailTitle: 'خدمات الهوية التجارية والرقمية التي تترك أثراً',
          detailSubtitle: 'نصنع هويات علامات تجارية قوية للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، لضمان الاتساق والتأثير.',
          whoFor: ['المشاريع الجديدة', 'شركات إعادة العلامة التجارية', 'العلامات الرقمية أولاً', 'المؤسسات العالمية'],
          includes: [
            'تصميم الشعار والهوية البصرية',
            'إرشادات العلامة التجارية والطباعة',
            'تطوير الصوت والنبرة',
            'أصول وسائل التواصل الاجتماعي',
            'تصميم المواد التسويقية'
          ],
          benefits: [
            'تذكر فوري للعلامة التجارية',
            'تجربة عملاء متسقة',
            'زيادة القيمة المدركة',
            'اتصال عاطفي مع المستخدمين'
          ],
          whyChoose: [
            { title: 'مواءمة استراتيجية', description: 'تصميم يطابق أهداف عملك.' },
            { title: 'جاذبية عبر الثقافات', description: 'هويات تعمل عالمياً.' },
            { title: 'أنظمة قابلة للتوسع', description: 'أصول جاهزة للنمو.' },
            { title: 'إبداع متكامل', description: 'من الشعار إلى الإطلاق الكامل.' }
          ],
          process: [
            { title: 'اكتشاف العلامة', description: 'كشف قيمك الأساسية.' },
            { title: 'الاستراتيجية البصرية', description: 'تحديد المظهر والشعور.' },
            { title: 'تصميم الهوية', description: 'إنشاء الشعارات والأصول.' },
            { title: 'إرشادات العلامة', description: 'توثيق النظام.' }
          ],
          growthSupport: 'هوية العلامة التجارية القوية تبني الثقة والولاء، وهي أسس ضرورية لنمو الأعمال المستدام طويل الأمد.'
        },
        {
          title: 'تصميم واجهة المستخدم وتجربة المستخدم والتحويل',
          description: 'تصميم يركز على المستخدم ويعظم المشاركة والتحويلات.',
          slug: 'ui-ux-design',
          detailTitle: 'خدمات واجهة وتجربة المستخدم لعائد استثمار أفضل',
          detailSubtitle: 'نحسن رحلات المستخدم للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، ونحول الزوار إلى عملاء مخلصين.',
          whoFor: ['منصات SaaS', 'متاجر التجارة الإلكترونية', 'تطبيقات الويب المعقدة', 'مواقع توليد العملاء'],
          includes: [
            'بحث المستخدم وبناء الشخصيات',
            'تخطيط الإطارات وتدفقات المستخدم',
            'نماذج أولية تفاعلية',
            'اختبار سهولة الاستخدام',
            'تحسين معدل التحويل (CRO)'
          ],
          benefits: [
            'معدلات تحويل أعلى',
            'تقليل الإلغاء',
            'تحسين رضا المستخدم',
            'قرارات تصميم مدعومة بالبيانات'
          ],
          whyChoose: [
            { title: 'نهج يركز على المستخدم', description: 'تصميم لأشخاص حقيقيين.' },
            { title: 'التكرار المدفوع بالبيانات', description: 'تحسين مستمر.' },
            { title: 'خبراء الأنظمة المعقدة', description: 'نتعامل مع تحديات UX الصعبة.' },
            { title: 'إمكانية الوصول العالمية', description: 'تصميم شامل للجميع.' }
          ],
          process: [
            { title: 'البحث', description: 'فهم احتياجات المستخدم.' },
            { title: 'الهيكل', description: 'هندسة المعلومات والتدفقات.' },
            { title: 'التصميم', description: 'إنشاء واجهة عالية الدقة.' },
            { title: 'التحقق', description: 'الاختبار مع مستخدمين حقيقيين.' }
          ],
          growthSupport: 'تؤثر تجربة المستخدم المحسنة بشكل مباشر على الإيرادات عن طريق إزالة العوائق وتشجيع إجراءات المستخدم، مما يغذي نمو الأعمال.'
        },
        {
          title: 'تطوير الويب والبرمجيات كخدمة',
          description: 'مواقع وتطبيقات قوية وقابلة للتطوير مبنية بأحدث التقنيات.',
          slug: 'web-development',
          detailTitle: 'خدمات تطوير الويب و SaaS لمنتجات قابلة للتوسع',
          detailSubtitle: 'نبني منتجات رقمية قوية للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، ونضمن القابلية للتوسع والأداء.',
          whoFor: ['الشركات التقنية الناشئة', 'شركات SaaS المؤسسية', 'الوكالات الرقمية', 'مختبرات الابتكار'],
          includes: [
            'تطوير واجهة أمامية مخصص',
            'هندسة الواجهة الخلفية API',
            'تصميم وإدارة قواعد البيانات',
            'تكاملات الطرف الثالث',
            'إعداد البنية التحتية السحابية'
          ],
          benefits: [
            'أداء وسرعة عالية',
            'هندسة آمنة وقابلة للتوسع',
            'تجربة مستخدم سلسة',
            'صيانة وتحديثات سهلة'
          ],
          whyChoose: [
            { title: 'مجموعة تقنية حديثة', description: 'خبراء React, Next.js, Node.js.' },
            { title: 'معايير كود نظيف', description: 'قابل للصيانة وموثق.' },
            { title: 'منهجية رشيقة', description: 'تكرارات وملاحظات سريعة.' },
            { title: 'تكامل DevOps', description: 'CI/CD واختبار آلي.' }
          ],
          process: [
            { title: 'الهندسة', description: 'تخطيط المكدس التقني.' },
            { title: 'التطوير', description: 'سباقات السرعة والبرمجة.' },
            { title: 'الاختبار', description: 'ضمان الجودة وإصلاح الأخطاء.' },
            { title: 'النشر', description: 'الإطلاق المباشر والمراقبة.' }
          ],
          growthSupport: 'تسمح لك قواعد الكود القابلة للتوسع بتنمية منتجك مع قاعدة المستخدمين الخاصة بك دون إعادة كتابة مكلفة أو اختناقات في الأداء.'
        },
        {
          title: 'تحسين محركات البحث (SEO)',
          description: 'تحسين الرؤية وجذب حركة المرور العضوية إلى موقع الويب الخاص بك.',
          slug: 'seo-optimization',
          detailTitle: 'خدمات SEO لنمو عضوي طويل الأمد',
          detailSubtitle: 'نقود الزيارات العضوية للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا من خلال الدقة التقنية واستراتيجية المحتوى.',
          whoFor: ['الشركات المحلية', 'مواقع التجارة الإلكترونية', 'ناشرو المحتوى', 'مقدمو الخدمات'],
          includes: [
            'تدقيق SEO تقني',
            'بحث الكلمات المفتاحية والاستراتيجية',
            'تحسين الصفحة (On-page)',
            'استراتيجية المحتوى والتجميع',
            'بناء الروابط والتواصل'
          ],
          benefits: [
            'نمو زيارات مستدام',
            'تصنيفات بحث أعلى',
            'سلطة علامة تجارية محسنة',
            'توليد عملاء مؤهلين'
          ],
          whyChoose: [
            { title: 'تقنيات القبعة البيضاء', description: 'استراتيجيات آمنة وطويلة الأمد.' },
            { title: 'رؤى مدفوعة بالبيانات', description: 'تقارير منطقية ومفهومة.' },
            { title: 'خبرة تقنية', description: 'نقوم بإصلاح مشاكل الكود العميقة.' },
            { title: 'تركيز عالمي', description: 'SEO متعدد اللغات ودولي.' }
          ],
          process: [
            { title: 'التدقيق', description: 'إيجاد الفرص والأخطاء.' },
            { title: 'الاستراتيجية', description: 'تخطيط الكلمات والمحتوى.' },
            { title: 'التحسين', description: 'تنفيذ الإصلاحات والتغييرات.' },
            { title: 'التقارير', description: 'تتبع التقدم شهرياً.' }
          ],
          growthSupport: 'يوفر SEO أعلى عائد استثمار بمرور الوقت، حيث يبني قناة مستدامة ذاتياً من العملاء المحتملين لعملك.'
        },
        {
          title: 'صيانة ودعم المواقع وإدارة الخوادم',
          description: 'الحفاظ على موقع الويب الخاص بك آمناً ومحدثاً وفي أفضل أداء.',
          slug: 'maintenance',
          detailTitle: 'خدمات الصيانة والدعم لراحة البال',
          detailSubtitle: 'نضمن وقت التشغيل والأمان للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، لتركز أنت عملك الأساسي.',
          whoFor: ['المواقع عالية الزيارات', 'بوابات الشركات', 'منصات التجارة الإلكترونية', 'التطبيقات الحساسة'],
          includes: [
            'مراقبة التشغيل 24/7',
            'تحديثات وتصحيحات الأمان',
            'فحوصات وظيفية يومية',
            'ضبط أداء الخادم',
            'ننسخ احتياطي واستعادة منتظمة'
          ],
          benefits: [
            'مخاطر توقف أقل',
            'وضع أمني معزز',
            'أداء ثابت',
            'تكاليف تقنية يمكن التنبؤ بها'
          ],
          whyChoose: [
            { title: 'مراقبة استباقية', description: 'نصلح المشاكل قبل أن تتفاقم.' },
            { title: 'فريق دعم خبير', description: 'وصول مباشر للمطورين.' },
            { title: 'تقارير شفافة', description: 'تعرف بالضبط ما نقوم به.' },
            { title: 'خطط مرنة', description: 'وسع الدعم حسب حاجتك.' }
          ],
          process: [
            { title: 'الإعداد', description: 'إعداد أدوات المراقبة.' },
            { title: 'التحسين', description: 'الإصلاح الأولي والضبط.' },
            { title: 'العناية الروتينية', description: 'مهام أسبوعية/شهرية.' },
            { title: 'الاستجابة للطوارئ', description: 'تحرك سريع عند الحاجة.' }
          ],
          growthSupport: 'البنية التحتية الموثوقة هي العمود الفقري للنمو الرقمي. نحافظ على أساسك قوياً لتبني عليه.'
        },
        {
          title: 'تطوير Shopify وحلول التجارة الإلكترونية',
          description: 'بناء متاجر إلكترونية قوية مع Shopify تدفع المبيعات والنمو.',
          slug: 'shopify-development',
          detailTitle: 'تطوير Shopify وحلول التجارة الإلكترونية للعلامات التجارية المتنامية',
          detailSubtitle: 'نقوم بإنشاء متاجر Shopify عالية التحويل للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا، مُحسّنة لتحقيق أقصى قدر من الإيرادات ورضا العملاء.',
          whoFor: ['شركات التجارة الإلكترونية الناشئة', 'علامات DTC', 'أعمال التجزئة', 'أسواق الإنترنت'],
          includes: [
            'تطوير قالب Shopify مخصص',
            'تكاملات وتطبيقات الطرف الثالث',
            'إعداد بوابة الدفع',
            'نظام إدارة المخزون',
            'تحسين معدل التحويل'
          ],
          benefits: [
            'زيادة المبيعات عبر الإنترنت',
            'عمليات مبسطة',
            'تجربة مستخدم محسّنة',
            'تسوق متوافق مع الجوال أولاً'
          ],
          whyChoose: [
            { title: 'خبراء Shopify', description: 'مطورون معتمدون بنتائج مثبتة.' },
            { title: 'تصميم يركز على التحويل', description: 'مصمم لزيادة المبيعات.' },
            { title: 'بنية قابلة للتوسع', description: 'ينمو مع عملك.' },
            { title: 'دعم كامل الخدمات', description: 'من الإعداد إلى التوسع.' }
          ],
          process: [
            { title: 'الاكتشاف والتخطيط', description: 'فهم منتجاتك وأهدافك.' },
            { title: 'التصميم والتطوير', description: 'إنشاء متجرك الفريد.' },
            { title: 'التكامل والاختبار', description: 'إضافة الميزات وفحوصات الجودة.' },
            { title: 'الإطلاق والتحسين', description: 'البدء وتحسين التحويلات.' }
          ],
          growthSupport: 'يوفر Shopify منصة قوية وقابلة للتوسع لنمو التجارة الإلكترونية. نساعدك على الاستفادة منها إلى أقصى إمكاناتها لتحقيق إيرادات مستدامة.'
        },
        {
          title: 'تطوير CMS مخصص وإدارة المحتوى',
          description: 'مكّن فريقك بأنظمة إدارة محتوى مصممة خصيصاً.',
          slug: 'custom-cms',
          detailTitle: 'تطوير CMS مخصص للتحكم المطلق في المحتوى',
          detailSubtitle: 'نبني أنظمة إدارة محتوى مخصصة للشركات في الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا التي تحتاج إلى تحكم كامل في محتواها الرقمي.',
          whoFor: ['شركات النشر', 'الأعمال المؤسسية', 'منظمات متعددة العلامات التجارية', 'المواقع الغنية بالمحتوى'],
          includes: [
            'بنية CMS مخصصة',
            'تصميم لوحة إدارة مخصصة',
            'التحكم في الوصول حسب الدور',
            'قدرات تكامل API',
            'دعم متعدد اللغات'
          ],
          benefits: [
            'التحكم الكامل في المحتوى',
            'سير عمل مبسّط',
            'أمان محسّن',
            'وظائف فريدة'
          ],
          whyChoose: [
            { title: 'قابل للتخصيص بالكامل', description: 'مبني تماماً حسب مواصفاتك.' },
            { title: 'قابل للتوسع ومستقبلي', description: 'ينمو مع احتياجاتك.' },
            { title: 'واجهة سهلة الاستخدام', description: 'سهلة للفرق غير التقنية.' },
            { title: 'محسّن للأداء', description: 'سريع وفعال.' }
          ],
          process: [
            { title: 'تحليل المتطلبات', description: 'تحديد احتياجات المحتوى الخاص بك.' },
            { title: 'تصميم البنية', description: 'تخطيط هيكل النظام.' },
            { title: 'التطوير والاختبار', description: 'بناء والتحقق من الميزات.' },
            { title: 'التدريب والنشر', description: 'إطلاق وتأهيل فريقك.' }
          ],
          growthSupport: 'يمنحك CMS المخصص المرونة والتحكم الذي لا يمكن للحلول الجاهزة أن توفره، مما يمكّن تجارب رقمية فريدة.'
        },
      ],
      viewAll: 'عرض جميع الخدمات',
      learnMore: 'اقرأ المزيد',
      includes: 'ماذا يشمل',
      benefits: 'الفوائد',
      whatWeCover: {
        title: 'ما تغطيه خدماتنا الرقمية',
        items: [
          { title: 'تصميم وتطوير بقيادة الاستراتيجية', description: 'نحن نائم التصميم والكود مع أهداف عملك من اليوم الأول.' },
          { title: 'هندسة قابلة للتطوير وكود نظيف', description: 'بناء أنظمة تنمو مع عملك دون ديون تقنية.' },
          { title: 'بناء مدفوع بالأداء وتحسين محركات البحث', description: 'محسن لمحركات البحث والسرعة لزيادة الوصول.' },
          { title: 'أنظمة آمنة وقابلة للصيانة وجاهزة للمستقبل', description: 'الأمان وقابلية الصيانة مدمجة في عمليتنا الأساسية.' },
        ],
      },
      whoFor: {
        title: 'من نصمم خدماتنا لهم',
        items: [
          { title: 'الشركات الناشئة والصاعدة', description: 'إطلاق وتوسيع المنتجات الرقمية بسرعة.' },
          { title: 'شركات البرمجيات كخدمة والتكنولوجيا', description: 'بناء منصات وأدوات معقدة.' },
          { title: 'التجارة الإلكترونية والعلامات التجارية', description: 'دفع المبيعات من خلال تجارب تسوق محسنة.' },
          { title: 'المؤسسات والوكالات', description: 'التحول الرقمي واسع النطاق ودعم الشركاء.' },
        ],
      },
      whyChoose: {
        title: 'لماذا تختار Belk Digital للخدمات الرقمية',
        items: [
          { title: 'تسليم خدمات عالمي أولاً', description: 'خبرة في التسليم لأسواق الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي.' },
          { title: 'استراتيجية رقمية مدفوعة بالأعمال', description: 'نركز على المقاييس التي تهم أرباحك النهائية.' },
          { title: 'تحسين محركات البحث والأداء في الصميم', description: 'التميز التقني الذي يقود النمو العضوي.' },
          { title: 'دعم وشراكة طويلة الأمد', description: 'نحن شريكك التكنولوجي على المدى الطويل.' },
        ],
      },
      process: {
        title: 'عمليتنا لتقديم حلول رقمية عالية التأثير',
        items: [
          { title: 'الاكتشاف وتحليل المتطلبات', description: 'فهم تحدياتك وفرصك الفريدة.' },
          { title: 'الاستراتيجية والتخطيط الفني', description: 'إنشاء خارطة طريق مفصلة للنجاح.' },
          { title: 'التصميم والتطوير والتحسين', description: 'التنفيذ بدقة ومنهجية مرنة.' },
          { title: 'الإطلاق والدعم والنمو المستمر', description: 'ضمان إطلاق سلس وتحسين مستمر.' },
        ],
      },
      cta: {
        title: 'مستعد لتوسيع نطاق عملك بخدمات رقمية خبيرة؟',
        subtitle: 'دعنا نناقش أهدافك ونبني حلاً يقود نمواً ملموساً.',
        button: 'ابدأ مشروعك',
        buttonSecondary: 'جدولة مكالمة',
      }
    },
    process: {
      badge: 'منهجيتنا',
      title: 'من الرؤية إلى الواقع',
      subtitle: 'منهجية مثبتة تقدم نتائج استثنائية في كل مرة.',
      steps: [
        { number: '٠١', title: 'الاكتشاف', description: 'نتعمق في فهم عملك وأهدافك وجمهورك المستهدف.' },
        { number: '٠٢', title: 'الاستراتيجية', description: 'تطوير خطة شاملة تتوافق مع أهدافك.' },
        { number: '٠٣', title: 'التصميم', description: 'إنشاء تصاميم مذهلة تعكس علامتك التجارية.' },
        { number: '٠٤', title: 'التطوير', description: 'بناء موقعك بكود نظيف وأداء مثالي.' },
        { number: '٠٥', title: 'الإطلاق', description: 'اختبار دقيق ونشر سلس لتحقيق رؤيتك.' },
        { number: '٠٦', title: 'النمو', description: 'تحسين مستمر ودعم لضمان النجاح المستمر.' },
      ],
    },
    locations: {
      badge: 'وصول عالمي',
      title: 'خدمات رقمية عالمية عبر الولايات المتحدة وأوروبا ودول مجلس التعاون الخليجي وأستراليا',
      subtitle: 'نحن نتشارك مع الشركات عبر الأسواق العالمية الرئيسية، ونقدم حلول الويب، SaaS، SEO، والحلول الرقمية المصممة حسب الاحتياجات الإقليمية.',
      locationsGridTitle: 'مواقع خدماتنا العالمية',
      viewAll: 'عرض جميع المواقع',
      regions: {
        usa: 'الولايات المتحدة (خدمات رقمية أمريكية)',
        uae: 'الإمارات العربية المتحدة (خدمات رقمية خليجية)',
        ksa: 'المملكة العربية السعودية (خدمات رقمية خليجية)',
        europe: 'المملكة المتحدة وأوروبا',
        australia: 'أستراليا (منطقة آسيا والمحيط الهادئ)',
      },
      servicesWeProvide: {
        title: 'الخدمات الرقمية التي نقدمها عبر جميع المناطق',
        items: [
          'تصميم مواقع ويب مخصص و UI/UX',
          'تطوير الويب و SaaS',
          'إعادة تصميم وتحسين المواقع',
          'تحسين محركات البحث (SEO)',
          'التسويق الرقمي والنمو',
          'الصيانة والدعم وإدارة الخوادم',
        ],
      },
      howWeWork: {
        title: 'كيف نقدم المشاريع عالمياً',
        items: [
          { title: 'تعاون عن بعد أولاً', description: 'تعاون سلس عبر المناطق الزمنية المختلفة.' },
          { title: 'مديرو مشاريع مخصصون', description: 'تواصل واضح ونقطة اتصال واحدة.' },
          { title: 'استراتيجية تراعي المنطقة', description: 'تنفيذ مصمم خصيصاً لاحتياجات السوق المحلية.' },
          { title: 'تسليم آمن وقابل للتطوير', description: 'معايير عالية للأمان والأداء.' },
        ],
      },
      dontSeeLocation: {
        title: 'خدمة العملاء في جميع أنحاء العالم خارج المواقع المدرجة',
        description: 'نعمل مع عملاء من جميع أنحاء العالم. بغض النظر عن مكان وجودك، يمكننا تقديم حلول رقمية استثنائية مصممة لسوقك.',
        button: 'تحدث إلى فريقنا العالمي',
      },
      whyChoose: {
        title: 'لماذا تختار الشركات العالمية Belk Digital',
        items: [
          { title: 'خبرة مثبتة في 45+ دولة', description: 'نحن نفهم المشهد الرقمي العالمي.' },
          { title: 'تسليم عالمي بفهـم محلي', description: 'سد الفجوة بين المعايير العالمية والاحتياجات المحلية.' },
          { title: 'تطوير يركز على SEO والأداء', description: 'بناء من أجل الرؤية والسرعة.' },
          { title: 'نهج الشراكة طويلة الأمد', description: 'نحن مستثمرون في نموك المستدام.' },
        ],
      },
      cta: {
        title: 'هل أنت مستعد للعمل مع شريك رقمي عالمي؟',
        subtitle: 'دعنا نناقش كيف يمكننا دعم عملك—أينما كنت.',
      },
      cityPages: {
        usa: {
          title: 'شركة خدمات رقمية في الولايات المتحدة',
          intro: 'تقدم Belk Digital خدمات تصميم الويب وتطوير الويب وحلول SaaS وتحسين محركات البحث (SEO) والتسويق الرقمي للشركات في جميع أنحاء الولايات المتحدة. نساعد الشركات على المنافسة والتوسع والنمو في واحدة من أكثر الأسواق الرقمية تنافسية في العالم.',
          excellence: {
            title: 'تقديم التميز الرقمي في الولايات المتحدة',
            body: 'تطلب الشركات الأمريكية السرعة والأداء والابتكار. نقوم ببناء حلول رقمية تلبي التوقعات المؤسسية مع دعم النمو طويل الأمد والمرونة.',
          },
          services: {
            title: 'خدماتنا الرقمية في الولايات المتحدة',
            items: [
              'تصميم مواقع ويب مخصص و UI/UX',
              'إعادة تصميم وتحسين المواقع',
              'تطوير الويب و SaaS',
              'تحسين محركات البحث (SEO)',
              'التسويق الرقمي والنمو',
              'الصيانة والدعم وإدارة الخوادم',
            ],
          },
          whoWeWorkWith: {
            title: 'من نعمل معهم في الولايات المتحدة',
            items: [
              'الشركات الناشئة والشركات متسارعة النمو',
              'شركات SaaS والتكنولوجيا',
              'العلامات التجارية للتجارة الإلكترونية و DTC',
              'المؤسسات وشركات الخدمات المهنية',
            ],
          },
          whyChoose: {
            title: 'لماذا تختار الشركات الأمريكية Belk Digital',
            items: [
              { title: 'خبرة في العمل مع شركات عالمية ومقرها الولايات المتحدة', description: 'نحن نفهم مشهد السوق الأمريكي.' },
              { title: 'تطوير يعتمد على الأداء و SEO', description: 'البناء من أجل السرعة والرؤية من اليوم الأول.' },
              { title: 'هندسة قابلة للتطوير للشركات النامية', description: 'حلول تنمو مع شركتك.' },
              { title: 'دعم موثوق طويل الأمد', description: 'نحن ندعمك لما بعد الإطلاق.' },
            ],
          },
          howWeDeliver: {
            title: 'كيف نقدم المشاريع عالمياً',
            body: 'يسمح لنا نموذج التسليم عن بعد بالعمل بكفاءة عبر المناطق الزمنية مع الحفاظ على معايير عالية من الجودة والمساءلة. يتبع كل مشروع عملية منظمة تركز على الوضوح والأداء والنتائج القابلة للقياس.',
          },
          cta: {
            title: 'مستعد لبناء حضور رقمي عالي الأداء في الولايات المتحدة؟',
            subtitle: 'دعنا نناقش كيف يمكن لـ Belk Digital مساعدة عملك على النمو بحلول رقمية قابلة للتطوير وجاهزة للمستقبل.',
          },
        },
        europe: {
          title: 'شركة خدمات رقمية في المملكة المتحدة وأوروبا',
          intro: 'تقدم Belk Digital خدمات تصميم ويب مخصص وتطوير SaaS و SEO وتسويق رقمي للشركات في جميع أنحاء المملكة المتحدة وأوروبا. نحن ندعم المؤسسات التي تبحث عن حلول رقمية موثوقة ومتوافقة وقابلة للتطوير.',
          excellence: {
            title: 'تقديم التميز الرقمي في أوروبا',
            body: 'تتطلب الشركات الأوروبية توازناً بين الابتكار وسهولة الاستخدام والوعي التنظيمي. تم بناء حلولنا مع وضع الأداء وإمكانية الوصول وقابلية التوسع في الاعتبار.',
          },
          services: {
            title: 'خدماتنا الرقمية في أوروبا',
            items: [
              'تصميم مواقع ويب مخصص و UI/UX',
              'إعادة تصميم وتحسين المواقع',
              'تطوير الويب و SaaS',
              'تحسين محركات البحث (SEO)',
              'التسويق الرقمي والنمو',
              'الصيانة والدعم وإدارة الخوادم',
            ],
          },
          whoWeWorkWith: {
            title: 'من نعمل معهم في أوروبا',
            items: [
              'الشركات الناشئة والشركات متسارعة النمو',
              'شركات SaaS والتكنولوجيا',
              'العلامات التجارية للتجارة الإلكترونية و DTC',
              'المؤسسات وشركات الخدمات المهنية',
            ],
          },
          whyChoose: {
            title: 'لماذا تختار الشركات الأوروبية Belk Digital',
            items: [
              { title: 'تسليم عالمي مع تنفيذ يراعي المنطقة', description: 'مصممة خصيصاً للمعايير واللوائح الأوروبية.' },
              { title: 'ممارسات تطوير نظيفة وقابلة للتطوير ومتوافقة', description: 'التركيز على معايير GDPR وإمكانية الوصول.' },
              { title: 'استراتيجيات SEO متوافقة مع الأسواق الأوروبية', description: 'استهداف نية البحث المحلية والإقليمية.' },
              { title: 'نهج الشراكة طويلة الأمد', description: 'بناء علاقات دائمة.' },
            ],
          },
          howWeDeliver: {
            title: 'كيف نقدم المشاريع عالمياً',
            body: 'يسمح لنا نموذج التسليم عن بعد بالعمل بكفاءة عبر المناطق الزمنية مع الحفاظ على معايير عالية من الجودة والمساءلة. يتبع كل مشروع عملية منظمة تركز على الوضوح والأداء والنتائج القابلة للقياس.',
          },
          cta: {
            title: 'مستعد لبناء حضور رقمي عالي الأداء في أوروبا؟',
            subtitle: 'دعنا نناقش كيف يمكن لـ Belk Digital مساعدة عملك على النمو بحلول رقمية قابلة للتطوير وجاهزة للمستقبل.',
          },
        },
        gcc: {
          title: 'شركة خدمات رقمية في دول مجلس التعاون الخليجي',
          intro: 'تقدم Belk Digital خدمات تطوير الويب وحلول SaaS و SEO والتسويق الرقمي للشركات في جميع أنحاء منطقة الخليج. نحن ندعم الشركات سريعة النمو في بناء أسس رقمية قوية.',
          excellence: {
            title: 'تقديم التميز الرقمي في دول الخليج',
            body: 'سوق دول مجلس التعاون الخليجي يتطور بسرعة وتنافسي للغاية. نساعد الشركات على إنشاء حضور رقمي قوي من خلال منصات قابلة للتطوير وآمنة وجاهزة للمستقبل.',
          },
          services: {
            title: 'خدماتنا الرقمية في دول الخليج',
            items: [
              'تصميم مواقع ويب مخصص و UI/UX',
              'إعادة تصميم وتحسين المواقع',
              'تطوير الويب و SaaS',
              'تحسين محركات البحث (SEO)',
              'التسويق الرقمي والنمو',
              'الصيانة والدعم وإدارة الخوادم',
            ],
          },
          whoWeWorkWith: {
            title: 'من نعمل معهم في دول الخليج',
            items: [
              'الشركات الناشئة والشركات متسارعة النمو',
              'شركات SaaS والتكنولوجيا',
              'العلامات التجارية للتجارة الإلكترونية و DTC',
              'المؤسسات وشركات الخدمات المهنية',
            ],
          },
          whyChoose: {
            title: 'لماذا تختار شركات الخليج Belk Digital',
            items: [
              { title: 'خبرة في خدمة أسواق دولية متنوعة', description: 'جلب الجودة العالمية للمشاريع المحلية.' },
              { title: 'استراتيجيات رقمية تركز على الأعمال', description: 'حلول تدفع عائد الاستثمار.' },
              { title: 'تطوير يعتمد على الأداء والأمان', description: 'مواقع ويب سريعة وآمنة وموثوقة.' },
              { title: 'تواصل وتسليم موثوق', description: 'إدارة مشاريع احترافية.' },
            ],
          },
          howWeDeliver: {
            title: 'كيف نقدم المشاريع عالمياً',
            body: 'يسمح لنا نموذج التسليم عن بعد بالعمل بكفاءة عبر المناطق الزمنية مع الحفاظ على معايير عالية من الجودة والمساءلة. يتبع كل مشروع عملية منظمة تركز على الوضوح والأداء والنتائج القابلة للقياس.',
          },
          cta: {
            title: 'مستعد لبناء حضور رقمي عالي الأداء في دول الخليج؟',
            subtitle: 'دعنا نناقش كيف يمكن لـ Belk Digital مساعدة عملك على النمو بحلول رقمية قابلة للتطوير وجاهزة للمستقبل.',
          },
        },
        australia: {
          title: 'شركة خدمات رقمية في أستراليا',
          intro: 'تتعاون Belk Digital مع الشركات الأسترالية لتقديم حلول تصميم الويب وتطوير الويب و SEO والتسويق الرقمي التي تدعم النمو المستدام والنجاح طويل الأمد.',
          excellence: {
            title: 'Delivering Digital Excellence in Australia',
            body: 'Australian businesses value reliability, performance, and clarity. Our digital solutions are designed to perform consistently while scaling with business growth.',
          },
          services: {
            title: 'Our Digital Services in Australia',
            items: [
              'تصميم مواقع ويب مخصص و UI/UX',
              'إعادة تصميم وتحسين المواقع',
              'تطوير الويب و SaaS',
              'تحسين محركات البحث (SEO)',
              'التسويق الرقمي والنمو',
              'الصيانة والدعم وإدارة الخوادم',
            ],
          },
          whoWeWorkWith: {
            title: 'من نعمل معهم في أستراليا',
            items: [
              'الشركات الناشئة والشركات متسارعة النمو',
              'شركات SaaS والتكنولوجيا',
              'العلامات التجارية للتجارة الإلكترونية و DTC',
              'المؤسسات وشركات الخدمات المهنية',
            ],
          },
          whyChoose: {
            title: 'لماذا تختار الشركات الأسترالية Belk Digital',
            items: [
              { title: 'خبرة عالمية مع فهم للسوق المحلي', description: 'نربطك بأفضل الممارسات العالمية.' },
              { title: 'كود نظيف وقابل للصيانة وقابل للتطوير', description: 'بني ليدوم وسهل الصيانة.' },
              { title: 'استراتيجيات رقمية تعتمد على SEO', description: 'نهج يركز على النمو.' },
              { title: 'دعم وتحسين طويل الأمد', description: 'شريكك للمدى الطويل.' },
            ],
          },
          howWeDeliver: {
            title: 'كيف نقدم المشاريع عالمياً',
            body: 'يسمح لنا نموذج التسليم عن بعد بالعمل بكفاءة عبر المناطق الزمنية مع الحفاظ على معايير عالية من الجودة والمساءلة. يتبع كل مشروع عملية منظمة تركز على الوضوح والأداء والنتائج القابلة للقياس.',
          },
          cta: {
            title: 'مستعد لبناء حضور رقمي عالي الأداء في أستراليا؟',
            subtitle: 'دعنا نناقش كيف يمكن لـ Belk Digital مساعدة عملك على النمو بحلول رقمية قابلة للتطوير وجاهزة للمستقبل.',
          },
        },
      }
    },
    trust: {
      badge: 'سجلنا الحافل',
      title: 'مبني على الثقة والتميز',
      subtitle: 'سنوات من الخبرة في تقديم نتائج تفوق التوقعات.',
      items: [
        { value: '50+', label: 'مشاريع مكتملة' },
        { value: '98%', label: 'رضا العملاء' },
        { value: '12+', label: 'دول نخدمها' },
        { value: '4', label: 'سنوات خبرة' },
      ],
    },
    faq: {
      badge: 'أسئلة شائعة',
      title: 'الأسئلة الأكثر تكراراً',
      subtitle: 'إجابات سريعة لمساعدتك في اتخاذ قرارات مستنيرة.',
      viewAll: 'عرض جميع الأسئلة',
      items: [
        {
          question: 'كم يستغرق بناء موقع ويب؟',
          answer: 'يختلف الوقت حسب التعقيد. الموقع التجاري النموذجي يستغرق 4-8 أسابيع، بينما المشاريع الأكثر تعقيداً قد تستغرق 8-12 أسبوعاً أو أكثر.',
        },
        {
          question: 'ما هي هيكلة الأسعار لديكم؟',
          answer: 'نقدم أسعاراً مخصصة بناءً على احتياجاتك. المشاريع تتراوح عادة من 5,000$ إلى 50,000$+ حسب النطاق والتعقيد.',
        },
        {
          question: 'هل تعملون مع عملاء دوليين؟',
          answer: 'بالتأكيد! نعمل مع عملاء عالمياً ولدينا خبرة مع أسواق متنوعة ومناطق زمنية مختلفة.',
        },
        {
          question: 'ماذا يحدث بعد إطلاق الموقع؟',
          answer: 'نقدم باقات صيانة مستمرة للحفاظ على موقعك آمناً ومحدثاً ومحسناً. نحن شركاء في نجاحك.',
        },
      ],
    },
    cta: {
      title: 'مستعد لتحويل حضورك الرقمي؟',
      subtitle: 'دعنا نناقش كيف يمكننا مساعدة عملك على النمو عبر الإنترنت.',
      button: 'ابدأ مشروعك',
      buttonSecondary: 'جدولة مكالمة',
    },
    footer: {
      description: 'نصنع تجارب رقمية استثنائية تساعد الشركات على الازدهار في العالم الحديث.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      locations: 'المواقع',
      contact: 'تواصل معنا',
      email: 'راسلنا',
      whatsapp: 'واتساب',
      copyright: 'Belk Digital. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    about: {
      aboutUs: { line1: 'عن', line2: 'نا' },
      hero: {
        title: 'صناعة التميز الرقمي',
        titleHighlight: 'منذ 2015',
        subtitle: 'نجمع بين التفكير الاستراتيجي والتميز التقني لإنشاء حلول رقمية لا تبدو استثنائية فحسب، بل تحقق نتائج أعمال قابلة للقياس. من الشركات الناشئة إلى المؤسسات، ساعدنا المنظمات في جميع أنحاء العالم على تعزيز وتوسيع حضورها الرقمي.',
        badge: 'منذ 2015',
      },
      mission: {
        title: 'تركز على النمو. مدفوعة بالأداء. مبنية للمدى الطويل.',
        subtitle: '',
        body: 'في Belk Digital، نؤمن أن كل شركة تستحق حضوراً رقمياً قوياً وجاهزاً للمستقبل. مهمتنا هي تبسيط التحديات الرقمية المعقدة من خلال التصميم المدروس والتطوير القابل للتوسع والتنفيذ الذي يركز على الأداء. نحن نتشارك مع الشركات عبر الصناعات لبناء منصات رقمية تدعم النمو وتحسن الرؤية وتخلق قيمة طويلة الأجل.',
      },
      stats: {
        title: 'تأثيرنا العالمي بالأرقام',
        items: [
          { value: '50+', label: 'عميل تم خدمتهم' },
          { value: '80+', label: 'مشروع مكتمل' },
          { value: '10+', label: 'دولة خدمناها' },
          { value: '98%', label: 'رضا العملاء' },
        ]
      },
      whatWeDo: {
        title: 'ماذا نفعل في Belk Digital',
        subtitle: 'نقدم خدمات رقمية شاملة مصممة لمساعدة الشركات على المنافسة والتوسع والنجاح في عالم اليوم الذي يعتمد الرقمية أولاً.',
        items: [
          { title: 'تصميم ويب مخصص وواجهة مستخدم', description: 'تصاميم فريدة تتوافق مع العلامة التجارية وتجذب المستخدمين وتحسن الاستخدام وتدفع التحويلات عبر جميع الأجهزة.' },
          { title: 'تطوير الويب والبرمجيات كخدمة', description: 'مواقع ويب ومنصات SaaS قوية وقابلة للتطوير مبنية بتقنيات حديثة لدعم الأداء والأمان والنمو.' },
          { title: 'إعادة تصميم وتحسين المواقع', description: 'تجديد المواقع الحالية بتجربة مستخدم محسنة وتصميم حديث وتحسينات في الأداء تحقق نتائج أفضل.' },
          { title: 'تحسين محركات البحث (SEO)', description: 'حلول SEO استراتيجية تركز على الرؤية طويلة الأمد والنمو العضوي وأداء البحث عبر الأسواق العالمية.' },
          { title: 'التسويق الرقمي والنمو', description: 'استراتيجيات تسويق مدفوعة بالبيانات مصممة لزيادة الوصول والمشاركة وتأثير الأعمال القابل للقياس.' },
          { title: 'الصيانة والدعم وإدارة الخوادم', description: 'دعم مستمر للحفاظ على منصاتك الرقمية آمنة ومحسنة وتعمل بأقصى أداء.' },
        ],
      },
      values: {
        title: 'قيمنا الأساسية التي تقود كل مشروع',
        subtitle: 'قيمنا توجه كيف نعمل وكيف نتعاون وكيف نقدم النتائج لعملائنا.',
        badge: 'قيمنا',
        items: [
          { title: 'الابتكار في الحلول الرقمية', description: 'نبقى في طليعة التقنيات والاتجاهات المتطورة لتقديم تجارب رقمية حديثة وجاهزة للمستقبل.' },
          { title: 'الالتزام بالتميز', description: 'يحظى كل مشروع باهتمامنا الكامل بالتفاصيل والجودة والتنفيذ.' },
          { title: 'الكفاءة دون مساومة', description: 'نعمل على تحسين سير العمل والعمليات لتقديم النتائج بشكل أسرع دون التضحية بالجودة.' },
          { title: 'النزاهة والشراكات الشفافة', description: 'نؤمن بالتواصل الصادق والمساءلة والعلاقات الطويلة الأمد مع العملاء.' },
        ],
      },
      whoWeWorkWith: {
        badge: 'من',
        title: 'نعمل معهم',
        heading: 'من نعمل معهم',
        chapter: 'الفصل',
        items: [
          {
            title: 'الشركات الناشئة والشركات متسارعة النمو',
            description: 'مساعدة الشركات الناشئة على بناء أسس رقمية قوية ومنصات قابلة للتطوير.',
            detail: 'نحن متخصصون في التنقل في المراحل المبكرة من الفوضى للنمو، وتوفير تطوير مرن وهندسة قابلة للتطوير تتطور مع جولات التمويل وقاعدة المستخدمين الخاصة بك.',
          },
          {
            title: 'شركات البرمجيات كخدمة والتكنولوجيا',
            description: 'تصميم وتطوير منتجات رقمية متقدمة للشركات التقنية سريعة النمو.',
            detail: 'من واجهات لوحات المعلومات المعقدة إلى مواقع التسويق عالية الأداء، نقوم ببناء البنية التحتية الرقمية التي تدعم شركات التكنولوجيا الرائدة في العالم.',
          },
          {
            title: 'العلامات التجارية للتجارة الإلكترونية و DTC',
            description: 'إنشاء تجارب تسوق سلسة تقود المشاركة والتحويلات.',
            detail: 'نجمع بين سرد قصص العلامة التجارية العاطفي وتحسين معدل التحويل الصارم لبناء متاجر عبر الإنترنت لا تبدو جميلة فحسب بل تبيع بفعالية.',
          },
          {
            title: 'المؤسسات وشركات الخدمات المهنية',
            description: 'حلول قابلة للتطوير مصممة للمؤسسات الكبيرة والشركاء الاستراتيجيين.',
            detail: 'نعمل كملحق سلس لفرقك الداخلية، ونقدم أماناً وامتثالاً وموثوقية على مستوى المؤسسات للمبادرات الرقمية المهمة.',
          },
        ],
      },
      whyChoose: {
        title: 'لماذا تختار Belk Digital كشريك رقمي',
        items: [
          { title: 'استراتيجية عالمية أولاً', description: 'حلول مصممة للوصول الدولي والقابلية للتوسع والأداء عبر الأسواق.' },
          { title: 'تصميم وتطوير موجه بالأعمال', description: 'كل قرار يسترشد بأهداف العمل وعائد الاستثمار والنتائج القابلة للقياس.' },
          { title: 'SEO والأداء في الصميم', description: 'تحسين مدمج للسرعة ورؤية البحث وتجربة المستخدم.' },
          { title: 'نهج الشراكة طويلة الأمد', description: 'ننمو مع عملائنا، ونقدم الدعم المستمر والتحسين والتطور.' },
        ],
      },
      team: {
        title: 'مواهب رقمية خبيرة مع نموذج تسليم عالمي',
        subtitle: 'يتعاون فريقنا الموزع عبر المناطق الزمنية لتقديم حلول رقمية سلسة في جميع أنحاء العالم. نجمع بين القيادة الاستراتيجية والتنفيذ العملي لضمان الاتساق والجودة والموثوقية في كل مشروع.',
        badge: 'فريقنا',
        roles: [
          { role: 'قادة الإبداع والتصميم', count: '4+', description: '' },
          { role: 'كبار مطوري الويب والبرمجيات', count: '12+', description: '' },
          { role: 'متخصصو تجربة المستخدم', count: '6+', description: '' },
          { role: 'مديرو مشاريع عالميون', count: '5+', description: '' },
        ],
      },
      approach: {
        title: 'نهجنا لتحقيق النجاح الرقمي',
        subtitle: 'تحقيق النجاح الرقمي من خلال منهجية منظمة ومثبتة.',
        stepLabels: ['الخطوة الأولى', 'الخطوة الثانية', 'الخطوة الثالثة', 'الخطوة الرابعة'],
        badgeLabels: ['الاكتشاف', 'التخطيط', 'التنفيذ', 'الإطلاق'],
        growth: 'النمو',
        items: [
          { title: 'الاكتشاف والفهم التجاري', description: 'نبدأ بفهم أهدافك وجمهورك وموقعك في السوق والتحديات لتحديد اتجاه استراتيجي واضح.' },
          { title: 'الاستراتيجية والتخطيط الفني', description: 'نقوم بإنشاء خارطة طريق شاملة تغطي التصميم والتكنولوجيا وهيكل المحتوى وأهداف الأداء.' },
          { title: 'التصميم والتطوير والتحسين', description: 'تنفيذ مرن مع تركيز قوي على الجودة وسهولة الاستخدام والقابلية للتوسع والتحسين.' },
          { title: 'الإطلاق والدعم والنمو المستمر', description: 'نشر سلس يليه دعم مستمر ومراقبة وتحسين مستمر.' },
        ],
      },
    },
    work: {
      title: 'نتائج رقمية مثبتة لـ',
      titleHighlight: 'الأعمال العالمية',
      subtitle: 'استكشف مشاريع حقيقية ساعدنا فيها الشركات في الولايات المتحدة وأوروبا ودول الخليج وأستراليا على تحقيق نمو رقمي قابل للقياس.',
      badge: 'إنجازاتنا',
      statsTitle: 'تأثيرنا عبر المشاريع الرقمية العالمية',
      caseStudies: {
        title: 'دراسات حالة مختارة',
        filters: ['تصميم الويب', 'تطوير الويب', 'منصات SaaS', 'SEO والتسويق الرقمي'],
      },
      methodologyTitle: 'منهجيتنا لتقديم نتائج رقمية متسقة',
      methodologySubtitle: 'تضمن منهجيتنا المثبتة نتائج عالية الجودة ومتسقة لكل مشروع.',
      methodologyBadge: 'منهجيتنا',
      industriesTitle: 'خبرة صناعية عبر الأسواق العالمية',
      industriesSubtitle: 'تمتد خبرتنا عبر صناعات متعددة، جالبين أفضل الممارسات من كل منها.',
      industriesBadge: 'الخبرة الصناعية',
      methodology: [
        { title: 'الاكتشاف الاستراتيجي وتحليل الأعمال', description: 'نبدأ كل مشروع ببحث عميق في عملك ومنافسيك وجمهورك المستهدف.' },
        { title: 'تصميم يركز على المستخدم واستراتيجية UX', description: 'تصاميمنا تعطي الأولوية لتجربة المستخدم، مما يضمن التنقل السهل والمشاركة.' },
        { title: 'التطوير المرن (Agile) والتكرار', description: 'التطوير التكراري مع نقاط فحص منتظمة يبقيك مشاركاً طوال العملية.' },
        { title: 'ضمان الجودة واختبار الأداء', description: 'اختبار صارم عبر الأجهزة والمتصفحات يضمن أداءً خالياً من العيوب.' },
        { title: 'الدعم والتحسين بعد الإطلاق', description: 'الصيانة والتحسين بعد الإطلاق تبقي موقعك في أفضل أداء.' },
      ],
      industries: [
        'التجارة الإلكترونية والتجزئة',
        'الرعاية الصحية والطبية',
        'المالية والتكنولوجيا المالية',
        'العقارات',
        'التعليم والتعليم الإلكتروني',
        'التكنولوجيا والبرمجيات كخدمة',
        'الضيافة والسفر',
        'الخدمات المهنية',
      ],
      trust: {
        title: 'موثوق به من قبل الشركات لشراكات رقمية طويلة الأمد',
        subtitle: 'العديد من مشاريعنا محمية باتفاقيات عدم الإفصاح، لكن احتفاظنا بالعملاء ورضاهم يتحدثان عن أنفسنا.',
        body: 'نؤمن أن الشفافية والتعاون هما مفتاح الشراكات الناجحة. صُممت عمليتنا لتبقيك على اطلاع وواثقاً في كل خطوة.',
        items: [
          'اتصال شفاف',
          'تحديثات منتظمة',
          'تسليمات واضحة',
          'دعم بعد الإطلاق',
        ],
      },
      whyAgain: {
        title: 'لماذا يختار العملاء Belk Digital مرة أخرى',
        items: [
          { title: 'تسليم متسق عبر المشاريع المعقدة', description: 'نحن نسلم في الوقت المحدد وفي حدود الميزانية، في كل مرة.' },
          { title: 'اتصال واضح وشفافية', description: 'لا مصطلحات معقدة، فقط تحديثات واضحة ونصيحة صادقة.' },
          { title: 'نتائج أعمال قابلة للقياس', description: 'نركز على مؤشرات الأداء الرئيسية التي تهم نموك.' },
          { title: 'دعم وتحسين طويل الأمد', description: 'نبقى معك لضمان النجاح المستمر.' },
        ],
      },
      cta: {
        title: 'جاهز لبناء نتائج مثل هذه لعملك؟',
        subtitle: 'دعنا نناقش كيف يمكننا تقديم نمو قابل للقياس لمبادراتك الرقمية.',
      },
    },
    blog: {
      title: 'رؤى، استراتيجيات وموارد النمو الرقمي',
      subtitle: 'ابق على اطلاع بآراء الخبراء، الاستراتيجيات، وأفضل الممارسات في تصميم الويب، التطوير، تحسين محركات البحث، تحسين الأداء، والنمو الرقمي. في Belk Digital، نشارك معرفة عملية لمساعدة الشركات في الولايات المتحدة، أوروبا، دول مجلس التعاون الخليجي، وأستراليا على اتخاذ قرارات رقمية مستنيرة.',
      badge: 'مدونتنا',
      readTime: 'قراءة',
      backToBlog: 'العودة للمدونة',
      categories: {
        all: 'الكل',
        business: 'الأعمال والاستراتيجية',
        design: 'التصميم وتجربة المستخدم',
        seo: 'التحسين والظهور',
        performance: 'الأداء والتحسين'
      },
      whatYouWillLearn: {
        title: 'ماذا ستتعلم من مدونتنا',
        items: [
          'كيفية بناء منصات رقمية قابلة للتوسع',
          'كيف يؤثر تحسين محركات البحث والأداء على العائدات',
          'كيف يؤثر التصميم على معدلات التحويل',
          'كيف تختار الشركات الشركاء الرقميين المناسبين'
        ]
      },
      postCta: {
        title: 'هل تحتاج إلى مساعدة خبير في هذا؟',
        subtitle: 'إذا كنت تتطلع لتنفيذ هذه الاستراتيجيات لعملك، يمكن لفريقنا مساعدتك في التخطيط والبناء والتوسع بثقة.'
      }
    },
    contact: {
      badge: 'لنبدأ محادثة',
      title: 'لنبدأ',
      titleHighlight: 'محادثة',
      subtitle: 'هل أنت مستعد لتحويل حضورك الرقمي؟ سواء كنت تخطط لموقع ويب جديد، أو تعيد تصميم منصة حالية، أو توسع منتجاً رقمياً، فريقنا هنا للمساعدة.',
      form: {
        name: 'الاسم',
        namePlaceholder: 'أخبرنا مع من نتحدث',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'أين يمكننا الوصول إليك',
        subject: 'الموضوع',
        subjectPlaceholder: 'صف استفسارك باختصار',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن مشروعك، أهدافك، أو أسئلتك',
        submit: 'إرسال الرسالة',
        helperText: 'شارك بعض التفاصيل حول مشروعك، وسيستجيب فريقنا بالخطوات التالية. يتم التعامل مع جميع الاستفسارات بسرية تامة.',
        privacyText: 'نحن نحترم خصوصيتك. لا تتم مشاركة معلوماتك أبداً.'
      },
      info: {
        title: 'طرق أخرى للتواصل معنا',
        email: { label: 'راسلنا', desc: 'للاستفسارات العامة، مناقشات المشاريع، وفرص الشراكة.' },
        whatsapp: { label: 'واتساب', desc: 'أسئلة سريعة أو تواصل مباشر مع فريقنا.' },
        schedule: { label: 'حجز مكالمة', desc: 'احجز مكالمة استكشافية لمناقشة متطلباتك بالتفصيل.' },
      },
      headings: {
        formTitle: 'أرسل لنا رسالة',
        otherWays: 'طرق أخرى للتواصل معنا',
      },
      global: {
        title: 'نحن نعمل عالمياً',
        description: 'نعمل عبر مناطق زمنية متعددة، ونتعاون مع عملاء في الولايات المتحدة، أوروبا، دول مجلس التعاون الخليجي، وأستراليا. يضمن نموذج التسليم عن بُعد الخاص بنا تواصلاً سلساً وتنفيذاً متسقاً للمشروع بغض النظر عن الموقع.'
      },
      process: {
        title: 'ماذا يحدث بعد التواصل معنا؟',
        steps: [
          { title: 'المراجعة', description: 'نراجع رسالتك ومتطلباتك' },
          { title: 'الرد', description: 'يتواصل معك أحد أعضاء الفريق خلال يوم عمل واحد' },
          { title: 'الاستكشاف', description: 'نحدد موعداً لمكالمة استكشافية إذا لزم الأمر' },
          { title: 'الخطة', description: 'تتلقى خطوات تالية وتوصيات واضحة' }
        ]
      },
      who: {
        title: 'من يتواصل معنا عادةً',
        subtitle: 'إذا كنت تبحث عن شريك رقمي موثوق وطويل الأمد، فأنت في المكان الصحيح.',
        items: [
          'المؤسسون وفرق الشركات الناشئة',
          'شركات SaaS والتكنولوجيا',
          'العلامات التجارية للتجارة الإلكترونية',
          'المؤسسات وشركات الخدمات المهنية',
          'فرق التسويق والمنتجات'
        ]
      },
      before: {
        title: 'قبل التواصل معنا',
        items: [
          'لا نقدم حلولاً بمقاس واحد للجميع',
          'يبدأ كل مشروع بالاستراتيجية والاستكشاف',
          'نركز على النمو الرقمي القابل للتوسع وطويل الأمد',
          'السرية والشفافية معايير أساسية'
        ]
      },
      finalCta: {
        title: 'جاهز لمناقشة مشروعك؟',
        subtitle: 'أخبرنا عن أهدافك، تحدياتك، وجدولك الزمني. سيساعدك فريقنا في تحديد أفضل مسار لمبادراتك الرقمية.',
        button: 'ابدأ مشروعاً'
      }
    },

    faqCategories: [
      {
        name: 'التسعير والدفع',
        questions: [
          { q: 'ما هي هيكلة الأسعار لديكم؟', a: 'نقدم أسعاراً مخصصة بناءً على احتياجاتك.' },
          { q: 'هل تقدمون خطط دفع؟', a: 'نعم، نقدم خطط دفع مرنة. عادة 50% مقدماً و50% عند الانتهاء.' },
          { q: 'هل هناك تكاليف خفية؟', a: 'لا تكاليف خفية. عروضنا شاملة.' },
          { q: 'ما هي طرق الدفع المقبولة؟', a: 'نقبل التحويل البنكي والبطاقات وPayPal.' },
        ]
      },
      {
        name: 'العملية والجدول الزمني',
        questions: [
          { q: 'كم يستغرق بناء موقع؟', a: 'يختلف الوقت حسب التعقيد. عادة 4-8 أسابيع.' },
          { q: 'ما هي عملية التصميم؟', a: 'اكتشاف -> استراتيجية -> تصميم -> تطوير -> اختبار -> إطلاق.' },
          { q: 'كم عدد جولات المراجعة؟', a: 'تشمل باقاتنا 2-3 جولات مراجعة لكل مرحلة.' },
          { q: 'هل سأشارك في العملية؟', a: 'بالتأكيد! رأيك مهم جداً.' },
        ]
      },
      {
        name: 'التسليم العالمي',
        questions: [
          { q: 'هل تعملون مع عملاء دوليين؟', a: 'نعم! نعمل مع عملاء عالمياً.' },
          { q: 'ما اللغات التي تدعمونها؟', a: 'يمكننا بناء مواقع متعددة اللغات.' },
          { q: 'كيف تتعاملون مع المناطق الزمنية؟', a: 'نحن مرنون ونستخدم التواصل غير المتزامن.' },
          { q: 'هل تدعمون RTL؟', a: 'نعم، لدينا خبرة واسعة في دعم اللغة العربية.' },
        ]
      },
      {
        name: 'الدعم والصيانة',
        questions: [
          { q: 'ماذا يحدث بعد الإطلاق؟', a: 'نقدم باقات صيانة مستمرة.' },
          { q: 'هل تقدمون استضافة؟', a: 'نساعد في إعداد الاستضافة.' },
          { q: 'سرعة الاستجابة للدعم؟', a: '2-4 ساعات للطوارئ.' },
          { q: 'هل يمكنني تحديث المحتوى؟', a: 'نعم، نوفر نظام إدارة محتوى سهل الاستخدام.' },
        ]
      },
      {
        name: 'تقني',
        questions: [
          { q: 'ما التقنيات المستخدمة؟', a: 'React, Next.js, WordPress والمزيد.' },
          { q: 'هل الموقع متجاوب؟', a: 'بالتأكيد! جميع مواقعنا متجاوبة مع الجوال.' },
          { q: 'هل تحسنون SEO؟', a: 'نعم، أفضل ممارسات SEO مدمجة.' },
          { q: 'هل سأملك الكود؟', a: 'نعم، تملك كل شيء عند الدفع النهائي.' },
        ]
      }
    ],
    privacy: {
      badge: 'سياسة الخصوصية',
      title: 'خصوصيتك،',
      titleHighlight: 'أولويتنا',
      subtitle: 'في Belk Digital، نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها.',
      lastUpdated: 'آخر تحديث: 2 فبراير 2026',
      effectiveDate: 'تاريخ السريان: 1 يناير 2026',
      sections: {
        informationCollect: {
          title: 'المعلومات التي نجمعها',
          items: [
            'معلومات التعريف الشخصية (الاسم، عنوان البريد الإلكتروني، رقم الهاتف، إلخ)',
            'بيانات الاستخدام وأنماط التصفح على موقعنا',
            'المعلومات التقنية بما في ذلك عنوان IP ونوع المتصفح ومعلومات الجهاز',
            'ملفات تعريف الارتباط وتقنيات التتبع المماثلة',
            'تفضيلات الاتصال وبيانات التسويق'
          ]
        },
        howWeUse: {
          title: 'كيف نستخدم معلوماتك',
          items: [
            'لتوفير خدماتنا والحفاظ عليها وتحسينها',
            'للتواصل معك حول التحديثات والعروض والمعلومات المهمة',
            'لتخصيص تجربتك وتقديم المحتوى ذي الصلة',
            'لتحليل أنماط الاستخدام وتحسين أداء موقعنا',
            'للامتثال للالتزامات القانونية وحماية حقوقنا'
          ]
        },
        dataSecurity: {
          title: 'أمن البيانات',
          items: [
            'نطبق تدابير أمنية قياسية في الصناعة لحماية بياناتك',
            'يتم تشفير جميع المعلومات الحساسة أثناء النقل باستخدام SSL/TLS',
            'الوصول إلى البيانات الشخصية مقتصر على الموظفين المصرح لهم فقط',
            'عمليات تدقيق أمنية منتظمة وتحديثات للحفاظ على حماية البيانات',
            'تخزين آمن للبيانات مع نسخ احتياطية مشفرة'
          ]
        },
        informationSharing: {
          title: 'مشاركة المعلومات',
          items: [
            'لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة',
            'قد تتم مشاركة البيانات مع مقدمي الخدمات الموثوقين الذين يساعدون في عملياتنا',
            'قد يتم الكشف عن المعلومات عند الطلب بموجب القانون أو العملية القانونية',
            'نقل الأعمال: قد يتم نقل البيانات في حالة الاندماج أو الاستحواذ',
            'بموافقتك الصريحة لأغراض محددة'
          ]
        },
        yourRights: {
          title: 'حقوقك',
          items: [
            'الوصول إلى معلوماتك الشخصية ومراجعتها',
            'طلب تصحيح أو حذف بياناتك',
            'إلغاء الاشتراك في الاتصالات التسويقية في أي وقت',
            'طلب نقل البيانات بتنسيق منظم',
            'تقديم شكوى لدى سلطات حماية البيانات ذات الصلة'
          ]
        },
        cookies: {
          title: 'سياسة ملفات تعريف الارتباط',
          items: [
            'ملفات تعريف ارتباط أساسية لوظائف الموقع',
            'ملفات تعريف ارتباط تحليلية لفهم سلوك المستخدم',
            'ملفات تعريف ارتباط تسويقية للإعلانات المخصصة (بموافقتك)',
            'يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح',
            'قد لا تعمل بعض الميزات بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط'
          ]
        }
      },
      contact: {
        title: 'أسئلة حول الخصوصية؟',
        description: 'إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية الخاصة بنا، فلا تتردد في الاتصال بنا. فريقنا هنا للمساعدة وضمان معالجة مخاوفك المتعلقة بالخصوصية.',
        button: 'اتصل بنا'
      }
    },
    terms: {
      badge: 'الشروط والأحكام',
      title: 'الشروط',
      titleHighlight: 'والأحكام',
      subtitle: 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمات Belk Digital. تحكم هذه الشروط استخدامك لموقعنا وخدماتنا.',
      lastUpdated: 'آخر تحديث: 2 فبراير 2026',
      effectiveDate: 'تاريخ السريان: 1 يناير 2026',
      sections: {
        acceptance: {
          title: 'قبول الشروط',
          items: [
            'من خلال الوصول إلى خدمات Belk Digital واستخدامها، فإنك تقبل وتوافق على الالتزام بهذه الشروط والأحكام',
            'إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك الوصول إلى خدماتنا',
            'نحتفظ بالحق في تحديث هذه الشروط في أي وقت دون إشعار مسبق',
            'يشكل الاستخدام المستمر لخدماتنا بعد التغييرات قبولاً للشروط المعدلة',
            'تنطبق هذه الشروط على جميع الزوار والمستخدمين والآخرين الذين يصلون إلى خدماتنا'
          ]
        },
        servicesUsage: {
          title: 'الخدمات والاستخدام',
          items: [
            'تقدم Belk Digital خدمات تطوير الويب والتصميم والتسويق الرقمي',
            'يتم تقديم الخدمات "كما هي" و"حسب التوفر"',
            'نحتفظ بالحق في تعديل الخدمات أو تعليقها أو إيقافها في أي وقت',
            'يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام خدماتنا',
            'أنت مسؤول عن الحفاظ على سرية حسابك'
          ]
        },
        intellectualProperty: {
          title: 'الملكية الفكرية',
          items: [
            'جميع المحتويات والتصميمات والمواد المسلمة مملوكة لـ Belk Digital حتى الدفع الكامل',
            'عند الدفع الكامل، تنتقل حقوق الملكية الفكرية المحددة إلى العميل',
            'لا يجوز لك إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة بدون إذن',
            'العلامات التجارية والشعارات وعلامات الخدمة المعروضة هي ملك لأصحابها',
            'تحتفظ Belk Digital بالحق في عرض العمل المكتمل في محفظتنا'
          ]
        },
        payment: {
          title: 'الدفع والفوترة',
          items: [
            'يتم تحديد شروط الدفع في اتفاقيات المشروع الفردية',
            'جميع الرسوم غير قابلة للاسترداد ما لم ينص على خلاف ذلك كتابيًا',
            'قد تتكبد المدفوعات المتأخرة رسومًا إضافية وتعليق الخدمة',
            'الأسعار عرضة للتغيير بإشعار مدته 30 يومًا',
            'أنت مسؤول عن جميع الضرائب ورسوم المعاملات المطبقة'
          ]
        },
        refund: {
          title: 'الاسترداد والإلغاء',
          items: [
            'تعتمد أهلية الاسترداد على مرحلة المشروع وشروط الاتفاقية',
            'يجب تقديم الإلغاءات كتابيًا لتكون صالحة',
            'سيتم فرض رسوم على العمل المنجز حتى نقطة الإلغاء',
            'الودائع غير قابلة للاسترداد بشكل عام إلا في حالات عدم تقديم الخدمة',
            'تتم مراجعة طلبات الاسترداد على أساس كل حالة على حدة في غضون 14 يوم عمل'
          ]
        },
        liability: {
          title: 'تحديد المسؤولية',
          items: [
            'Belk Digital غير مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية',
            'تقتصر مسؤوليتنا على المبلغ المدفوع للخدمة المحددة',
            'نحن لسنا مسؤولين عن محتوى أو خدمات أو منتجات الطرف الثالث',
            'انقطاعات الخدمة بسبب مشاكل تقنية أو قوة قاهرة ليست أسبابًا للمسؤولية',
            'توافق على تعويض Belk Digital ضد المطالبات الناشئة عن استخدامك للخدمات'
          ]
        },
        prohibited: {
          title: 'الأنشطة المحظورة',
          items: [
            'استخدام الخدمات لأي غرض غير قانوني أو نشاط غير قانوني',
            'محاولة الوصول غير المصرح به إلى أنظمتنا أو شبكاتنا',
            'نقل الفيروسات أو البرامج الضارة أو أي رمز ضار',
            'انتحال شخصية أي شخص أو كيان أو تحريف الانتماء',
            'التدخل في سلامة خدماتنا أو تعطيلها'
          ]
        },
        warranties: {
          title: 'الضمانات وإخلاء المسؤولية',
          items: [
            'يتم تقديم الخدمات بدون ضمانات من أي نوع، صريحة أو ضمنية',
            'لا نضمن خدمة غير منقطعة أو في الوقت المناسب أو آمنة أو خالية من الأخطاء',
            'لا نضمن أن النتائج ستلبي متطلباتك',
            'أي مواد يتم تنزيلها على مسؤوليتك الخاصة وتقديرك',
            'نخلي مسؤوليتنا عن جميع الضمانات بما في ذلك القابلية للتسويق والملاءمة لغرض معين'
          ]
        }
      },
      governing: {
        title: 'القانون الحاكم',
        description: 'تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين الولاية القضائية التي تعمل فيها Belk Digital. ستخضع أي نزاعات تتعلق بهذه الشروط للاختصاص القضائي الحصري لمحاكم تلك الولاية القضائية.',
        description2: 'باستخدام خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام. إذا كان لديك أي أسئلة، يرجى الاتصال بفريقنا القانوني.'
      }
    },
    whoWeAre: {
      badge: 'من نحن؟',
      title: 'نحن شركة حلول رقمية عالمية تبني مواقع ويب عالية الأداء ومنصات SaaS ومنتجات رقمية قابلة للتوسع تدفع بتأثير تجاري حقيقي.',
      aboutBtn: 'عن Belk Digital',
      // aboutBtn: 'عن Belk Digital',
      teamBtn: 'قابل الفريق',
    },
  },
  fr: {
    seo: {
      home: {
        title: 'Agence de Transformation Numérique | Conception & Développement Web',
        description: 'Belk Digital fournit des sites web performants, des applications web sur mesure et des services SEO pour aider les entreprises à croître mondialement.'
      },
      about: {
        title: 'À Propos de Belk Digital | Agence Digitale Mondiale',
        description: 'Découvrez notre mission d\'autonomiser les entreprises grâce à la technologie. Nous sommes une équipe d\'experts dédiés à votre réussite numérique.'
      },
      services: {
        title: 'Web Design, Development & SEO Services',
        description: 'Explore our comprehensive suite of digital services including custom web design, SaaS development, and outcome-based SEO.'
      },
      work: {
        title: 'Nos Travaux & Études de Cas',
        description: 'Découvrez notre portfolio de projets réussis. Nous créons des sites web primés et des produits numériques pour des clients du monde entier.',
        caseStudies: {
          ecommerce: { title: 'Plateforme E-commerce' },
          saas: { title: 'Tableau de bord SaaS' },
          mobile: { title: 'Application Mobile' }
        }
      },
      locations: {
        title: 'Localisations',
        description: 'Servir les clients aux États-Unis, en Europe, dans le CCG et en Australie avec une excellence numérique à distance.'
      },
      blog: {
        title: 'Insights Numériques & Blog Tech',
        description: 'Lisez nos derniers articles sur les tendances de développement web, les stratégies SEO et les conseils de transformation numérique.'
      },
      contact: {
        title: 'Contactez-nous | Démarrez Votre Projet',
        description: 'Prêt à transformer votre présence numérique ? Contactez notre équipe dès aujourd\'hui pour une consultation gratuite.'
      },
      faq: {
        title: 'Foire Aux Questions',
        description: 'Trouvez des réponses aux questions courantes sur nos services, tarifs, processus et support.'
      }
    },
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      work: 'Nos Travaux',
      locations: 'Localisations',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ',
      bookCall: 'Réserver un Appel',
    },
    hero: {
      badge: 'Excellence Digitale',
      title: 'SCALE',
      titleHighlight: '',
      subtitle: 'Solutions numériques haute performance conçues pour le web moderne',
      cta: 'Démarrer Votre Projet',
      ctaSecondary: 'Voir Nos Services',
      ctaContact: 'Prendre rendez-vous',
      socialProof: 'Fait confiance par des marques à travers le monde',
      stats: {
        projects: 'Projets Livrés',
        clients: 'Clients Satisfaits',
        countries: 'Pays Servis',
        years: 'Années d\'Expérience',
      },
      trust: {
        projects: '50+ Projets',
        performance: 'Haute Performance',
        seo: 'Optimisé SEO',
      },
    },
    whyChoose: {
      badge: 'Pourquoi Belk Digital',
      title: 'Une Expertise de Confiance',
      subtitle: 'Nous combinons réflexion stratégique et excellence technique pour des résultats qui comptent.',
      features: [
        {
          title: 'Approche Stratégique',
          description: 'Chaque projet commence par comprendre vos objectifs. Nous créons des solutions alignées sur vos objectifs commerciaux.',
        },
        {
          title: 'Expérience Mondiale',
          description: 'Travailler avec des clients sur tous les continents nous donne des perspectives uniques sur les marchés diversifiés.',
        },
        {
          title: 'Excellence Technique',
          description: 'Notre équipe reste à la pointe des dernières technologies et meilleures pratiques.',
        },
        {
          title: 'Partenariat Continu',
          description: 'Nous ne construisons pas et partons. Nous sommes engagés dans votre succès à long terme.',
        },
      ],
    },
    whyWebsite: {
      badge: 'Fondation Digitale',
      title: 'Pourquoi Votre Entreprise a Besoin d\'un Site Professionnel',
      subtitle: 'Dans le monde digital d\'aujourd\'hui, votre site est souvent la première impression que les clients ont de votre entreprise.',
      points: [
        {
          title: 'Disponibilité 24/7',
          description: 'Votre site travaille jour et nuit, fournissant des informations et générant des prospects pendant votre sommeil.',
        },
        {
          title: 'Crédibilité & Confiance',
          description: 'Un site professionnel établit la légitimité et construit la confiance avec les clients potentiels.',
        },
        {
          title: 'Portée Élargie',
          description: 'Brisez les barrières géographiques et atteignez des clients partout dans le monde.',
        },
        {
          title: 'Marketing Rentable',
          description: 'Le marketing digital via votre site offre le meilleur ROI comparé à la publicité traditionnelle.',
        },
      ],
    },
    services: {
      badge: 'Ce Que Nous Faisons',
      title: 'Services Web, SaaS & SEO Globaux pour une Croissance Évolutive',
      subtitle: 'Nous fournissons des services numériques de bout en bout qui aident les entreprises aux États-Unis, en Europe, dans le CCG et en Australie à construire, optimiser et faire évoluer des plateformes numériques performantes.',
      microScope: 'Design Web • Développement Web • SaaS • SEO • Marketing Digital • Support',
      common: {
        whoForTitle: 'À qui s\'adresse ce service',
        whyChooseTitle: 'Pourquoi choisir Belk Digital pour {service}',
        processTitle: 'Notre processus pour livrer {service}',
        growthTitle: 'Comment ce service soutient la croissance à long terme',
        ctaTitle: 'Prêt à commencer avec {service} ?',
        ctaSubtitle: 'Discutons de vos objectifs et voyons comment nous pouvons vous aider à évoluer.',
        benefitsTitle: 'Avantages commerciaux de notre {service}',
        includesTitle: 'Ce qui est inclus dans notre {service}',
      },
      items: [
        {
          title: 'Design Web Personnalisé & UI/UX',
          description: 'Des designs uniques qui capturent l\'essence de votre marque.',
          slug: 'custom-web-design',
          detailTitle: 'Services de Design Web Personnalisé pour Entreprises en Croissance',
          detailSubtitle: 'Nous fournissons du Design Web Personnalisé pour les entreprises aux USA, en Europe, dans le CCG et en Australie, axé sur la performance, l\'évolutivité et les résultats mesurables.',
          whoFor: ['Startups & Scaleups', 'Entreprises SaaS & Tech', 'Marques E-commerce & DTC', 'Grandes Entreprises & Agences'],
          includes: [
            'Identité visuelle alignée sur la marque',
            'Mises en page réactives & mobile-first',
            'Structures de page axées sur l\'UX',
            'Systèmes de design orientés conversion',
            'Prototypes interactifs & transfert'
          ],
          benefits: [
            'Positionnement de marque plus fort',
            'Engagement & conversions plus élevés',
            'Performance & évolutivité améliorées',
            'Meilleur ROI sur l\'investissement numérique'
          ],
          whyChoose: [
            { title: 'Livraison globale', description: 'Expérience avec des clients US, UE, CCG & AU.' },
            { title: 'Exécution stratégique', description: 'Pas seulement des modèles, mais une stratégie sur mesure.' },
            { title: 'SEO & Performance', description: 'Optimisation intégrée dès le premier jour.' },
            { title: 'Support à long terme', description: 'Nous sommes partenaires de votre croissance.' }
          ],
          process: [
            { title: 'Découverte & Analyse', description: 'Comprendre votre marque et vos objectifs.' },
            { title: 'Stratégie & Planification', description: 'Définir la feuille de route et l\'UX.' },
            { title: 'Design & Prototypage', description: 'Création des actifs visuels et interactions.' },
            { title: 'Transfert & Support', description: 'Transition fluide vers le développement.' }
          ],
          growthSupport: 'Nos services de design garantissent que votre présence numérique est construite pour évoluer, optimisée pour les marchés mondiaux et conçue pour convertir le trafic en revenus.'
        },
        {
          title: 'Redesign & Optimisation de Site Web',
          description: 'Revitalisez votre site existant avec une esthétique moderne.',
          slug: 'website-redesign',
          detailTitle: 'Services de Redesign & Optimisation de Site Web',
          detailSubtitle: 'Nous revitalisons les sites web pour les entreprises aux USA, en Europe, dans le CCG et en Australie, en nous concentrant sur l\'esthétique moderne et l\'amélioration des taux de conversion.',
          whoFor: ['Entreprises Héritées', 'Sociétés en Rebranding', 'Sites à Faible Performance', 'Startups en Croissance'],
          includes: [
            'Audit complet UI/UX',
            'Refonte visuelle moderne',
            'Optimisation des performances',
            'Correction de la réactivité mobile',
            'Améliorations de la structure SEO'
          ],
          benefits: [
            'Image de marque renouvelée',
            'Trafic organique accru',
            'Taux de rebond réduits',
            'Génération de leads plus élevée'
          ],
          whyChoose: [
            { title: 'Redesign basé sur les données', description: 'Décisions basées sur l\'analyse, pas des devinettes.' },
            { title: 'Migration transparente', description: 'Aucune perte de données ou temps d\'arrêt.' },
            { title: 'Préservation du SEO', description: 'Nous gardons vos classements en sécurité.' },
            { title: 'Technologie d\'avenir', description: 'Construit sur des piles modernes.' }
          ],
          process: [
            { title: 'Audit & Analyse', description: 'Examen de la performance actuelle.' },
            { title: 'Stratégie & Concept', description: 'Définir le nouveau look and feel.' },
            { title: 'Développement & Migration', description: 'Construction et déplacement du contenu.' },
            { title: 'Lancement & Suivi', description: 'Assurer que tout fonctionne parfaitement.' }
          ],
          growthSupport: 'Un redesign n\'est pas juste cosmétique ; c\'est un mouvement stratégique pour améliorer la performance, le SEO et la rétention des utilisateurs pour une croissance à long terme.'
        },
        {
          title: 'Branding & Identité Numérique',
          description: 'Créez une identité de marque cohérente.',
          slug: 'branding',
          detailTitle: 'Services de Branding & Identité Numérique Impactants',
          detailSubtitle: 'Nous créons des identités de marque puissantes pour les entreprises aux USA, en Europe, dans le CCG et en Australie, assurant cohérence et impact.',
          whoFor: ['Nouvelles Entreprises', 'Sociétés en Rebranding', 'Marques Digital-First', 'Entreprises Globales'],
          includes: [
            'Design de logo & identité visuelle',
            'Directives de marque & typographie',
            'Développement du ton & de la voix',
            'Actifs pour réseaux sociaux',
            'Design de supports marketing'
          ],
          benefits: [
            'Reconnaissance immédiate de la marque',
            'Expérience client cohérente',
            'Valeur perçue accrue',
            'Connexion émotionnelle avec les utilisateurs'
          ],
          whyChoose: [
            { title: 'Alignement stratégique', description: 'Design qui correspond à vos objectifs commerciaux.' },
            { title: 'Attrait interculturel', description: 'Identités qui fonctionnent globalement.' },
            { title: 'Systèmes évolutifs', description: 'Actifs prêts pour la croissance.' },
            { title: 'Créativité complète', description: 'Du logo au déploiement complet.' }
          ],
          process: [
            { title: 'Découverte de la Marque', description: 'Révéler vos valeurs fondamentales.' },
            { title: 'Stratégie Visuelle', description: 'Définir l\'apparence et le ressenti.' },
            { title: 'Design d\'Identité', description: 'Création des logos et actifs.' },
            { title: 'Directives de Marque', description: 'Documentation du système.' }
          ],
          growthSupport: 'Une identité de marque forte construit la confiance et la fidélité, des fondations essentielles pour une croissance commerciale durable à long terme.'
        },
        {
          title: 'UI/UX & Design de Conversion',
          description: 'Design centré sur l\'utilisateur pour maximiser les conversions.',
          slug: 'ui-ux-design',
          detailTitle: 'Services UI/UX & Design de Conversion pour un Meilleur ROI',
          detailSubtitle: 'Nous optimisons les parcours utilisateurs pour les entreprises aux USA, en Europe, dans le CCG et en Australie, transformant les visiteurs en clients fidèles.',
          whoFor: ['Plateformes SaaS', 'Boutiques E-commerce', 'Apps Web Complexes', 'Sites de Lead Gen'],
          includes: [
            'Recherche utilisateur & personas',
            'Wireframing & flux utilisateurs',
            'Prototypage interactif',
            'Usability testing',
            'Optimisation du taux de conversion (CRO)'
          ],
          benefits: [
            'Taux de conversion plus élevés',
            'Réduction du taux de désabonnement',
            'Satisfaction utilisateur améliorée',
            'Décisions de design basées sur les données'
          ],
          whyChoose: [
            { title: 'Approche centrée utilisateur', description: 'Design pour de vraies personnes.' },
            { title: 'Itération basée sur les données', description: 'Amélioration continue.' },
            { title: 'Experts systèmes complexes', description: 'Nous gérons les défis UX difficiles.' },
            { title: 'Accessibilité globale', description: 'Design inclusif pour tous.' }
          ],
          process: [
            { title: 'Recherche', description: 'Comprendre les besoins utilisateurs.' },
            { title: 'Structure', description: 'Architecture de l\'information & flux.' },
            { title: 'Design', description: 'Création d\'interface haute fidélité.' },
            { title: 'Validation', description: 'Tests avec de vrais utilisateurs.' }
          ],
          growthSupport: 'Une UX optimisée impacte directement les revenus en supprimant les frictions et en encourageant l\'action des utilisateurs, alimentant la croissance de l\'entreprise.'
        },
        {
          title: 'Développement Web & SaaS',
          description: 'Sites web robustes et évolutifs.',
          slug: 'web-development',
          detailTitle: 'Services de Développement Web & SaaS pour Produits Évolutifs',
          detailSubtitle: 'Nous construisons des produits numériques robustes pour les entreprises aux USA, en Europe, dans le CCG et en Australie, assurant évolutivité et performance.',
          whoFor: ['Startups Tech', 'SaaS d\'Entreprise', 'Agences Digitales', 'Laboratoires d\'Innovation'],
          includes: [
            'Développement frontend personnalisé',
            'Architecture backend API',
            'Design & gestion de base de données',
            'Intégrations tierces',
            'Configuration d\'infrastructure cloud'
          ],
          benefits: [
            'Haute performance & vitesse',
            'Architecture sécurisée & évolutive',
            'Expérience utilisateur fluide',
            'Maintenance & mises à jour faciles'
          ],
          whyChoose: [
            { title: 'Stack technique moderne', description: 'Experts React, Next.js, Node.js.' },
            { title: 'Standards de code propre', description: 'Maintenable et documenté.' },
            { title: 'Méthodologie agile', description: 'Itérations et retours rapides.' },
            { title: 'Intégration DevOps', description: 'CI/CD et tests automatisés.' }
          ],
          process: [
            { title: 'Architecture', description: 'Planification du stack technique.' },
            { title: 'Développement', description: 'Sprints et codage.' },
            { title: 'Tests', description: 'QA et correction de bugs.' },
            { title: 'Déploiement', description: 'Lancement live et surveillance.' }
          ],
          growthSupport: 'Des bases de code évolutives permettent à votre produit de grandir avec votre base d\'utilisateurs sans réécritures coûteuses ou goulots d\'étranglement de performance.'
        },
        {
          title: 'Optimisation pour les Moteurs de Recherche (SEO)',
          description: 'Améliorez la visibilité et le trafic.',
          slug: 'seo-optimization',
          detailTitle: 'Services SEO pour une Croissance Organique à Long Terme',
          detailSubtitle: 'Nous générons du trafic organique pour les entreprises aux USA, en Europe, dans le CCG et en Australie grâce à une précision technique et une stratégie de contenu.',
          whoFor: ['Entreprises Locales', 'Sites E-commerce', 'Éditeurs de Contenu', 'Prestataires de Services'],
          includes: [
            'Audit SEO technique',
            'Recherche de mots-clés & stratégie',
            'Optimisation on-page',
            'Stratégie de contenu & clustering',
            'Netlinking & outreach'
          ],
          benefits: [
            'Croissance durable du trafic',
            'Meilleurs classements de recherche',
            'Autorité de marque améliorée',
            'Génération de leads qualifiés'
          ],
          whyChoose: [
            { title: 'Techniques White-hat', description: 'Stratégies sûres et à long terme.' },
            { title: 'Insights basés sur les données', description: 'Des rapports qui ont du sens.' },
            { title: 'Expertise technique', description: 'Nous gérons les problèmes de code profonds.' },
            { title: 'Focus global', description: 'SEO multilingue & international.' }
          ],
          process: [
            { title: 'Audit', description: 'Trouver des opportunités et des erreurs.' },
            { title: 'Stratégie', description: 'Planification des mots-clés et du contenu.' },
            { title: 'Optimisation', description: 'Mise en œuvre des corrections et changements.' },
            { title: 'Rapports', description: 'Suivi des progrès mensuel.' }
          ],
          growthSupport: 'Le SEO offre le ROI le plus élevé au fil du temps, construisant un canal auto-entretenu de clients potentiels pour votre entreprise.'
        },
        {
          title: 'Maintenance, Support & Gestion de Serveur',
          description: 'Gardez votre site sécurisé et à jour.',
          slug: 'maintenance',
          detailTitle: 'Services de Maintenance & Support pour la Tranquillité d\'Esprit',
          detailSubtitle: 'Nous assurons la disponibilité et la sécurité pour les entreprises aux USA, en Europe, dans le CCG et en Australie, pour que vous puissiez vous concentrer sur votre cœur de métier.',
          whoFor: ['Sites à Fort Trafic', 'Portails d\'Entreprise', 'Plateformes E-commerce', 'Apps Critiques'],
          includes: [
            'Surveillance de la disponibilité 24/7',
            'Correctifs de sécurité & mises à jour',
            'Vérifications fonctionnelles quotidiennes',
            'Optimisation de la performance serveur',
            'Sauvegardes régulières & récupération'
          ],
          benefits: [
            'Risques d\'interruption réduits',
            'Posture de sécurité renforcée',
            'Performance constante',
            'Coûts informatiques prévisibles'
          ],
          whyChoose: [
            { title: 'Surveillance proactive', description: 'Nous réparons les problèmes avant qu\'ils ne cassent.' },
            { title: 'Équipe de support experte', description: 'Accès direct aux développeurs.' },
            { title: 'Rapports transparents', description: 'Sachez exactement ce que nous faisons.' },
            { title: 'Plans flexibles', description: 'Évoluez le support selon vos besoins.' }
          ],
          process: [
            { title: 'Onboarding', description: 'Configuration des outils de surveillance.' },
            { title: 'Optimisation', description: 'Correction initiale et mise au point.' },
            { title: 'Soins de Routine', description: 'Tâches hebdomadaires/mensuelles.' },
            { title: 'Réponse d\'Urgence', description: 'Action rapide en cas de besoin.' }
          ],
          growthSupport: 'Une infrastructure fiable est la colonne vertébrale de la croissance numérique. Nous maintenons votre fondation solide pour que vous puissiez construire dessus.'
        },
        {
          title: 'Développement Shopify & Solutions E-commerce',
          description: 'Créez des boutiques en ligne puissantes avec Shopify pour stimuler les ventes.',
          slug: 'shopify-development',
          detailTitle: 'Développement Shopify & Solutions E-commerce pour Marques en Croissance',
          detailSubtitle: 'Nous créons des boutiques Shopify à fort taux de conversion pour les entreprises aux États-Unis, en Europe, dans le CCG et en Australie, optimisées pour un maximum de revenus et de satisfaction client.',
          whoFor: ['Startups E-commerce', 'Marques DTC', 'Commerce de Détail', 'Marketplaces en Ligne'],
          includes: [
            'Développement de thème Shopify personnalisé',
            'Intégrations tierces & applications',
            'Configuration de passerelle de paiement',
            'Système de gestion des stocks',
            'Optimisation du taux de conversion'
          ],
          benefits: [
            'Augmentation des ventes en ligne',
            'Opérations rationalisées',
            'Expérience utilisateur améliorée',
            'Shopping mobile-first'
          ],
          whyChoose: [
            { title: 'Experts Shopify', description: 'Développeurs certifiés avec résultats prouvés.' },
            { title: 'Design axé conversion', description: 'Conçu pour maximiser les ventes.' },
            { title: 'Architecture évolutive', description: 'Grandit avec votre entreprise.' },
            { title: 'Support complet', description: 'De la configuration à la mise à l\'échelle.' }
          ],
          process: [
            { title: 'Découverte & Planification', description: 'Comprendre vos produits et objectifs.' },
            { title: 'Design & Développement', description: 'Créer votre boutique unique.' },
            { title: 'Intégration & Tests', description: 'Ajout de fonctionnalités et contrôles qualité.' },
            { title: 'Lancement & Optimisation', description: 'Mise en ligne et amélioration des conversions.' }
          ],
          growthSupport: 'Shopify fournit une plateforme puissante et évolutive pour la croissance du e-commerce. Nous vous aidons à en tirer le meilleur parti pour des revenus durables.'
        },
        {
          title: 'Développement CMS Personnalisé & Gestion de Contenu',
          description: 'Autonomisez votre équipe avec des systèmes de gestion de contenu sur mesure.',
          slug: 'custom-cms',
          detailTitle: 'Développement CMS Personnalisé pour un Contrôle Total du Contenu',
          detailSubtitle: 'Nous construisons des systèmes de gestion de contenu sur mesure pour les entreprises aux États-Unis, en Europe, dans le CCG et en Australie qui ont besoin d\'un contrôle complet sur leur contenu numérique.',
          whoFor: ['Maisons d\'Édition', 'Grandes Entreprises', 'Organisations Multi-marques', 'Sites Riches en Contenu'],
          includes: [
            'Architecture CMS sur mesure',
            'Design de panneau admin personnalisé',
            'Contrôle d\'accès basé sur les rôles',
            'Capacités d\'intégration API',
            'Support multilingue'
          ],
          benefits: [
            'Contrôle total du contenu',
            'Flux de travail rationalisés',
            'Sécurité renforcée',
            'Fonctionnalité unique'
          ],
          whyChoose: [
            { title: 'Entièrement personnalisable', description: 'Construit exactement selon vos spécifications.' },
            { title: 'Évolutif & pérenne', description: 'Grandit avec vos besoins.' },
            { title: 'Interface conviviale', description: 'Facile pour les équipes non techniques.' },
            { title: 'Optimisé pour la performance', description: 'Rapide et efficace.' }
          ],
          process: [
            { title: 'Analyse des Besoins', description: 'Définir vos besoins en contenu.' },
            { title: 'Conception Architecture', description: 'Planifier la structure du système.' },
            { title: 'Développement & Tests', description: 'Construire et valider les fonctionnalités.' },
            { title: 'Formation & Déploiement', description: 'Lancement et intégration de votre équipe.' }
          ],
          growthSupport: 'Un CMS personnalisé vous donne la flexibilité et le contrôle que les solutions prêtes à l\'emploi ne peuvent pas égaler, permettant des expériences numériques uniques.'
        },
      ],
      viewAll: 'Voir Tous les Services',
      learnMore: 'En savoir plus',
      includes: 'Ce qui est inclus',
      benefits: 'Avantages',
      whatWeCover: {
        title: 'Ce Que Couvrent Nos Services Numériques',
        items: [
          { title: 'Design & Développement Guidés par la Stratégie', description: 'Nous alignons le design et le code avec vos objectifs commerciaux dès le premier jour.' },
          { title: 'Architecture Évolutive & Code Propre', description: 'Construire des systèmes qui grandissent avec votre entreprise sans dette technique.' },
          { title: 'Constructions Axées sur le SEO & la Performance', description: 'Optimisé pour les moteurs de recherche et la vitesse pour maximiser la portée.' },
          { title: 'Systèmes Sécurisés, Maintenables & Prêts pour l\'Avenir', description: 'La sécurité et la maintenabilité sont intégrées dans notre processus de base.' },
        ],
      },
      whoFor: {
        title: 'Pour Qui Nos Services Sont Conçus',
        items: [
          { title: 'Startups & Scaleups', description: 'Lancement et mise à l\'échelle rapides de produits numériques.' },
          { title: 'Entreprises SaaS & Technologiques', description: 'Construction de plateformes et d\'outils complexes.' },
          { title: 'E-commerce & Marques DTC', description: 'Stimuler les ventes grâce à des expériences d\'achat optimisées.' },
          { title: 'Entreprises & Agences', description: 'Transformation numérique à grande échelle et support partenaire.' },
        ],
      },
      whyChoose: {
        title: 'Pourquoi Choisir Belk Digital pour les Services Numériques',
        items: [
          { title: 'Livraison de Service Globale d\'Abord', description: 'Expérience de livraison sur les marchés US, Europe et CCG.' },
          { title: 'Stratégie Numérique Axée sur les Affaires', description: 'Nous nous concentrons sur les indicateurs qui comptent pour vos résultats.' },
          { title: 'SEO & Performance au Cœur', description: 'Excellence technique qui stimule la croissance organique.' },
          { title: 'Support & Partenariat à Long Terme', description: 'Nous sommes votre partenaire technologique à long terme.' },
        ],
      },
      process: {
        title: 'Notre Processus pour Livrer des Solutions Numériques à Fort Impact',
        items: [
          { title: 'Découverte & Analyse des Besoins', description: 'Comprendre vos défis et opportunités uniques.' },
          { title: 'Stratégie & Planification Technique', description: 'Création d\'une feuille de route détaillée pour le succès.' },
          { title: 'Design, Développement & Optimisation', description: 'Exécution avec précision et méthodologie agile.' },
          { title: 'Lancement, Support & Croissance Continue', description: 'Assurer un lancement fluide et une amélioration continue.' },
        ],
      },
      cta: {
        title: 'Prêt à Faire Évoluer Votre Entreprise avec des Services Numériques Experts ?',
        subtitle: 'Discutons de vos objectifs et construisons une solution qui génère une croissance mesurable.',
        button: 'Démarrer Votre Projet',
        buttonSecondary: 'Planifier un Appel',
      }
    },
    process: {
      badge: 'Notre Processus',
      title: 'De la Vision à la Réalité',
      subtitle: 'Une méthodologie éprouvée qui livre des résultats exceptionnels.',
      steps: [
        { number: '01', title: 'Découverte', description: 'Nous plongeons dans votre entreprise, vos objectifs et votre audience.' },
        { number: '02', title: 'Stratégie', description: 'Développement d\'un plan complet aligné sur vos objectifs.' },
        { number: '03', title: 'Design', description: 'Création de designs visuellement époustouflants.' },
        { number: '04', title: 'Développement', description: 'Construction avec un code propre et des performances optimales.' },
        { number: '05', title: 'Lancement', description: 'Tests rigoureux et déploiement sans faille.' },
        { number: '06', title: 'Croissance', description: 'Optimisation continue et support pour le succès.' },
      ],
    },
    locations: {
      badge: 'Portée Mondiale',
      title: 'Services Numériques Globaux aux États-Unis, Europe, CCG & Australie',
      subtitle: 'Nous travaillons avec des entreprises sur des marchés mondiaux clés, fournissant des solutions Web, SaaS, SEO et numériques adaptées aux besoins régionaux.',
      locationsGridTitle: 'Nos Emplacements de Service Globaux',
      viewAll: 'Voir Tous les Emplacements',
      regions: {
        usa: 'États-Unis (Services Numériques US)',
        uae: 'Émirats Arabes Unis (Services Numériques CCG)',
        ksa: 'Arabie Saoudite (Services Numériques CCG)',
        europe: 'Royaume-Uni & Europe',
        australia: 'Australie (Région APAC)',
      },
      servicesWeProvide: {
        title: 'Services Numériques Que Nous Fournissons Dans Toutes les Régions',
        items: [
          'Design Web Personnalisé & UI/UX',
          'Développement Web & SaaS',
          'Redesign & Optimisation de Site',
          'Optimisation pour les Moteurs de Recherche (SEO)',
          'Marketing Digital & Croissance',
          'Maintenance, Support & Gestion Serveur',
        ],
      },
      howWeWork: {
        title: 'Comment Nous Livrons des Projets Globalement',
        items: [
          { title: 'Collaboration first-remote', description: 'Collaboration transparente à travers les fuseaux horaires.' },
          { title: 'Chefs de projet dédiés', description: 'Communication claire et point de contact unique.' },
          { title: 'Stratégie adaptée à la région', description: 'Exécution adaptée aux besoins du marché local.' },
          { title: 'Livraison sécurisée et évolutive', description: 'Hauts standards de sécurité et de performance.' },
        ],
      },
      dontSeeLocation: {
        title: 'Servir des Clients Partout dans le Monde',
        description: 'Nous travaillons avec des clients du monde entier. Peu importe où vous êtes basé, nous pouvons livrer des solutions numériques exceptionnelles.',
        button: 'Parlez à Notre Équipe Globale',
      },
      whyChoose: {
        title: 'Pourquoi les Entreprises Globales Choisissent Belk Digital',
        items: [
          { title: 'Expérience prouvée dans 45+ pays', description: 'Nous comprenons les paysages numériques mondiaux.' },
          { title: 'Livraison globale avec compréhension locale', description: 'Combler le fossé entre standards mondiaux et besoins locaux.' },
          { title: 'Développement axé sur SEO & Performance', description: 'Construire pour la visibilité et la vitesse.' },
          { title: 'Approche de partenariat à long terme', description: 'Nous sommes investis dans votre croissance durable.' },
        ],
      },
      cta: {
        title: 'Prêt à Travailler avec un Partenaire Numérique Global ?',
        subtitle: 'Discutons de la manière dont nous pouvons soutenir votre entreprise—où que vous soyez.',
      },
      cityPages: {
        usa: {
          title: 'Société de Services Numériques aux États-Unis',
          intro: 'Belk Digital fournit des services de conception web, de développement web, de solutions SaaS, de SEO et de marketing numérique aux entreprises à travers les États-Unis. Nous aidons les entreprises à rivaliser, évoluer et croître dans l\'un des marchés numériques les plus compétitifs au monde.',
          excellence: {
            title: 'Livrer l\'Excellence Numérique aux États-Unis',
            body: 'Les entreprises américaines exigent rapidité, performance et innovation. Nous construisons des solutions numériques qui répondent aux attentes des grandes entreprises tout en soutenant la croissance et la flexibilité à long terme.',
          },
          services: {
            title: 'Nos Services Numériques aux États-Unis',
            items: [
              'Conception Web Sur Mesure & UI/UX',
              'Redesign & Optimisation de Sites Web',
              'Développement Web & SaaS',
              'Optimisation pour les Moteurs de Recherche (SEO)',
              'Marketing Numérique & Croissance',
              'Maintenance, Support & Gestion Serveur',
            ],
          },
          whoWeWorkWith: {
            title: 'Avec Qui Nous Travaillons aux États-Unis',
            items: [
              'Startups & Scaleups',
              'Entreprises SaaS & Technologiques',
              'Marques E-commerce & DTC',
              'Entreprises & Cabinets de Services Professionnels',
            ],
          },
          whyChoose: {
            title: 'Pourquoi les Entreprises Américaines Choisissent Belk Digital',
            items: [
              { title: 'Expérience de travail avec des entreprises mondiales et américaines', description: 'Nous comprenons le paysage du marché américain.' },
              { title: 'Développement axé sur la performance et le SEO', description: 'Construire pour la vitesse et la visibilité dès le premier jour.' },
              { title: 'Architecture évolutive pour les entreprises en croissance', description: 'Des solutions qui grandissent avec votre entreprise.' },
              { title: 'Support fiable à long terme', description: 'Nous vous soutenons au-delà du lancement.' },
            ],
          },
          howWeDeliver: {
            title: 'Comment Nous Livrons des Projets Globalement',
            body: 'Notre modèle de livraison à distance nous permet de travailler efficacement à travers les fuseaux horaires tout en maintenant des normes élevées de qualité et de responsabilité. Chaque projet suit un processus structuré axé sur la clarté, la performance et des résultats mesurables.',
          },
          cta: {
            title: 'Prêt à Construire une Présence Numérique Haute Performance aux États-Unis ?',
            subtitle: 'Discutons de la manière dont Belk Digital peut aider votre entreprise à croître avec des solutions numériques évolutives et prêtes pour l\'avenir.',
          },
        },
        europe: {
          title: 'Société de Services Numériques au Royaume-Uni et en Europe',
          intro: 'Belk Digital fournit des services de conception web personnalisée, de développement SaaS, de SEO et de marketing numérique aux entreprises à travers le Royaume-Uni et l\'Europe. Nous soutenons les organisations à la recherche de solutions numériques fiables, conformes et évolutives.',
          excellence: {
            title: 'Livrer l\'Excellence Numérique en Europe',
            body: 'Les entreprises européennes exigent un équilibre entre innovation, convivialité et sensibilisation réglementaire. Nos solutions sont construites avec la performance, l\'accessibilité et l\'évolutivité au cœur.',
          },
          services: {
            title: 'Nos Services Numériques en Europe',
            items: [
              'Conception Web Sur Mesure & UI/UX',
              'Redesign & Optimisation de Sites Web',
              'Développement Web & SaaS',
              'Optimisation pour les Moteurs de Recherche (SEO)',
              'Marketing Numérique & Croissance',
              'Maintenance, Support & Gestion Serveur',
            ],
          },
          whoWeWorkWith: {
            title: 'Avec Qui Nous Travaillons en Europe',
            items: [
              'Startups & Scaleups',
              'Entreprises SaaS & Technologiques',
              'Marques E-commerce & DTC',
              'Entreprises & Cabinets de Services Professionnels',
            ],
          },
          whyChoose: {
            title: 'Pourquoi les Entreprises Européennes Choisissent Belk Digital',
            items: [
              { title: 'Livraison globale avec une exécution adaptée à la région', description: 'Adapté aux normes et réglementations européennes.' },
              { title: 'Pratiques de développement propres, évolutives et conformes', description: 'Focus sur les standards RGPD et l\'accessibilité.' },
              { title: 'Stratégies SEO alignées avec les marchés européens', description: 'Ciblage de l\'intention de recherche locale et régionale.' },
              { title: 'Approche de partenariat à long terme', description: 'Construire des relations durables.' },
            ],
          },
          howWeDeliver: {
            title: 'Comment Nous Livrons des Projets Globalement',
            body: 'Notre modèle de livraison à distance nous permet de travailler efficacement à travers les fuseaux horaires tout en maintenant des normes élevées de qualité et de responsabilité. Chaque projet suit un processus structuré axé sur la clarté, la performance et des résultats mesurables.',
          },
          cta: {
            title: 'Prêt à Construire une Présence Numérique Haute Performance en Europe ?',
            subtitle: 'Discutons de la manière dont Belk Digital peut aider votre entreprise à croître avec des solutions numériques évolutives et prêtes pour l\'avenir.',
          },
        },
        gcc: {
          title: 'Société de Services Numériques dans le CCG',
          intro: 'Belk Digital fournit des services de développement web, de solutions SaaS, de SEO et de marketing numérique aux entreprises à travers la région du CCG. Nous soutenons les entreprises à croissance rapide dans la construction de fondations numériques solides.',
          excellence: {
            title: 'Livrer l\'Excellence Numérique dans le CCG',
            body: 'Le marché du CCG évolue rapidement et est très compétitif. Nous aidons les entreprises à établir une forte présence numérique avec des plateformes évolutives, sécurisées et prêtes pour l\'avenir.',
          },
          services: {
            title: 'Nos Services Numériques dans le CCG',
            items: [
              'Conception Web Sur Mesure & UI/UX',
              'Redesign & Optimisation de Sites Web',
              'Développement Web & SaaS',
              'Optimisation pour les Moteurs de Recherche (SEO)',
              'Marketing Numérique & Croissance',
              'Maintenance, Support & Gestion Serveur',
            ],
          },
          whoWeWorkWith: {
            title: 'Avec Qui Nous Travaillons dans le CCG',
            items: [
              'Startups & Scaleups',
              'Entreprises SaaS & Technologiques',
              'Marques E-commerce & DTC',
              'Entreprises & Cabinets de Services Professionnels',
            ],
          },
          whyChoose: {
            title: 'Pourquoi les Entreprises du CCG Choisissent Belk Digital',
            items: [
              { title: 'Expérience au service de divers marchés internationaux', description: 'Apporter la qualité mondiale aux projets locaux.' },
              { title: 'Stratégies numériques axées sur les affaires', description: 'Des solutions qui stimulent le ROI.' },
              { title: 'Développement axé sur la performance et la sécurité', description: 'Sites web rapides, sécurisés et fiables.' },
              { title: 'Communication et livraison fiables', description: 'Gestion de projet professionnelle.' },
            ],
          },
          howWeDeliver: {
            title: 'Comment Nous Livrons des Projets Globalement',
            body: 'Notre modèle de livraison à distance nous permet de travailler efficacement à travers les fuseaux horaires tout en maintenant des normes élevées de qualité et de responsabilité. Chaque projet suit un processus structuré axé sur la clarté, la performance et des résultats mesurables.',
          },
          cta: {
            title: 'Prêt à Construire une Présence Numérique Haute Performance dans le CCG ?',
            subtitle: 'Discutons de la manière dont Belk Digital peut aider votre entreprise à croître avec des solutions numériques évolutives et prêtes pour l\'avenir.',
          },
        },
        australia: {
          title: 'Société de Services Numériques en Australie',
          intro: 'Belk Digital s\'associe aux entreprises australiennes pour fournir des solutions de conception web, de développement web, de SEO et de marketing numérique qui soutiennent une croissance durable et un succès à long terme.',
          excellence: {
            title: 'Livrer l\'Excellence Numérique en Australie',
            body: 'Les entreprises australiennes apprécient la fiabilité, la performance et la clarté. Nos solutions numériques sont conçues pour fonctionner de manière cohérente tout en évoluant avec la croissance de l\'entreprise.',
          },
          services: {
            title: 'Nos Services Numériques en Australie',
            items: [
              'Conception Web Sur Mesure & UI/UX',
              'Redesign & Optimisation de Sites Web',
              'Développement Web & SaaS',
              'Optimisation pour les Moteurs de Recherche (SEO)',
              'Marketing Numérique & Croissance',
              'Maintenance, Support & Gestion Serveur',
            ],
          },
          whoWeWorkWith: {
            title: 'Avec Qui Nous Travaillons en Australie',
            items: [
              'Startups & Scaleups',
              'Entreprises SaaS & Technologiques',
              'Marques E-commerce & DTC',
              'Entreprises & Cabinets de Services Professionnels',
            ],
          },
          whyChoose: {
            title: 'Pourquoi les Entreprises Australiennes Choisissent Belk Digital',
            items: [
              { title: 'Expertise mondiale avec compréhension du marché local', description: 'Nous vous connectons aux meilleures pratiques mondiales.' },
              { title: 'Code propre, maintenable et évolutif', description: 'Construit pour durer et facile à maintenir.' },
              { title: 'Stratégies numériques axées sur le SEO', description: 'Approche axée sur la croissance.' },
              { title: 'Support et optimisation à long terme', description: 'Votre partenaire pour le long terme.' },
            ],
          },
          howWeDeliver: {
            title: 'Comment Nous Livrons des Projets Globalement',
            body: 'Notre modèle de livraison à distance nous permet de travailler efficacement à travers les fuseaux horaires tout en maintenant des normes élevées de qualité et de responsabilité. Chaque projet suit un processus structuré axé sur la clarté, la performance et des résultats mesurables.',
          },
          cta: {
            title: 'Prêt à Construire une Présence Numérique Haute Performance en Australie ?',
            subtitle: 'Discutons de la manière dont Belk Digital peut aider votre entreprise à croître avec des solutions numériques évolutives et prêtes pour l\'avenir.',
          },
        },
      }
    },
    trust: {
      badge: 'Notre Bilan',
      title: 'Fondé sur la Confiance & l\'Excellence',
      subtitle: 'Des années d\'expérience à livrer des résultats qui dépassent les attentes.',
      items: [
        { value: '50+', label: 'Projets Complétés' },
        { value: '98%', label: 'Satisfaction Client' },
        { value: '12+', label: 'Pays Desservis' },
        { value: '4', label: 'Années d\'Expérience' },
      ],
    },
    faq: {
      badge: 'Questions Fréquentes',
      title: 'Foire Aux Questions',
      subtitle: 'Réponses rapides pour vous aider à prendre des décisions éclairées.',
      viewAll: 'Voir Toutes les FAQ',
      items: [
        {
          question: 'Combien de temps faut-il pour créer un site?',
          answer: 'Le délai varie selon la complexité. Un site d\'entreprise typique prend 4-8 semaines, les projets complexes 8-12 semaines ou plus.',
        },
        {
          question: 'Quelle est votre structure tarifaire?',
          answer: 'Nous offrons des tarifs personnalisés. Les projets varient de 5 000$ à 50 000$+ selon la portée et la complexité.',
        },
        {
          question: 'Travaillez-vous avec des clients internationaux?',
          answer: 'Absolument! Nous travaillons avec des clients mondialement et avons de l\'expérience avec des marchés diversifiés.',
        },
        {
          question: 'Que se passe-t-il après le lancement?',
          answer: 'Nous offrons des forfaits de maintenance continue pour garder votre site sécurisé et optimisé.',
        },
      ],
    },
    cta: {
      title: 'Prêt à Transformer Votre Présence Digitale?',
      subtitle: 'Discutons de comment nous pouvons aider votre entreprise à croître en ligne.',
      button: 'Démarrer Votre Projet',
      buttonSecondary: 'Planifier un Appel',
    },
    footer: {
      description: 'Nous créons des expériences digitales exceptionnelles qui aident les entreprises à prospérer.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      locations: 'Localisations',
      contact: 'Contact',
      email: 'Nous Écrire',
      whatsapp: 'WhatsApp',
      copyright: 'Belk Digital. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
    about: {
      aboutUs: { line1: 'À propos', line2: 'de nous' },
      hero: {
        title: 'Créer l\'Excellence Digitale',
        titleHighlight: 'Depuis 2015',
        subtitle: 'Nous combinons réflexion stratégique et excellence technique pour créer des solutions numériques qui ne sont pas seulement exceptionnelles, mais qui livrent des résultats commerciaux mesurables. Des startups aux grandes entreprises, nous avons aidé des organisations du monde entier à renforcer et à développer leur présence numérique.',
        badge: 'Depuis 2015',
      },
      mission: {
        title: 'Orienté Croissance. Axé Performance. Construit pour le Long Terme.',
        subtitle: '',
        body: 'Chez Belk Digital, nous croyons que chaque entreprise mérite une présence numérique puissante et prête pour l\'avenir. Notre mission est de simplifier les défis numériques complexes grâce à une conception réfléchie, un développement évolutif et une exécution axée sur la performance. Nous collaborons avec des entreprises de tous secteurs pour construire des plateformes numériques qui soutiennent la croissance, améliorent la visibilité et créent de la valeur à long terme.',
      },
      stats: {
        title: 'Notre impact mondial en chiffres',
        items: [
          { value: '50+', label: 'Clients Servis' },
          { value: '80+', label: 'Projets Complétés' },
          { value: '10+', label: 'Pays Servis' },
          { value: '98%', label: 'Satisfaction Client' },
        ]
      },
      whatWeDo: {
        title: 'Ce que nous faisons chez Belk Digital',
        subtitle: 'Nous offrons des services numériques de bout en bout conçus pour aider les entreprises à rivaliser, évoluer et réussir dans un monde axé sur le numérique.',
        items: [
          { title: 'Design Web Personnalisé & UI/UX', description: 'Des designs uniques et alignés sur la marque qui engagent les utilisateurs, améliorent l\'utilisabilité et stimulent les conversions sur tous les appareils.' },
          { title: 'Développement Web & SaaS', description: 'Sites web et plateformes SaaS robustes et évolutifs construits avec des technologies modernes pour soutenir la performance, la sécurité et la croissance.' },
          { title: 'Redesign & Optimisation de Site Web', description: 'Revitalisez les sites web existants avec une UX améliorée, un design moderne et des améliorations de performance qui livrent de meilleurs résultats.' },
          { title: 'Optimisation pour les Moteurs de Recherche (SEO)', description: 'Solutions SEO stratégiques axées sur la visibilité à long terme, la croissance organique et la performance de recherche sur les marchés mondiaux.' },
          { title: 'Marketing Digital & Croissance', description: 'Stratégies marketing basées sur les données conçues pour augmenter la portée, l\'engagement et l\'impact commercial mesurable.' },
          { title: 'Maintenance, Support & Gestion de Serveur', description: 'Support continu pour garder vos plateformes numériques sécurisées, optimisées et fonctionnant à leur performance maximale.' },
        ],
      },
      values: {
        title: 'Nos valeurs fondamentales qui guident chaque projet',
        subtitle: 'Nos valeurs guident notre façon de travailler, de collaborer et de livrer des résultats pour nos clients.',
        badge: 'Nos Valeurs',
        items: [
          { title: 'Innovation dans les Solutions Numériques', description: 'Nous restons en avance sur les technologies et tendances évolutives pour offrir des expériences numériques modernes et prêtes pour l\'avenir.' },
          { title: 'Engagement envers l\'Excellence', description: 'Chaque projet reçoit notre attention totale aux détails, à la qualité et à l\'exécution.' },
          { title: 'Efficacité Sans Compromis', description: 'Nous optimisons les flux de travail et les processus pour livrer des résultats plus rapidement, sans sacrifier la qualité.' },
          { title: 'Intégrité et Partenariats Transparents', description: 'Nous croyons en une communication honnête, la responsabilité et des relations clients à long terme.' },
        ],
      },
      whoWeWorkWith: {
        badge: 'AVEC QUI',
        title: 'Nous Travaillons',
        heading: 'Avec Qui Nous Travaillons',
        chapter: 'Chapitre',
        items: [
          {
            title: 'Startups & Scaleups',
            description: 'Aider les entreprises émergentes à construire des fondations numériques solides et des plateformes évolutives.',
            detail: 'Nous sommes spécialisés dans la navigation des premières étapes chaotiques de la croissance, offrant un développement agile et une architecture évolutive qui grandit avec vos levées de fonds et votre base d\'utilisateurs.',
          },
          {
            title: 'Entreprises SaaS & Technologiques',
            description: 'Conception et développement de produits numériques avancés pour des entreprises technologiques à croissance rapide.',
            detail: 'Des interfaces de tableau de bord complexes aux sites marketing haute performance, nous construisons l\'infrastructure numérique qui propulse les entreprises technologiques de premier plan.',
          },
          {
            title: 'E-commerce & Marques DTC',
            description: 'Création d\'expériences d\'achat fluides qui stimulent l\'engagement et les conversions.',
            detail: 'Nous combinons une narration de marque émotionnelle avec une optimisation rigoureuse du taux de conversion pour créer des boutiques en ligne qui ne sont pas seulement belles mais qui vendent efficacement.',
          },
          {
            title: 'Entreprises & Agences',
            description: 'Solutions évolutives adaptées aux grandes organisations et aux partenaires stratégiques.',
            detail: 'Nous agissons comme une extension transparente de vos équipes internes, offrant une sécurité, une conformité et une fiabilité de niveau entreprise pour les initiatives numériques critiques.',
          },
        ],
      },
      whyChoose: {
        title: 'Pourquoi choisir Belk Digital comme partenaire numérique',
        items: [
          { title: 'Stratégie Globale d\'Abord', description: 'Solutions conçues pour la portée internationale, l\'évolutivité et la performance inter-marchés.' },
          { title: 'Design & Développement Axés sur les Affaires', description: 'Chaque décision est guidée par les objectifs commerciaux, le ROI et les résultats mesurables.' },
          { title: 'SEO & Performance au Cœur', description: 'Optimisation intégrée pour la vitesse, la visibilité de recherche et l\'expérience utilisateur.' },
          { title: 'Approche de Partenariat à Long Terme', description: 'Nous grandissons avec nos clients, fournissant un soutien continu, une optimisation et une évolution.' },
        ],
      },
      team: {
        title: 'Talents Numériques Experts avec un Modèle de Livraison Global',
        subtitle: 'Notre équipe distribuée collabore à travers les fuseaux horaires pour livrer des solutions numériques fluides dans le monde entier. Nous combinons leadership stratégique et exécution pratique pour assurer cohérence, qualité et fiabilité sur chaque projet.',
        badge: 'Notre Équipe',
        roles: [
          { role: 'Responsables Créatifs & Design', count: '4+', description: '' },
          { role: 'Développeurs Web & SaaS Seniors', count: '12+', description: '' },
          { role: 'Spécialistes UX & Conversion', count: '6+', description: '' },
          { role: 'Chefs de Projet Globaux', count: '5+', description: '' },
        ],
      },
      approach: {
        title: 'Notre Approche pour Livrer le Succès Numérique',
        subtitle: 'Livrer le succès numérique grâce à une méthodologie éprouvée et structurée.',
        stepLabels: ['Étape Un', 'Étape Deux', 'Étape Trois', 'Étape Quatre'],
        badgeLabels: ['Découverte', 'Planification', 'Exécution', 'Lancement'],
        growth: 'CROISSANCE',
        items: [
          { title: 'Découverte & Compréhension Commerciale', description: 'Nous commençons par comprendre vos objectifs, votre audience, votre position sur le marché et vos défis pour définir une direction stratégique claire.' },
          { title: 'Stratégie & Planification Technique', description: 'Nous créons une feuille de route complète couvrant le design, la technologie, la structure de contenu et les objectifs de performance.' },
          { title: 'Design, Développement & Optimisation', description: 'Exécution agile avec un fort accent sur la qualité, l\'utilisabilité, l\'évolutivité et l\'optimisation.' },
          { title: 'Lancement, Support & Croissance Continue', description: 'Déploiement fluide suivi d\'un support continu, d\'une surveillance et d\'une amélioration continue.' },
        ],
      },
    },
    work: {
      title: 'Résultats Numériques Prouvés pour',
      titleHighlight: 'Entreprises Mondiales',
      subtitle: 'Explorez des projets réels où nous avons aidé des entreprises aux États-Unis, en Europe, dans le CCG et en Australie à réaliser une croissance numérique mesurable.',
      badge: 'Études de Cas',
      statsTitle: 'Notre Impact à Travers les Projets Numériques Mondiaux',
      caseStudies: {
        title: 'Études de Cas en Vedette',
        filters: ['Design Web', 'Développement Web', 'Plateformes SaaS', 'SEO & Marketing Digital'],
      },
      methodologyTitle: 'Notre Méthodologie pour Livrer des Résultats Numériques Constants',
      methodologySubtitle: 'Notre méthodologie éprouvée garantit des résultats constants et de haute qualité pour chaque projet.',
      methodologyBadge: 'Notre Méthodologie',
      industriesTitle: 'Expérience Industrielle sur les Marchés Mondiaux',
      industriesSubtitle: 'Notre expérience s\'étend sur de multiples industries, apportant les meilleures pratiques de chacune.',
      industriesBadge: 'Expérience Industrielle',
      methodology: [
        { title: 'Découverte Stratégique & Analyse Commerciale', description: 'Nous commençons chaque projet par une recherche approfondie sur votre entreprise, vos concurrents et votre audience cible.' },
        { title: 'User-Centered Design & Stratégie UX', description: 'Nos designs priorisent l\'expérience utilisateur, assurant une navigation intuitive et un engagement.' },
        { title: 'Développement Agile & Itération', description: 'Le développement itératif avec des points de contrôle réguliers vous garde impliqué tout au long du processus.' },
        { title: 'Assurance Qualité & Tests de Performance', description: 'Des tests rigoureux sur tous les appareils et navigateurs garantissent une performance sans faille.' },
        { title: 'Support Après Lancement & Optimisation', description: 'La maintenance et l\'optimisation après lancement gardent votre site performant à son meilleur niveau.' },
      ],
      industries: [
        'E-commerce & Détail',
        'Santé & Médical',
        'Finance & Fintech',
        'Immobilier',
        'Éducation & E-learning',
        'Technologie & SaaS',
        'Voyage & Hospitalité',
        'Services Professionnels',
      ],
      trust: {
        title: 'Approuvé par les Entreprises pour des Partenariats Numériques à Long Terme',
        subtitle: 'Beaucoup de nos projets sont protégés par des NDA, mais la rétention et la satisfaction de nos clients parlent d\'elles-mêmes.',
        body: 'Nous croyons que la transparence et la collaboration sont essentielles aux partenariats réussis. Notre processus est conçu pour vous tenir informé et confiant à chaque étape.',
        items: [
          'Communication Transparente',
          'Mises à Jour Régulières',
          'Livrables Clairs',
          'Support Après Lancement',
        ],
      },
      whyAgain: {
        title: 'Pourquoi les Clients Choisissent Belk Digital Encore une Fois',
        items: [
          { title: 'Livraison constante sur des projets complexes', description: 'Nous livrons à temps et dans le budget, à chaque fois.' },
          { title: 'Communication claire & transparence', description: 'Pas de jargon, juste des mises à jour claires et des conseils honnêtes.' },
          { title: 'Résultats commerciaux mesurables', description: 'Nous nous concentrons sur les KPI qui comptent pour votre croissance.' },
          { title: 'Support & optimisation à long terme', description: 'Nous restons avec vous pour assurer un succès continu.' },
        ],
      },
      cta: {
        title: 'Prêt à Obtenir des Résultats Comme Ceux-ci pour Votre Entreprise ?',
        subtitle: 'Discutons de la manière dont nous pouvons livrer une croissance mesurable pour vos initiatives numériques.',
      },
    },
    blog: {
      title: 'Insights, Stratégies & Ressources de Croissance Numérique',
      subtitle: 'Restez informé des avis d\'experts, des stratégies et des meilleures pratiques en matière de conception web, de développement, de référencement, d\'optimisation des performances et de croissance numérique. Chez Belk Digital, nous partageons nos connaissances pratiques pour aider les entreprises aux États-Unis, en Europe, dans le CCG et en Australie à prendre des décisions numériques éclairées.',
      badge: 'Notre Blog',
      readTime: 'lecture',
      backToBlog: 'Retour au Blog',
      categories: {
        all: 'Tout',
        business: 'Affaires & Stratégie',
        design: 'Design & UX',
        seo: 'SEO & Visibilité',
        performance: 'Performance & Optimisation'
      },
      whatYouWillLearn: {
        title: 'Ce que vous apprendrez sur notre blog',
        items: [
          'Comment construire des plateformes numériques évolutives',
          'Comment le SEO et la performance impactent les revenus',
          'Comment le design influence les conversions',
          'Comment les entreprises choisissent les bons partenaires numériques'
        ]
      },
      postCta: {
        title: 'Besoin d\'un expert pour cela ?',
        subtitle: 'Si vous cherchez à mettre en œuvre ces stratégies pour votre entreprise, notre équipe peut vous aider à planifier, construire et évoluer en toute confiance.'
      }
    },
    contact: {
      badge: 'Parlons Ensemble',
      title: 'Commençons une',
      titleHighlight: 'Conversation',
      subtitle: 'Prêt à transformer votre présence numérique ? Que vous planifiiez un nouveau site web, la refonte d\'une plateforme existante ou la mise à l\'échelle d\'un produit numérique, notre équipe est là pour vous aider.',
      form: {
        name: 'Nom',
        namePlaceholder: 'Dites-nous à qui nous parlons',
        email: 'Email',
        emailPlaceholder: 'Où pouvons-nous vous joindre',
        subject: 'Sujet',
        subjectPlaceholder: 'Décrivez brièvement votre demande',
        message: 'Message',
        messagePlaceholder: 'Parlez-nous de votre projet, vos objectifs ou vos questions',
        submit: 'Envoyer le Message',
        helperText: 'Partagez quelques détails sur votre projet et notre équipe vous recontactera avec les prochaines étapes. Toutes les demandes sont traitées de manière confidentielle.',
        privacyText: 'Nous respectons votre vie privée. Vos informations ne sont jamais partagées.'
      },
      info: {
        title: 'Autres Moyens de Nous Contacter',
        email: { label: 'Envoyez-nous un Email', desc: 'Pour les demandes générales, discussions de projet et opportunités de partenariat.' },
        whatsapp: { label: 'WhatsApp', desc: 'Questions rapides ou communication directe avec notre équipe.' },
        schedule: { label: 'Réserver un Appel', desc: 'Réservez un appel de découverte pour discuter de vos besoins en détail.' },
      },
      headings: {
        formTitle: 'Envoyez-nous un Message',
        otherWays: 'Autres moyens de nous contacter',
      },
      global: {
        title: 'Nous Travaillons Globalement',
        description: 'Basés sur plusieurs fuseaux horaires, nous collaborons avec des clients aux États-Unis, en Europe, dans le CCG et en Australie. Notre modèle de livraison à distance garantit une communication fluide et une exécution de projet cohérente, peu importe l\'emplacement.'
      },
      process: {
        title: 'Que se passe-t-il après nous avoir contactés ?',
        steps: [
          { title: 'Revue', description: 'Nous examinons votre message et vos besoins' },
          { title: 'Réponse', description: 'Un membre de l\'équipe vous contacte sous un jour ouvrable' },
          { title: 'Découverte', description: 'Nous programmons un appel de découverte si nécessaire' },
          { title: 'Plan', description: 'Vous recevez des prochaines étapes claires et des recommandations' }
        ]
      },
      who: {
        title: 'Qui nous contacte généralement',
        subtitle: 'Si vous cherchez un partenaire numérique fiable et à long terme, vous êtes au bon endroit.',
        items: [
          'Fondateurs et équipes de startups',
          'Entreprises SaaS et technologiques',
          'Marques E-commerce et DTC',
          'Grandes entreprises et sociétés de services professionnels',
          'Équipes marketing et produit'
        ]
      },
      before: {
        title: 'Avant de nous contacter',
        items: [
          'Nous n\'offrons pas de solutions universelles',
          'Chaque projet commence par une stratégie et une découverte',
          'Nous nous concentrons sur une croissance numérique évolutive à long terme',
          'Confidentialité et transparence sont la norme'
        ]
      },
      finalCta: {
        title: 'Prêt à discuter de votre projet ?',
        subtitle: 'Parlez-nous de vos objectifs, défis et délais. Notre équipe vous aidera à déterminer la meilleure voie à suivre pour vos initiatives numériques.',
        button: 'Démarrer un Projet'
      }
    },

    faqCategories: [
      {
        name: 'Tarification & Paiements',
        questions: [
          { q: 'Quelle est votre structure tarifaire ?', a: 'Nous proposons une tarification personnalisée.' },
          { q: 'Proposez-vous des plans de paiement ?', a: 'Oui, nous offrons des plans flexibles.' },
          { q: 'Y a-t-il des coûts cachés ?', a: 'Non, nos devis sont complets.' },
          { q: 'Quels modes de paiement acceptez-vous ?', a: 'Virements, cartes et PayPal.' },
        ]
      },
      {
        name: 'Processus & Délais',
        questions: [
          { q: 'Combien de temps pour créer un site ?', a: 'Généralement 4-8 semaines.' },
          { q: 'Quel est votre processus ?', a: 'Découverte -> Stratégie -> Design -> Dév -> Tests -> Lancement.' },
          { q: 'Combien de révisions ?', a: 'Nos forfaits incluent 2-3 rondes de révisions.' },
          { q: 'Serai-je impliqué ?', a: 'Absolument ! Votre avis est crucial.' },
        ]
      },
      {
        name: 'Livraison Mondiale',
        questions: [
          { q: 'Travaillez-vous à l\'international ?', a: 'Oui ! Nous travaillons mondialement.' },
          { q: 'Quelles langues supportez-vous ?', a: 'Nous créons des sites multilingues.' },
          { q: 'Comment gérez-vous les fuseaux horaires ?', a: 'Nous sommes flexibles et utilisons la communication asynchrone.' },
          { q: 'Supportez-vous le RTL ?', a: 'Oui, nous avons une grande expérience avec le RTL.' },
        ]
      },
      {
        name: 'Support & Maintenance',
        questions: [
          { q: 'Que se passe-t-il après le lancement ?', a: 'Nous offrons une maintenance continue.' },
          { q: 'Proposez-vous l\'hébergement ?', a: 'Nous aidons à configurer l\'hébergement.' },
          { q: 'Délai de réponse au support ?', a: '2-4 heures pour les urgences.' },
          { q: 'Puis-je mettre à jour le contenu ?', a: 'Oui, via un CMS convivial.' },
        ]
      },
      {
        name: 'Technique',
        questions: [
          { q: 'Quelles technologies utilisez-vous ?', a: 'React, Next.js, WordPress, etc.' },
          { q: 'Le site sera-t-il responsive ?', a: 'Absolument ! Mobile-first.' },
          { q: 'Optimisez-vous le SEO ?', a: 'Oui, les meilleures pratiques SEO sont incluses.' },
          { q: 'Serai-je propriétaire du code ?', a: 'Oui, à 100% après paiement final.' },
        ]
      }
    ],
    privacy: {
      badge: 'Politique de Confidentialité',
      title: 'Votre Vie Privée,',
      titleHighlight: 'Notre Priorité',
      subtitle: 'Chez Belk Digital, nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos informations personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos données.',
      lastUpdated: 'Dernière mise à jour : 2 février 2026',
      effectiveDate: 'Date d\'entrée en vigueur : 1er janvier 2026',
      sections: {
        informationCollect: {
          title: 'Informations Que Nous Collectons',
          items: [
            'Informations d\'identification personnelle (nom, adresse e-mail, numéro de téléphone, etc.)',
            'Données d\'utilisation et habitudes de navigation sur notre site web',
            'Informations techniques, y compris l\'adresse IP, le type de navigateur et les informations sur l\'appareil',
            'Cookies et technologies de suivi similaires',
            'Préférences de communication et données marketing'
          ]
        },
        howWeUse: {
          title: 'Comment Nous Utilisons Vos Informations',
          items: [
            'Pour fournir, maintenir et améliorer nos services',
            'Pour communiquer avec vous sur les mises à jour, les offres et les informations importantes',
            'Pour personnaliser votre expérience et fournir du contenu pertinent',
            'Pour analyser les modèles d\'utilisation et optimiser les performances de notre site web',
            'Pour se conformer aux obligations légales et protéger nos droits'
          ]
        },
        dataSecurity: {
          title: 'Sécurité des Données',
          items: [
            'Nous mettons en œuvre des mesures de sécurité conformes aux normes de l\'industrie pour protéger vos données',
            'Toutes les informations sensibles sont cryptées pendant la transmission à l\'aide de SSL/TLS',
            'L\'accès aux données personnelles est réservé au personnel autorisé uniquement',
            'Audits de sécurité réguliers et mises à jour pour maintenir la protection des données',
            'Stockage sécurisé des données avec sauvegardes cryptées'
          ]
        },
        informationSharing: {
          title: 'Partage d\'Informations',
          items: [
            'Nous ne vendons, n\'échangeons ni ne louons vos informations personnelles à des tiers',
            'Les données peuvent être partagées avec des prestataires de services de confiance qui aident nos opérations',
            'Les informations peuvent être divulguées en cas d\'exigence légale ou de procédure judiciaire',
            'Transferts d\'entreprise : les données peuvent être transférées en cas de fusion ou d\'acquisition',
            'Avec votre consentement explicite pour des fins spécifiques'
          ]
        },
        yourRights: {
          title: 'Vos Droits',
          items: [
            'Accéder et consulter vos informations personnelles',
            'Demander la correction ou la suppression de vos données',
            'Vous désinscrire des communications marketing à tout moment',
            'Demander la portabilité des données dans un format structuré',
            'Déposer une plainte auprès des autorités compétentes de protection des données'
          ]
        },
        cookies: {
          title: 'Politique des Cookies',
          items: [
            'Cookies essentiels pour la fonctionnalité du site web',
            'Cookies analytiques pour comprendre le comportement des utilisateurs',
            'Cookies marketing pour la publicité personnalisée (avec consentement)',
            'Vous pouvez contrôler les préférences des cookies via les paramètres de votre navigateur',
            'Certaines fonctionnalités peuvent ne pas fonctionner correctement si les cookies sont désactivés'
          ]
        }
      },
      contact: {
        title: 'Des Questions sur la Confidentialité ?',
        description: 'Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n\'hésitez pas à nous contacter. Notre équipe est là pour vous aider et s\'assurer que vos préoccupations en matière de confidentialité sont traitées.',
        button: 'Contactez-nous'
      }
    },
    terms: {
      badge: 'Conditions Générales',
      title: 'Conditions',
      titleHighlight: 'Générales',
      subtitle: 'Veuillez lire attentivement ces conditions générales avant d\'utiliser les services de Belk Digital. Ces conditions régissent votre utilisation de notre site web et de nos services.',
      lastUpdated: 'Dernière mise à jour : 2 février 2026',
      effectiveDate: 'Date d\'entrée en vigueur : 1er janvier 2026',
      sections: {
        acceptance: {
          title: 'Acceptation des Conditions',
          items: [
            'En accédant et en utilisant les services de Belk Digital, vous acceptez et acceptez d\'être lié par ces Conditions Générales',
            'Si vous n\'êtes pas d\'accord avec une partie de ces conditions, vous ne pouvez pas accéder à nos services',
            'Nous nous réservons le droit de mettre à jour ces conditions à tout moment sans préavis',
            'L\'utilisation continue de nos services après les modifications constitue une acceptation des conditions modifiées',
            'Ces conditions s\'appliquent à tous les visiteurs, utilisateurs et autres qui accèdent à nos services'
          ]
        },
        servicesUsage: {
          title: 'Services et Utilisation',
          items: [
            'Belk Digital fournit des services de développement web, de design et de marketing numérique',
            'Les services sont fournis "tels quels" et "selon disponibilité"',
            'Nous nous réservons le droit de modifier, suspendre ou interrompre les services à tout moment',
            'Vous devez avoir au moins 18 ans pour utiliser nos services',
            'Vous êtes responsable du maintien de la confidentialité de votre compte'
          ]
        },
        intellectualProperty: {
          title: 'Propriété Intellectuelle',
          items: [
            'Tous les contenus, designs et matériels livrés appartiennent à Belk Digital jusqu\'au paiement intégral',
            'Lors du paiement intégral, les droits de propriété intellectuelle spécifiés sont transférés au client',
            'Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées sans autorisation',
            'Les marques déposées, logos et marques de service affichés sont la propriété de leurs propriétaires respectifs',
            'Belk Digital conserve le droit de présenter le travail terminé dans notre portfolio'
          ]
        },
        payment: {
          title: 'Paiement et Facturation',
          items: [
            'Les conditions de paiement sont spécifiées dans les accords de projet individuels',
            'Tous les frais ne sont pas remboursables sauf indication contraire par écrit',
            'Les retards de paiement peuvent entraîner des frais supplémentaires et la suspension du service',
            'Les prix sont susceptibles de changer avec un préavis de 30 jours',
            'Vous êtes responsable de toutes les taxes et frais de transaction applicables'
          ]
        },
        refund: {
          title: 'Remboursement et Annulation',
          items: [
            'L\'éligibilité au remboursement dépend de l\'étape du projet et des conditions de l\'accord',
            'Les annulations doivent être soumises par écrit pour être valides',
            'Le travail effectué jusqu\'au point d\'annulation sera facturé',
            'Les dépôts ne sont généralement pas remboursables sauf en cas de non-prestation de service',
            'Les demandes de remboursement sont examinées au cas par cas dans un délai de 14 jours ouvrables'
          ]
        },
        liability: {
          title: 'Limitation de Responsabilité',
          items: [
            'Belk Digital n\'est pas responsable des dommages indirects, accessoires ou consécutifs',
            'Notre responsabilité est limitée au montant payé pour le service spécifique',
            'Nous ne sommes pas responsables du contenu, des services ou des produits de tiers',
            'Les interruptions de service dues à des problèmes techniques ou à un cas de force majeure ne constituent pas un motif de responsabilité',
            'Vous acceptez d\'indemniser Belk Digital contre les réclamations découlant de votre utilisation des services'
          ]
        },
        prohibited: {
          title: 'Activités Interdites',
          items: [
            'Utiliser les services à des fins illégales ou à des activités illégales',
            'Tenter d\'obtenir un accès non autorisé à nos systèmes ou réseaux',
            'Transmettre des virus, des logiciels malveillants ou tout code nuisible',
            'Usurper l\'identité d\'une personne ou d\'une entité ou dénaturer une affiliation',
            'Interférer avec ou perturber l\'intégrité de nos services'
          ]
        },
        warranties: {
          title: 'Garanties et Dénis de Responsabilité',
          items: [
            'Les services sont fournis sans garanties d\'aucune sorte, expresses ou implicites',
            'Nous ne garantissons pas un service ininterrompu, opportun, sécurisé ou sans erreur',
            'Nous ne garantissons pas que les résultats répondront à vos exigences',
            'Tout matériel téléchargé est à vos propres risques et à votre discrétion',
            'Nous déclinons toutes les garanties, y compris la qualité marchande et l\'adéquation à un usage particulier'
          ]
        }
      },
      governing: {
        title: 'Loi Applicable',
        description: 'Ces Conditions Générales sont régies et interprétées conformément aux lois de la juridiction dans laquelle Belk Digital opère. Tout litige relatif à ces conditions sera soumis à la compétence exclusive des tribunaux de cette juridiction.',
        description2: 'En utilisant nos services, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions Générales. Si vous avez des questions, veuillez contacter notre équipe juridique.'
      }
    },
    whoWeAre: {
      badge: 'Qui sommes-nous ?',
      title: 'Nous sommes une entreprise mondiale de solutions numériques créant des sites web performants, des plateformes SaaS et des produits numériques évolutifs qui génèrent un véritable impact commercial.',
      aboutBtn: 'À propos de Belk Digital',
      teamBtn: 'Rencontrez l\'équipe',
    },
  },
  de: {
    seo: {
      home: {
        title: 'Agentur für Digitale Transformation | Webdesign & Entwicklung',
        description: 'Belk Digital liefert leistungsstarke Websites, maßgeschneiderte Webanwendungen und SEO-Dienste, um Unternehmen weltweit beim Wachstum zu unterstützen.'
      },
      about: {
        title: 'Über Belk Digital | Globale Digitalagentur',
        description: 'Erfahren Sie mehr über unsere Mission, Unternehmen durch Technologie zu stärken. Wir sind ein Team von Experten, das sich Ihrem digitalen Erfolg widmet.'
      },
      services: {
        title: 'Webdesign, Entwicklung & SEO-Dienste',
        description: 'Entdecken Sie unser umfassendes Angebot an digitalen Dienstleistungen, einschließlich individuellem Webdesign, SaaS-Entwicklung und ergebnisorientiertem SEO.'
      },
      work: {
        title: 'Unsere Arbeit & Fallstudien',
        description: 'Sehen Sie sich unser Portfolio erfolgreicher Projekte an. Wir entwickeln preisgekrönte Websites und digitale Produkte für Kunden weltweit.',
        caseStudies: {
          ecommerce: { title: 'E-Commerce-Plattform' },
          saas: { title: 'SaaS-Dashboard' },
          mobile: { title: 'Mobile App' }
        }
      },
      locations: {
        title: 'Globale Servicestandorte',
        subtitle: 'Wir betreuen Kunden in den USA, Europa, den GCC-Staaten und Australien mit digitaler Exzellenz (remote-first).',
        locationsGridTitle: 'Unsere globalen Servicestandorte',
        viewAll: 'Alle Standorte anzeigen',
        regions: {
          usa: 'Nordamerika',
          europe: 'Europa',
          uae: 'Naher Osten',
          ksa: 'Saudi-Arabien',
          australia: 'Australien',
        }
      },
      blog: {
        title: 'Digitale Einblicke & Tech-Blog',
        description: 'Lesen Sie unsere neuesten Artikel zu Webentwicklungstrends, SEO-Strategien und Tipps zur digitalen Transformation.'
      },
      contact: {
        title: 'Kontakt | Starten Sie Ihr Projekt',
        description: 'Bereit, Ihre digitale Präsenz zu transformieren? Kontaktieren Sie unser Team noch heute für eine kostenlose Beratung.'
      },
      faq: {
        title: 'Häufig gestellte Fragen (FAQ)',
        description: 'Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen, Preisen, Prozessen und Support.'
      }
    },
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      services: 'Dienstleistungen',
      work: 'Unsere Arbeit',
      locations: 'Standorte',
      blog: 'Blog',
      contact: 'Kontakt',
      faq: 'FAQ',
      bookCall: 'Gespräch vereinbaren',
    },
    hero: {
      badge: 'Digitale Exzellenz',
      title: 'SCALE',
      titleHighlight: '',
      subtitle: 'Leistungsstarke digitale Lösungen für das moderne Web',
      cta: 'Projekt starten',
      ctaSecondary: 'Dienste ansehen',
      ctaContact: 'Beratung vereinbaren',
      socialProof: 'Vertraut von Marken weltweit',
      stats: {
        projects: 'Projekte geliefert',
        clients: 'Glückliche Kunden',
        countries: 'Länder bedient',
        years: 'Jahre Erfahrung',
      },
      trust: {
        projects: '50+ Projekte',
        performance: 'Hohe Leistung',
        seo: 'SEO-Optimiert',
      },
    },
    whyChoose: {
      badge: 'Warum Belk Digital',
      title: 'Expertise, der Sie vertrauen können',
      subtitle: 'Wir kombinieren strategisches Denken mit technischer Exzellenz.',
      features: [
        {
          title: 'Strategischer Ansatz',
          description: 'Jedes Projekt beginnt mit dem Verständnis Ihrer Ziele.',
        },
        {
          title: 'Globale Erfahrung',
          description: 'Arbeit mit Kunden auf allen Kontinenten bietet einzigartige Einblicke.',
        },
        {
          title: 'Technische Exzellenz',
          description: 'Unser Team ist technisch immer auf dem neuesten Stand.',
        },
        {
          title: 'Laufende Partnerschaft',
          description: 'Wir sind Ihrem langfristigen Erfolg verpflichtet.',
        },
      ],
    },
    whyWebsite: {
      badge: 'Digitales Fundament',
      title: 'Warum Ihr Unternehmen eine professionelle Website braucht',
      subtitle: 'In der heutigen digitalen Welt ist Ihre Website oft der erste Eindruck.',
      points: [
        {
          title: '24/7 Verfügbarkeit',
          description: 'Ihre Website arbeitet rund um die Uhr für Sie.',
        },
        {
          title: 'Glaubwürdigkeit & Vertrauen',
          description: 'Eine professionelle Website schafft Vertrauen bei potenziellen Kunden.',
        },
        {
          title: 'Größere Reichweite',
          description: 'Erreichen Sie Kunden überall auf der Welt.',
        },
        {
          title: 'Kosteneffizientes Marketing',
          description: 'Digitales Marketing bietet den besten ROI.',
        },
      ],
    },
    trust: {
      badge: 'Unser Erfolg',
      title: 'Vertrauen durch Exzellenz',
      subtitle: 'Wir haben uns das Vertrauen von Unternehmen weltweit durch konsistente Lieferung und Ergebnisse verdient.',
      items: [
        { value: '50+', label: 'Projekte geliefert' },
        { value: '98%', label: 'Kundenzufriedenheit' },
        { value: '12+', label: 'Länder bedient' },
        { value: '4', label: 'Jahre Erfahrung' },
      ],
    },
    cta: {
      title: 'Bereit, Ihr Projekt zu starten?',
      subtitle: 'Lassen Sie uns darüber sprechen, wie wir Ihre Vision in die Realität umsetzen können.',
      button: 'Kontaktieren Sie uns',
      buttonSecondary: 'Dienste ansehen',
    },
    services: {
      badge: 'Was wir tun',
      title: 'Globale Web-, SaaS- & SEO-Dienste für skalierbares Geschäftswachstum',
      viewAll: 'Alle Dienste anzeigen',
      subtitle: 'Wir bieten durchgängige digitale Dienste, die Unternehmen in den USA, Europa, den GCC-Staaten und Australien dabei helfen, leistungsstarke digitale Plattformen aufzubauen, zu optimieren und zu skalieren.',
      microScope: 'Webdesign • Webentwicklung • SaaS • SEO • Digitales Marketing • Support',
      common: {
        whoForTitle: 'Für wen ist dieser Service',
        whyChooseTitle: 'Warum Belk Digital für {service} wählen',
        processTitle: 'Unser Prozess für {service}',
        growthTitle: 'Wie dieser Service langfristiges Wachstum unterstützt',
        ctaTitle: 'Bereit, mit {service} zu starten?',
        ctaSubtitle: 'Lassen Sie uns Ihre Ziele besprechen und sehen, wie wir Ihnen beim Skalieren helfen können.',
        benefitsTitle: 'Geschäftliche Vorteile unseres {service}',
        includesTitle: 'Was in unserem {service} enthalten ist',
      },
      items: [
        {
          title: 'Individuelles Webdesign & UI/UX',
          description: 'Einzigartige Designs, die Ihre Marke erfassen und Besucher binden.',
          slug: 'custom-web-design',
          detailTitle: 'Individuelles Webdesign für wachstumsstarke Unternehmen',
          detailSubtitle: 'Wir bieten individuelles Webdesign für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, mit Fokus auf Leistung, Skalierbarkeit und messbare Ergebnisse.',
          whoFor: ['Startups & Scaleups', 'SaaS- & Tech-Unternehmen', 'E-Commerce & DTC-Marken', 'Großunternehmen & Agenturen'],
          includes: [
            'Markenkonforme visuelle Identität',
            'Responsive & Mobile-First Layouts',
            'UX-fokussierte Seitenstrukturen',
            'Conversion-getriebene Designsysteme',
            'Interaktive Prototypen & Übergabe'
          ],
          benefits: [
            'Stärkere Markenpositionierung',
            'Höheres Engagement & Conversions',
            'Verbesserte Leistung & Skalierbarkeit',
            'Besserer ROI für digitale Investitionen'
          ],
          whyChoose: [
            { title: 'Globale Lieferung', description: 'Erfahrung mit Kunden in USA, EU, GCC & AU.' },
            { title: 'Strategische Ausführung', description: 'Nicht nur Vorlagen, sondern maßgeschneiderte Strategie.' },
            { title: 'SEO & Performance', description: 'Optimierung vom ersten Tag an eingebaut.' },
            { title: 'Langfristiger Support', description: 'Wir sind Partner für Ihr Wachstum.' }
          ],
          process: [
            { title: 'Entdeckung & Analyse', description: 'Verständnis Ihrer Marke und Ziele.' },
            { title: 'Strategie & Planung', description: 'Definition der Roadmap und UX.' },
            { title: 'Design & Prototyping', description: 'Erstellung visueller Assets und Interaktionen.' },
            { title: 'Übergabe & Support', description: 'Reibungsloser Übergang zur Entwicklung.' }
          ],
          growthSupport: 'Unsere Design-Dienstleistungen stellen sicher, dass Ihre digitale Präsenz für Skalierung gebaut ist, für globale Märkte optimiert und darauf ausgelegt ist, Traffic in Umsatz umzuwandeln.'
        },
        {
          title: 'Website-Redesign & Optimierung',
          description: 'Beleben Sie Ihre bestehende Seite mit moderner Ästhetik und verbesserter UX neu.',
          slug: 'website-redesign',
          detailTitle: 'Website-Redesign & Optimierungsdienste',
          detailSubtitle: 'Wir modernisieren Websites für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, mit Fokus auf moderne Ästhetik und verbesserte Konversionsraten.',
          whoFor: ['Etablierte Unternehmen', 'Rebranding-Firmen', 'Schwach performende Seiten', 'Wachsende Startups'],
          includes: [
            'Vollständiges UI/UX-Audit',
            'Moderne visuelle Überarbeitung',
            'Leistungsoptimierung',
            'Korrektur der mobilen Responsivität',
            'SEO-Strukturverbesserungen'
          ],
          benefits: [
            'Erneuertes Markenimage',
            'Erhöhter organischer Traffic',
            'Geringere Absprungraten',
            'Höhere Lead-Generierung'
          ],
          whyChoose: [
            { title: 'Datenbasiertes Redesign', description: 'Entscheidungen basierend auf Analysen, nicht Vermutungen.' },
            { title: 'Nahtlose Migration', description: 'Kein Datenverlust oder Ausfallzeiten.' },
            { title: 'SEO-Erhalt', description: 'Wir halten Ihre Rankings sicher.' },
            { title: 'Zukunftssichere Technik', description: 'Auf modernen Stacks gebaut.' }
          ],
          process: [
            { title: 'Audit & Analyse', description: 'Überprüfung der aktuellen Leistung.' },
            { title: 'Strategie & Konzept', description: 'Definition des neuen Look & Feel.' },
            { title: 'Entwicklung & Migration', description: 'Aufbau und Inhaltsübertragung.' },
            { title: 'Start & Überwachung', description: 'Sicherstellen, dass alles perfekt läuft.' }
          ],
          growthSupport: 'Ein Redesign ist nicht nur kosmetisch; es ist ein strategischer Schritt zur Verbesserung von Leistung, SEO und Nutzerbindung für langfristiges Wachstum.'
        },
        {
          title: 'Branding & Digitale Identität',
          description: 'Erstellen Sie eine kohärente Markenidentität, die bei Ihrem Publikum anklang findet.',
          slug: 'branding',
          detailTitle: 'Einflussreiche Branding- & digitale Identitätsdienste',
          detailSubtitle: 'Wir schaffen starke Markenidentitäten für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, die Konsistenz und Wirkung gewährleisten.',
          whoFor: ['Neue Unternehmungen', 'Rebranding-Firmen', 'Digital-First Marken', 'Globale Unternehmen'],
          includes: [
            'Logo-Design & visuelle Identität',
            'Markenrichtlinien & Typografie',
            'Entwicklung von Ton & Stimme',
            'Social Media Assets',
            'Marketingmaterial-Design'
          ],
          benefits: [
            'Sofortige Markenwiedererkennung',
            'Konsistentes Kundenerlebnis',
            'Erhöhter wahrgenommener Wert',
            'Emotionale Verbindung mit Nutzern'
          ],
          whyChoose: [
            { title: 'Strategische Ausrichtung', description: 'Design, das Ihren Geschäftszielen entspricht.' },
            { title: 'Interkulturelle Attraktivität', description: 'Identitäten, die global funktionieren.' },
            { title: 'Skalierbare Systeme', description: 'Assets bereit für Wachstum.' },
            { title: 'Vollständige Kreativität', description: 'Vom Logo bis zum vollständigen Rollout.' }
          ],
          process: [
            { title: 'Marke entdecken', description: 'Enthüllung Ihrer Kernwerte.' },
            { title: 'Visuelle Strategie', description: 'Definition von Look & Feel.' },
            { title: 'Identitätsdesign', description: 'Erstellung von Logos und Assets.' },
            { title: 'Markenrichtlinien', description: 'Dokumentation des Systems.' }
          ],
          growthSupport: 'Eine starke Markenidentität baut Vertrauen und Loyalität auf, wesentliche Grundlagen für nachhaltiges, langfristiges Geschäftswachstum.'
        },
        {
          title: 'UI/UX & Conversion-Design',
          description: 'Nutzerzentriertes Design, das Engagement und Conversions maximiert.',
          slug: 'ui-ux-design',
          detailTitle: 'UI/UX & Conversion-Design Dienste für besseren ROI',
          detailSubtitle: 'Wir optimieren Nutzerreisen für Unternehmen in den USA, Europa, den GCC-Staaten und Australien und verwandeln Besucher in treue Kunden.',
          whoFor: ['SaaS-Plattformen', 'E-Commerce-Stores', 'Komplexe Web-Apps', 'Lead-Gen-Seiten'],
          includes: [
            'Nutzerforschung & Personas',
            'Wireframing & Nutzerflows',
            'Interaktives Prototyping',
            'Usability-Tests',
            'Conversion-Rate-Optimierung (CRO)'
          ],
          benefits: [
            'Höhere Konversionsraten',
            'Reduzierte Abwanderung',
            'Verbesserte Nutzerzufriedenheit',
            'Datenbasierte Designentscheidungen'
          ],
          whyChoose: [
            { title: 'Nutzerzentrierter Ansatz', description: 'Design für echte Menschen.' },
            { title: 'Datengetriebene Iteration', description: 'Kontinuierliche Verbesserung.' },
            { title: 'Experten für komplexe Systeme', description: 'Wir bewältigen schwierige UX-Herausforderungen.' },
            { title: 'Globale Barrierefreiheit', description: 'Inklusives Design für alle.' }
          ],
          process: [
            { title: 'Forschung', description: 'Verständnis der Nutzerbedürfnisse.' },
            { title: 'Struktur', description: 'Informationsarchitektur & Flows.' },
            { title: 'Design', description: 'Erstellung von High-Fidelity-Interfaces.' },
            { title: 'Validierung', description: 'Tests mit echten Nutzern.' }
          ],
          growthSupport: 'Optimierte UX wirkt sich direkt auf den Umsatz aus, indem Reibungsverluste beseitigt und Nutzeraktionen gefördert werden, was das Geschäftswachstum antreibt.'
        },
        {
          title: 'Web- & SaaS-Entwicklung',
          description: 'Robuste, skalierbare Websites und Anwendungen mit modernsten Technologien.',
          slug: 'web-development',
          detailTitle: 'Web- & SaaS-Entwicklungsdienste für skalierbare Produkte',
          detailSubtitle: 'Wir bauen robuste digitale Produkte für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, die Skalierbarkeit und Leistung gewährleisten.',
          whoFor: ['Tech-Startups', 'Enterprise SaaS', 'Digitalagenturen', 'Innovationslabore'],
          includes: [
            'Individuelle Frontend-Entwicklung',
            'Backend API-Architektur',
            'Datenbankdesign & -management',
            'Drittanbieter-Integrationen',
            'Cloud-Infrastruktur-Setup'
          ],
          benefits: [
            'Hohe Leistung & Geschwindigkeit',
            'Sichere & skalierbare Architektur',
            'Nahtloses Nutzererlebnis',
            'Einfache Wartung & Updates'
          ],
          whyChoose: [
            { title: 'Moderner Tech-Stack', description: 'React, Next.js, Node.js Experten.' },
            { title: 'Saubere Code-Standards', description: 'Wartbar und dokumentiert.' },
            { title: 'Agile Methodik', description: 'Schnelle Iterationen und Feedback.' },
            { title: 'DevOps-Integration', description: 'CI/CD und automatisierte Tests.' }
          ],
          process: [
            { title: 'Architektur', description: 'Planung des Tech-Stacks.' },
            { title: 'Entwicklung', description: 'Sprints und Coding.' },
            { title: 'Tests', description: 'QA und Bugfixing.' },
            { title: 'Bereitstellung', description: 'Live-Start und Überwachung.' }
          ],
          growthSupport: 'Skalierbare Codebases ermöglichen es Ihrem Produkt, mit Ihrer Nutzerbasis zu wachsen, ohne teure Neuschreibungen oder Leistungsengpässe.'
        },
        {
          title: 'Suchmaschinenoptimierung (SEO)',
          description: 'Verbessern Sie die Sichtbarkeit und lenken Sie organischen Traffic auf Ihre Website.',
          slug: 'seo-optimization',
          detailTitle: 'SEO-Dienste für langfristiges organisches Wachstum',
          detailSubtitle: 'Wir treiben organischen Traffic für Unternehmen in den USA, Europa, den GCC-Staaten und Australien durch technische Präzision und Inhaltsstrategie.',
          whoFor: ['Lokale Unternehmen', 'E-Commerce-Seiten', 'Content-Publisher', 'Dienstleister'],
          includes: [
            'Technisches SEO-Audit',
            'Keyword-Recherche & Strategie',
            'On-Page-Optimierung',
            'Content-Strategie & Clustering',
            'Linkbuilding & Outreach'
          ],
          benefits: [
            'Nachhaltiges Traffic-Wachstum',
            'Höhere Suchrankings',
            'Verbesserte Markenautorität',
            'Qualifizierte Lead-Generierung'
          ],
          whyChoose: [
            { title: 'White-Hat-Techniken', description: 'Sichere, langfristige Strategien.' },
            { title: 'Datenbasierte Einblicke', description: 'Berichte, die Sinn ergeben.' },
            { title: 'Technische Expertise', description: 'Wir beheben tiefe Code-Probleme.' },
            { title: 'Globaler Fokus', description: 'Mehrsprachiges & internationales SEO.' }
          ],
          process: [
            { title: 'Audit', description: 'Chancen und Fehler finden.' },
            { title: 'Strategie', description: 'Planung von Keywords und Inhalten.' },
            { title: 'Optimierung', description: 'Umsetzung von Korrekturen und Änderungen.' },
            { title: 'Reporting', description: 'Monatliche Fortschrittsverfolgung.' }
          ],
          growthSupport: 'SEO bietet im Laufe der Zeit den höchsten ROI und baut einen selbsttragenden Kanal potenzieller Kunden für Ihr Unternehmen auf.'
        },
        {
          title: 'Website-Wartung, Support & Servermanagement',
          description: 'Halten Sie Ihre Website sicher, aktuell und in Bestform.',
          slug: 'maintenance',
          detailTitle: 'Wartungs- & Supportdienste für Sorgenfreiheit',
          detailSubtitle: 'Wir gewährleisten Betriebszeit und Sicherheit für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
          whoFor: ['High-Traffic-Sites', 'Unternehmensportale', 'E-Commerce-Plattformen', 'Kritische Apps'],
          includes: [
            '24/7 Uptime-Überwachung',
            'Sicherheitspatches & Updates',
            'Tägliche Funktionsprüfungen',
            'Serverleistungsoptimierung',
            'Regelmäßige Backups & Wiederherstellung'
          ],
          benefits: [
            'Reduzierte Ausfallrisiken',
            'Verstärkte Sicherheitslage',
            'Konsistente Leistung',
            'Vorhersehbare IT-Kosten'
          ],
          whyChoose: [
            { title: 'Proaktive Überwachung', description: 'Wir beheben Probleme, bevor sie stören.' },
            { title: 'Experten-Support-Team', description: 'Direkter Zugang zu Entwicklern.' },
            { title: 'Transparente Berichte', description: 'Wissen Sie genau, was wir tun.' },
            { title: 'Flexible Pläne', description: 'Skalieren Sie den Support nach Bedarf.' }
          ],
          process: [
            { title: 'Onboarding', description: 'Einrichtung von Überwachungstools.' },
            { title: 'Optimierung', description: 'Initiale Behebung und Tuning.' },
            { title: 'Routinepflege', description: 'Wöchentliche/monatliche Aufgaben.' },
            { title: 'Notfallreaktion', description: 'Schnelles Handeln bei Bedarf.' }
          ],
          growthSupport: 'Eine zuverlässige Infrastruktur ist das Rückgrat des digitalen Wachstums. Wir halten Ihr Fundament stark, damit Sie darauf aufbauen können.'
        },
        {
          title: 'Shopify-Entwicklung & E-Commerce-Lösungen',
          description: 'Erstellen Sie leistungsstarke Online-Shops mit Shopify für Verkauf und Wachstum.',
          slug: 'shopify-development',
          detailTitle: 'Shopify-Entwicklung & E-Commerce-Lösungen für wachsende Marken',
          detailSubtitle: 'Wir erstellen hochkonvertierende Shopify-Shops für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, optimiert für maximalen Umsatz und Kundenzufriedenheit.',
          whoFor: ['E-Commerce-Startups', 'DTC-Marken', 'Einzelhandelsunternehmen', 'Online-Marktplätze'],
          includes: [
            'Individuelle Shopify-Theme-Entwicklung',
            'Drittanbieter-Integrationen & Apps',
            'Zahlungsgateway-Einrichtung',
            'Lagerverwaltungssystem',
            'Conversion-Rate-Optimierung'
          ],
          benefits: [
            'Erhöhte Online-Verkäufe',
            'Optimierte Betriebsabläufe',
            'Verbesserte Benutzererfahrung',
            'Mobile-First-Shopping'
          ],
          whyChoose: [
            { title: 'Shopify-Experten', description: 'Zertifizierte Entwickler mit nachgewiesenen Ergebnissen.' },
            { title: 'Conversion-fokussiertes Design', description: 'Gebaut, um Verkäufe zu maximieren.' },
            { title: 'Skalierbare Architektur', description: 'Wächst mit Ihrem Unternehmen.' },
            { title: 'Vollständiger Support', description: 'Von der Einrichtung bis zur Skalierung.' }
          ],
          process: [
            { title: 'Entdeckung & Planung', description: 'Verstehen Ihrer Produkte und Ziele.' },
            { title: 'Design & Entwicklung', description: 'Erstellen Ihres einzigartigen Shops.' },
            { title: 'Integration & Testen', description: 'Hinzufügen von Funktionen und Qualitätsprüfungen.' },
            { title: 'Launch & Optimierung', description: 'Live gehen und Conversions verbessern.' }
          ],
          growthSupport: 'Shopify bietet eine leistungsstarke, skalierbare Plattform für E-Commerce-Wachstum. Wir helfen Ihnen, sie für nachhaltigen Umsatz optimal zu nutzen.'
        },
        {
          title: 'Individuelle CMS-Entwicklung & Content Management',
          description: 'Befähigen Sie Ihr Team mit maßgeschneiderten Content-Management-Systemen.',
          slug: 'custom-cms',
          detailTitle: 'Individuelle CMS-Entwicklung für ultimative Content-Kontrolle',
          detailSubtitle: 'Wir bauen maßgeschneiderte Content-Management-Systeme für Unternehmen in den USA, Europa, den GCC-Staaten und Australien, die vollständige Kontrolle über ihre digitalen Inhalte benötigen.',
          whoFor: ['Verlagshäuser', 'Großunternehmen', 'Multi-Brand-Organisationen', 'Inhaltsintensive Websites'],
          includes: [
            'Maßgeschneiderte CMS-Architektur',
            'Individuelles Admin-Panel-Design',
            'Rollenbasierte Zugriffskontrolle',
            'API-Integrationsfähigkeiten',
            'Mehrsprachige Unterstützung'
          ],
          benefits: [
            'Vollständige Content-Kontrolle',
            'Optimierte Workflows',
            'Verbesserte Sicherheit',
            'Einzigartige Funktionalität'
          ],
          whyChoose: [
            { title: 'Vollständig anpassbar', description: 'Genau nach Ihren Spezifikationen gebaut.' },
            { title: 'Skalierbar & zukunftssicher', description: 'Wächst mit Ihren Anforderungen.' },
            { title: 'Benutzerfreundliche Oberfläche', description: 'Einfach für nicht-technische Teams.' },
            { title: 'Performance-optimiert', description: 'Schnell und effizient.' }
          ],
          process: [
            { title: 'Anforderungsanalyse', description: 'Definieren Ihrer Content-Bedürfnisse.' },
            { title: 'Architektur-Design', description: 'Planung der Systemstruktur.' },
            { title: 'Entwicklung & Testen', description: 'Aufbau und Validierung von Funktionen.' },
            { title: 'Schulung & Bereitstellung', description: 'Start und Einweisung Ihres Teams.' }
          ],
          growthSupport: 'Ein individuelles CMS bietet die Flexibilität und Kontrolle, die Standardlösungen nicht bieten können, und ermöglicht einzigartige digitale Erlebnisse.'
        },
      ],
      learnMore: 'Mehr erfahren',
      includes: 'Was ist enthalten',
      benefits: 'Vorteile',
      whatWeCover: {
        title: 'Was unsere digitalen Dienste abdecken',
        items: [
          { title: 'Strategiegetriebenes Design & Entwicklung', description: 'Wir stimmen Design und Code vom ersten Tag an auf Ihre Geschäftsziele ab.' },
          { title: 'Skalierbare Architektur & Sauberer Code', description: 'Aufbau von Systemen, die mit Ihrem Unternehmen wachsen, ohne technische Schulden.' },
          { title: 'SEO-First & Performance-Getriebene Builds', description: 'Optimiert für Suchmaschinen und Geschwindigkeit, um die Reichweite zu maximieren.' },
          { title: 'Sichere, wartbare & zukunftssichere Systeme', description: 'Sicherheit und Wartbarkeit sind in unseren Kernprozess integriert.' },
        ],
      },
      whoFor: {
        title: 'Für wen unsere Dienste konzipiert sind',
        items: [
          { title: 'Startups & Scaleups', description: 'Schneller Start und Skalierung digitaler Produkte.' },
          { title: 'SaaS- & Technologieunternehmen', description: 'Aufbau komplexer Plattformen und Tools.' },
          { title: 'E-Commerce & DTC-Marken', description: 'Steigerung der Verkäufe durch optimierte Einkaufserlebnisse.' },
          { title: 'Unternehmen & Agenturen', description: 'Groß angelegte digitale Transformation und Partnerunterstützung.' },
        ],
      },
      whyChoose: {
        title: 'Warum Belk Digital für digitale Dienste wählen',
        items: [
          { title: 'Global-First Service Delivery', description: 'Erfahrung in der Lieferung für Märkte in den USA, Europa und den GCC-Staaten.' },
          { title: 'Geschäftsorientierte digitale Strategie', description: 'Wir konzentrieren uns auf Kennzahlen, die für Ihr Endergebnis wichtig sind.' },
          { title: 'SEO & Performance im Kern', description: 'Technische Exzellenz, die organisches Wachstum vorantreibt.' },
          { title: 'Langfristiger Support & Partnerschaft', description: 'Wir sind Ihr langfristiger Technologiepartner.' },
        ],
      },
      process: {
        title: 'Unser Prozess für die Bereitstellung hochwirksamer digitaler Lösungen',
        items: [
          { title: 'Entdeckung & Anforderungsanalyse', description: 'Verständnis Ihrer einzigartigen Herausforderungen und Chancen.' },
          { title: 'Strategie & Technische Planung', description: 'Erstellung einer detaillierten Roadmap für den Erfolg.' },
          { title: 'Design, Entwicklung & Optimierung', description: 'Ausführung mit Präzision und agiler Methodik.' },
          { title: 'Launch, Support & Kontinuierliches Wachstum', description: 'Sicherstellung eines reibungslosen Starts und laufender Verbesserungen.' },
        ],
      },
      cta: {
        title: 'Bereit, Ihr Geschäft mit Experten-Diensten zu skalieren?',
        subtitle: 'Lassen Sie uns Ihre Ziele besprechen und eine Lösung bauen, die messbares Wachstum fördert.',
        button: 'Projekt starten',
        buttonSecondary: 'Gespräch vereinbaren',
      }
    },
    work: {
      title: 'Bewährte digitale Ergebnisse für',
      titleHighlight: 'Globale Unternehmen',
      subtitle: 'Entdecken Sie echte Projekte, bei denen wir Unternehmen in den USA, Europa, den GCC-Staaten und Australien zu messbarem digitalem Wachstum verholfen haben.',
      badge: 'Fallstudien',
      statsTitle: 'Unser Einfluss bei globalen digitalen Projekten',
      caseStudies: {
        title: 'Ausgewählte Fallstudien',
        filters: ['Webdesign', 'Webentwicklung', 'SaaS-Plattformen', 'SEO & Digitales Marketing'],
      },
      methodologyTitle: 'Unsere Methodik für konsistente digitale Ergebnisse',
      methodologySubtitle: 'Unsere bewährte Methodik sichert konsistente, hochwertige Ergebnisse für jedes Projekt.',
      methodologyBadge: 'Unsere Methodik',
      industriesTitle: 'Branchenerfahrung in globalen Märkten',
      industriesSubtitle: 'Unsere Erfahrung erstreckt sich über mehrere Branchen und bringt Best Practices aus jeder mit.',
      industriesBadge: 'Branchenerfahrung',
      methodology: [
        { title: 'Strategische Entdeckung & Geschäftsanalyse', description: 'Wir beginnen jedes Projekt mit tiefgehender Recherche zu Ihrem Unternehmen, Wettbewerbern und Zielgruppe.' },
        { title: 'Nutzerzentriertes Design & UX-Strategie', description: 'Unsere Designs priorisieren das Nutzererlebnis und sorgen für intuitive Navigation und Engagement.' },
        { title: 'Agile Entwicklung & Iteration', description: 'Iterative Entwicklung mit regelmäßigen Check-ins hält Sie während des gesamten Prozesses involviert.' },
        { title: 'Qualitätssicherung & Leistungstests', description: 'Strenge Tests auf allen Geräten und Browsern gewährleisten eine einwandfreie Leistung.' },
        { title: 'Support & Optimierung nach dem Start', description: 'Wartung und Optimierung nach dem Start halten Ihre Website in Bestform.' },
      ],
      industries: [
        'E-Commerce & Einzelhandel',
        'Gesundheitswesen & Medizin',
        'Finanzen & Fintech',
        'Immobilien',
        'Bildung & E-Learning',
        'Technologie & SaaS',
        'Gastgewerbe & Reisen',
        'Professionelle Dienstleistungen',
      ],
      trust: {
        title: 'Vertrauen von Unternehmen für langfristige digitale Partnerschaften',
        subtitle: 'Viele unserer Projekte sind durch NDAs geschützt, aber unsere Kundenbindung und Zufriedenheit sprechen für sich.',
        body: 'Wir glauben, dass Transparenz und Zusammenarbeit der Schlüssel zu erfolgreichen Partnerschaften sind. Unser Prozess ist darauf ausgelegt, Sie bei jedem Schritt informiert und sicher zu halten.',
        items: [
          'Transparente Kommunikation',
          'Regelmäßige Fortschritts-Updates',
          'Klare Liefergegenstände',
          'Support nach dem Start',
        ],
      },

      whyAgain: {
        title: 'Warum Kunden Belk Digital wieder wählen',
        items: [
          { title: 'Konsistente Lieferung bei komplexen Projekten', description: 'Wir liefern pünktlich und im Budget, jedes Mal.' },
          { title: 'Klare Kommunikation & Transparenz', description: 'Kein Fachjargon, nur klare Updates und ehrliche Beratung.' },
          { title: 'Messbare Geschäftsergebnisse', description: 'Wir konzentrieren uns auf KPIs, die für Ihr Wachstum wichtig sind.' },
          { title: 'Langfristiger Support & Optimierung', description: 'Wir bleiben bei Ihnen, um anhaltenden Erfolg zu sichern.' },
        ],
      },
      cta: {
        title: 'Bereit, solche Ergebnisse für Ihr Unternehmen zu erzielen?',
        subtitle: 'Lassen Sie uns besprechen, wie wir messbares Wachstum für Ihre digitalen Initiativen liefern können.',
      },
    },
    process: {
      badge: 'Unser Prozess',
      title: 'Von der Vision zur Realität',
      subtitle: 'Eine bewährte Methodik für außergewöhnliche Ergebnisse.',
      steps: [
        { number: '01', title: 'Entdeckung', description: 'Wir tauchen tief in Ihr Geschäft ein.' },
        { number: '02', title: 'Strategie', description: 'Entwicklung eines umfassenden Plans.' },
        { number: '03', title: 'Design', description: 'Erstellung visuell atemberaubender Designs.' },
        { number: '04', title: 'Entwicklung', description: 'Bau mit sauberem Code und optimaler Leistung.' },
        { number: '05', title: 'Start', description: 'Strenge Tests und nahtlose Bereitstellung.' },
        { number: '06', title: 'Wachstum', description: 'Laufende Optimierung und Support.' },
      ],
    },

    about: {
      aboutUs: { line1: 'Über', line2: 'Uns' },
      hero: {
        title: 'Digitale Exzellenz schaffen',
        titleHighlight: 'Seit 2015',
        subtitle: 'Wir verbinden strategisches Denken mit technischer Exzellenz, um digitale Lösungen zu schaffen, die nicht nur außergewöhnlich aussehen, sondern messbare Geschäftsergebnisse liefern. Von Startups bis zu Großunternehmen haben wir Organisationen weltweit dabei geholfen, ihre digitale Präsenz zu stärken und zu skalieren.',
        badge: 'Seit 2015',
      },
      mission: {
        title: 'Wachstumsorientiert. Leistungsgetrieben. Für die Langfristigkeit gebaut.',
        subtitle: '',
        body: 'Bei Belk Digital glauben wir, dass jedes Unternehmen eine leistungsstarke und zukunftsfähige digitale Präsenz verdient. Unsere Mission ist es, komplexe digitale Herausforderungen durch durchdachtes Design, skalierbare Entwicklung und leistungsorientierte Umsetzung zu vereinfachen. Wir arbeiten mit Unternehmen aller Branchen zusammen, um digitale Plattformen aufzubauen, die Wachstum unterstützen, die Sichtbarkeit verbessern und langfristigen Wert schaffen.',
      },
      stats: {
        title: 'Unser globaler Einfluss in Zahlen',
        items: [
          { value: '50+', label: 'Kunden betreut' },
          { value: '80+', label: 'Projekte abgeschlossen' },
          { value: '10+', label: 'Länder bedient' },
          { value: '98%', label: 'Kundenzufriedenheit' },
        ]
      },
      whatWeDo: {
        title: 'Was wir bei Belk Digital tun',
        subtitle: 'Wir bieten umfassende digitale Dienstleistungen, die Unternehmen dabei helfen, in der heutigen digitalen Welt wettbewerbsfähig zu bleiben, zu skalieren und erfolgreich zu sein.',
        items: [
          { title: 'Individuelles Webdesign & UI/UX', description: 'Einzigartige, markengerechte Designs, die Nutzer binden, die Benutzerfreundlichkeit verbessern und Konversionen auf allen Geräten fördern.' },
          { title: 'Web- & SaaS-Entwicklung', description: 'Robuste, skalierbare Websites und SaaS-Plattformen, die mit modernen Technologien erstellt wurden, um Leistung, Sicherheit und Wachstum zu unterstützen.' },
          { title: 'Website-Redesign & Optimierung', description: 'Beleben Sie bestehende Websites mit verbesserter UX, modernem Design und Leistungssteigerungen, die bessere Ergebnisse liefern.' },
          { title: 'Suchmaschinenoptimierung (SEO)', description: 'Strategische SEO-Lösungen mit Fokus auf langfristige Sichtbarkeit, organisches Wachstum und Suchleistung in globalen Märkten.' },
          { title: 'Digitales Marketing & Wachstum', description: 'Datengetriebene Marketingstrategien zur Steigerung von Reichweite, Engagement und messbarem Geschäftserfolg.' },
          { title: 'Wartung, Support & Servermanagement', description: 'Laufender Support, um Ihre digitalen Plattformen sicher, optimiert und leistungsfähig zu halten.' },
        ],
      },
      values: {
        title: 'Unsere Grundwerte, die jedes Projekt leiten',
        subtitle: 'Unsere Werte leiten unsere Arbeitsweise, unsere Zusammenarbeit und die Ergebnisse, die wir unseren Kunden liefern.',
        badge: 'Unsere Werte',
        items: [
          { title: 'Innovation in digitalen Lösungen', description: 'Wir bleiben technologischen Trends voraus, um moderne, zukunftsfähige digitale Erlebnisse zu liefern.' },
          { title: 'Verpflichtung zur Exzellenz', description: 'Jedes Projekt erhält unsere volle Aufmerksamkeit für Details, Qualität und Ausführung.' },
          { title: 'Effizienz ohne Kompromisse', description: 'Wir optimieren Arbeitsabläufe und Prozesse, um Ergebnisse schneller zu liefern – ohne Qualitätseinbußen.' },
          { title: 'Integrität & Transparente Partnerschaften', description: 'Wir glauben an ehrliche Kommunikation, Verantwortung und langfristige Kundenbeziehungen.' },
        ],
      },
      whoWeWorkWith: {
        badge: 'MIT WEM',
        title: 'wir arbeiten',
        heading: 'Mit wem wir arbeiten',
        chapter: 'Kapitel',
        items: [
          {
            title: 'Startups & Scaleups',
            description: 'Wir helfen aufstrebenden Unternehmen, starke digitale Grundlagen und skalierbare Plattformen aufzubauen.',
            detail: 'Wir sind spezialisiert auf die Navigation durch die chaotischen frühen Phasen des Wachstums und bieten agile Entwicklung und skalierbare Architektur, die mit Ihren Finanzierungsrunden und Ihrer Nutzerbasis wächst.',
          },
          {
            title: 'SaaS- & Technologieunternehmen',
            description: 'Design und Entwicklung fortschrittlicher digitaler Produkte für schnell wachsende technologiegetriebene Unternehmen.',
            detail: 'Von komplexen Dashboard-Schnittstellen bis hin zu leistungsstarken Marketing-Websites bauen wir die digitale Infrastruktur, die die weltweit führenden Technologieunternehmen antreibt.',
          },
          {
            title: 'E-Commerce- & DTC-Marken',
            description: 'Entwicklung nahtloser Einkaufserlebnisse, die Engagement und Konversionen fördern.',
            detail: 'Wir kombinieren emotionales Marken-Storytelling mit rigoroser Konversionsratenoptimierung, um Online-Shops zu bauen, die nicht nur schön aussehen, sondern auch effektiv verkaufen.',
          },
          {
            title: 'Unternehmen & Agenturen',
            description: 'Skalierbare Lösungen, zugeschnitten auf große Organisationen und strategische Partner.',
            detail: 'Wir fungieren als nahtlose Erweiterung Ihrer internen Teams und bieten Sicherheit, Compliance und Zuverlässigkeit auf Unternehmensniveau für geschäftskritische digitale Initiativen.',
          },
        ],
      },
      whyChoose: {
        title: 'Warum Belk Digital als Ihr digitaler Partner',
        items: [
          { title: 'Global-First Strategie', description: 'Lösungen für internationale Reichweite, Skalierbarkeit und marktübergreifende Leistung.' },
          { title: 'Geschäftsorientiertes Design & Entwicklung', description: 'Jede Entscheidung wird von Geschäftszielen, ROI und messbaren Ergebnissen geleitet.' },
          { title: 'SEO & Performance im Kern', description: 'Integrierte Optimierung für Geschwindigkeit, Suchsichtbarkeit und Benutzererfahrung.' },
          { title: 'Langfristiger Partnerschaftsansatz', description: 'Wir wachsen mit unseren Kunden und bieten laufenden Support, Optimierung und Weiterentwicklung.' },
        ],
      },
      team: {
        title: 'Experten-Team mit globalem Liefermodell',
        subtitle: 'Unser verteiltes Team arbeitet über Zeitzonen hinweg, um weltweit nahtlose digitale Lösungen zu liefern. Wir kombinieren strategische Führung mit praktischer Umsetzung, um Konsistenz, Qualität und Zuverlässigkeit bei jedem Projekt zu gewährleisten.',
        badge: 'Unser Team',
        roles: [
          { role: 'Kreativ- & Design-Leads', count: '4+', description: '' },
          { role: 'Senior Web- & SaaS-Entwickler', count: '12+', description: '' },
          { role: 'UX- & Conversion-Spezialisten', count: '6+', description: '' },
          { role: 'Globale Projektmanager', count: '5+', description: '' },
        ],
      },
      approach: {
        title: 'Unser Ansatz für digitalen Erfolg',
        subtitle: 'Digitalen Erfolg durch eine bewährte, strukturierte Methodik liefern.',
        stepLabels: ['Schritt Eins', 'Schritt Zwei', 'Schritt Drei', 'Schritt Vier'],
        badgeLabels: ['Entdeckung', 'Planung', 'Umsetzung', 'Start'],
        growth: 'WACHSTUM',
        items: [
          { title: 'Entdeckung & Geschäftsverständnis', description: 'Wir beginnen damit, Ihre Ziele, Ihre Zielgruppe, Ihre Marktposition und Ihre Herausforderungen zu verstehen, um eine klare strategische Richtung zu definieren.' },
          { title: 'Strategie & Technische Planung', description: 'Wir erstellen eine umfassende Roadmap, die Design, Technologie, Inhaltsstruktur und Leistungsziele abdeckt.' },
          { title: 'Design, Entwicklung & Optimierung', description: 'Agile Umsetzung mit starkem Fokus auf Qualität, Benutzerfreundlichkeit, Skalierbarkeit und Optimierung.' },
          { title: 'Launch, Support & Kontinuierliches Wachstum', description: 'Nahtlose Bereitstellung gefolgt von laufendem Support, Überwachung und kontinuierlicher Verbesserung.' },
        ],
      },
    },
    locations: {
      badge: 'Globale Reichweite',
      title: 'Globale digitale Dienste in den USA, Europa, GCC & Australien',
      subtitle: 'Wir arbeiten mit Unternehmen in wichtigen globalen Märkten zusammen und liefern Web-, SaaS-, SEO- und digitale Lösungen, die auf regionale Bedürfnisse zugeschnitten sind.',
      locationsGridTitle: 'Unsere globalen Servicestandorte',
      viewAll: 'Alle Standorte ansehen',
      regions: {
        usa: 'Vereinigte Staaten (US Digitale Dienste)',
        uae: 'Vereinigte Arabische Emirate (GCC Digitale Dienste)',
        ksa: 'Saudi-Arabien (GCC Digitale Dienste)',
        europe: 'Vereinigtes Königreich & Europa',
        australia: 'Australien (APAC Region)',
      },
      servicesWeProvide: {
        title: 'Digitale Dienste, die wir in allen Regionen anbieten',
        items: [
          'Individuelles Webdesign & UI/UX',
          'Web- & SaaS-Entwicklung',
          'Website-Redesign & Optimierung',
          'Suchmaschinenoptimierung (SEO)',
          'Digitales Marketing & Wachstum',
          'Wartung, Support & Servermanagement',
        ],
      },
      howWeWork: {
        title: 'Wie wir Projekte weltweit liefern',
        items: [
          { title: 'Remote-First-Kollaboration', description: 'Nahtlose Zusammenarbeit über Zeitzonen hinweg.' },
          { title: 'Dedizierte Projektmanager', description: 'Klare Kommunikation und ein zentraler Ansprechpartner.' },
          { title: 'Regionenspezifische Strategie', description: 'Auf lokale Marktbedürfnisse zugeschnittene Ausführung.' },
          { title: 'Sichere, skalierbare Lieferung', description: 'Hohe Standards an Sicherheit und Leistung.' },
        ],
      },
      dontSeeLocation: {
        title: 'Kunden weltweit bedienen über die aufgeführten Standorte hinaus',
        description: 'Wir arbeiten mit Kunden weltweit. Egal, wo Sie ansässig sind, wir können außergewöhnliche digitale Lösungen liefern, die auf Ihren Markt zugeschnitten sind.',
        button: 'Sprechen Sie mit unserem globalen Team',
      },
      whyChoose: {
        title: 'Warum globale Unternehmen Belk Digital wählen',
        items: [
          { title: 'Bewährte Erfahrung in 45+ Ländern', description: 'Wir verstehen globale digitale Landschaften.' },
          { title: 'Globale Lieferung mit lokalem Verständnis', description: 'Überbrückung der Lücke zwischen globalen Standards und lokalen Bedürfnissen.' },
          { title: 'SEO- & Performance-fokussierte Entwicklung', description: 'Bauen für Sichtbarkeit und Geschwindigkeit.' },
          { title: 'Langfristiger Partnerschaftsansatz', description: 'Wir sind in Ihr nachhaltiges Wachstum investiert.' },
        ],
      },
      cta: {
        title: 'Bereit, mit einem globalen digitalen Partner zu arbeiten?',
        subtitle: 'Lassen Sie uns besprechen, wie wir Ihr Unternehmen unterstützen können – wo immer Sie sich befinden.',
      },
      cityPages: {
        usa: {
          title: 'Digitale Dienste / Agentur in den Vereinigten Staaten',
          intro: 'Belk Digital bietet Webdesign, Webentwicklung, SaaS-Lösungen, SEO und digitales Marketing für Unternehmen in den Vereinigten Staaten an. Wir helfen Unternehmen, in einem der wettbewerbsintensivsten digitalen Märkte der Welt zu bestehen, zu skalieren und zu wachsen.',
          excellence: {
            title: 'Digitale Exzellenz in den USA liefern',
            body: 'US-Unternehmen verlangen Geschwindigkeit, Leistung und Innovation. Wir bauen digitale Lösungen, die den Erwartungen auf Unternehmensebene entsprechen und gleichzeitig langfristiges Wachstum und Flexibilität unterstützen.',
          },
          services: {
            title: 'Unsere digitalen Dienste in den USA',
            items: [
              'Individuelles Webdesign & UI/UX',
              'Website-Redesign & Optimierung',
              'Web- & SaaS-Entwicklung',
              'Suchmaschinenoptimierung (SEO)',
              'Digitales Marketing & Wachstum',
              'Wartung, Support & Servermanagement',
            ],
          },
          whoWeWorkWith: {
            title: 'Mit wem wir in den USA arbeiten',
            items: [
              'Startups & Scaleups',
              'SaaS- & Technologieunternehmen',
              'E-Commerce & DTC-Marken',
              'Unternehmen & professionelle Dienstleister',
            ],
          },
          whyChoose: {
            title: 'Warum US-Unternehmen Belk Digital wählen',
            items: [
              { title: 'Erfahrung in der Zusammenarbeit mit globalen und US-basierten Unternehmen', description: 'Wir verstehen die US-Marktlandschaft.' },
              { title: 'Performance-getriebene, SEO-First Entwicklung', description: 'Bauen für Geschwindigkeit und Sichtbarkeit vom ersten Tag an.' },
              { title: 'Skalierbare Architektur für wachsende Unternehmen', description: 'Lösungen, die mit Ihrem Unternehmen wachsen.' },
              { title: 'Verlässlicher langfristiger Support', description: 'Wir unterstützen Sie über den Start hinaus.' },
            ],
          },
          howWeDeliver: {
            title: 'Wie wir Projekte weltweit liefern',
            body: 'Unser Remote-First-Liefermodell ermöglicht es uns, effizient über Zeitzonen hinweg zu arbeiten und gleichzeitig hohe Qualitäts- und Verantwortungsstandards aufrechtzuerhalten. Jedes Projekt folgt einem strukturierten Prozess, der auf Klarheit, Leistung und messbare Ergebnisse ausgerichtet ist.',
          },
          cta: {
            title: 'Bereit, eine leistungsstarke digitale Präsenz in den USA aufzubauen?',
            subtitle: 'Lassen Sie uns besprechen, wie Belk Digital Ihrem Unternehmen mit skalierbaren, zukunftssicheren digitalen Lösungen beim Wachsen helfen kann.',
          },
        },
        europe: {
          title: 'Digitale Dienste / Agentur im Vereinigten Königreich & Europa',
          intro: 'Belk Digital liefert individuelles Webdesign, SaaS-Entwicklung, SEO und digitale Marketingdienste für Unternehmen im Vereinigten Königreich und Europa. Wir unterstützen Organisationen, die nach zuverlässigen, konformen und skalierbaren digitalen Lösungen suchen.',
          excellence: {
            title: 'Digitale Exzellenz in Europa liefern',
            body: 'Europäische Unternehmen benötigen eine Balance aus Innovation, Benutzerfreundlichkeit und regulatorischem Bewusstsein. Unsere Lösungen werden mit Leistung, Barrierefreiheit und Skalierbarkeit im Mittelpunkt gebaut.',
          },
          services: {
            title: 'Unsere digitalen Dienste in Europa',
            items: [
              'Individuelles Webdesign & UI/UX',
              'Website-Redesign & Optimierung',
              'Web- & SaaS-Entwicklung',
              'Suchmaschinenoptimierung (SEO)',
              'Digitales Marketing & Wachstum',
              'Wartung, Support & Servermanagement',
            ],
          },
          whoWeWorkWith: {
            title: 'Mit wem wir in Europa arbeiten',
            items: [
              'Startups & Scaleups',
              'SaaS- & Technologieunternehmen',
              'E-Commerce & DTC-Marken',
              'Unternehmen & professionelle Dienstleister',
            ],
          },
          whyChoose: {
            title: 'Warum europäische Unternehmen Belk Digital wählen',
            items: [
              { title: 'Globale Lieferung mit regionsspezifischer Ausführung', description: 'Zugeschnitten auf europäische Standards und Vorschriften.' },
              { title: 'Saubere, skalierbare und konforme Entwicklungspraktiken', description: 'Fokus auf DSGVO- und Barrierefreiheitsstandards.' },
              { title: 'SEO-Strategien, die auf europäische Märkte abgestimmt sind', description: 'Ausrichtung auf lokale und regionale Suchabsichten.' },
              { title: 'Langfristiger Partnerschaftsansatz', description: 'Aufbau dauerhafter Beziehungen.' },
            ],
          },
          howWeDeliver: {
            title: 'Wie wir Projekte weltweit liefern',
            body: 'Unser Remote-First-Liefermodell ermöglicht es uns, effizient über Zeitzonen hinweg zu arbeiten und gleichzeitig hohe Qualitäts- und Verantwortungsstandards aufrechtzuerhalten. Jedes Projekt folgt einem strukturierten Prozess, der auf Klarheit, Leistung und messbare Ergebnisse ausgerichtet ist.',
          },
          cta: {
            title: 'Bereit, eine leistungsstarke digitale Präsenz in Europa aufzubauen?',
            subtitle: 'Lassen Sie uns besprechen, wie Belk Digital Ihrem Unternehmen mit skalierbaren, zukunftssicheren digitalen Lösungen beim Wachsen helfen kann.',
          },
        },
        gcc: {
          title: 'Digitale Dienste / Agentur in den GCC-Staaten',
          intro: 'Belk Digital bietet Webentwicklung, SaaS-Lösungen, SEO und digitale Marketingdienste für Unternehmen in der GCC-Region an. Wir unterstützen schnell wachsende Unternehmen beim Aufbau starker digitaler Grundlagen.',
          excellence: {
            title: 'Digitale Exzellenz in den GCC-Staaten liefern',
            body: 'Der GCC-Markt entwickelt sich schnell und ist hart umkämpft. Wir helfen Unternehmen, eine starke digitale Präsenz mit skalierbaren, sicheren und zukunftssicheren Plattformen aufzubauen.',
          },
          services: {
            title: 'Unsere digitalen Dienste in den GCC-Staaten',
            items: [
              'Individuelles Webdesign & UI/UX',
              'Website-Redesign & Optimierung',
              'Web- & SaaS-Entwicklung',
              'Suchmaschinenoptimierung (SEO)',
              'Digitales Marketing & Wachstum',
              'Wartung, Support & Servermanagement',
            ],
          },
          whoWeWorkWith: {
            title: 'Mit wem wir in den GCC-Staaten arbeiten',
            items: [
              'Startups & Scaleups',
              'SaaS- & Technologieunternehmen',
              'E-Commerce & DTC-Marken',
              'Unternehmen & professionelle Dienstleister',
            ],
          },
          whyChoose: {
            title: 'Warum Unternehmen in den GCC-Staaten Belk Digital wählen',
            items: [
              { title: 'Erfahrung in der Bedienung verschiedener internationaler Märkte', description: 'Globale Qualität in lokale Projekte bringen.' },
              { title: 'Geschäftsorientierte digitale Strategien', description: 'Lösungen, die den ROI steigern.' },
              { title: 'Performance- und sicherheitsorientierte Entwicklung', description: 'Schnelle, sichere und zuverlässige Websites.' },
              { title: 'Zuverlässige Kommunikation und Lieferung', description: 'Professionelles Projektmanagement.' },
            ],
          },
          howWeDeliver: {
            title: 'Wie wir Projekte weltweit liefern',
            body: 'Unser Remote-First-Liefermodell ermöglicht es uns, effizient über Zeitzonen hinweg zu arbeiten und gleichzeitig hohe Qualitäts- und Verantwortungsstandards aufrechtzuerhalten. Jedes Projekt folgt einem strukturierten Prozess, der auf Klarheit, Leistung und messbare Ergebnisse ausgerichtet ist.',
          },
          cta: {
            title: 'Bereit, eine leistungsstarke digitale Präsenz in den GCC-Staaten aufzubauen?',
            subtitle: 'Lassen Sie uns besprechen, wie Belk Digital Ihrem Unternehmen mit skalierbaren, zukunftssicheren digitalen Lösungen beim Wachsen helfen kann.',
          },
        },
        australia: {
          title: 'Digitale Dienste / Agentur in Australien',
          intro: 'Belk Digital arbeitet mit australischen Unternehmen zusammen, um Webdesign-, Webentwicklungs-, SEO- und digitale Marketinglösungen bereitzustellen, die nachhaltiges Wachstum und langfristigen Erfolg unterstützen.',
          excellence: {
            title: 'Digitale Exzellenz in Australien liefern',
            body: 'Australische Unternehmen schätzen Zuverlässigkeit, Leistung und Klarheit. Unsere digitalen Lösungen sind so konzipiert, dass sie konstant Leistung erbringen und gleichzeitig mit dem Unternehmenswachstum skalieren.',
          },
          services: {
            title: 'Unsere digitalen Dienste in Australien',
            items: [
              'Individuelles Webdesign & UI/UX',
              'Website-Redesign & Optimierung',
              'Web- & SaaS-Entwicklung',
              'Suchmaschinenoptimierung (SEO)',
              'Digitales Marketing & Wachstum',
              'Wartung, Support & Servermanagement',
            ],
          },
          whoWeWorkWith: {
            title: 'Mit wem wir in Australien arbeiten',
            items: [
              'Startups & Scaleups',
              'SaaS- & Technologieunternehmen',
              'E-Commerce & DTC-Marken',
              'Unternehmen & professionelle Dienstleister',
            ],
          },
          whyChoose: {
            title: 'Warum australische Unternehmen Belk Digital wählen',
            items: [
              { title: 'Globale Expertise mit lokalem Marktverständnis', description: 'Wir verbinden Sie mit globalen Best Practices.' },
              { title: 'Sauberer, wartbarer und skalierbarer Code', description: 'Gebaut für die Dauer und einfach zu warten.' },
              { title: 'SEO-getriebene digitale Strategien', description: 'Wachstumsorientierter Ansatz.' },
              { title: 'Langfristiger Support und Optimierung', description: 'Ihr Partner auf lange Sicht.' },
            ],
          },
          howWeDeliver: {
            title: 'Wie wir Projekte weltweit liefern',
            body: 'Unser Remote-First-Liefermodell ermöglicht es uns, effizient über Zeitzonen hinweg zu arbeiten und gleichzeitig hohe Qualitäts- und Verantwortungsstandards aufrechtzuerhalten. Jedes Projekt folgt einem strukturierten Prozess, der auf Klarheit, Leistung und messbare Ergebnisse ausgerichtet ist.',
          },
          cta: {
            title: 'Bereit, eine leistungsstarke digitale Präsenz in Australien aufzubauen?',
            subtitle: 'Lassen Sie uns besprechen, wie Belk Digital Ihrem Unternehmen mit skalierbaren, zukunftssicheren digitalen Lösungen beim Wachsen helfen kann.',
          },
        },
      }
    },
    blog: {
      title: 'Einblicke, Strategien & Ressourcen für digitales Wachstum',
      subtitle: 'Bleiben Sie auf dem Laufenden mit Expertenwissen, Strategien und Best Practices in Webdesign, Entwicklung, SEO, Leistungsoptimierung und digitalem Wachstum. Bei Belk Digital teilen wir praktisches Wissen, um Unternehmen in den USA, Europa, den GCC-Staaten und Australien dabei zu helfen, fundierte digitale Entscheidungen zu treffen.',
      badge: 'Unser Blog',
      readTime: 'Lesezeit',
      backToBlog: 'Zurück zum Blog',
      categories: {
        all: 'Alle',
        business: 'Business & Strategie',
        design: 'Design & UX',
        seo: 'SEO & Sichtbarkeit',
        performance: 'Leistung & Optimierung'
      },
      whatYouWillLearn: {
        title: 'Was Sie in unserem Blog lernen werden',
        items: [
          'Wie man skalierbare digitale Plattformen aufbaut',
          'Wie SEO und Leistung den Umsatz beeinflussen',
          'Wie Design die Konversionen beeinflusst',
          'Wie Unternehmen die richtigen digitalen Partner auswählen'
        ]
      },
      postCta: {
        title: 'Benötigen Sie Expertenhilfe dabei?',
        subtitle: 'Wenn Sie diese Strategien für Ihr Unternehmen umsetzen möchten, kann unser Team Ihnen helfen, mit Zuversicht zu planen, zu bauen und zu skalieren.'
      }
    },
    contact: {
      badge: 'Lassen Sie uns sprechen',
      title: 'Starten wir ein',
      titleHighlight: 'Gespräch',
      subtitle: 'Bereit, Ihre digitale Präsenz zu transformieren? Ob Sie eine neue Website planen, eine bestehende Plattform neu gestalten oder ein digitales Produkt skalieren, unser Team ist für Sie da.',
      form: {
        name: 'Name',
        namePlaceholder: 'Lassen Sie uns wissen, mit wem wir sprechen',
        email: 'E-Mail',
        emailPlaceholder: 'Wo wir Sie erreichen können',
        subject: 'Betreff',
        subjectPlaceholder: 'Beschreiben Sie kurz Ihr Anliegen',
        message: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt, Zielen oder Fragen',
        submit: 'Nachricht Senden',
        helperText: 'Teilen Sie uns ein paar Details zu Ihrem Projekt mit, und unser Team meldet sich mit den nächsten Schritten bei Ihnen. Alle Anfragen werden vertraulich behandelt.',
        privacyText: 'Wir respektieren Ihre Privatsphäre. Ihre Daten werden niemals weitergegeben.'
      },
      info: {
        title: 'Andere Wege, uns zu erreichen',
        email: { label: 'E-Mail Senden', desc: 'Für allgemeine Anfragen, Projektdiskussionen und Partnerschaften.' },
        whatsapp: { label: 'WhatsApp', desc: 'Schnelle Fragen oder direkte Kommunikation mit unserem Team.' },
        schedule: { label: 'Gespräch Buchen', desc: 'Buchen Sie ein Erstgespräch, um Ihre Anforderungen im Detail zu besprechen.' },
      },
      headings: {
        formTitle: 'Senden Sie uns eine Nachricht',
        otherWays: 'Andere Wege, uns zu erreichen',
      },
      global: {
        title: 'Wir arbeiten global',
        description: 'Basierend auf mehreren Zeitzonen arbeiten wir mit Kunden in den USA, Europa, den GCC-Staaten und Australien zusammen. Unser Remote-First-Liefermodell gewährleistet eine nahtlose Kommunikation und konsistente Projektausführung unabhängig vom Standort.'
      },
      process: {
        title: 'Was passiert, nach Ihrer Kontaktaufnahme?',
        steps: [
          { title: 'Prüfung', description: 'Wir prüfen Ihre Nachricht und Anforderungen' },
          { title: 'Antwort', description: 'Ein Teammitglied meldet sich innerhalb eines Werktages' },
          { title: 'Entdeckung', description: 'Wir vereinbaren bei Bedarf ein Erstgespräch' },
          { title: 'Plan', description: 'Sie erhalten klare nächste Schritte und Empfehlungen' }
        ]
      },
      who: {
        title: 'Wer uns typischerweise kontaktiert',
        subtitle: 'Wenn Sie einen zuverlässigen, langfristigen digitalen Partner suchen, sind Sie hier richtig.',
        items: [
          'Gründer und Startup-Teams',
          'SaaS- und Technologieunternehmen',
          'E-Commerce- und DTC-Marken',
          'Großunternehmen und Dienstleister',
          'Marketing- und Produktteams'
        ]
      },
      before: {
        title: 'Bevor Sie uns kontaktieren',
        items: [
          'Wir bieten keine Einheitslösungen',
          'Jedes Projekt beginnt mit Strategie und Entdeckung',
          'Wir konzentrieren uns auf skalierbares, langfristiges digitales Wachstum',
          'Vertraulichkeit und Transparenz sind Standard'
        ]
      },
      finalCta: {
        title: 'Bereit, Ihr Projekt zu besprechen?',
        subtitle: 'Erzählen Sie uns von Ihren Zielen, Herausforderungen und Zeitplänen. Unser Team hilft Ihnen, den besten Weg für Ihre digitalen Initiativen zu finden.',
        button: 'Projekt Starten'
      }
    },
    faq: {
      badge: 'Häufige Fragen',
      title: 'Häufig gestellte Fragen',
      subtitle: 'Schnelle Antworten, um Ihnen bei fundierten Entscheidungen zu helfen.',
      viewAll: 'Alle FAQs anzeigen',
      items: [],
    },
    whoWeAre: {
      badge: 'Wer sind wir?',
      title: 'Wir sind ein globales Unternehmen für digitale Lösungen, das leistungsstarke Websites, SaaS-Plattformen und skalierbare digitale Produkte entwickelt, die echten geschäftlichen Einfluss haben.',
      aboutBtn: 'Über Belk Digital',
      teamBtn: 'Triff das Team',
    },
    footer: {
      description: 'Wir schaffen außergewöhnliche digitale Erlebnisse, die Unternehmen helfen, in der modernen Welt erfolgreich zu sein.',
      quickLinks: 'Quick Links',
      services: 'Dienstleistungen',
      locations: 'Standorte',
      contact: 'Kontakt',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      copyright: 'Belk Digital. Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
    faqCategories: [
      {
        name: 'Preise',
        questions: [
          { q: 'Preisstruktur?', a: 'Maßgeschneidert.' },
          { q: 'Zahlungspläne?', a: 'Ja, flexibel.' },
          { q: 'Versteckte Kosten?', a: 'Nein.' },
          { q: 'Zahlungsmethoden?', a: 'Überweisung, Karte, PayPal.' },
        ]
      },
      {
        name: 'Prozess',
        questions: [
          { q: 'Dauer?', a: '4-8 Wochen.' },
          { q: 'Ablauf?', a: 'Entdeckung bis Start.' },
          { q: 'Revisionen?', a: '2-3 Runden.' },
          { q: 'Beteiligung?', a: 'Ja, wichtig.' },
        ]
      },
      {
        name: 'Global',
        questions: [
          { q: 'International?', a: 'Ja.' },
          { q: 'Sprachen?', a: 'Mehrsprachig.' },
          { q: 'Zeitzonen?', a: 'Flexibel.' },
          { q: 'RTL?', a: 'Ja.' },
        ]
      },
      {
        name: 'Support',
        questions: [
          { q: 'Nach Start?', a: 'Wartung.' },
          { q: 'Hosting?', a: 'Hilfe bei Setup.' },
          { q: 'Reaktion?', a: '2-4 Stunden bei Notfällen.' },
          { q: 'Updates?', a: 'Ja, via CMS.' },
        ]
      },
      {
        name: 'Technik',
        questions: [
          { q: 'Tech Stack?', a: 'React, Next.js, etc.' },
          { q: 'Responsive?', a: 'Ja, Mobile-first.' },
          { q: 'SEO?', a: 'Ja, integriert.' },
          { q: 'Code-Eigentum?', a: 'Ja, 100%.' },
        ]
      }
    ],
    privacy: {
      badge: 'Datenschutzerklärung',
      title: 'Ihre Privatsphäre,',
      titleHighlight: 'Unsere Priorität',
      subtitle: 'Bei Belk Digital setzen wir uns für den Schutz Ihrer Privatsphäre und die Sicherheit Ihrer persönlichen Daten ein. Diese Richtlinie erklärt, wie wir Ihre Daten sammeln, verwenden und schützen.',
      lastUpdated: 'Zuletzt aktualisiert: 2. Februar 2026',
      effectiveDate: 'Gültig ab: 1. Januar 2026',
      sections: {
        informationCollect: {
          title: 'Informationen, Die Wir Sammeln',
          items: [
            'Persönliche Identifikationsinformationen (Name, E-Mail-Adresse, Telefonnummer usw.)',
            'Nutzungsdaten und Browsing-Muster auf unserer Website',
            'Technische Informationen einschließlich IP-Adresse, Browsertyp und Geräteinformationen',
            'Cookies und ähnliche Tracking-Technologien',
            'Kommunikationspräferenzen und Marketingdaten'
          ]
        },
        howWeUse: {
          title: 'Wie Wir Ihre Informationen Verwenden',
          items: [
            'Um unsere Dienste bereitzustellen, zu warten und zu verbessern',
            'Um mit Ihnen über Updates, Angebote und wichtige Informationen zu kommunizieren',
            'Um Ihre Erfahrung zu personalisieren und relevante Inhalte bereitzustellen',
            'Um Nutzungsmuster zu analysieren und die Leistung unserer Website zu optimieren',
            'Um gesetzliche Verpflichtungen einzuhalten und unsere Rechte zu schützen'
          ]
        },
        dataSecurity: {
          title: 'Datensicherheit',
          items: [
            'Wir implementieren branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Daten',
            'Alle sensiblen Informationen werden während der Übertragung mit SSL/TLS verschlüsselt',
            'Der Zugriff auf personenbezogene Daten ist nur für autorisiertes Personal beschränkt',
            'Regelmäßige Sicherheitsaudits und Updates zur Aufrechterhaltung des Datenschutzes',
            'Sichere Datenspeicherung mit verschlüsselten Backups'
          ]
        },
        informationSharing: {
          title: 'Informationsaustausch',
          items: [
            'Wir verkaufen, handeln oder vermieten Ihre persönlichen Daten nicht an Dritte',
            'Daten können mit vertrauenswürdigen Dienstleistern geteilt werden, die unsere Abläufe unterstützen',
            'Informationen können bei gesetzlichen Anforderungen oder rechtlichen Verfahren offengelegt werden',
            'Unternehmensübertragungen: Daten können im Falle einer Fusion oder Übernahme übertragen werden',
            'Mit Ihrer ausdrücklichen Zustimmung für bestimmte Zwecke'
          ]
        },
        yourRights: {
          title: 'Ihre Rechte',
          items: [
            'Zugriff auf und Überprüfung Ihrer persönlichen Informationen',
            'Beantragung der Korrektur oder Löschung Ihrer Daten',
            'Abmeldung von Marketing-Kommunikationen jederzeit',
            'Anforderung der Datenportabilität in einem strukturierten Format',
            'Beschwerde bei den zuständigen Datenschutzbehörden einreichen'
          ]
        },
        cookies: {
          title: 'Cookie-Richtlinie',
          items: [
            'Wesentliche Cookies für die Website-Funktionalität',
            'Analyse-Cookies zum Verständnis des Benutzerverhaltens',
            'Marketing-Cookies für personalisierte Werbung (mit Zustimmung)',
            'Sie können Cookie-Präferenzen über Ihre Browsereinstellungen steuern',
            'Einige Funktionen funktionieren möglicherweise nicht ordnungsgemäß, wenn Cookies deaktiviert sind'
          ]
        }
      },
      contact: {
        title: 'Fragen zum Datenschutz?',
        description: 'Wenn Sie Fragen oder Bedenken zu unserer Datenschutzrichtlinie haben, zögern Sie bitte nicht, uns zu kontaktieren. Unser Team ist hier, um zu helfen und sicherzustellen, dass Ihre Datenschutzbedenken berücksichtigt werden.',
        button: 'Kontaktieren Sie Uns'
      }
    },
    terms: {
      badge: 'Allgemeine Geschäftsbedingungen',
      title: 'Allgemeine',
      titleHighlight: 'Geschäftsbedingungen',
      subtitle: 'Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie die Dienste von Belk Digital nutzen. Diese Bedingungen regeln Ihre Nutzung unserer Website und Dienstleistungen.',
      lastUpdated: 'Zuletzt aktualisiert: 2. Februar 2026',
      effectiveDate: 'Gültig ab: 1. Januar 2026',
      sections: {
        acceptance: {
          title: 'Akzeptanz der Bedingungen',
          items: [
            'Durch den Zugriff auf und die Nutzung der Dienste von Belk Digital akzeptieren Sie diese Allgemeinen Geschäftsbedingungen und erklären sich damit einverstanden',
            'Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie nicht auf unsere Dienste zugreifen',
            'Wir behalten uns das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu aktualisieren',
            'Die fortgesetzte Nutzung unserer Dienste nach Änderungen stellt eine Akzeptanz der geänderten Bedingungen dar',
            'Diese Bedingungen gelten für alle Besucher, Benutzer und andere, die auf unsere Dienste zugreifen'
          ]
        },
        servicesUsage: {
          title: 'Dienste und Nutzung',
          items: [
            'Belk Digital bietet Webentwicklung, Design und digitale Marketingdienste',
            'Dienste werden "wie besehen" und "nach Verfügbarkeit" bereitgestellt',
            'Wir behalten uns das Recht vor, Dienste jederzeit zu ändern, auszusetzen oder einzustellen',
            'Sie müssen mindestens 18 Jahre alt sein, um unsere Dienste zu nutzen',
            'Sie sind für die Wahrung der Vertraulichkeit Ihres Kontos verantwortlich'
          ]
        },
        intellectualProperty: {
          title: 'Geistiges Eigentum',
          items: [
            'Alle Inhalte, Designs und Materialien, die geliefert werden, gehören Belk Digital bis zur vollständigen Zahlung',
            'Bei vollständiger Zahlung werden die spezifizierten Rechte am geistigen Eigentum auf den Kunden übertragen',
            'Sie dürfen ohne Genehmigung keine Reproduktionen, Verteilungen oder abgeleiteten Werke erstellen',
            'Marken, Logos und Dienstleistungsmarken sind Eigentum ihrer jeweiligen Inhaber',
            'Belk Digital behält sich das Recht vor, abgeschlossene Arbeiten in unserem Portfolio zu präsentieren'
          ]
        },
        payment: {
          title: 'Zahlung und Abrechnung',
          items: [
            'Zahlungsbedingungen sind in individuellen Projektvereinbarungen festgelegt',
            'Alle Gebühren sind nicht erstattungsfähig, sofern nicht schriftlich anders angegeben',
            'Verspätete Zahlungen können zusätzliche Gebühren und Serviceaussetzung nach sich ziehen',
            'Preise können sich mit einer Frist von 30 Tagen ändern',
            'Sie sind für alle anfallenden Steuern und Transaktionsgebühren verantwortlich'
          ]
        },
        refund: {
          title: 'Rückerstattung und Stornierung',
          items: [
            'Die Berechtigung zur Rückerstattung hängt von der Projektphase und den Vertragsbedingungen ab',
            'Stornierungen müssen schriftlich eingereicht werden, um gültig zu sein',
            'Bis zum Stornierungspunkt abgeschlossene Arbeiten werden in Rechnung gestellt',
            'Anzahlungen sind im Allgemeinen nicht erstattungsfähig, außer bei Nichterbringung der Dienstleistung',
            'Rückerstattungsanträge werden einzeln innerhalb von 14 Werktagen geprüft'
          ]
        },
        liability: {
          title: 'Haftungsbeschränkung',
          items: [
            'Belk Digital haftet nicht für indirekte, zufällige oder Folgeschäden',
            'Unsere Haftung ist auf den für die spezifische Dienstleistung gezahlten Betrag beschränkt',
            'Wir sind nicht verantwortlich für Inhalte, Dienste oder Produkte von Drittanbietern',
            'Serviceunterbrechungen aufgrund technischer Probleme oder höherer Gewalt sind keine Haftungsgründe',
            'Sie verpflichten sich, Belk Digital gegen Ansprüche aus Ihrer Nutzung der Dienste schadlos zu halten'
          ]
        },
        prohibited: {
          title: 'Verbotene Aktivitäten',
          items: [
            'Nutzung der Dienste für rechtswidrige Zwecke oder illegale Aktivitäten',
            'Versuch, unbefugten Zugriff auf unsere Systeme oder Netzwerke zu erhalten',
            'Übertragung von Viren, Malware oder schädlichem Code',
            'Identitätsmissbrauch einer Person oder Entität oder falsche Darstellung einer Zugehörigkeit',
            'Störung oder Beeinträchtigung der Integrität unserer Dienste'
          ]
        },
        warranties: {
          title: 'Garantien und Haftungsausschlüsse',
          items: [
            'Dienste werden ohne Garantien jeglicher Art, ausdrücklich oder stillschweigend, bereitgestellt',
            'Wir garantieren keine ununterbrochene, rechtzeitige, sichere oder fehlerfreie Dienstleistung',
            'Wir garantieren nicht, dass die Ergebnisse Ihren Anforderungen entsprechen',
            'Alle heruntergeladenen Materialien erfolgen auf Ihr eigenes Risiko und nach eigenem Ermessen',
            'Wir lehnen alle Garantien einschließlich Marktgängigkeit und Eignung für einen bestimmten Zweck ab'
          ]
        }
      },
      governing: {
        title: 'Anwendbares Recht',
        description: 'Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der Belk Digital tätig ist, und werden nach diesen ausgelegt. Alle Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte dieser Gerichtsbarkeit.',
        description2: 'Durch die Nutzung unserer Dienste bestätigen Sie, dass Sie diese Allgemeinen Geschäftsbedingungen gelesen, verstanden und sich verpflichtet haben, an sie gebunden zu sein. Bei Fragen wenden Sie sich bitte an unser Rechtsteam.'
      }
    },
  },
};

export type TranslationKeys = typeof translations.en;
