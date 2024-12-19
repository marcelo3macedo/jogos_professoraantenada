import { CategoryProps } from "@/interfaces/blog/category/props";
import { cacheData } from "@/lib/redis";
import { getSingleCategory } from "@/lib/wordpress/categories";

export async function getCategoryFromParameters({
  params,
  searchParams,
}: CategoryProps) {
  const { slug } = params || {};
  const { page } = searchParams || {};
  const pageNumber = page ? page.toString() : "";
  const cacheKey = `blog:category_page:${slug}:${pageNumber}`;

  const fetchCategoryData = async () => {
    return getSingleCategory(params.slug, pageNumber);
  };

  return cacheData(cacheKey, fetchCategoryData);
}
