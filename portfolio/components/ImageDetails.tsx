export default function ImageDetails({
  title,
  description,
  image,
  className = "",
  imageClassName = "",
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
  imageClassName?: string;
}) {
  const isVideo = image.endsWith(".mp4");

  return (
    <div className={`mx-auto flex w-full flex-col items-start gap-4 py-4 ${className}`}>
      <div className="w-full">
        {isVideo ? (
          <video
            className={`greyborder aspect-16/9 w-full object-contain ${imageClassName}`}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <img className={`greyborder aspect-16/9 w-full object-contain ${imageClassName}`} src={image} alt={title} />
        )}
      </div>
      <div className="flex w-full flex-col gap-4 [&_p]:!mb-0">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
