import { Post } from "@/interfaces/blog/posts";

import Item from "./item";
import Pagination from "../common/pagination";

export default function List({
  posts,
  page,
}: {
  posts:
    | {
        items: Post[];
        total: number;
        limit: number;
      }
    | undefined;
  page: number;
}) {
  if (!posts) return <></>;

  return (
    <section>
      <div className="grid grid-cols-1 gap-8 mt-4 xl:gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts && posts.items ? (
          posts.items.map((p) => <Item key={p.slug} post={p} />)
        ) : (
          <></>
        )}
      </div>
      <Pagination page={page} total={posts.total} limit={posts.limit} />
    </section>
  );
}
