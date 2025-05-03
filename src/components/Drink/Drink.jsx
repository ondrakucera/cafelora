import "./Drink.css";
import { Layer } from "../Layer/Layer.jsx";

export const Drink = ({ id, name, ordered, image, layers }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((layer) => (
          <Layer key={layer.label} {...layer} />
        ))}
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value={id} />
      <button className="order-btn">Objednat</button>
    </form>
  </div>
);
