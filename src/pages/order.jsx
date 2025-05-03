import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import "./order.css";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Order } from "../components/Order/Order.jsx";

const response = await fetch(
  "http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image",
);
const body = await response.json();
const orderItems = body.data.map((orderItem) => ({
  ...orderItem,
  image: `http://localhost:4000${orderItem.image}`,
}));

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <div className="page">
      <Header />
      <Order items={orderItems} />
      <Footer />
    </div>
  </div>,
);
