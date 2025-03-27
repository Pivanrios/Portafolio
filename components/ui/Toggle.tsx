'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


function Toggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  
    return (
      <select className='bg-white m-1' 
            value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    )
}

export default Toggle