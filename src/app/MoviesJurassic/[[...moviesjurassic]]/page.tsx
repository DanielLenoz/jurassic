import { supabase } from 'app/supabase/client'

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

  console.log('url', moviesjurassic)
  console.log('url cdo', decodedTitle)
  console.log('url', MovieJurassic)
  console.log('url', filterMoviesJurassic)
  return (
    <main>
      {' '}
      <p>hola {decodedTitle}</p>{' '}
    </main>
  )
}
