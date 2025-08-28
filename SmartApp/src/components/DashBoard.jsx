import "./DashBoard.css";
import userImage from "../assets/user.png";

function DashBoard() {
  return (
    <>
      <div className="dashboard">
        <div className="Usuario">
          <h1 className="donoCasa">Casa de João</h1>
          <img className="fotoUsuario" src={userImage} alt="Foto do Usuário" />
        </div>
        <div className="comodos">
          <p>Comodos:</p>
          <button className="comodo sala">
            <img src="../assets/tv.png" alt="Sala" />
            <p>Sala</p>
          </button>
          <button className="comodo quarto">
            <img src="../assets/cama.png.png" alt="Quarto" />
            <p>Quarto</p>
          </button>
          <button className="comodo cozinha">
            <img src="/assets/geladeira.png" alt="Cozinha" />
            <p>Cozinha</p>
          </button>
          <button className="comodo banheiro">
            <img src="/assets/chuveiro.png" alt="Banheiro" />
            <p>Banheiro</p>
          </button>
          <button className="comodo lavanderia">
            <img src="/assets/lavanderia.png" alt="Lavanderia" />
            <p>Lavanderia</p>
          </button>
          <button className="comodo adicionar">
            <img src="/assets/add.png" alt="Adicionar" />
            <p>+</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default DashBoard;