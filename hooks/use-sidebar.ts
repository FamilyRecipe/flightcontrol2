'use client'

import { useState, useEffect } from 'react'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Persist sidebar state to localStorage
    const stored = localStorage.getItem('sidebar-open')
    if (stored !== null) {
      setIsOpen(stored === 'true')
    }
  }, [])

  const toggle = () => {
    setIsOpen((prev) => {
      const newValue = !prev
      localStorage.setItem('sidebar-open', String(newValue))
      return newValue
    })
  }

  const open = () => {
    setIsOpen(true)
    localStorage.setItem('sidebar-open', 'true')
  }

  const close = () => {
    setIsOpen(false)
    localStorage.setItem('sidebar-open', 'false')
  }

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

