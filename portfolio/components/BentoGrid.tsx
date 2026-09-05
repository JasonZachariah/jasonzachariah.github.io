type BentoGridProps = {
  images: string[];
};

function mediaLabel(src: string) {
  const file = src.split("/").pop() ?? "Archive media";
  return file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
}

export default function BentoGrid({ images }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src) => {
        const isVideo = src.endsWith(".mp4");
        const label = mediaLabel(src);

        return (
          <div key={src}>
            {isVideo ? (
              <video
                className="w-full  object-cover"
                src={src}
                autoPlay
                loop
                muted
                playsInline
                aria-label={label}
              />
            ) : (
              <img src={src} alt={label} className="w-full  object-cover" />
            )}
          </div>
        );
      })}
    </div>
  );
}
