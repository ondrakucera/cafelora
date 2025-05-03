import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from "../components/Header/Header.jsx";
import { Banner } from "../components/Banner/Banner.jsx";
import { Menu } from "../components/Menu/Menu.jsx";
import { Gallery } from "../components/Gallery/Gallery.jsx";
import { Contact } from "../components/Contact/Contact.jsx";

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>

    <footer>
      <div className="container">
        <div className="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  </div>
);
