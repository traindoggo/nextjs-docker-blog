export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`min-h-screen flex flex-col mx-5 md:mx-10 lg:mx-20
    bg-neutral-950`}
    >
      {children}
    </div>
  );
}
