const fs = require('fs');
const path = require('path');

const esFaqData = `export const faqDataES: FAQCategory[] = [
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
];`;

const filePath = path.join(__dirname, '..', 'src', 'i18n', 'faqData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// replace the faqDataES block
content = content.replace(/export const faqDataES: FAQCategory\[\] = \[[\s\S]*?\];/g, esFaqData);

fs.writeFileSync(filePath, content, 'utf8');
console.log('faqDataES updated');
