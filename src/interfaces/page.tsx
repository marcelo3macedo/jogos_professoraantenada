export interface IndexPage {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
