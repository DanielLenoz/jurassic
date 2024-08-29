import { supabase } from 'app/supabase/client'
import { InfiniteMovingCards } from './aceternityUI/infiniteMovingCard'

export const DinoCards = async () => {
  let { data: Dinosaurs, error } = await supabase.from('Dinosaurs').select('*')

  return (
    <section className="grid gap-1 justify-center justify-items-center">
      <h2 className="font-title text-3xl font-semibold sm:text-4xl">
        Dinosaurios
      </h2>
      {Dinosaurs && (
        <InfiniteMovingCards items={Dinosaurs} direction="right" speed="slow" />
      )}
    </section>
  )
}
