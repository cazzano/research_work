export function Hero() {
  return (
    <header className="relative py-24 md:py-32 text-center overflow-hidden">
       <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10 animation-background-pan"
        style={{
          backgroundImage: 'linear-gradient(110deg, hsl(var(--background)) 0%, hsl(var(--primary) / 0.05) 50%, hsl(var(--background)) 100%)',
          backgroundSize: '200% 200%',
          animation: 'background-pan 15s ease-in-out infinite',
        }}
      />
       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"/>
      <div className="container relative">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          How Modern Communication Really Works
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Explore the protocols, architectures, and technologies powering your favorite apps.
        </p>
      </div>
    </header>
  );
}
