type Service = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Service) {
  return (
    <div className="flex flex-col text-center justify-center h-auto min-h-50 bg-[#090909bd] p-6 rounded-2xl border border-gray-800 hover:border-black transition-all duration-300 hover:scale-105 hover:bg-[radial-gradient(farthest-corner_at_40px_40px,_#ff3355b3_0%,_#4433ee94_100%)]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white-400">{description}</p>
    </div>
  );
}

