import { EmbedType } from "./types/embed";
import { GalleryType } from "./types/gallery";
import { HeadingType } from "./types/heading";
import { ImageType } from "./types/image";
import { LinkType } from "./types/link";
import { ListType } from "./types/list";
import { ParagraphType } from "./types/paragraph";
import { QuoteType } from "./types/quote";

const contentMapper: any = {
  heading: HeadingType,
  paragraph: ParagraphType,
  embed: EmbedType,
  quote: QuoteType,
  list: ListType,
  image: ImageType,
  gallery: GalleryType,
  link: LinkType,
};

export default function SingleContent({ content }: { content: any[] }) {
  if (!content || content.length == 0) return <></>;

  return (
    <div>
      {content.map((block, index) => {
        const ContentComponent = contentMapper[block.type];
        if (ContentComponent) {
          return <ContentComponent key={index} {...block} />;
        }
        return <></>;
      })}
    </div>
  );
}
