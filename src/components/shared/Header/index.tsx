'use client'

export const Header = () => {
  const changesHome = (newHome: string) => {
    window.location.hash = newHome
  }

  return (
    <header className="flex gap-3">
      <button onClick={() => changesHome('jurassicPark')}>jurassic park</button>
      <button onClick={() => changesHome('jurassicWork')}>jurassic work</button>
      <button onClick={() => changesHome('jurassicWork2')}>
        jurassic work 2
      </button>
      <button onClick={() => changesHome('jurassicWork3')}>
        jurassic work 3
      </button>
    </header>
  )
}
