import { DinoSection } from 'app/components/DinoSection'
import { DinoCards } from 'app/components/shared/DinoCards'
import { supabase } from 'app/supabase/client'
interface Dinosaur {
  params: {
    dinosaur: string[]
  }
}

export default async function Dinosaur(props: Dinosaur) {
  const { dinosaur } = props.params

  let { data: Dinosaurs, error } = await supabase.from('Dinosaurs').select('*')

  const decodedTitle = decodeURIComponent(dinosaur[0])

  const filterDinosaur = Dinosaurs?.filter(
    (data: any) => data.Name == decodedTitle,
  )

  return (
    <main className="grid justify-items-center gap-3 px-2 md:px-32">
      <DinoSection filterDinosaur={filterDinosaur} />
      <DinoCards />
    </main>
  )
}
