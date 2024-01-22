import "./App.css";
import Background from "./Background";
import Header from "./Header";
import Home from "./Home";
import Infos from "./Infos";
import Item from "./Item";
import Product from "./Product";
import Promo from "./Promo";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Background />
      <Item />
      <Product />
      <Promo />
      <Infos />
    </div>
  );
}

export default App;
