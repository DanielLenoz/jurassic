import { supabase } from 'app/supabase/client'
import { InfiniteMovingCards } from './aceternityUI/infiniteMovingCard'

export const DinoCards = async () => {
  let { data: Dinosaurs, error } = await supabase.from('Dinosaurs').select('*')

  return (
    <section className="grid justify-center justify-items-center">
      <h2 className="font-title text-4xl font-semibold">Dinosaurios</h2>
      {Dinosaurs && (
        <InfiniteMovingCards items={Dinosaurs} direction="right" speed="slow" />
      )}
    </section>
  )
}
