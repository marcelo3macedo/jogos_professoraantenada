import { JSDOM } from "jsdom";

interface Block {
  type: string;
  tag?: string;
  content?: string | string[];
  src?: string;
  href?: string;
  url?: string;
  provider?: string;
  className?: string;
  alt?: string;
  images?: any;
}

export function htmlStringToArray(htmlString: string): Block[] {
  const cleanedHtmlString = htmlString.replace(
    /<!-- wp:.*? -->|<!-- \/wp:.*? -->/g,
    "",
  );

  const dom = new JSDOM(cleanedHtmlString);
  const blocks: Block[] = [];

  dom.window.document.body.childNodes.forEach((node) => {
    if (node.nodeType === dom.window.Node.ELEMENT_NODE) {
      const element = node as Element;

      switch (element.tagName.toLowerCase()) {
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          blocks.push({
            type: "heading",
            tag: element.tagName.toLowerCase(),
            content: element.textContent || "",
          });
          break;

        case "p":
          blocks.push({
            type: "paragraph",
            content: element.textContent || "",
          });
          break;

        case "ul": {
          const listItems = Array.from(element.querySelectorAll("li")).map(
            (li) => li.textContent || "",
          );
          blocks.push({ type: "list", content: listItems });
          break;
        }

        case "figure": {
          const images = Array.from(element.querySelectorAll("img")).map(
            (img) => ({
              type: "image",
              src: img.getAttribute("src") || "",
              alt: img.getAttribute("alt") || "",
            }),
          );
          if (images.length > 1) {
            return blocks.push({
              type: "gallery",
              images: images,
            });
          }

          const img = element.querySelector("img");
          if (img) {
            blocks.push({
              type: "image",
              src: img.getAttribute("src") || "",
              alt: img.getAttribute("alt") || "",
            });
          }
          break;
        }

        case "blockquote": {
          const paragraphs = Array.from(element.querySelectorAll("p")).map(
            (p) => p.textContent || "",
          );
          blocks.push({ type: "quote", content: paragraphs.join(" ") });
          break;
        }

        case "a": {
          const href = element.getAttribute("href") || "";
          const content = element.textContent || "";
          blocks.push({
            type: "link",
            href,
            content,
          });
          break;
        }

        default: {
          if (element.classList.contains("wp-block-gallery")) {
            const images = Array.from(element.querySelectorAll("img")).map(
              (img) => ({
                src: img.getAttribute("src") || "",
                alt: img.getAttribute("alt") || "",
              }),
            );
            blocks.push({ type: "gallery", images });
          } else if (element.classList.contains("wp-block-embed")) {
            const url =
              element.querySelector(".wp-block-embed__wrapper")?.textContent ||
              "";
            const providerNameSlug = element.classList.contains(
              "wp-embed-aspect-16-9",
            )
              ? "youtube"
              : "other";
            blocks.push({
              type: "embed",
              url,
              provider: providerNameSlug,
              className: element.className || "",
            });
          }
        }
      }
    }
  });

  return blocks;
}
