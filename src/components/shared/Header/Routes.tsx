export const Routes = ({
  setVisibleLeft,
}: {
  setVisibleLeft: (visible: boolean) => void
}) => {
  const changesHome = (newHome: string) => {
    setVisibleLeft(false)
    window.location.hash = newHome
  }

  const navLinks = [
    {
      href: '#jurassicPark',
      text: 'Jurassic Park',
    },
    {
      href: '#jurassicWork',
      text: 'Jurassic Work',
    },
    {
      href: '#jurassicWork2',
      text: 'Jurassic Work El reino caido',
    },
    {
      href: '#jurassicWork3',
      text: 'Jurassic Work Dominion',
    },
  ]
  return (
    <>
      {navLinks.map(({ href, text }) => (
        <li
          className="border-b-2 border-transparent text-left font-title text-xl transition ease-in-out hover:border-slate-400"
          key={text}
        >
          <button className="text-left" onClick={() => changesHome(href)}>
            {text}
          </button>
        </li>
      ))}
    </>
  )
}
