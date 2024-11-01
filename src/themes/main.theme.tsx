import Bar from "@/components/footer/bar";
import Header from "@/components/header/main";

export default function MainTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full bg-yellow-50">
      <Header />
      <div className="min-h-full mx-auto">{children}</div>
      <Bar />
    </div>
  );
}
