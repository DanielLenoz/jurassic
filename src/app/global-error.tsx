'use client'
import { RiErrorWarningFill } from 'react-icons/ri'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main className="grid justify-center justify-items-center gap-2 bg-primary px-2 py-3 text-white md:px-32">
          <RiErrorWarningFill className="h-52 w-52 fill-segundary" />
          <h1 className="text-center font-subtitle text-2xl font-semibold md:text-4xl">
            Al Parecer hubo un ERROR!
          </h1>
          <button
            className="rounded-lg bg-gradient-to-r from-[#caa185] to-[#69abc2] px-2 py-1 font-text text-base font-medium shadow-lg shadow-gray-500 hover:shadow-cyan-700 md:text-lg"
            onClick={() => reset()}
          >
            Intentar otra vez
          </button>
        </main>
      </body>
    </html>
  )
}
