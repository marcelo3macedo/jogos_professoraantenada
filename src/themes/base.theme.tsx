import FooterBar from "@/components/footer/bar";

export default function BaseTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full">
      <div className="min-h-svh mx-auto container py-8">{children}</div>
      <FooterBar />
    </div>
  );
}
