export default function ActivityTheme({ children }: Readonly<any>) {
  return (
    <div className="w-full bg-yellow-50">
      <div className="min-h-full mx-auto">{children}</div>
    </div>
  );
}
