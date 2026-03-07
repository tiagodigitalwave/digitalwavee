import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using Web3Forms free service to send to email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // User needs to replace this
          subject: "Novo contacto - Digital Wave",
          from_name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          message: `Nome: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nTelefone: ${form.phone}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Enviado com sucesso!",
          description: "Entraremos em contacto em breve.",
        });
        setForm({ firstName: "", lastName: "", email: "", phone: "" });
      } else {
        throw new Error("Falha no envio");
      }
    } catch {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar. Tenta novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-section-dark text-section-dark-foreground">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gradient-purple mb-10">
          Tenho algo especial para ti
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                Primeiro Nome
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-lg bg-card/10 border border-border/30 px-4 py-3 text-section-dark-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="João"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1.5 text-muted-foreground">
                Último Nome
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-lg bg-card/10 border border-border/30 px-4 py-3 text-section-dark-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Silva"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-card/10 border border-border/30 px-4 py-3 text-section-dark-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="joao@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-muted-foreground">
              Número de Telefone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-card/10 border border-border/30 px-4 py-3 text-section-dark-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="+351 912 345 678"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full gradient-purple text-primary-foreground py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? "A enviar..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
