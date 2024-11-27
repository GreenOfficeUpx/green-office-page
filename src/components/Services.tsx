import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Monitoramento GPS",
      description:
        "Rastreamento em tempo real de máquinas agrícolas, garantindo segurança e eficiência operacional. Nossa solução integra backend robusto e um frontend intuitivo para fácil acompanhamento.",
    },
    {
      title: "Manutenção Preventiva",
      description:
        "Planejamento de manutenção com base em dados de uso das máquinas, reduzindo falhas inesperadas e maximizando a produtividade. Toda a gestão é feita de forma automatizada pelo sistema.",
    },
    {
      title: "Análise de Dados",
      description:
        "Geramos insights estratégicos para aumentar a eficiência no campo, analisando dados coletados diretamente do equipamento. Nossa plataforma une inteligência artificial e visualizações avançadas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-600">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
