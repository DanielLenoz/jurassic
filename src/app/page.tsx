'use client'

import { Homepages } from 'app/components/home/Homepages'
import { useEffect, useState } from 'react'

export default function Home() {
  const [home, setHome] = useState('')

  useEffect(() => {
    const getHashFromUrl = () => {
      if (typeof window !== 'undefined') {
        // Verifica si `window` está definido
        return window.location.hash.substring(1) || 'jurassicWork3'
      }
      return 'jurassicWork3' // Valor por defecto si no está en el navegador
    }

    setHome(getHashFromUrl())

    const handleHashChange = () => {
      setHome(getHashFromUrl())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <main className="grid justify-items-center">
      <Homepages key={home} newHome={home} />
    </main>
  )
}
