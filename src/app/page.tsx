import { CharacterTitled } from 'app/components/home/CharacterTitled'
import { Homepages } from 'app/components/home/Homepages'
import { MapJurassic } from 'app/components/home/MapJurassic'
import { CharecterCards } from 'app/components/shared/CharecterCards'

export default function Home() {
  return (
    <main className="grid justify-items-center">
      <Homepages />
      <section className="grid gap-3 px-2 md:px-32">
        <CharacterTitled />
        <CharecterCards />
        <MapJurassic />
      </section>
    </main>
  )
}
