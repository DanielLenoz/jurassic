import { supabase } from 'app/supabase/client'
import { InfiniteMovingCards } from 'app/components/aceternityUI/infiniteMovingCard'

export const CharecterCards = async () => {
  let { data: CharactersFranchise, error } = await supabase
    .from('CharactersFranchise')
    .select('*')

  return (
    <section className='grid justify-center'>
      {CharactersFranchise && (
        <InfiniteMovingCards
          items={CharactersFranchise}
          direction="right"
          speed="slow"
        />
      )}
    </section>
  )
}
