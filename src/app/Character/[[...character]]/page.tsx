import { CharacterSection } from 'app/components/CharacterSection'
import { CharecterCards } from 'app/components/shared/CharecterCards'
import { MoviesCards } from 'app/components/shared/MoviesCards'
import { supabase } from 'app/supabase/client'

interface Character {
  params: {
    character: string[]
  }
}

export default async function Character(props: Character) {
  const { character } = props.params

  let { data: CharactersFranchise, error } = await supabase
    .from('CharactersFranchise')
    .select('*')

  const decodedTitle = decodeURIComponent(character[0])

  const filterCharactersFranchise = CharactersFranchise?.filter(
    (data: any) => data.Name == decodedTitle,
  )

  console.log('url', character)
  console.log('url', decodedTitle)
  console.log('data', CharactersFranchise)
  console.log('data', filterCharactersFranchise)
  
  return (
    <main className="grid justify-items-center gap-3 px-2 md:px-32">
      <CharacterSection filterCharactersFranchise={filterCharactersFranchise} />
      <CharecterCards />
      <MoviesCards />
    </main>
  )
}
