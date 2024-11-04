import Bar from "@/components/footer/bar";
import Header from "@/components/header/main";

export default function MainTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full bg-yellow-50">
      <Header />
      <div className="min-h-svh mx-auto container py-8">{children}</div>
      <Bar />
    </div>
  );
}
