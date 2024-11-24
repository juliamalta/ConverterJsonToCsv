'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

import { HeroProps } from './Hero.types'

function ParallaxHero2({ text, title, desc }: HeroProps) {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, -50])

    return (
        <section id="ParallaxHero2" className="w-full bg-gray-900 py-44">
            <div>
                <motion.div className="container mx-auto flex flex-col items-center gap-4 text-center" style={{ y }}>
                    <span className="text-base font-semibold leading-5 text-white">{text}</span>
                    <h2 className="text-4xl font-semibold tracking-tighter text-white">{title}</h2>
                    <p className="mx-auto text-lg font-normal text-white md:text-xl lg:w-2/4">{desc}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default ParallaxHero2
