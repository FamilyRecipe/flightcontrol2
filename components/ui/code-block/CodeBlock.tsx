'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string
  code: string
}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, language, code, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          'relative w-full overflow-x-auto rounded-lg border border-border bg-surface-elevated p-4',
          className
        )}
        {...props}
      >
        <code className={cn('text-sm', language && `language-${language}`)}>{code}</code>
      </pre>
    )
  }
)

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock

