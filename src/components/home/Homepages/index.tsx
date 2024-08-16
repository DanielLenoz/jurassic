export const Homepages = ({ newHome }: { newHome: string }) => {

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
        className="sm:hidden"
      >
        <source src={`/videos/${newHome}M.mkv`} type="video/mp4" />
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
        className="hidden sm:block"
      >
        <source src={`/videos/${newHome}.mkv`} type="video/mp4" />
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
