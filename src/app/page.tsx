import Features from '@/components/layout/Features/Features'
import { Hero } from '@/components/layout/Hero'

export default function Home() {
    return (
        <>
            <Hero
                text="Conversor Online"
                title="Conversor de JSON para CSV"
                desc="Transforme seus dados de JSON para CSV de forma simples e rápida. Ideal para quem precisa analisar, organizar ou compartilhar informações em planilhas."
            />
            <Features
                text="Nossa ferramenta facilita a transformação de arquivos JSON em CSV, ideal para análise e organização de informações. Insira seu JSON e obtenha o CSV em segundos."
                title="Transforme seus dados Json para CSV"
                textAreaPlaceholder="Digite ou cole seu Json aqui"
                clearButtonText="Limpar"
                convertButtonText="Converter"
            />
        </>
    )
}
