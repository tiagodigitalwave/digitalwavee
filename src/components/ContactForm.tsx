const ContactForm = () => {
  return (
    <section id="contact-form" className="py-20 px-4 bg-section-dark text-section-dark-foreground">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gradient-purple mb-10">
          Tenho algo especial para ti
        </h2>
        <a
          href="https://calendly.com/hello-tiagodigitalwave/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gradient-purple text-primary-foreground px-10 py-5 rounded-lg text-xl font-bold hover:opacity-90 transition-opacity animate-shake"
        >
          Agendar Reunião
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
