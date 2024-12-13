interface EmbedProps {
  url: string;
  provider: string;
  className?: string;
}

export const EmbedType = ({ url, provider, className }: EmbedProps) => {
  if (provider === "youtube") {
    const embedUrl = url?.replace("watch?v=", "embed/");
    return (
      <div className={className}>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  return null;
};
