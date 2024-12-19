import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Pagination({
  page,
  total,
  limit,
}: {
  page: number;
  total: number;
  limit: number;
}) {
  const t = useTranslations("blog.pagination");
  const hasPreviousPage = page > 0;
  const hasMorePage = page * limit < total;
  const previousPage = page - 1;
  const nextPage = page + 1;

  return (
    <div className="flex items-center justify-center w-full my-8">
      {hasPreviousPage ? (
        <Link
          href={`?page=${previousPage}`}
          className="flex items-center px-8 py-4 mx-1 text-gray-700 bg-white rounded-md hover:bg-violet-100"
        >
          {t("previous")}
        </Link>
      ) : (
        <></>
      )}

      {hasMorePage ? (
        <Link
          href={`?page=${nextPage}`}
          className="flex items-center px-8 py-4 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-violet-100"
        >
          {t("next")}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
