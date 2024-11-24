'use client'

import React, { useState } from 'react'

import { ConverterJsonProps } from '@/components/core/ConverterJson/ConverterJson.types'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

function ConverterJson({ textAreaPlaceholder, convertButtonText, clearButtonText }: ConverterJsonProps) {
    const [csvData, setCsvData] = useState('')
    const [textArea, setTextArea] = useState('')
    const [data, setData] = useState<any[]>([])

    const handleClear = () => {
        setTextArea('')
        setCsvData('')
        setData([])
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextArea(event.target.value)
    }

    const handleConvert = () => {
        try {
            let jsonData = JSON.parse(textArea)

            if (typeof jsonData === 'object' && !Array.isArray(jsonData)) {
                jsonData = [jsonData]
            }

            if (!Array.isArray(jsonData)) {
                alert('Erro: JSON deve ser um array de objetos ou um único objeto.')
                return
            }

            const headers = Object.keys(jsonData[0]).join(',')
            const rows = jsonData.map((item) => Object.values(item).map((value) => `"${value}"`))
            const csv = [headers, ...rows].join('\n')

            setCsvData(csv)
            setData(jsonData)
        } catch (error) {
            alert('Erro: O conteúdo de entrada não é um JSON válido.')
        }
    }

    return (
        <section id="ConverterJson" className="flex flex-col gap-8 rounded-2xl bg-white py-16 shadow-xl">
            <div className="container mx-auto">
                <Textarea
                    className="h-56 w-full"
                    value={textArea}
                    onChange={handleChange}
                    placeholder={textAreaPlaceholder}
                />
            </div>
            <div className="flex items-center justify-center gap-8">
                <div>
                    <Button variant="secondary" className="p-3 lg:p-6" onClick={handleConvert}>
                        {convertButtonText}
                    </Button>
                </div>
                <div>
                    <Button variant="secondary" className="p-3 lg:p-6" onClick={handleClear}>
                        {clearButtonText}
                    </Button>
                </div>
            </div>

            {data.length > 0 && (
                <div className="container mt-8 flex items-center justify-center overflow-x-auto">
                    <div className="table-responsive w-full">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    {Object.keys(data[0]).map((header, index) => (
                                        <th key={index} className="bg-gray-100 px-4 py-2 text-left">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((value, valueIndex) => (
                                            <td key={valueIndex} className="border-t px-4 py-2">
                                                {typeof value === 'object' && value !== null
                                                    ? JSON.stringify(value)
                                                    : String(value)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ConverterJson
