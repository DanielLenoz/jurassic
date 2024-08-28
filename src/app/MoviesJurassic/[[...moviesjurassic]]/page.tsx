import { supabase } from 'app/supabase/client'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CharecterCards } from 'app/components/shared/CharecterCards'
import { MoviesCards } from 'app/components/shared/MoviesCards'

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
      <section className="pt-10">
        {filterMoviesJurassic?.map((data: any) => (
          <>
            <Image
              src={data.img.full}
              width={524}
              height={761}
              alt={data.title}
              key={data.id}
              className="float-left mr-1"
            />
            <h1 className="pb-1 font-title text-5xl font-semibold">
              {data.title}
            </h1>
            <p className="text-linea-b gap-1 font-text text-lg font-normal">
              <MDXRemote source={data.content} />
            </p>
          </>
        ))}
      </section>
      <CharecterCards />
      <MoviesCards />
    </main>
  )
}
