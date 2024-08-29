export default function Loading() {
  return (
    <>
      {/* charecter titled */}
      <div className="grid gap-3 px-2 pt-10 md:px-32">
        <section className="grid gap-2 pt-5 md:grid-cols-3">
          <article className="skeleton h-[570px] w-full max-w-[349px] bg-gray-700"></article>
          <article className="col-span-2 grid gap-1">
            <h1 className="skeleton h-7 w-full bg-gray-700"></h1>
            <p className="skeleton h-[470px] w-full bg-gray-700"></p>
          </article>
        </section>
        {/* charecters franchice */}
        <section className="skeleton h-[310px] w-full bg-gray-700"></section>
        {/* movies carcds */}
        <section className="skeleton h-[330px] w-full bg-gray-700"></section>
      </div>
    </>
  )
}
