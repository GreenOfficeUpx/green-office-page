import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import productivityImg from "@/assets/produtividade.avif";
import costReductionImg from "@/assets/reduce.jpg";
import dataDrivenImg from "@/assets/dados.jpg";

export const Benefits = () => {
  const benefits = [
    {
      title: "Aumento da produtividade",
      description: "Melhore a eficiência de suas operações e reduza o tempo ocioso.",
      img: productivityImg,
    },
    {
      title: "Redução de custos operacionais",
      description: "Identifique áreas para economizar e maximize seus recursos.",
      img: costReductionImg,
    },
    {
      title: "Tomada de decisão baseada em dados",
      description: "Use insights precisos para estratégias mais assertivas.",
      img: dataDrivenImg,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Benefícios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
           <div
           key={index}
           className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center h-80"
         >
           <img
             src={benefit.img}
             alt={benefit.title}
             className="h-48 w-full object-contain"
           />
           <div className="p-4 flex-1 flex flex-col justify-between">
             <Alert className="text-gray-700">
               <AlertTitle className="text-green-600 font-semibold">
                 {benefit.title}
               </AlertTitle>
               <AlertDescription>{benefit.description}</AlertDescription>
             </Alert>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};
