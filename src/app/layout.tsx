import type { Metadata } from 'next'
import { Baloo_Paaji_2 as BalooPaaji2 } from 'next/font/google'

import './globals.css'
import { Footer } from '@/components/layout/Footer'
import NavigationHeader from '@/components/layout/Navigations/NavigationHeader'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'

import logo from '../../public/images/logo.png'
const baloo = BalooPaaji2({
    variable: '--font-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren

const infoData = [
    {
        title: 'Features',
        text1: (
            <>
                Conversão rápida de JSON para CSV
                <br />
                Não é necessário cadastro para usar a ferramenta
            </>
        ),
        text2: ' É incrivelmente rápido e fácil de usar.',
    },
]

const navData = [
    {
        text: 'CONVERSOR',
        link: '/#json-csv',
        submenus: [
            {
                title: 'Testar Agora',
                href: '/json-csv/testar',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet quam non risus tempus luctus. Integer ac turpis sed nulla fringilla tincidunt.',
            },
            {
                title: 'Como Funciona',
                href: '/json-csv/como-funciona',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio id nisl faucibus varius. Morbi sollicitudin, tortor sit amet lobortis.',
            },
        ],
    },
    {
        text: 'BENEFÍCIOS',
        link: '/#beneficios',
        submenus: [
            {
                title: 'Economia de Tempo',
                href: '/json-csv/beneficios/economia-tempo',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat nisi id leo sollicitudin, eu iaculis lorem fringilla.',
            },
            {
                title: 'Fácil de Usar',
                href: '/json-csv/beneficios/facilidade',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, libero et fermentum congue, libero nunc sodales erat.',
            },
        ],
    },
    {
        text: 'DOCUMENTAÇÃO',
        link: '/#documentacao',
        submenus: [
            {
                title: 'Guia Completo',
                href: '/json-csv/documentacao',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere tortor at justo iaculis, ac condimentum libero euismod.',
            },
            {
                title: 'Exemplos de Uso',
                href: '/json-csv/documentacao/exemplos',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit turpis eu ante sollicitudin, et vehicula turpis gravida.',
            },
        ],
    },
    {
        text: 'PLANOS E PREÇOS',
        link: '/#precos',
        submenus: [
            {
                title: 'Planos Gratuito',
                href: '/json-csv/precos/gratuito',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non orci scelerisque, faucibus velit ac, convallis nulla.',
            },
            {
                title: 'Planos Pagos',
                href: '/json-csv/precos/pagos',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet felis in magna facilisis, ac tristique lectus auctor.',
            },
        ],
    },
]

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', baloo.className)}>
                <NavigationHeader image="./images/logonavi.png" navs={navData} />
                {children}
                <Footer
                    image={logo.src}
                    info={infoData}
                    text={<>Converta seus dados JSON para CSV de forma rápida e fácil.</>}
                    desc="2024 - Converter Technology Software"
                />
            </body>
        </html>
    )
}
