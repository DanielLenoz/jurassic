import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { CharecterCards } from '../shared/CharecterCards'
import { MoviesCards } from '../shared/MoviesCards'

export const MovieSection = ({ filterMoviesJurassic }: any) => {
  return (
    <>
      <section className="pt-10">
        {filterMoviesJurassic?.map((data: any) => (
          <>
            <Image
              src={data.img.full}
              width={524}
              height={761}
              alt={data.title}
              key={data.id}
              className="float-left mr-1"
            />
            <h1 className="pb-1 font-title text-5xl font-semibold">
              {data.title}
            </h1>
            <p className="text-linea-b gap-1 font-text text-lg font-normal">
              <MDXRemote source={data.content} />
            </p>
          </>
        ))}
      </section>
      <CharecterCards />
      <MoviesCards />
    </>
  )
}
