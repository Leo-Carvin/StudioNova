import { CTAServices } from './CTA';

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-[radial-gradient(farthest-corner_at_40px_40px,_#ff3355_0%,_#4433ee_100%)] flex flex-col justify-center items-center text-center text-white p-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue chez Studio Nova</h1>
        <p className="text-lg md:text-2xl mb-8">Donnez vie à votre présence en lignes</p>
        <CTAServices />
      </div>
    </section>
  );
}