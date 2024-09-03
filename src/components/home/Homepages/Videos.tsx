export const Videos = ({ newHome }: { newHome: string }) => {
  const videos: {
    [key: string]: {
      desktop: string
      mobile: string
    }
  } = {
    jurassicWorld3: {
      desktop:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorld3.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkMy5tcDQiLCJpYXQiOjE3MjUzODMwMjEsImV4cCI6MTc1NjkxOTAyMX0.eRGcJ3snswFn2MADf4SBwQNpJ08EtGVHsosDDRt04kw&t=2024-09-03T17%3A03%3A41.385Z',
      mobile:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorld3M.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkM00ubXA0IiwiaWF0IjoxNzI1MzgzMjc3LCJleHAiOjE3NTY5MTkyNzd9.JNVTsZzHX22p7-MwTiFEiq0EfiXzqKvRLJvWa_HTCvY&t=2024-09-03T17%3A07%3A56.846Z',
    },
    jurassicWorld2: {
      desktop:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorld2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkMi5tcDQiLCJpYXQiOjE3MjUzODI5OTQsImV4cCI6MTc1NjkxODk5NH0.NtMezt5NeNwYUPWwNEt3FcOnZaARamc-QQue78C7frg&t=2024-09-03T17%3A03%3A14.387Z',
      mobile:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorld2M.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkMk0ubXA0IiwiaWF0IjoxNzI1MzgzMjUzLCJleHAiOjE3NTY5MTkyNTN9.nAzIimIOB2a2XfhJMkrF9hjni9u0i0D9AesXaQPCvuU&t=2024-09-03T17%3A07%3A33.575Z',
    },
    jurassicWorld: {
      desktop:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorld.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkLm1wNCIsImlhdCI6MTcyNTM4MzEwOSwiZXhwIjoxNzU2OTE5MTA5fQ.CEZ2Iov9ahOFNU9SAyD17Hs_U1OII8mh_h9tYtRODhA&t=2024-09-03T17%3A05%3A08.977Z',
      mobile:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicWorldM.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1dvcmxkTS5tcDQiLCJpYXQiOjE3MjUzODMyNDMsImV4cCI6MTc1NjkxOTI0M30.nhUIWcRVGBiajdiNBz7p00h6ECNmsiHCVEoXDFqWMWc&t=2024-09-03T17%3A07%3A22.875Z',
    },
    jurassicPark: {
      desktop:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicPark.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1BhcmsubXA0IiwiaWF0IjoxNzI1MzgzMTIyLCJleHAiOjE3NTY5MTkxMjJ9.CPjO1AtQ0E3HImJaTvzMJZh9vwtT5efHg80zSVpgMeY&t=2024-09-03T17%3A05%3A22.457Z',
      mobile:
        'https://wbukvccuqofmhnjlxoip.supabase.co/storage/v1/object/sign/Jurassic-data/movies-video/jurassicParkM.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJKdXJhc3NpYy1kYXRhL21vdmllcy12aWRlby9qdXJhc3NpY1BhcmtNLm1wNCIsImlhdCI6MTcyNTM4MzMyNywiZXhwIjoxNzU2OTE5MzI3fQ.mmVOP59iYxUBI-BEaX1gWhYqBbccnbsPbToRHC69tDs&t=2024-09-03T17%3A08%3A48.142Z',
    },
  }

  const getVideoUrl = (type: 'desktop' | 'mobile') => videos[newHome]?.[type]

  return (
    <>
      <video
        width="full"
        height="full"
        autoPlay
        playsInline
        preload="auto"
        muted
        loop
        className="shadowb sm:hidden"
      >
        <source src={getVideoUrl('mobile')} type="video/mp4" />
      </video>
      <video
        width="full"
        height="full"
        autoPlay
        playsInline
        preload="auto"
        muted
        loop
        className="shadowb hidden sm:block"
      >
        <source src={getVideoUrl('desktop')} type="video/mp4" />
      </video>
    </>
  )
}
