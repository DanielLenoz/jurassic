import { CharacterTitled } from 'app/components/home/CharacterTitled'
import { Homepages } from 'app/components/home/Homepages'

export default function Home() {
  
  return (
    <main className="grid justify-items-center">
      <Homepages />
      <section className="grid gap-3 px-2 md:px-32">
        <CharacterTitled/>
      </section>
    </main>
  )
}
