import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import image from "@/assets/tractor.jpg";

export const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-100"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <Card className="lg:w-1/2 p-6 shadow-md bg-white bg-opacity-90 mb-6 lg:mb-0">
          <CardHeader>
            <CardTitle className="text-3xl text-green-600">Sobre Nós</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Somos líderes em soluções de monitoramento para máquinas agrícolas.
              Nosso foco está em otimizar a produtividade e eficiência no campo,
              proporcionando tecnologia inovadora e suporte especializado.
              Com uma equipe apaixonada e comprometida, buscamos transformar o
              agronegócio através de dados precisos e inteligência estratégica.
            </p>
            <p className="mt-4 text-gray-700">
              Nossa missão é conectar a tecnologia às necessidades do agricultor,
              promovendo sustentabilidade, inovação e crescimento. Estamos ao lado
              de quem faz o campo prosperar, ajudando a superar desafios e alcançar
              novas metas.
            </p>
          </CardContent>
        </Card>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-20"
        aria-hidden="true"
      ></div>
    </section>
  );
};
