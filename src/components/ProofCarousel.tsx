import { useEffect, useState, useCallback } from "react";

const images = [
  "/images/proof1.png",
  "/images/proof2.png",
  "/images/proof3.png",
  "/images/proof4.png",
  "/images/proof5.png",
  "/images/proof6.png",
  "/images/proof7.png",
  "/images/proof8.png",
  "/images/proof9.png",
  "/images/proof10.png",
  "/images/proof11.png",
];

const ProofCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 px-4 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Já marcamos várias reuniões!
      </h2>
      <div className="max-w-3xl mx-auto relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2">
              <img
                src={src}
                alt={`Prova de reunião ${i + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofCarousel;
