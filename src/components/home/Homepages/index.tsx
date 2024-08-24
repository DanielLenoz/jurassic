'use client'
import { useEffect, useState } from 'react'
import { Videos } from './Videos'
import Link from 'next/link'

export const Homepages = () => {
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

  const titles: { [key: string]: string } = {
    jurassicWork3: 'Jurassic Work Dominion',
    jurassicWork2: 'Jurassic Work El reino caido',
    jurassicWork: 'Jurassic Work',
    jurassicPark: 'Jurassic Park',
  }
  return (
    <>
      <section className="relative pb-3 shadowb">
        <Videos key={home} newHome={home} />
        <article className="absolute bottom-[10%] left-2 grid justify-items-start gap-2 sm:max-w-[50%] lg:bottom-1/4">
          <h1 className="font-title text-4xl font-extrabold sm:text-5xl">
            Bienvenidos al nuevo mundo
          </h1>
          <p className="font-base font-text text-base sm:text-lg">
            Sumérgete en una aventura llena de emoción, misterio y asombro.
            Desde el majestuoso Tiranosaurio Rex hasta el ágil Velociraptor,
            ahora en cada rincón de nuestro planeta.
          </p>
          <p className="font-text text-base font-semibold sm:text-lg">
            ¿Estás listo para el nuevo mundo?
          </p>
          <button className="inline-flex pr-2">
            <Link
              className="font-base rounded-lg bg-gradient-to-r from-[#caa185] to-[#69abc2] px-2 py-1 font-text text-base sm:text-lg"
              href={`/moviesjurassic/${home}`}
            >
              inf de la Pelicula {titles[home] || ''}
            </Link>
          </button>
        </article>
      </section>
    </>
  )
}
