export default function ImageDetails({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 md:flex-row py-4">
      <div className="w-full space-y-4 md:w-1/2  ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <video
        className="greyborder full w-full md:w-1/2 "
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={image} type="video/mp4" />
      </video>
    </div>
  );
}
