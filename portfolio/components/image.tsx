export default function Image({ src, alt, width, height }: { src: string, alt: string, width: number, height: number }) {
  return (
    <Image src={src} alt={alt} width={width} height={height} />
  );
}