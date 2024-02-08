import logo2 from "./images/logo2.png";
export default function Msg() {
  return (
    <div>
      <div className="divlogomsg">
        <img className="logomsg" src={logo2}></img>
      </div>
      <div className="msgdiv">
        <h2 className="msgh2">
          Transformamos o cotidiano do seu pet em uma jornada motivadora,
          repleta de conforto e alegria. Descubra o melhor para seu companheiro
          de quatro patas e inspire-se na felicidade que eles merecem!
        </h2>
      </div>
    </div>
  );
}
