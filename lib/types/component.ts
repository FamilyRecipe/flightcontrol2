import { ReactNode } from 'react'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export type ComponentVariant = 'default' | 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'

export type ComponentSize = 'sm' | 'md' | 'lg'

