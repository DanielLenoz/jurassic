export default function Loading() {
  return (
    <>
      {/* homepages */}
      <div className="skeleton min-h-[500px] w-full bg-gray-700"></div>
      {/* charecter titled */}
      <div className="grid gap-3 px-2 md:px-32">
        <section className="grid gap-2 pt-5 md:grid-cols-2">
          <article className="skeleton h-96 w-full bg-gray-700"></article>
          <article className="grid gap-1">
            <h1 className="skeleton h-5 w-full bg-gray-700"></h1>
            <p className="skeleton h-[333px] w-full bg-gray-700"></p>
          </article>
        </section>
        {/* charecters franchice */}
        <section className="skeleton h-[310px] w-full bg-gray-700"></section>
        {/* leyendary island */}
        <section className="grid gap-2 md:grid-cols-2">
          <article className="skeleton h-[530px] w-full bg-gray-700"></article>
          <article className="grid gap-1">
            <h1 className="skeleton h-5 w-full bg-gray-700"></h1>
            <p className="skeleton h-[476px] w-full bg-gray-700"></p>
          </article>
        </section>
        {/* dinosours */}
        <section className="skeleton h-[310px] w-full bg-gray-700"></section>
      </div>
    </>
  )
}
