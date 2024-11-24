export interface NavItem {
    text: string
    link: string
    submenus: { title: string; href: string; description: string }[]
}

export type NavigationHeaderProps = {
    image: string
    navs: NavItem[]
}
