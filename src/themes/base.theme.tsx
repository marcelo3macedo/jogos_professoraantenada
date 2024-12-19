import FooterBar from "@/components/footer/bar";
import NavBar from "@/components/navbar/bar";

export default function BaseTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full bg-yellow-100">
      <NavBar />
      <div className="min-h-svh mx-auto container md:py-8">{children}</div>
      <FooterBar />
    </div>
  );
}
