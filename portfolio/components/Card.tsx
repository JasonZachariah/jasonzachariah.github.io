import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  locked?: boolean;
};

export default function Card({ title, description, tags, image, link, locked = false }: CardProps) {
  const isVideo = image.endsWith(".mp4");

  return (
    <div className={locked ? "locked-card" : "parent"}>
      <a href={locked ? undefined : link} aria-disabled={locked || undefined}>
        <div className="flex flex-col greyborder">
          <div className="m-4">
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="locked-card-media aspect-16/9 mt-0 mb-4">
              {locked && <span className="locked-card-text">Coming soon</span>}
              {isVideo ? (
                <video
                  className="aspect-16/9 w-full h-full object-cover"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={image} type="video/mp4" />
                </video>
              ) : (
                <Image
                  className="aspect-16/9 w-full h-full object-cover"
                  src={image}
                  alt={title}
                  width={1000}
                  height={563}
                />
              )}
            </div>

            <div className="space-x-2">
              {tags.map((tag, i) => (
                <span key={tag} className="contents">
                  {i > 0 && <h4 className="w-fit text-center">&nbsp;|&nbsp;</h4>}
                  <h4 className="w-fit text-center">{tag}</h4>
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
