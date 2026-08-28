import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  isDisabled: boolean;
};

export default function Card({ title, description, tags, image, link, isDisabled=false }: CardProps) {
  const isVideo = image.endsWith(".mp4");

  return (
    <div className="parent">
      <a href={isDisabled ? "#" : link}>
        <div className="flex flex-col greyborder">
          <div>
            {isVideo ? (
              <video
                className="aspect-16/9 mt-0 mb-4"
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
                className="aspect-16/9 mt-0 mb-4"
                src={image}
                alt={title}
                width={1000}
                height={563}
              />
            )}
          </div>
          <div className="m-4">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="space-x-2">
              {tags.map((tag) => (
                <h4 key={tag} className="w-fit text-center">
                  {tag}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
