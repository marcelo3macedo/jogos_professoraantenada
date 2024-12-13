import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export const GalleryType = ({ images }: GalleryProps) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={300}
          height={300}
          alt={`gallery image ${index}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};
