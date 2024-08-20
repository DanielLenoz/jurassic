import Image from 'next/image'

export const MapJurassic = () => {
  return (
    <section className="grid gap-2 lg:flex">
      <Image
        src="/assets/images/islas.webp"
        width={384}
        height={561}
        alt="islas de jurassic"
        quality={100}
        className="rounded-2xl shadow-lg shadow-segundary"
      />
      <article className="max-w-[550px]">
        <h2 className="pb-2 font-title text-4xl font-semibold">
          La legendaria isla nublar
        </h2>
        <p className="grid gap-2 font-text text-lg font-normal">
          Isla Nublar, situada a 120 millas de la costa de Costa Rica, es el
          escenario principal de Jurassic Park y Jurassic World. En 1993, John
          Hammond creó el parque temático Jurassic Park en esta isla, donde los
          visitantes podían ver dinosaurios clonados a partir de ADN antiguo.
          <br />
          <br />
          Tras el colapso del parque original debido a un fallo en la contención
          de los dinosaurios, la isla fue abandonada. Sin embargo, en 2005, la
          isla resurgió con la apertura de Jurassic World, un parque más grande
          y avanzado tecnológicamente2.
          <br />
          <br />
          Jurassic World operó con éxito hasta 2015, cuando un nuevo desastre,
          provocado por la fuga de un dinosaurio híbrido, llevó al cierre
          definitivo del parque. En 2018, una erupción volcánica en el Monte
          Sibo destruyó gran parte de la isla, poniendo fin a cualquier intento
          de rehabilitación.
          <br />
          <br />A lo largo de los años, Isla Nublar ha sido testigo de la
          ambición humana y sus consecuencias, convirtiéndose en un símbolo de
          los riesgos de jugar con la naturaleza.
        </p>
      </article>
    </section>
  )
}
