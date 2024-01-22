import shampoo from "./images/shampoo.png";
export default function Item() {
  return (
    <div className="alldivitens">
      <div className="divitens">
        <img className="shampoo" src={shampoo}></img>
        <div className="itemtext">
          <h2>SHAMPOO GRANADO PET NEUTRO</h2>
          <h4>R$ 79,90</h4>
          <h4>R$ 59,90</h4>
          <button className="buybtn">COMPRAR PRODUTO</button>
        </div>
      </div>
      <div className="divitens">
        <img className="shampoo" src={shampoo}></img>
        <div className="itemtext">
          <h2>SHAMPOO GRANADO PET NEUTRO</h2>
          <h4>R$ 79,90</h4>
          <h4>R$ 59,90</h4>
          <button className="buybtn">COMPRAR PRODUTO</button>
        </div>
      </div>
    </div>
  );
}
