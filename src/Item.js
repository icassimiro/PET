import src1 from "./images/src1.png";
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import cat4 from "./images/cat4.png";
import src2 from "./images/src2.png";
import src3 from "./images/src3.png";
import src4 from "./images/src4.png";
export default function Item() {
  return (
    <div className="alldivitens">
      <div className="divitens">
        <img className="cat1" src={cat1}></img>
        <div className="itemtext">
          <h2 className="titleitem">BOLA DE ARRANHAR PARA GATOS</h2>

          <h4 className="price">R$ XX,XX</h4>
          <button className="buybtn">COMPRAR PRODUTO</button>
          <div className="divpics">
            <img className="catimg" src={cat2} />
            <img className="catimg" src={cat3} />
            <img className="catimg" src={cat4} />
          </div>
        </div>
      </div>
      <div className="divitens">
        <img className="src" src={src1}></img>
        <div className="itemtext">
          <h2 className="titleitem">
            ARRANHADOR e PROTETOR DE SOFÁ PARA GATOS
          </h2>
          <h4 className="price">R$ XX,XX</h4>

          <button className="buybtn">COMPRAR PRODUTO</button>
          <div className="divpics">
            <img className="catimg" src={src2} />
            <img className="catimg" src={src3} />
            <img className="catimg" src={src4} />
          </div>
        </div>
      </div>
    </div>
  );
}
