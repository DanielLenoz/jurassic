export const Videos = ({ newHome }: { newHome: string }) => {

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
        <source src={`/videos/${newHome}M.mp4`} type="video/mp4" />
        <track
          src={`/videos/${newHome}.vtt`}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
      <video
        width="full"
        height="full"
        autoPlay
        playsInline
        preload="auto"
        muted
        loop
        className="hidden shadowb sm:block"
      >
        <source src={`/videos/${newHome}.mp4`} type="video/mp4" />
        <track
          src={`/videos/${newHome}.vtt`}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </>
  )
}
