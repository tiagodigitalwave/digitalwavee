import { Check } from "lucide-react";

const criteria = [
  "Tens um ticket médio acima de €2,000",
  "Vendes para outras empresas (B2B)",
  "Tens resultados comprovados",
  "Estás preparado para escalar (consegues aceitar 5-15 novos clientes com facilidade)",
  "Tens uma empresa comercial preparada para entrar em contacto com as leads assim que chegarem.",
];

const QualificationSection = () => (
  <section className="py-20 px-4 bg-card">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Mas Atenção: Isto Não é Para Todos
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Vou ser completamente honesto, este sistema não é para qualquer empresa.
      </p>
      <h3 className="mt-8 text-2xl font-bold text-foreground">
        APENAS funciona se:
      </h3>
      <ul className="mt-8 space-y-4 text-left max-w-xl mx-auto">
        {criteria.map((c, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <span className="text-lg text-foreground">{c}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default QualificationSection;
