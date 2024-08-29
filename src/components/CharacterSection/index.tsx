import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

export const CharacterSection = ({ filterCharactersFranchise }: any) => {
  return (
    <>
      <section className="pt-10">
        {filterCharactersFranchise?.map((data: any) => (
          <>
            <Image
              src={data.img.full}
              width={349}
              height={598}
              alt={data.Name}
              key={data.id}
              quality={100}
              className="float-left mr-1 mb-1 rounded-2xl shadow-md shadow-segundary"
            />
            <h1 className="pb-1 font-title text-4xl sm:text-5xl font-semibold">
              {data.Name}
            </h1>
            <p className="text-linea-b gap-1 font-text text-base sm:text-lg font-normal">
              <MDXRemote source={data.content} />
            </p>
          </>
        ))}
      </section>
    </>
  )
}
