import { supabase } from 'app/supabase/client'

interface Moviesjurassic {
  params: {
    moviesjurassic: string[]
  }
}

export default async function moviesjurassic(props: Moviesjurassic) {
  const { moviesjurassic } = props.params

  let { data: MovieJurassic, error } = await supabase
    .from('MovieJurassic')
    .select('*')

  const filterMoviesJurassic = MovieJurassic?.filter(
    (data: any) => data.id == moviesjurassic,
  )

  return <main></main>
}
