'use client'
import { supabase } from 'app/supabase/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { useEffect, useState, useCallback, useMemo } from 'react'

export const CharacterTitled = () => {
  const [characters, setCharacters] = useState<any[]>([])

  const [home, setHome] = useState('')

  useEffect(() => {
    const getHashFromUrl = () => {
      if (typeof window !== 'undefined') {
        // Verifica si `window` está definido
        return window.location.hash.substring(1) || 'jurassicWorld3'
      }
      return 'jurassicWorld3' // Valor por defecto si no está en el navegador
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

  // useCallback para definir la función que busca los datos de personajes
  // Esta función se memoriza y solo se vuelve a definir si `home` cambia
  const fetchData = useCallback(async () => {
    let { data: CharactersTitled, error } = await supabase
      .from('CharactersTitled')
      .select('*')
    // Definir los títulos que corresponden a los diferentes valores de `home` con un objeto dinamico
    const titles: { [key: string]: string } = {
      jurassicWorld3: 'Lewis Dogson',
      jurassicWorld2: 'Benjamin Lockwood',
      jurassicWorld: 'Simon Masrani',
      jurassicPark: 'John Hammond',
    }
    // Filtra los personajes obtenidos según el título asociado con `home`
    const filteredCharacters = CharactersTitled?.filter(
      (data: any) => data.Name === titles[home],
    )
    setCharacters(filteredCharacters || [])
  }, [home])
  // useEffect para ejecutar `fetchData` cada vez que `home` cambia
  useEffect(() => {
    fetchData()
  }, [fetchData])
  // useMemo para memorizar el renderizado de los personajes y evitar cálculos innecesarios
  const renderedCharacters = useMemo(() => {
    return characters.map((data) => (
      <>
        <Image
          src={data.img.full}
          width={347}
          height={347}
          alt={data.Name}
          key={data.id}
          className="rounded-2xl shadow-2xl shadow-segundary"
        />
        <article className="grid max-w-[636px] gap-1">
          <h2 className="font-title text-4xl font-semibold">{data.Name}</h2>
          <article className="grid gap-1 font-text text-lg font-normal">
            <MDXRemote source={data.content} />
          </article>
        </article>
      </>
    ))
  }, [characters])

  return <section className="grid gap-2 lg:flex">{renderedCharacters}</section>
}
