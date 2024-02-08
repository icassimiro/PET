import All from "./All";
import Alltwo from "./Alltwo";
import "./App.css";
import Background from "./Background";

import Cat from "./Cat";
import Dog from "./Dog";
import Gif from "./Gif";
import Header from "./Header";

import Infos from "./Infos";
import Item from "./Item";
import Itemd from "./Itemd";
import Logohome from "./Logohome";
import Msg from "./Msg";

import Promo from "./Promo";

function App() {
  return (
    <div className="App">
      <Header />
      <Logohome />
      <Gif />

      <Background />

      <Dog />
      <Itemd />
      <All />

      <Cat />
      <Item />
      <Alltwo />
      <Msg />

      <Promo />
      <Infos />
    </div>
  );
}

export default App;
