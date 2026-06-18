import "./App.css";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Suites } from "./components/Suites.jsx";
import { Dining } from "./components/Dining.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Contact } from "./components/Contact.jsx";
export const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Suites />
      <Dining />
      <Gallery />
      <Contact />
    </div>
  );
};
