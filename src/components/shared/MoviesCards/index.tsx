import { supabase } from 'app/supabase/client'
import { InfiniteMovingCards } from './aceternityUI/infiniteMovingCard'

export const MoviesCards = async () => {
  let { data: MovieJurassic, error } = await supabase
    .from('MovieJurassic')
    .select('*')

  return (
    <section className="grid justify-center">
      {MovieJurassic && (
        <InfiniteMovingCards
          items={MovieJurassic}
          direction="right"
          speed="normal"
        />
      )}
    </section>
  )
}
