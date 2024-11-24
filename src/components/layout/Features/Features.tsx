'use client'

import React from 'react'

import { withAnimation } from '@/common/hocs'
import ConverterJson from '@/components/core/ConverterJson/ConverterJson'
import { FeaturesProps } from '@/components/layout/Features/Features.type'

function Feautures({ title, text, textAreaPlaceholder, convertButtonText, clearButtonText }: FeaturesProps) {
    return (
        <section id="converterlayout" className="flex flex-col bg-white px-4 py-24 sm:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col gap-8 md:flex-col">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{title}</h1>
                    <p className="mt-4 text-base text-gray-600 sm:text-lg">{text} </p>
                </div>
                <div className="mx-auto w-full">
                    <ConverterJson
                        textAreaPlaceholder={textAreaPlaceholder}
                        convertButtonText={convertButtonText}
                        clearButtonText={clearButtonText}
                    />
                </div>
            </div>
        </section>
    )
}

export default withAnimation(Feautures, 'fade-up')
