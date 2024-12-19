import Image from "next/image";

interface GalleryProps {
  images: any;
}

export const GalleryType = ({ images }: GalleryProps) => {
  return (
    <div className="gallery grid grid-cols-2 md:grid-cols-3 py-4 gap-2 content-center items-center justify-center">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          width={300}
          height={300}
          alt={image.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
};
