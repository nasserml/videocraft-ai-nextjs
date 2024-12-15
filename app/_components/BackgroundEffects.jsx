import Butterfly from "./Butterfly";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <Butterfly
          key={i}
          delay={i * 2}
          duration={20 + Math.random() * 10}
          size={20 + Math.random() * 20}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float-delay" />
    </div>
  );
}
