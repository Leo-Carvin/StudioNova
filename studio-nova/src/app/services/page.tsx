import services from "../../data/services";
import ServiceCard from "../../components/ServiceCard";
import SectionTitle from "../../components/SectionTitle";


export default function Services() {
  return (
    <div id="services" className="pt-30 bg-[radial-gradient(_#7c00ff_0%,_#c0c0c0_100%)] pl-20 pr-20 pb-30">
      <SectionTitle 
        title="Nos services" 
        subtitle="Découvrez comment nous pouvons transformer votre présence en ligne avec nos services sur mesure." 
      />
      
      <div className="mt-20 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
      </div>
    </div>
  );
}