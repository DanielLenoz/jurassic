import { supabase } from 'app/supabase/client'
import { InfiniteMovingCards } from './aceternityUI/infiniteMovingCard'

export const DinoCards = async () => {
  let { data: Dinosaurios, error } = await supabase
    .from('Dinosaurios')
    .select('*')

  return (
    <section className="grid justify-center justify-items-center gap-1">
      <h2 className="font-title text-3xl font-semibold sm:text-4xl">
        Dinosaurios
      </h2>
      {Dinosaurios && (
        <InfiniteMovingCards
          items={Dinosaurios}
          direction="right"
          speed="slow"
        />
      )}
    </section>
  )
}
