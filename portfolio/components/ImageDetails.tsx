export default function ImageDetails({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const isVideo = image.endsWith(".mp4");

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 py-4 md:flex-row">
      <div className="w-full shrink-0 md:w-1/2">
        {isVideo ? (
          <video
            className="greyborder w-full"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <img className="greyborder w-full" src={image} alt={title} />
        )}
      </div>
      <div className="w-full space-y-4 md:w-1/2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
