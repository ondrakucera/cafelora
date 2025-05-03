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
    <Header showMenu={true} />
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

document.querySelectorAll("form.drink__controls").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = Number(form.dataset.id);
    const drink = drinks.find((drink) => drink.id === id);

    const response = await fetch(
      `http://localhost:4000/api/drinks/${form.dataset.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { op: "replace", path: "/ordered", value: !drink.ordered },
        ]),
      },
    );
    window.location.reload();
  });
});
