import CTAContact from "../../components/CTA";
import SectionTitle from "../../components/SectionTitle";

export default function APropos() {
  return (
    <div id="a-propos" className="flex space-y-6 ml-50 mr-50 pt-30 pb-20">
        <div className="a-propos-title flex flex-col justify-center gap-6 w-1/2">
          <SectionTitle 
            title="À propos de Studio Nova" 
            subtitle="Studio Nova accompagne les entreprises dans la création de solutions digitales modernes et performantes.
            Notre mission : transformer vos idées en expériences uniques grâce à un design soigné et une technologie fiable.  
            " 
          />
          <CTAContact />
        </div>
        <img 
            src="./Images/div.png"
            alt="Studio Nova"
            className="img-Apropos w-1/2 object-cover rounded-2xl lg:ml-20 "
        />
        <script src="Index.js"></script>
    </div>
);
}