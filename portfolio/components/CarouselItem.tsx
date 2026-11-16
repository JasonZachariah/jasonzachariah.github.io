import ImageDetails from "@/components/ImageDetails";

export type CarouselSlide = {
  video: string;
  title: string;
  text: string;
};

export default function CarouselItem({ video, title, text }: CarouselSlide) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full">
      <ImageDetails className="!py-0" title={title} description={text} image={video} />
    </div>
  );
}
