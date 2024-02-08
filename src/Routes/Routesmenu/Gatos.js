import Catpage from "../../Catpage";
import Catproduct from "../../Catproduct";
import Header from "../../Header";
import Infos from "../../Infos";
import Logohome from "../../Logohome";
import Msg from "../../Msg";
import Promo from "../../Promo";

export default function Gatos() {
  return (
    <div>
      <Header />
      <Logohome />
      <Catpage />
      <Catproduct />
      <Msg />
      <Promo />
      <Infos />
    </div>
  );
}
