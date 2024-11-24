export const metadataConfig = {
    title: 'Converter JSON para CSV',
    description: 'A better way to build your next project',
    openGraph: {
        siteName: 'Converter JSON para CSV',
        images: [
            {
                url: '/img/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'BuildHero',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@buildhero',
    },
    icons: {
        icon: [
            { url: 'favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: 'favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: 'favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: 'favicon/favicon.ico',
        apple: 'favicon/apple-touch-icon.png',
    },
    manifest: 'favicon/site.webmanifest',
    robots: {
        index: true,
        follow: true,
    },
    sitemap: 'sitemap.xml',
    appleWebApp: {
        title: 'BuildHero',
    },
}
