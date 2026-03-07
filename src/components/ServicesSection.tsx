import { Search, Mail, Cpu, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Identificar oportunidades",
    desc: "Mapeamos o teu mercado e encontramos os decisores certos para contactar.",
  },
  {
    icon: Mail,
    title: "Copy & Conversion Sequences",
    desc: "Criamos e-mails personalizados, focados em problemas específicos de cada empresa e na resolução desse problema, organizados em sequências projetadas para gerar respostas, não apenas visualizações.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    desc: "Implementamos automação e IA para escalar a entrega, gerenciar respostas, qualificar leads e eliminar tarefas manuais para a equipa.",
  },
  {
    icon: CalendarCheck,
    title: "Meeting Booking",
    desc: "Marcamos reuniões qualificadas apenas com decisores do seu ICP.",
  },
];

const ServicesSection = () => (
  <section className="py-20 px-4 bg-background">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      <span className="text-gradient-purple">Digital Wave</span> helps you…
    </h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {services.map((s) => (
        <div
          key={s.title}
          className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
        >
          <s.icon className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2 text-foreground">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
