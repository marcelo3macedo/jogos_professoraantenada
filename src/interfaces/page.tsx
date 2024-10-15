export interface IndexPage {
  readonly params: { slug: string };
  readonly searchParams: { [key: string]: string | string[] | undefined };
}
