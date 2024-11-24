import { FooterProps } from './Footer.types'

function Footer({ info, text, desc, image }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-gray-900">
            <div className="container mx-auto flex flex-col justify-between py-16 sm:flex-row lg:flex-row">
                <div className="mb-10 w-full px-4 xl:w-1/4">
                    <a className="mb-5 block max-w-max md:mb-0">
                        <img className="h-10" src={image} />
                    </a>
                    <p className="mt-5 text-sm text-color-athensGray md:text-base">{text}</p>
                </div>
                <div className="flex flex-col gap-8 px-4 lg:px-0 xl:flex-row">
                    {info.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex items-start sm:items-center">
                                <p className="text-center text-xl text-color-mischka">{item.title}</p>
                            </div>
                            <div className="flex items-start">
                                <p className="whitespace-nowrap text-sm text-color-athensGray md:text-base">
                                    {item.text1}
                                </p>
                            </div>
                            <div className="flex items-start">
                                <a
                                    href={item.link}
                                    className="text-sm text-color-athensGray md:text-base lg:whitespace-nowrap">
                                    {item.text2}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto mt-16">
                <div className="flex flex-wrap items-center border-t border-gray-600 py-12">
                    <div className="mb-6 w-full md:mb-0 md:w-1/2">
                        <p className="text-sm text-color-mischka md:text-base">{desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
