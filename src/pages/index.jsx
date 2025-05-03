import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header.jsx";
import { Banner } from "../components/Banner/Banner.jsx";
import { Menu } from "../components/Menu/Menu.jsx";
import { Gallery } from "../components/Gallery/Gallery.jsx";
import { Contact } from "../components/Contact/Contact.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

document.querySelector("#root").innerHTML = render(
  <div className="page" id="home">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
