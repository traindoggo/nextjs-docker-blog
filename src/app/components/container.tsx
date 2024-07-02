export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-[900px] mx-auto flex flex-col bg-neutral-950">
      {children}
    </div>
  );
}
