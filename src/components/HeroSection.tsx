const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-card">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center text-foreground max-w-4xl leading-tight">
        O melhor sistema de aquisição para sua empresa.
      </h1>
      <p className="mt-6 text-lg md:text-xl font-semibold text-muted-foreground text-center">
        Viste como chegaste até esta página?
      </p>
      <p className="mt-2 text-base md:text-lg text-muted-foreground text-center max-w-xl">
        Foi através do nosso sistema de aquisição de clientes.
      </p>

      <div className="mt-10 w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-xl relative">
        <img
          src="https://i.ytimg.com/vi_webp/zBvz_SxXv9k/sddefault.webp"
          alt="Video thumbnail - Reuniões Qualificadas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.youtube.com/watch?v=zBvz_SxXv9k"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-foreground/80 rounded-full flex items-center justify-center hover:bg-foreground transition-colors"
          >
            <svg className="w-6 h-6 text-card ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
      </div>

      <a
        href="https://calendly.com/hello-tiagodigitalwave/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 gradient-purple text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity animate-shake"
      >
        Quero implementar este sistema no meu negócio
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
