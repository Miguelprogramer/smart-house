import "./DashBoard.css";
import userImage from "../assets/user.png";
import tvImage from "../assets/sala.png";
import camaImage from "../assets/quarto.png";
import geladeiraImage from "../assets/cozinha.png";
import chuveiroImage from "../assets/banheiro.png";
import lavanderiaImage from "../assets/lavanderia.png";

function DashBoard() {
  return (
    <>
      <div className="dashboard">
        <div className="Usuario">
          <h1 className="donoCasa">Casa de João</h1>
          <img className="fotoUsuario" src={userImage} alt="Foto do Usuário" />
        </div>
        <p class="tituloComodos">Cômodos:</p>
        <div className="comodos">
          <button className="comodo sala">
            <img src={tvImage} alt="Sala" />
            <p>Sala</p>
          </button>
          <button className="comodo quarto">
            <img src={camaImage} alt="Quarto" />
            <p>Quarto</p>
          </button>
          <button className="comodo cozinha">
            <img src={geladeiraImage} alt="Cozinha" />
            <p>Cozinha</p>
          </button>
          <button className="comodo banheiro">
            <img src={chuveiroImage} alt="Banheiro" />
            <p>Banheiro</p>
          </button>
          <button className="comodo lavanderia">
            <img src={lavanderiaImage} alt="Lavanderia" />
            <p>Lavanderia</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
