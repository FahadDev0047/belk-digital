export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://codenovax.com/#organization',
        name: 'CodeNovaX',
        url: 'https://codenovax.com',
        logo: 'https://codenovax.com/logo.png',
        email: 'business@codenovax.com',
        telephone: '+91 7759861053',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
