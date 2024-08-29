import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-primariDark grid justify-center justify-items-center gap-2 px-2 py-3 md:px-32">
      <Image
        src="/assets/images/404.webp"
        alt="daniel rodriguez"
        width={800}
        height={422}
        quality={100}
      />
      <section className="grid justify-items-center gap-1 text-white">
        <h1 className="text-center font-subtitle text-2xl font-semibold md:text-4xl">
          Aparece que no tengo el contenido que estás buscando.
        </h1>
        <p className="text-center font-text text-base font-medium md:text-lg">
          Sin embargo, me esforzaré para crear un contenido llamativo y
          productivo.
        </p>
        <button>
          <Link
            className="rounded-lg bg-gradient-to-r from-[#caa185] to-[#69abc2] px-2 py-1 font-text text-base font-medium shadow-lg shadow-gray-500 hover:shadow-cyan-700 md:text-lg"
            href="/"
          >
            Para volver al Home
          </Link>
        </button>
      </section>
    </main>
  )
}
