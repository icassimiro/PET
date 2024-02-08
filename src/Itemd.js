import teeth1 from "./images/teeth1.png";
import dog1 from "./images/dog1.png";
import dog2 from "./images/dog2.png";
import dog3 from "./images/dog3.png";
import dog4 from "./images/dog4.png";
import teeth2 from "./images/teeth2.png";
import teeth3 from "./images/teeth3.png";
import teeth4 from "./images/teeth4.png";

export default function Itemd() {
  return (
    <div className="alldivitens">
      <div className="divitens">
        <img className="dog1" src={dog1}></img>
        <div className="itemtext">
          <h2 className="titleitem">
            ASSENTO DE CARRO COM ARMAZENAMENTO PARA PETS.
          </h2>

          <h4 className="price">R$ XX,XX</h4>
          <button className="buybtn">COMPRAR PRODUTO</button>
          <div className="divpics">
            <img className="catimg" src={dog2} />
            <img className="catimg" src={dog3} />
            <img className="catimg" src={dog4} />
          </div>
        </div>
      </div>
      <div className="divitens">
        <img className="tee" src={teeth1}></img>
        <div className="itemtext">
          <h2 className="titleitem">ESCOVA DE DENTE DEDO PARA PETS</h2>
          <h4 className="price">R$ XX,XX</h4>

          <button className="buybtn">COMPRAR PRODUTO</button>

          <div className="divpics">
            <div className="divpics">
              <img className="catimg" src={teeth2} />
              <img className="catimg" src={teeth3} />
              <img className="catimg" src={teeth4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
