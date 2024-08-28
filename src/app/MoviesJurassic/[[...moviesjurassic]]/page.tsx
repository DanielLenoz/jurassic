import { supabase } from 'app/supabase/client'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CharecterCards } from 'app/components/shared/CharecterCards'
import { MoviesCards } from 'app/components/shared/MoviesCards'
import { MovieSection } from 'app/components/MovieSection'

interface Moviesjurassic {
  params: {
    moviesjurassic: string[]
  }
}

export default async function Moviesjurassic(props: Moviesjurassic) {
  const { moviesjurassic } = props.params

  let { data: MovieJurassic, error } = await supabase
    .from('MovieJurassic')
    .select('*')

  const decodedTitle = decodeURIComponent(moviesjurassic[0])

  const filterMoviesJurassic = MovieJurassic?.filter(
    (data: any) => data.title == decodedTitle,
  )

  return (
    <main className="grid justify-items-center gap-3 px-2 md:px-32">
      <MovieSection filterMoviesJurassic={filterMoviesJurassic} />
    </main>
  )
}
