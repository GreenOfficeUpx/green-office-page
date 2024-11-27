import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 GreenOffice. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
