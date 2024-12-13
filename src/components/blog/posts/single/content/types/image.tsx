import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

export const ImageType = ({ src, alt }: ImageProps) => {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={400}
        className="w-[500px]"
      />
    </figure>
  );
};
