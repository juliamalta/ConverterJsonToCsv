export interface infoData {
    text1: string | React.ReactNode
    text2: string
    title: string
    link?: string
}

export type FooterProps = {
    image: string
    text: string | React.ReactNode
    desc: string | React.ReactNode
    info: infoData[]
}
