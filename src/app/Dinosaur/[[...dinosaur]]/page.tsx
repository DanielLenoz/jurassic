import { supabase } from 'app/supabase/client'

interface Dinosaur {
  params: {
    dinosaur: string[]
  }
}

export default async function Dinosaur(props: Dinosaur) {
  const { dinosaur } = props.params

  let { data: Dinosaurios, error } = await supabase
    .from('Dinosaurios')
    .select('*')

  const filterDinosaur = Dinosaurios?.filter((data: any) => data.id == dinosaur)

  return <main></main>
}
