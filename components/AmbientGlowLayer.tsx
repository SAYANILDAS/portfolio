export default function AmbientGlowLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] bg-purple-700/20 blur-[250px] rounded-full animate-pulse" />
    </div>
  );
}