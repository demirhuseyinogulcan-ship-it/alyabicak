'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
    text: string
    label: string
    copiedLabel: string
}

export function CopyButton({ text, label, copiedLabel }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text', err)
        }
    }

    return (
        <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${copied
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-steel-800 hover:bg-steel-700 text-steel-200'
                }`}
            aria-label={label}
        >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? copiedLabel : label}</span>
        </button>
    )
}
