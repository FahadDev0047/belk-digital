export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://belkdigital.com/#organization',
        name: 'Belk Digital',
        url: 'https://belkdigital.com',
        logo: 'https://belkdigital.com/logo.png',
        email: 'contact@belkdigital.com',
        telephone: '+1 (843) 330-7365',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
