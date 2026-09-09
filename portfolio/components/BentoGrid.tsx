type BentoGridProps = {
  images: string[];
};

/** Known pixel sizes so layout can reserve the correct ratio before load. */
const MEDIA_SIZE: Record<string, { width: number; height: number }> = {
  "/images/archive/markhamfairgif.gif": { width: 1080, height: 1080 },
  "/images/archive/Somethingforeverythingif.gif": { width: 2160, height: 2160 },
  "/images/archive/swap gif.gif": { width: 2160, height: 2160 },
  "/images/archive/SkulltoHuman.gif": { width: 632, height: 700 },
  "/images/archive/saylchair.gif": { width: 1222, height: 692 },
  "/images/archive/oldaniamtionslogo.gif": { width: 720, height: 1280 },
  "/images/archive/p5jsgif.gif": { width: 388, height: 502 },
  "/images/archive/p5cooltriangles.gif": { width: 708, height: 620 },
  "/images/archive/mySketch (4).gif": { width: 812, height: 610 },
  "/images/archive/Blender Animated copy.mp4": { width: 1920, height: 1080 },
};

function mediaLabel(src: string) {
  const file = decodeURIComponent(src.split("/").pop() ?? "Archive media");
  return file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
}

function mediaSrc(src: string) {
  const parts = src.split("/");
  const file = parts.pop() ?? src;
  return [...parts, encodeURIComponent(file)].join("/");
}

export default function BentoGrid({ images }: BentoGridProps) {
  const items = [...images].reverse();

  return (
    <div className="bento-grid">
      {items.map((src) => {
        const isVideo = src.endsWith(".mp4");
        const label = mediaLabel(src);
        const href = mediaSrc(src);
        const size = MEDIA_SIZE[src];

        return (
          <figure key={src} className="bento-card">
            {isVideo ? (
              <video
                className="bento-media"
                src={href}
                width={size?.width}
                height={size?.height}
                autoPlay
                loop
                muted
                playsInline
                aria-label={label}
              />
            ) : (
              <img
                src={href}
                alt={label}
                className="bento-media"
                width={size?.width}
                height={size?.height}
                loading="lazy"
              />
            )}
          </figure>
        );
      })}
    </div>
  );
}
