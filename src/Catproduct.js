import src1 from "./images/src1.png";
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";
import cat4 from "./images/cat4.png";
import src2 from "./images/src2.png";
import src3 from "./images/src3.png";
import src4 from "./images/src4.png";
import toca1 from "./images/toca1.png";
import toca2 from "./images/toca2.png";
import toca3 from "./images/toca3.png";
import toca4 from "./images/toca4.png";
import casinha1 from "./images/casinha1.png";
import casinha2 from "./images/casinha2.png";
import casinha3 from "./images/casinha3.png";
import casinha4 from "./images/casinha4.png";
export default function Catproduct() {
  return (
    <div className="alldivitensp">
      <div className="divitensp">
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
      <div className="divitensp">
        <img className="src" src={src1}></img>
        <div className="itemtext">
          <h2 className="titleitem">
            ARRANHADOR E PROTETOR DE SOFÁ PARA GATOS
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
      <div className="divitensp">
        <img className="toca" src={toca1}></img>
        <div className="itemtext">
          <h2 className="titleitem">CAMA PARA PET DOBRÁVEL</h2>
          <h4 className="price">R$ XX,XX</h4>

          <button className="buybtn">COMPRAR PRODUTO</button>

          <div className="divpics">
            <div className="divpics">
              <img className="catimg" src={toca2} />
              <img className="catimg" src={toca3} />
              <img className="catimg" src={toca4} />
            </div>
          </div>
        </div>
      </div>
      <div className="divitensp">
        <img className="toca2" src={casinha1}></img>
        <div className="itemtext">
          <h2 className="titleitem">CAMA PARA PET DOBRÁVEL</h2>
          <h4 className="price">R$ XX,XX</h4>

          <button className="buybtn">COMPRAR PRODUTO</button>

          <div className="divpics">
            <div className="divpics">
              <img className="catimg" src={casinha2} />
              <img className="catimg" src={casinha3} />
              <img className="catimg" src={casinha4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
