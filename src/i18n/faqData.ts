
export interface FAQItem {
    q: string;
    a: string;
}

export interface FAQCategory {
    name: string;
    questions: FAQItem[];
}

export const faqDataEN: FAQCategory[] = [
    {
        name: "Pricing & Payments",
        questions: [
            {
                q: "What is your pricing structure?",
                a: "Our pricing is project-based, not one-size-fits-all. Each project is scoped based on requirements, complexity, timelines, and long-term goals. This ensures you pay for exactly what your business needs-no unnecessary features or limitations."
            },
            {
                q: "Do you offer payment plans?",
                a: "Yes. For larger projects, we offer milestone-based payment plans. Payments are typically divided across key project phases such as discovery, design, development, and launch."
            },
            {
                q: "Are there any hidden costs?",
                a: "No. We follow a transparent pricing policy. All costs are clearly outlined in the proposal before work begins. Any additional requests outside the agreed scope are discussed and approved in advance."
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept international bank transfers and online payment methods, making it easy for clients in the US, Europe, GCC, and Australia to work with us seamlessly."
            }
        ]
    },
    {
        name: "Process & Timeline",
        questions: [
            {
                q: "How long does it take to build a website?",
                a: "Project timelines vary based on scope and complexity. Standard business websites typically take 4–6 weeks, while complex platforms or SaaS solutions may take 8–12+ weeks. Timelines are finalized during the discovery phase."
            },
            {
                q: "What is your design and development process?",
                a: "Our process includes: Discovery & requirements analysis, Strategy & planning, UI/UX design, Development & integration, and Testing, launch & optimization. This structured approach ensures clarity, quality, and predictable outcomes."
            },
            {
                q: "How many revision rounds are included?",
                a: "We include multiple structured revision rounds at key stages (design and development). This allows feedback to be incorporated efficiently without delaying the project."
            },
            {
                q: "Will I be involved in the process?",
                a: "Absolutely. We believe in collaborative execution. You’ll be involved at major milestones, with regular updates, reviews, and clear communication throughout the project."
            }
        ]
    },
    {
        name: "Global Delivery",
        questions: [
            {
                q: "Do you work with international clients?",
                a: "Yes. Belk Digital works with clients across the US, Europe, GCC, and Australia. Our remote-first model allows us to deliver high-quality digital solutions globally."
            },
            {
                q: "What languages do you support?",
                a: "We primarily deliver projects in English, but we also support multi-language and localization-ready websites, including Arabic (RTL), European languages, and others as required."
            },
            {
                q: "How do you handle different time zones?",
                a: "We structure communication to overlap with your business hours. Dedicated project managers ensure timely responses, clear updates, and smooth collaboration across time zones."
            },
            {
                q: "Do you provide RTL (Right-to-Left) support?",
                a: "Yes. We have experience designing and developing RTL-compatible websites, especially for Arabic-language markets in the GCC."
            }
        ]
    },
    {
        name: "Support & Maintenance",
        questions: [
            {
                q: "What happens after the website is launched?",
                a: "After launch, we provide post-launch support to ensure everything runs smoothly. This includes performance checks, bug fixes, and guidance on managing your site."
            },
            {
                q: "Do you offer hosting services?",
                a: "We do not directly sell hosting, but we recommend and assist with reliable hosting providers based on your project’s performance, security, and scalability needs."
            },
            {
                q: "How quickly do you respond to support requests?",
                a: "Support response times depend on the selected support plan, but we aim to respond to all requests within one business day, with critical issues handled faster."
            },
            {
                q: "Can I update the website content myself?",
                a: "Yes. We build websites using user-friendly CMS solutions or custom admin panels, allowing you to update content easily without technical knowledge."
            }
        ]
    },
    {
        name: "Services & Capabilities",
        questions: [
            {
                q: "What types of businesses do you specialize in?",
                a: "We work with startups, scaleups, SaaS companies, ecommerce brands, and established enterprises. Our services are designed for businesses that value performance, scalability, and long-term digital growth rather than short-term fixes."
            },
            {
                q: "Do you work with startups and early-stage companies?",
                a: "Yes. We frequently partner with startups to help them validate ideas, build MVPs, and scale digital products. Our approach balances speed, quality, and future scalability."
            },
            {
                q: "Can you redesign an existing website without losing SEO rankings?",
                a: "Yes. Website redesigns are handled with a SEO-safe migration strategy, including URL mapping, redirects, content preservation, and technical SEO checks to protect and often improve existing rankings."
            },
            {
                q: "Do you offer SaaS product design and development?",
                a: "Yes. We design and develop SaaS platforms, including dashboards, user flows, authentication systems, and scalable architectures tailored for growth."
            }
        ]
    },
    {
        name: "SEO, GEO & Digital Growth",
        questions: [
            {
                q: "What is GEO (Generative Engine Optimization)?",
                a: "GEO focuses on optimizing content and structure so your business appears in AI-generated answers from platforms like Google AI Overviews, ChatGPT, and other generative search systems. Our strategies combine traditional SEO with AI-readable content architecture."
            },
            {
                q: "How is your SEO approach different from traditional SEO agencies?",
                a: "Our SEO approach is strategy-driven and integrated. We focus on search intent, technical performance, content depth, and GEO readiness, resulting in sustainable, long-term visibility."
            },
            {
                q: "How long does it take to see SEO results?",
                a: "SEO is a long-term strategy. Initial improvements may appear within 2–3 months, while meaningful growth typically occurs over 4–6 months, depending on competition and scope."
            },
            {
                q: "Do you provide SEO for international and multi-country websites?",
                a: "Yes. We specialize in international SEO, including country-level targeting, content localization, technical structure, and global search intent optimization."
            }
        ]
    },
    {
        name: "Design, UX & Branding",
        questions: [
            {
                q: "Do you follow a template-based design approach?",
                a: "No. All designs are custom-built based on brand identity, business goals, and user behavior. We do not rely on pre-made templates for client projects."
            },
            {
                q: "How do you ensure the design aligns with business goals?",
                a: "Design decisions are guided by user research, conversion goals, brand positioning, and performance standards. This ensures design supports measurable outcomes."
            },
            {
                q: "Do you provide branding and identity services?",
                a: "Yes. We offer branding, visual identity, and design systems to ensure consistency across websites, products, and marketing channels."
            }
        ]
    },
    {
        name: "Technical & Infrastructure",
        questions: [
            {
                q: "What technologies do you use?",
                a: "We work with modern, scalable technologies including React, Next.js, Node.js, Shopify, WordPress, headless CMS platforms, and cloud-based infrastructures."
            },
            {
                q: "Will my website be mobile-responsive?",
                a: "Yes. All websites we build are fully responsive, optimized for mobile, tablet, and desktop devices to ensure consistent user experience."
            },
            {
                q: "Do you optimize websites for SEO?",
                a: "Yes. SEO best practices are integrated into our development process, including clean code, fast loading times, mobile optimization, and on-page SEO fundamentals."
            },
            {
                q: "Will I own the website code?",
                a: "Yes. Once the project is completed and final payment is made, you fully own the website and its codebase."
            },
            {
                q: "Will my website be secure?",
                a: "Yes. Security best practices are implemented at every level, including secure hosting recommendations, SSL, clean code practices, and performance optimization."
            },
            {
                q: "Can my website handle high traffic?",
                a: "Yes. We build websites using scalable architectures that can handle growth and high traffic volumes without performance issues."
            },
            {
                q: "Do you work with headless CMS or custom admin panels?",
                a: "Yes. Depending on project needs, we implement headless CMS solutions or custom admin dashboards for flexibility and scalability."
            }
        ]
    },
    {
        name: "Collaboration & Communication",
        questions: [
            {
                q: "Who will be my point of contact during the project?",
                a: "You’ll have a dedicated project manager who acts as your primary point of contact throughout the project lifecycle."
            },
            {
                q: "How do you handle feedback and approvals?",
                a: "Feedback is collected at defined milestones to ensure clarity and efficiency. This structured approach prevents scope creep and keeps timelines on track."
            },
            {
                q: "Can you work with our internal team or developers?",
                a: "Yes. We regularly collaborate with internal teams, stakeholders, and external vendors, acting as an extension of your team when needed."
            }
        ]
    },
    {
        name: "Legal, Ownership & Compliance",
        questions: [
            {
                q: "Do you sign NDAs or confidentiality agreements?",
                a: "Yes. We respect client confidentiality and are happy to sign NDAs when required."
            },
            {
                q: "Will the website comply with accessibility standards?",
                a: "We follow accessibility best practices to improve usability and inclusivity. Specific compliance requirements can be addressed based on regional needs."
            },
            {
                q: "What happens if we want to extend the project later?",
                a: "We support long-term partnerships. Additional features, improvements, or services can be added as your business grows."
            }
        ]
    },
    {
        name: "Why Choose Belk Digital",
        questions: [
            {
                q: "Why should we choose Belk Digital over other agencies?",
                a: "Clients choose Belk Digital for our strategic thinking, technical expertise, transparency, and long-term mindset. We don’t just build websites—we build scalable digital foundations."
            },
            {
                q: "Is Belk Digital a freelancer or an agency?",
                a: "Belk Digital is a full-service digital agency with a structured team covering strategy, design, development, SEO, and support."
            },
            {
                q: "What makes Belk Digital suitable for global clients?",
                a: "Our remote-first delivery model, international experience, and process-driven execution make us well-suited for global collaborations across time zones."
            }
        ]
    }
];

export const faqDataES: FAQCategory[] = [
    {
        name: "Precios y Pagos",
        questions: [
            {
                q: "¿Cuál es su estructura de precios?",
                a: "Nuestros precios se basan en proyectos, no son únicos para todos. Cada proyecto se define en función de los requisitos, la complejidad, los plazos y los objetivos a largo plazo. Esto asegura que pague exactamente por lo que su empresa necesita, sin funciones o limitaciones innecesarias."
            },
            {
                q: "¿Ofrecen planes de pago?",
                a: "Sí. Para proyectos más grandes, ofrecemos planes de pago basados en hitos. Los pagos se dividen típicamente en fases clave del proyecto, como descubrimiento, diseño, desarrollo y lanzamiento."
            },
            {
                q: "¿Hay costos ocultos?",
                a: "No. Seguimos una política de precios transparente. Todos los costos se detallan claramente en la propuesta antes de que comience el trabajo. Cualquier solicitud adicional fuera del alcance acordado se discute y aprueba por adelantado."
            },
            {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos transferencias bancarias internacionales y métodos de pago en línea, lo que facilita a los clientes en EE. UU., Europa, GCC y Australia trabajar con nosotros de manera fluida."
            }
        ]
    },
    {
        name: "Proceso y Cronograma",
        questions: [
            {
                q: "¿Cuánto tiempo lleva construir un sitio web?",
                a: "Los cronogramas del proyecto varían según el alcance y la complejidad. Los sitios web comerciales estándar suelen tardar entre 4 y 6 semanas, mientras que las plataformas complejas o soluciones SaaS pueden tardar entre 8 y 12 semanas o más. Los cronogramas se finalizan durante la fase de descubrimiento."
            },
            {
                q: "¿Cuál es su proceso de diseño y desarrollo?",
                a: "Nuestro proceso incluye: Descubrimiento y análisis de requisitos, Estrategia y planificación, Diseño UI/UX, Desarrollo e integración, y Pruebas, lanzamiento y optimización. Este enfoque estructurado garantiza claridad, calidad y resultados predecibles."
            },
            {
                q: "¿Cuántas rondas de revisión se incluyen?",
                a: "Incluimos múltiples rondas de revisión estructuradas en etapas clave (diseño y desarrollo). Esto permite incorporar comentarios de manera eficiente sin retrasar el proyecto."
            },
            {
                q: "¿Estaré involucrado en el proceso?",
                a: "Absolutamente. Creemos en la ejecución colaborativa. Estará involucrado en los hitos principales, con actualizaciones periódicas, revisiones y una comunicación clara durante todo el proyecto."
            }
        ]
    },
    {
        name: "Entrega Global",
        questions: [
            {
                q: "¿Trabajan con clientes internacionales?",
                a: "Sí. Belk Digital trabaja con clientes en EE. UU., Europa, GCC y Australia. Nuestro modelo, que prioriza el trabajo remoto, nos permite ofrecer soluciones digitales de alta calidad a nivel mundial."
            },
            {
                q: "¿Qué idiomas admiten?",
                a: "Principalmente entregamos proyectos en inglés, pero también admitimos sitios web listos para la localización y en varios idiomas, incluyendo árabe (RTL), idiomas europeos y otros según se requiera."
            },
            {
                q: "¿Cómo manejan las diferentes zonas horarias?",
                a: "Estructuramos la comunicación para que se superponga con su horario comercial. Los gerentes de proyecto dedicados aseguran respuestas oportunas, actualizaciones claras y una colaboración fluida en todas las zonas horarias."
            },
            {
                q: "¿Brindan soporte RTL (de derecha a izquierda)?",
                a: "Sí. Tenemos experiencia en el diseño y desarrollo de sitios web compatibles con RTL, especialmente para los mercados de habla árabe en el GCC."
            }
        ]
    },
    {
        name: "Soporte y Mantenimiento",
        questions: [
            {
                q: "¿Qué sucede después del lanzamiento del sitio web?",
                a: "Después del lanzamiento, brindamos soporte posterior al lanzamiento para garantizar que todo funcione sin problemas. Esto incluye verificaciones de rendimiento, corrección de errores y orientación sobre cómo administrar su sitio."
            },
            {
                q: "¿Ofrecen servicios de hosting?",
                a: "No vendemos hosting directamente, pero recomendamos y ayudamos con proveedores de hosting confiables según las necesidades de rendimiento, seguridad y escalabilidad de su proyecto."
            },
            {
                q: "¿Qué tan rápido responden a las solicitudes de soporte?",
                a: "Los tiempos de respuesta de soporte dependen del plan de soporte seleccionado, pero nuestro objetivo es responder a todas las solicitudes dentro de un día hábil, manejando los problemas críticos más rápido."
            },
            {
                q: "¿Puedo actualizar el contenido del sitio web yo mismo?",
                a: "Sí. Construimos sitios web utilizando soluciones CMS fáciles de usar o paneles de administración personalizados, lo que le permite actualizar el contenido fácilmente sin conocimientos técnicos."
            }
        ]
    },
    {
        name: "Servicios y Capacidades",
        questions: [
            {
                q: "¿En qué tipos de empresas se especializan?",
                a: "Trabajamos con startups, empresas en crecimiento, empresas SaaS, marcas de comercio electrónico y empresas establecidas. Nuestros servicios están diseñados para empresas que valoran el rendimiento, la escalabilidad y el crecimiento digital a largo plazo en lugar de soluciones a corto plazo."
            },
            {
                q: "¿Trabajan con startups y empresas en etapa inicial?",
                a: "Sí. Nos asociamos con frecuencia con startups para ayudarlas a validar ideas, construir MVP y escalar productos digitales. Nuestro enfoque equilibra la velocidad, la calidad y la escalabilidad futura."
            },
            {
                q: "¿Pueden rediseñar un sitio web existente sin perder las clasificaciones SEO?",
                a: "Sí. Los rediseños de sitios web se manejan con una estrategia de migración segura para SEO, que incluye mapeo de URL, redireccionamientos, preservación de contenido y verificaciones de SEO técnico para proteger y a menudo mejorar las clasificaciones existentes."
            },
            {
                q: "¿Ofrecen diseño y desarrollo de productos SaaS?",
                a: "Sí. Diseñamos y desarrollamos plataformas SaaS, incluyendo paneles de control, flujos de usuario, sistemas de autenticación y arquitecturas escalables diseñadas para el crecimiento."
            }
        ]
    },
    {
        name: "SEO, GEO y Crecimiento Digital",
        questions: [
            {
                q: "¿Qué es GEO (Optimización de Motores Generativos)?",
                a: "GEO se centra en optimizar el contenido y la estructura para que su empresa aparezca en las respuestas generadas por IA de plataformas como Google AI Overviews, ChatGPT y otros sistemas de búsqueda generativa. Nuestras estrategias combinan SEO tradicional con arquitectura de contenido legible por IA."
            },
            {
                q: "¿En qué se diferencia su enfoque SEO de las agencias SEO tradicionales?",
                a: "Nuestro enfoque SEO está impulsado por estrategias y es integrado. Nos centramos en la intención de búsqueda, el rendimiento técnico, la profundidad del contenido y la preparación para GEO, lo que da como resultado una visibilidad sostenible a largo plazo."
            },
            {
                q: "¿Cuánto tiempo se tarda en ver resultados de SEO?",
                a: "El SEO es una estrategia a largo plazo. Las mejoras iniciales pueden aparecer entre 2 y 3 meses, mientras que un crecimiento significativo suele ocurrir en un período de 4 a 6 meses, dependiendo de la competencia y el alcance."
            },
            {
                q: "¿Proporcionan SEO para sitios web internacionales y multipaís?",
                a: "Sí. Nos especializamos en SEO internacional, incluida la focalización a nivel de país, la localización de contenido, la estructura técnica y la optimización de la intención de búsqueda global."
            }
        ]
    },
    {
        name: "Diseño, UX y Branding",
        questions: [
            {
                q: "¿Siguen un enfoque de diseño basado en plantillas?",
                a: "No. Todos los diseños se crean de forma personalizada según la identidad de la marca, los objetivos comerciales y el comportamiento del usuario. No dependemos de plantillas prediseñadas para proyectos de clientes."
            },
            {
                q: "¿Cómo garantizan que el diseño se alinee con los objetivos comerciales?",
                a: "Las decisiones de diseño están guiadas por la investigación de usuarios, los objetivos de conversión, el posicionamiento de la marca y los estándares de rendimiento. Esto garantiza que el diseño apoye resultados medibles."
            },
            {
                q: "¿Ofrecen servicios de branding e identidad?",
                a: "Sí. Ofrecemos branding, identidad visual y sistemas de diseño para asegurar la coherencia en los sitios web, productos y canales de marketing."
            }
        ]
    },
    {
        name: "Aspectos Técnicos e Infraestructura",
        questions: [
            {
                q: "¿Qué tecnologías utilizan?",
                a: "Trabajamos con tecnologías modernas y escalables que incluyen React, Next.js, Node.js, Shopify, WordPress, plataformas CMS sin cabeza e infraestructuras basadas en la nube."
            },
            {
                q: "¿Mi sitio web será compatible con dispositivos móviles?",
                a: "Sí. Todos los sitios web que creamos son completamente responsivos y están optimizados para dispositivos móviles, tabletas y computadoras de escritorio para garantizar una experiencia de usuario constante."
            },
            {
                q: "¿Optimizan los sitios web para SEO?",
                a: "Sí. Las mejores prácticas de SEO están integradas en nuestro proceso de desarrollo, incluyendo código limpio, tiempos de carga rápidos, optimización móvil y aspectos fundamentales de SEO en la página."
            },
            {
                q: "¿Seré dueño del código del sitio web?",
                a: "Sí. Una vez que se completa el proyecto y se realiza el pago final, usted es el propietario total del sitio web y su base de código."
            },
            {
                q: "¿Mi sitio web será seguro?",
                a: "Sí. Las mejores prácticas de seguridad se implementan en todos los niveles, incluyendo recomendaciones de alojamiento seguro, SSL, prácticas de código limpio y optimización del rendimiento."
            },
            {
                q: "¿Puede mi sitio web manejar mucho tráfico?",
                a: "Sí. Construimos sitios web utilizando arquitecturas escalables que pueden manejar el crecimiento y altos volúmenes de tráfico sin problemas de rendimiento."
            },
            {
                q: "¿Trabajan con CMS headless o paneles de administración personalizados?",
                a: "Sí. Dependiendo de las necesidades del proyecto, implementamos soluciones CMS sin cabeza o paneles de administración personalizados para mayor flexibilidad y escalabilidad."
            }
        ]
    },
    {
        name: "Colaboración y Comunicación",
        questions: [
            {
                q: "¿Quién será mi punto de contacto durante el proyecto?",
                a: "Tendrá un gerente de proyecto dedicado que actuará como su principal punto de contacto durante todo el ciclo de vida del proyecto."
            },
            {
                q: "¿Cómo manejan los comentarios y aprobaciones?",
                a: "Los comentarios se recopilan en hitos definidos para garantizar claridad y eficiencia. Este enfoque estructurado evita la desviación del alcance y mantiene los cronogramas encaminados."
            },
            {
                q: "¿Pueden trabajar con nuestro equipo interno o desarrolladores?",
                a: "Sí. Colaboramos regularmente con equipos internos, partes interesadas y proveedores externos, actuando como una extensión de su equipo cuando sea necesario."
            }
        ]
    },
    {
        name: "Aspectos Legales, Propiedad y Cumplimiento",
        questions: [
            {
                q: "¿Firman acuerdos de confidencialidad (NDA)?",
                a: "Sí. Respetamos la confidencialidad de nuestros clientes y estaremos encantados de firmar NDAs cuando sea necesario."
            },
            {
                q: "¿Cumplirá el sitio web con los estándares de accesibilidad?",
                a: "Seguimos las mejores prácticas de accesibilidad para mejorar la usabilidad y la inclusión. Los requisitos específicos de cumplimiento se pueden abordar según las necesidades regionales."
            },
            {
                q: "¿Qué sucede si queremos ampliar el proyecto más adelante?",
                a: "Apoyamos asociaciones a largo plazo. Se pueden agregar características adicionales, mejoras o servicios a medida que su empresa crece."
            }
        ]
    },
    {
        name: "Por qué elegir Belk Digital",
        questions: [
            {
                q: "¿Por qué deberíamos elegir Belk Digital sobre otras agencias?",
                a: "Los clientes eligen a Belk Digital por nuestro pensamiento estratégico, experiencia técnica, transparencia y mentalidad a largo plazo. No solo creamos sitios web, construimos bases digitales escalables."
            },
            {
                q: "¿Es Belk Digital un freelancer o una agencia?",
                a: "Belk Digital es una agencia digital de servicio completo con un equipo estructurado que cubre estrategia, diseño, desarrollo, SEO y soporte."
            },
            {
                q: "¿Qué hace que Belk Digital sea adecuado para clientes globales?",
                a: "Nuestro modelo de entrega centrado en el trabajo remoto, experiencia internacional y ejecución impulsada por procesos nos hacen muy adecuados para colaboraciones globales en diferentes zonas horarias."
            }
        ]
    }
];

export const faqDataFR: FAQCategory[] = [
    {
        name: "Tarification et Paiements",
        questions: [
            {
                q: "Quelle est votre structure tarifaire ?",
                a: "Notre tarification est basée sur le projet. Chaque projet est évalué en fonction des exigences, de la complexité, des délais et des objectifs à long terme. Cela garantit que vous payez exactement pour ce dont votre entreprise a besoin."
            },
            {
                q: "Proposez-vous des plans de paiement ?",
                a: "Oui. Pour les grands projets, nous proposons des plans de paiement basés sur des étapes clés telles que la découverte, la conception, le développement et le lancement."
            },
            {
                q: "Y a-t-il des coûts cachés ?",
                a: "Non. Nous suivons une politique de transparence. Tous les coûts sont clairement indiqués dans la proposition avant le début des travaux. Toute demande supplémentaire est discutée et approuvée à l'avance."
            },
            {
                q: "Quelles méthodes de paiement acceptez-vous ?",
                a: "Nous acceptons les virements bancaires internationaux et les méthodes de paiement en ligne, facilitant la collaboration pour les clients aux États-Unis, en Europe, dans le CCG et en Australie."
            }
        ]
    },
    {
        name: "Processus et Délais",
        questions: [
            {
                q: "Combien de temps faut-il pour créer un site web ?",
                a: "Les délais varient selon la complexité. Les sites web standards prennent généralement 4 à 6 semaines, tandis que les plateformes complexes ou solutions SaaS peuvent prendre 8 à 12+ semaines."
            },
            {
                q: "Quel est votre processus de conception et développement ?",
                a: "Notre processus comprend : Découverte, Stratégie, Design UI/UX, Développement, et Lancement. Cette approche structurée garantit clarté et qualité."
            },
            {
                q: "Combien de révisions sont incluses ?",
                a: "Nous incluons plusieurs cycles de révision structurés aux étapes clés. Cela permet d'intégrer les commentaires efficacement sans retarder le projet."
            },
            {
                q: "Serai-je impliqué dans le processus ?",
                a: "Absolument. Nous croyons en l'exécution collaborative. Vous serez impliqué aux étapes majeures, avec des mises à jour régulières et une communication claire."
            }
        ]
    },
    {
        name: "Livraison Mondiale",
        questions: [
            {
                q: "Travaillez-vous avec des clients internationaux ?",
                a: "Oui. Belk Digital travaille avec des clients aux États-Unis, en Europe, dans le CCG et en Australie. Notre modèle à distance nous permet de livrer des solutions numériques de haute qualité à l'échelle mondiale."
            },
            {
                q: "Quelles langues supportez-vous ?",
                a: "Nous livrons principalement en anglais, mais nous supportons également les sites multilingues, y compris l'arabe (RTL), les langues européennes et autres."
            },
            {
                q: "Comment gérez-vous les différents fuseaux horaires ?",
                a: "Nous structurons la communication pour qu'elle chevauche vos heures de bureau. Des chefs de projet dédiés assurent des réponses rapides et une collaboration fluide."
            },
            {
                q: "Fournissez-vous un support RTL (droite à gauche) ?",
                a: "Oui. Nous avons de l'expérience dans la conception et le développement de sites web compatibles RTL, notamment pour les marchés arabophones du CCG."
            }
        ]
    },
    {
        name: "Support et Maintenance",
        questions: [
            {
                q: "Que se passe-t-il après le lancement du site ?",
                a: "Après le lancement, nous fournissons un support pour assurer le bon fonctionnement. Cela inclut des vérifications de performance, des corrections de bugs et des conseils."
            },
            {
                q: "Offrez-vous des services d'hébergement ?",
                a: "Nous ne vendons pas directement d'hébergement, mais nous recommandons et aidons avec des fournisseurs d'hébergement fiables en fonction de vos besoins."
            },
            {
                q: "Quelle est la rapidité de vos réponses au support ?",
                a: "Nous visons à répondre à toutes les demandes dans un délai d'un jour ouvrable, avec une gestion plus rapide des problèmes critiques."
            },
            {
                q: "Puis-je mettre à jour le contenu moi-même ?",
                a: "Oui. Nous construisons des sites utilisant des CMS conviviaux, vous permettant de mettre à jour le contenu facilement sans connaissances techniques."
            }
        ]
    },
    {
        name: "Services et Capacités",
        questions: [
            {
                q: "Dans quels types d'entreprises vous spécialisez-vous ?",
                a: "Nous travaillons avec des startups, des entreprises SaaS, des marques e-commerce et des entreprises établies qui valorisent la performance et la croissance."
            },
            {
                q: "Travaillez-vous avec des startups ?",
                a: "Oui. Nous aidons fréquemment les startups à valider leurs idées, construire des MVP et faire évoluer leurs produits numériques."
            },
            {
                q: "Pouvez-vous refondre un site sans perdre le SEO ?",
                a: "Oui. Les refontes sont gérées avec une stratégie de migration SEO sécurisée, incluant la cartographie des URL et les redirections pour protéger les classements."
            },
            {
                q: "Offrez-vous la conception de produits SaaS ?",
                a: "Oui. Nous concevons et développons des plateformes SaaS, incluant des tableaux de bord, des flux utilisateurs et des architectures évolutives."
            }
        ]
    },
    {
        name: "SEO et Croissance Numérique",
        questions: [
            {
                q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
                a: "Le GEO optimise le contenu pour apparaître dans les réponses générées par l'IA. Nos stratégies combinent le SEO traditionnel avec une architecture de contenu lisible par l'IA."
            },
            {
                q: "En quoi votre approche SEO est-elle différente ?",
                a: "Notre approche est stratégique et intégrée. Nous nous concentrons sur l'intention de recherche, la performance technique et la profondeur du contenu pour une visibilité durable."
            },
            {
                q: "Combien de temps pour voir des résultats SEO ?",
                a: "Le SEO est une stratégie à long terme. Les premières améliorations peuvent apparaître en 2-3 mois, avec une croissance significative sur 4-6 mois."
            },
            {
                q: "Faites-vous du SEO pour les sites internationaux ?",
                a: "Oui. Nous sommes spécialisés dans le SEO international, y compris le ciblage par pays et la localisation de contenu."
            }
        ]
    },
    {
        name: "Design et Branding",
        questions: [
            {
                q: "Utilisez-vous des modèles (templates) ?",
                a: "Non. Tous les designs sont créés sur mesure en fonction de l'identité de la marque et des objectifs commerciaux. Nous ne comptons pas sur des modèles préfabriqués."
            },
            {
                q: "Comment assurez-vous l'alignement avec les objectifs ?",
                a: "Les décisions de design sont guidées par la recherche utilisateur et les objectifs de conversion, garantissant que le design soutient des résultats mesurables."
            },
            {
                q: "Offrez-vous des services de branding ?",
                a: "Oui. Nous offrons des services d'identité visuelle et de systèmes de design pour assurer la cohérence sur tous les canaux."
            }
        ]
    },
    {
        name: "Technique et Infrastructure",
        questions: [
            {
                q: "Quelles technologies utilisez-vous ?",
                a: "Nous utilisons des technologies modernes comme React, Next.js, Node.js, Shopify, et des CMS headless."
            },
            {
                q: "Mon site sera-t-il responsive ?",
                a: "Oui. Tous les sites que nous construisons sont entièrement responsives et optimisés pour mobile, tablette et bureau."
            },
            {
                q: "Optimisez-vous les sites pour le SEO ?",
                a: "Oui. Les meilleures pratiques SEO sont intégrées dans notre processus de développement, incluant un code propre et des temps de chargement rapides."
            },
            {
                q: "Serai-je propriétaire du code ?",
                a: "Oui. Une fois le projet terminé et payé, vous possédez entièrement le site web et son code source."
            },
            {
                q: "Mon site sera-t-il sécurisé ?",
                a: "Oui. Les meilleures pratiques de sécurité sont mises en œuvre à chaque niveau, y compris le SSL et l'optimisation des performances."
            },
            {
                q: "Mon site peut-il gérer un trafic élevé ?",
                a: "Oui. Nous construisons des sites utilisant des architectures évolutives capables de gérer la croissance et des volumes de trafic élevés."
            },
            {
                q: "Travaillez-vous avec des CMS headless ?",
                a: "Oui. Selon les besoins du projet, nous implémentons des solutions CMS headless pour plus de flexibilité."
            }
        ]
    },
    {
        name: "Collaboration",
        questions: [
            {
                q: "Qui sera mon point de contact ?",
                a: "Vous aurez un chef de projet dédié qui agira comme votre point de contact principal tout au long du projet."
            },
            {
                q: "Comment gérez-vous les retours ?",
                a: "Les retours sont collectés à des étapes définies pour assurer clarté et efficacité, évitant ainsi les dérives de périmètre."
            },
            {
                q: "Pouvez-vous travailler avec notre équipe interne ?",
                a: "Oui. Nous collaborons régulièrement avec les équipes internes et fonctionnons comme une extension de votre équipe si nécessaire."
            }
        ]
    },
    {
        name: "Légal et Conformité",
        questions: [
            {
                q: "Signez-vous des accords de confidentialité (NDA) ?",
                a: "Oui. Nous respectons la confidentialité des clients et sommes heureux de signer des NDA si nécessaire."
            },
            {
                q: "Le site respectera-t-il les normes d'accessibilité ?",
                a: "Nous suivons les meilleures pratiques d'accessibilité. Des exigences de conformité spécifiques peuvent être traitées selon les besoins régionaux."
            },
            {
                q: "Et si nous voulons étendre le projet plus tard ?",
                a: "Nous soutenons les partenariats à long terme. Des fonctionnalités ou services supplémentaires peuvent être ajoutés au fur et à mesure de votre croissance."
            }
        ]
    },
    {
        name: "Pourquoi Belk Digital",
        questions: [
            {
                q: "Pourquoi choisir Belk Digital ?",
                a: "Les clients nous choisissent pour notre réflexion stratégique, notre expertise technique et notre transparence. Nous construisons des fondations numériques évolutives."
            },
            {
                q: "Êtes-vous freelance ou agence ?",
                a: "Belk Digital est une agence numérique complète avec une équipe structurée couvrant la stratégie, le design, le développement et le SEO."
            },
            {
                q: "Pourquoi Belk Digital pour les clients mondiaux ?",
                a: "Notre modèle de livraison à distance et notre expérience internationale nous rendent parfaitement adaptés aux collaborations mondiales."
            }
        ]
    }
];

export const faqDataDE: FAQCategory[] = [
    {
        name: "Preise & Zahlungen",
        questions: [
            {
                q: "Wie ist Ihre Preisstruktur?",
                a: "Unsere Preise sind projektbasiert. Jedes Projekt wird basierend auf Anforderungen, Komplexität und Zielen kalkuliert. So zahlen Sie nur für genau das, was Ihr Unternehmen benötigt."
            },
            {
                q: "Bieten Sie Zahlungspläne an?",
                a: "Ja. Für größere Projekte bieten wir meilensteinbasierte Zahlungspläne an, die über Projektphasen wie Design, Entwicklung und Launch verteilt sind."
            },
            {
                q: "Gibt es versteckte Kosten?",
                a: "Nein. Wir verfolgen eine transparente Preispolitik. Alle Kosten sind im Angebot klar aufgeführt. Zusätzliche Anfragen werden im Voraus besprochen und genehmigt."
            },
            {
                q: "Welche Zahlungsmethoden akzeptieren Sie?",
                a: "Wir akzeptieren internationale Banküberweisungen und Online-Zahlungsmethoden, was die Zusammenarbeit für Kunden in den USA, Europa und Australien erleichtert."
            }
        ]
    },
    {
        name: "Prozess & Zeitplan",
        questions: [
            {
                q: "Wie lange dauert die Erstellung einer Website?",
                a: "Die Zeitpläne variieren je nach Umfang. Standard-Websites dauern typischerweise 4–6 Wochen, während komplexe Plattformen 8–12+ Wochen in Anspruch nehmen können."
            },
            {
                q: "Wie sieht Ihr Design- und Entwicklungsprozess aus?",
                a: "Unser Prozess umfasst: Discovery, Strategie, UI/UX-Design, Entwicklung und Launch. Dieser strukturierte Ansatz gewährleistet Klarheit und Qualität."
            },
            {
                q: "Wie viele Korrekturrunden sind enthalten?",
                a: "Wir bieten mehrere strukturierte Korrekturrunden in den Schlüsselphasen an. Dies ermöglicht effizientes Feedback ohne Projektverzögerungen."
            },
            {
                q: "Werde ich in den Prozess einbezogen?",
                a: "Auf jeden Fall. Wir glauben an kollaborative Ausführung. Sie werden an wichtigen Meilensteinen mit regelmäßigen Updates beteiligt sein."
            }
        ]
    },
    {
        name: "Globale Lieferung",
        questions: [
            {
                q: "Arbeiten Sie mit internationalen Kunden?",
                a: "Ja. Belk Digital arbeitet mit Kunden in den USA, Europa, GCC und Australien. Unser Remote-First-Modell ermöglicht globale digitale Lösungen."
            },
            {
                q: "Welche Sprachen unterstützen Sie?",
                a: "Wir liefern Projekte hauptsächlich auf Englisch, unterstützen aber auch mehrsprachige und lokalisierungsfähige Websites, einschließlich Arabisch und europäische Sprachen."
            },
            {
                q: "Wie gehen Sie mit verschiedenen Zeitzonen um?",
                a: "Wir strukturieren die Kommunikation so, dass sie sich mit Ihren Geschäftszeiten überschneidet. Projektmanager sorgen für zeitnahe Antworten."
            },
            {
                q: "Bieten Sie RTL (Rechts-nach-Links) Unterstützung?",
                a: "Ja. Wir haben Erfahrung in der Entwicklung von RTL-kompatiblen Websites, insbesondere für arabischsprachige Märkte."
            }
        ]
    },
    {
        name: "Support & Wartung",
        questions: [
            {
                q: "Was passiert nach dem Launch der Website?",
                a: "Nach dem Launch bieten wir Support, um einen reibungslosen Betrieb sicherzustellen. Dazu gehören Leistungschecks, Fehlerbehebungen und Beratung."
            },
            {
                q: "Bieten Sie Hosting-Dienste an?",
                a: "Wir verkaufen kein Hosting direkt, unterstützen aber bei der Auswahl zuverlässiger Hosting-Anbieter basierend auf Ihren Anforderungen."
            },
            {
                q: "Wie schnell antworten Sie auf Support-Anfragen?",
                a: "Wir streben an, auf alle Anfragen innerhalb eines Werktages zu antworten, wobei kritische Probleme schneller behandelt werden."
            },
            {
                q: "Kann ich den Website-Inhalt selbst aktualisieren?",
                a: "Ja. Wir erstellen Websites mit benutzerfreundlichen CMS-Lösungen, mit denen Sie Inhalte ohne technische Kenntnisse aktualisieren können."
            }
        ]
    },
    {
        name: "Dienstleistungen & Fähigkeiten",
        questions: [
            {
                q: "Auf welche Arten von Unternehmen sind Sie spezialisiert?",
                a: "Wir arbeiten mit Startups, SaaS-Unternehmen, E-Commerce-Marken und etablierten Unternehmen, die Wert auf Leistung und Skalierbarkeit legen."
            },
            {
                q: "Arbeiten Sie mit Startups zusammen?",
                a: "Ja. Wir arbeiten häufig mit Startups zusammen, um Ideen zu validieren, MVPs zu erstellen und digitale Produkte zu skalieren."
            },
            {
                q: "Können Sie eine Website neu gestalten, ohne SEO-Rankings zu verlieren?",
                a: "Ja. Redesigns werden mit einer SEO-sicheren Migrationsstrategie durchgeführt, um bestehende Rankings zu schützen und oft zu verbessern."
            },
            {
                q: "Bieten Sie SaaS-Produktdesign an?",
                a: "Ja. Wir entwerfen und entwickeln SaaS-Plattformen, einschließlich Dashboards, Benutzerflüssen und skalierbaren Architekturen."
            }
        ]
    },
    {
        name: "SEO & Digitales Wachstum",
        questions: [
            {
                q: "Was ist GEO (Generative Engine Optimization)?",
                a: "GEO optimiert Inhalte für KI-generierte Antworten. Unsere Strategien kombinieren traditionelles SEO mit KI-lesbarer Inhaltsarchitektur."
            },
            {
                q: "Wie unterscheidet sich Ihr SEO-Ansatz?",
                a: "Unser Ansatz ist strategiegetrieben. Wir konzentrieren uns auf Suchabsicht, technische Leistung und Inhaltstiefe für nachhaltige Sichtbarkeit."
            },
            {
                q: "Wie lange dauert es, bis man SEO-Ergebnisse sieht?",
                a: "SEO ist eine langfristige Strategie. Erste Verbesserungen können in 2-3 Monaten sichtbar werden, signifikantes Wachstum typischerweise in 4-6 Monaten."
            },
            {
                q: "Bieten Sie internationales SEO an?",
                a: "Ja. Wir sind spezialisiert auf internationales SEO, einschließlich Targeting auf Länderebene und Inhaltslokalisierung."
            }
        ]
    },
    {
        name: "Design & Branding",
        questions: [
            {
                q: "Verwenden Sie Design-Vorlagen (Templates)?",
                a: "Nein. Alle Designs werden basierend auf Markenidentität und Zielen maßgeschneidert. Wir verlassen uns nicht auf vorgefertigte Vorlagen."
            },
            {
                q: "Wie stellen Sie sicher, dass das Design den Zielen entspricht?",
                a: "Designentscheidungen basieren auf Benutzerforschung und Konversionszielen, um messbare Ergebnisse zu unterstützen."
            },
            {
                q: "Bieten Sie Branding-Dienste an?",
                a: "Ja. Wir bieten Branding und visuelle Identität an, um Konsistenz über alle Kanäle hinweg sicherzustellen."
            }
        ]
    },
    {
        name: "Technik & Infrastruktur",
        questions: [
            {
                q: "Welche Technologien verwenden Sie?",
                a: "Wir arbeiten mit modernen Technologien wie React, Next.js, Node.js, Shopify und Headless CMS-Plattformen."
            },
            {
                q: "Wird meine Website für Mobilgeräte optimiert sein?",
                a: "Ja. Alle von uns erstellten Websites sind vollständig responsiv und für Mobilgeräte, Tablets und Desktops optimiert."
            },
            {
                q: "Optimieren Sie Websites für SEO?",
                a: "Ja. SEO-Best-Practices sind in unseren Entwicklungsprozess integriert, einschließlich sauberem Code und schnellen Ladezeiten."
            },
            {
                q: "Werde ich Eigentümer des Codes sein?",
                a: "Ja. Nach Abschluss des Projekts und der letzten Zahlung gehört Ihnen die Website und der Code vollständig."
            },
            {
                q: "Wird meine Website sicher sein?",
                a: "Ja. Sicherheitsbest Practices werden auf jeder Ebene implementiert, einschließlich SSL und Leistungsoptimierung."
            },
            {
                q: "Kann meine Website hohen Traffic bewältigen?",
                a: "Ja. Wir bauen skalierbare Architekturen, die Wachstum und hohes Traffic-Volumen ohne Leistungsprobleme bewältigen können."
            },
            {
                q: "Arbeiten Sie mit Headless CMS?",
                a: "Ja. Je nach Projektbedarf implementieren wir Headless CMS-Lösungen für Flexibilität und Skalierbarkeit."
            }
        ]
    },
    {
        name: "Zusammenarbeit",
        questions: [
            {
                q: "Wer wird mein Ansprechpartner sein?",
                a: "Sie haben einen dedizierten Projektmanager, der während des gesamten Projektlebenszyklus Ihr Hauptansprechpartner ist."
            },
            {
                q: "Wie gehen Sie mit Feedback um?",
                a: "Feedback wird an definierten Meilensteinen gesammelt, um Klarheit und Effizienz zu gewährleisten."
            },
            {
                q: "Können Sie mit unserem internen Team arbeiten?",
                a: "Ja. Wir arbeiten regelmäßig mit internen Teams zusammen und fungieren bei Bedarf als Erweiterung Ihres Teams."
            }
        ]
    },
    {
        name: "Rechtliches & Compliance",
        questions: [
            {
                q: "Unterschreiben Sie Geheimhaltungsvereinbarungen (NDAs)?",
                a: "Ja. Wir respektieren die Vertraulichkeit unserer Kunden und unterzeichnen bei Bedarf gerne NDAs."
            },
            {
                q: "Wird die Website Barrierefreiheitsstandards entsprechen?",
                a: "Wir befolgen Best Practices für Barrierefreiheit. Spezifische Compliance-Anforderungen können je nach Bedarf erfüllt werden."
            },
            {
                q: "Was ist, wenn wir das Projekt später erweitern wollen?",
                a: "Wir unterstützen langfristige Partnerschaften. Zusätzliche Funktionen oder Dienste können hinzugefügt werden, wenn Ihr Unternehmen wächst."
            }
        ]
    },
    {
        name: "Warum Belk Digital",
        questions: [
            {
                q: "Warum sollte man Belk Digital wählen?",
                a: "Kunden wählen uns wegen unseres strategischen Denkens, unserer technischen Expertise und Transparenz. Wir bauen skalierbare digitale digitale Grundlagen."
            },
            {
                q: "Ist Belk Digital Freelancer oder Agentur?",
                a: "Belk Digital ist eine Full-Service-Digitalagentur mit einem strukturierten Team für Strategie, Design, Entwicklung und SEO."
            },
            {
                q: "Was macht Belk Digital für globale Kunden geeignet?",
                a: "Unser Remote-First-Modell und internationale Erfahrung machen uns ideal für die globale Zusammenarbeit."
            }
        ]
    }
];

// Helper function to get FAQ data by language
export const getFAQData = (language: string): FAQCategory[] => {
    switch (language) {
        case 'es':
            return faqDataES;
        case 'fr':
            return faqDataFR;
        case 'de':
            return faqDataDE;
        default:
            return faqDataEN;
    }
};
