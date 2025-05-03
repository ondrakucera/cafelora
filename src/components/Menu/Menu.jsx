import "./Menu.css";
import { Drink } from "../Drink/Drink.jsx";

export const Menu = () => (
  <section className="menu" id="menu">
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div className="drinks-list">
        <Drink
          id={0}
          name="Espresso"
          image="/cups/espresso.png"
          layers={[{ color: "#613916", label: "espresso" }]}
        />
        <Drink
          id={1}
          name="Doppio"
          image="/cups/doppio.png"
          layers={[{ color: "#613916", label: "espresso" }]}
        />
        <Drink
          id={2}
          name="Lungo"
          image="/cups/lungo.png"
          layers={[
            { color: "#b0dee1", label: "voda" },
            { color: "#613916", label: "espresso" },
          ]}
        />
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
);
