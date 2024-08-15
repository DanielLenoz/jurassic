import { supabase } from 'app/supabase/client'

interface Character {
  params: {
    character: string[]
  }
}

export default async function character(props: Character) {
  const { character } = props.params

  let { data: CharactersFranchise, error } = await supabase
    .from('CharactersFranchise')
    .select('*')

  const filterCharactersFranchise = CharactersFranchise?.filter(
    (data: any) => data.id == character,
  )

  return <main></main>
}
