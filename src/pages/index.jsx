import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Header } from "../components/Header/Header.jsx";
import { Banner } from "../components/Banner/Banner.jsx";
import { Menu } from "../components/Menu/Menu.jsx";
import { Gallery } from "../components/Gallery/Gallery.jsx";
import { Contact } from "../components/Contact/Contact.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

const response = await fetch("http://localhost:4000/api/drinks");
const body = await response.json();
const drinks = body.data;

document.querySelector("#root").innerHTML = render(
  <div className="page" id="home">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const rolloutNavElement = document.querySelector(".rollout-nav");

document.querySelector(".nav-btn").addEventListener("click", () => {
  rolloutNavElement.classList.toggle("nav-closed");
});

document.querySelectorAll(".rollout-nav a").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    rolloutNavElement.classList.add("nav-closed");
  });
});
