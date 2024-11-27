import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="GreenOffice Logo"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-2xl font-bold text-green-600">GreenOffice</h1>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`lg:flex lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } lg:block bg-white absolute lg:static top-16 left-0 w-full lg:w-auto px-4 lg:px-0 shadow-md lg:shadow-none`}
        >
          <li className="text-center my-2 lg:my-0">
            <Button variant="link" asChild>
              <a href="#about">Sobre Nós</a>
            </Button>
          </li>
          <li className="text-center my-2 lg:my-0">
            <Button variant="link" asChild>
              <a href="#services">Serviços</a>
            </Button>
          </li>
          <li className="text-center my-2 lg:my-0">
            <Button variant="link" asChild>
              <a href="#contact">Contato</a>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
