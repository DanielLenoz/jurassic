export default function Loading() {
  return (
    <>
      {/* dinosaurs */}
      <div className="grid gap-3 px-2 pt-10 md:px-32">
        <section className="grid gap-2 pt-5 md:grid-cols-3">
          <article className="skeleton h-[385px] w-full max-w-[349px] bg-gray-700"></article>
          <article className="col-span-2 grid gap-1">
            <h1 className="skeleton h-7 w-full bg-gray-700"></h1>
            <article className="flex flex-wrap gap-2">
              <article className="skeleton h-10 w-[274px] bg-gray-700"></article>
              <article className="skeleton h-10 w-[274px] bg-gray-700"></article>
              <article className="skeleton h-10 w-[274px] bg-gray-700"></article>
              <article className="skeleton h-10 w-[274px] bg-gray-700"></article>
              <article className="skeleton h-10 w-full bg-gray-700"></article>
            </article>
          </article>
        </section>
        <p className="skeleton h-[220px] w-full bg-gray-700"></p>
        {/* dino cards */}
        <h1 className="skeleton h-7 w-1/2 place-self-center bg-gray-700"></h1>
        <section className="skeleton h-[310px] w-full bg-gray-700"></section>
      </div>
    </>
  )
}
