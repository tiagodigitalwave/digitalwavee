import { Check } from "lucide-react";

const included = [
  "Acesso completo à nossa infraestrutura proprietária de envio de emails (10 domínios dedicados, 20 caixas otimizadas).",
  "Base de dados proprietária atualizada diariamente com verificação tripla de cada contacto.",
  "150+ variações de campanhas testadas e comprovadas em mais de 10 setores diferentes.",
  "Personalização em massa que parece comunicação one-to-one usando tecnologia de IA avançada.",
  "Gestão completa de todo o processo, sem necessidade de envolvimento da sua equipa técnica.",
  "Relatórios detalhados semanais sobre o desempenho da campanha.",
];

const OfferSection = () => (
  <section className="py-20 px-4 bg-section-dark text-section-dark-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-muted-foreground">
        A realidade é que cold email é matemática pura:
      </h2>

      <div className="mt-16">
        <p className="text-lg text-muted-foreground uppercase tracking-wider font-semibold">A OFERTA EXCLUSIVA</p>
        <h3 className="text-2xl md:text-3xl font-bold mt-4 max-w-2xl mx-auto">
          Para as empresas que se qualificam e estão{" "}
          <span className="text-gradient-purple">realmente preparadas para escalar</span>, desenvolvemos uma proposta única:
        </h3>
        <p className="text-4xl md:text-5xl font-black mt-8 text-gradient-purple">
          GARANTIMOS 40 REUNIÕES QUALIFICADAS
        </p>
        <p className="text-3xl md:text-4xl font-black mt-2 text-gradient-purple">
          COM DECISORES EM APENAS 5 MESES
        </p>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
          *Não são apenas leads. São reuniões marcadas e confirmadas com os decisores certos — pessoas com autoridade para aprovar orçamentos e assinar contratos.
        </p>
      </div>

      <div className="mt-16 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">O QUE ESTÁ INCLUÍDO:</h3>
        <ul className="space-y-4">
          {included.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span className="text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OfferSection;
