import { Navbar } from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="font-main">
      <Navbar />
      <main>
        <AboutUs />
        <Services />
        <Benefits />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
