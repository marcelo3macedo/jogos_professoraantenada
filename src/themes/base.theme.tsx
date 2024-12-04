export default function BaseTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full bg-yellow-50">
      <div className="min-h-svh mx-auto container py-8">{children}</div>
    </div>
  );
}
