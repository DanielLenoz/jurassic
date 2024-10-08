import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export const DinoSection = ({ filterDinosaur }: any) => {
  return (
    <>
      <section className="pt-10">
        {filterDinosaur?.map((data: any) => (
          <>
            <section className="grid lg:flex">
              <Image
                src={data.img.full}
                width={385}
                height={385}
                alt={data.Name}
                key={data.id}
                quality={100}
                className="mb-1 mr-1 rounded-2xl shadow-md shadow-segundary"
              />
              <section>
                <h1 className="pb-1 font-title text-4xl font-semibold sm:text-5xl">
                  {data.Name}
                </h1>
                <article className="flex flex-wrap gap-2">
                  <article className="flex gap-1 rounded-lg border-2 border-segundary p-3">
                    <h3 className="font-title text-lg sm:text-xl">
                      Altura:{' '}
                      <span className="font-text text-base sm:text-lg">
                        {data.height}{' '}
                      </span>
                    </h3>
                  </article>
                  <article className="flex gap-1 rounded-lg border-2 border-segundary p-3">
                    <h3 className="font-title text-lg sm:text-xl">
                      Peso:{' '}
                      <span className="font-text text-base sm:text-lg">
                        {data.weight}
                      </span>
                    </h3>
                  </article>
                  <article className="flex gap-1 rounded-lg border-2 border-segundary p-3">
                    <h3 className="font-title text-lg sm:text-xl">
                      Periodo:{' '}
                      <span className="font-text text-base sm:text-lg">
                        {data.periodo}
                      </span>
                    </h3>
                  </article>
                  <article className="flex gap-1 rounded-lg border-2 border-segundary p-3">
                    <h3 className="font-title text-lg sm:text-xl">
                      Dieta:{' '}
                      <span className="font-text text-base sm:text-lg">
                        {data.diet}
                      </span>{' '}
                    </h3>
                  </article>
                  <article className="flex gap-1 rounded-lg border-2 border-segundary p-3">
                    <h3 className="font-title text-lg sm:text-xl">
                      Habilidad de compate:{' '}
                      <span className="font-text text-base sm:text-lg">
                        {data.skills}
                      </span>
                    </h3>
                  </article>
                </article>
              </section>
            </section>
            <p className="text-linea-b gap-1 pt-2 font-text text-base font-normal sm:text-lg">
              <MDXRemote source={data.content} />
            </p>
          </>
        ))}
      </section>
    </>
  )
}
