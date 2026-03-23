import Testimonial from "../../data/Testimonial";
import TestimonialCard from "../../components/TestimonialCard";
import SectionTitle from "../../components/SectionTitle";


export default function Testimonials() {
    return (
        <div id="testimonials" className="pt-30 bg-black pl-5 lg:pl-20 pr-5 lg:pr-20 pb-30">
            <SectionTitle 
            title="Témoignages" 
            subtitle="Découvrez ce que nos clients disent de notre travail et de notre approche." 
            />
            
            <div className="mt-20 grid md:grid-cols-3 gap-8">
                {Testimonial.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
    </div>
    );
}