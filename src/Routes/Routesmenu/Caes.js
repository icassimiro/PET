import Dogproduct from "../../Dogproduct";
import Header from "../../Header";
import Infos from "../../Infos";
import Logohome from "../../Logohome";
import Msg from "../../Msg";
import Promo from "../../Promo";
import Pug from "../../Pug";

export default function Caes() {
  return (
    <div>
      <Header />
      <Logohome />
      <Pug />
      <Dogproduct />
      <Msg />
      <Promo />
      <Infos />
    </div>
  );
}
