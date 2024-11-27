import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-600 text-center mb-10">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Fale conosco
            </h3>
            <p className="text-gray-700 mb-6">
              Precisa de ajuda ou tem alguma dúvida? Fale com a nossa equipe!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail />
                <a
                  href="mailto:contato@greenoffice.com"
                  className="text-gray-800 hover:text-green-600"
                >
                  contato@greenoffice.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin />
                <span className="text-gray-800">
                  Rua Facens, 123 - Sorocaba/SP
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone />
                <a
                  href="tel:+551199999999"
                  className="text-gray-800 hover:text-green-600"
                >
                  +55 15 99794-4546
                </a>
              </div>
            </div>
          </div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2"
                placeholder="seuemail@email.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-1"
                placeholder="Escreva sua mensagem"
              ></textarea>
            </div>
            <Button className="w-full bg-green-600 text-white hover:bg-green-700">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
