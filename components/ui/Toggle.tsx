'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


function Toggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  
    return (
      <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
    )
}

export default Toggle