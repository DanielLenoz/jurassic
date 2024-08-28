export const Routes = ({
  setVisibleLeft,
}: {
  setVisibleLeft: (visible: boolean) => void
}) => {

  const changesHome = (newHome: string) => {
    setVisibleLeft(false)
    window.location.hash = newHome
    if (typeof window !== 'undefined') {
      // Si necesitas redirigir a la raíz, puedes hacerlo así:
      window.location.pathname = '/' // Navega a la página principal
      // Redirige usando el hash de la URL
      window.location.hash = newHome
    }
  }


  const navLinks = [
    {
      href: '#jurassicPark',
      text: 'Jurassic Park',
    },
    {
      href: '#jurassicWorld',
      text: 'Jurassic World',
    },
    {
      href: '#jurassicWorld2',
      text: 'Jurassic World El reino caido',
    },
    {
      href: '#jurassicWorld3',
      text: 'Jurassic World Dominion',
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
